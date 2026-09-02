import { Post } from 'ogl';
import gsap from 'gsap';
import glitchFragment from '../shader/post.frag';
import templateFragment from '../shader/post-template.frag';
import crackFragment from '../shader/post-crack.frag';

// Full-viewport post stack on top of App.sceneRT.
//
// Pipeline (App owns the scene FBO; this class owns the screen composite):
//   Mandelbulb → Forms3D → Plane  →  sceneRT
//   sceneRT.texture  →  OGL Post (ping-pong FBO)  →  canvas
//
// Each named pass is one fragment shader. OGL Post feeds the previous result
// as tMap, so later passes see earlier ones. Add a new viewport effect with:
//   this.addPass({ name, fragment, uniforms, enabled })
// then optionally this.setEnabled(name, true) from App — no render-loop changes.
export default class PostFX {
    constructor(gl) {
        this.gl = gl;
        // NEAREST filtering avoids softening the crisp line art during the
        // fullscreen FBO composite.
        this.post = new Post(gl, { minFilter: gl.NEAREST, magFilter: gl.NEAREST });
        this.passes = new Map();

        // Shared uniform objects (mutate `.value` to drive the effect).
        this.uTime = { value: 0 };
        this.uGlitch = { value: 0 };
        // Shake amplitude (0..1) tweened by triggerShake; the per-frame screen
        // offset derived from it lives in uShakeOffset (also mirrored to the DOM).
        this.uShake = { value: 0 };
        this.uShakeOffset = { value: [0, 0] };
        this.uBgColorA = { value: [0.9646, 0.9647, 0.9650] };
        this.uBgColorB = { value: [0.9646, 0.9647, 0.9650] };

        // Ambient block-fracture glitch (ported from the Cinder blockss shader).
        // Kept deliberately subtle and always-on; the circuit GA re-seeds the
        // direction/seed each spawn so the pattern drifts with the field.
        this.uResolution = { value: [1, 1] };
        this.uBlockDir = { value: [1, 0] };
        this.uBlockSeed = { value: 0 };
        this.uBlockSize = { value: 0.5 };
        // Kept very quiet so the project dissolve grain remains the hero effect.
        this.uBlockRandomness = { value: 0.04 };
        this.uBlockAmount = { value: 0.08 };

        // Template-pass uniforms (grain / vignette). Pass stays disabled until
        // you call setEnabled('template', true) to verify full-canvas coverage.
        this.uGrain = { value: 0.035 };
        this.uVignette = { value: 0.22 };

        // Crack / rift — random direction + path, quiet UV displacement.
        this.uCrackSeed = { value: 0 };
        this.uCrackAmount = { value: 1 };
        this.uCrackInk = { value: 0.28 };
        this.uCrackDisplace = { value: 0.0035 };
        this.uCrackThickness = { value: 0.0011 };
        this.uCrackJagged = { value: 1 };
        this.uCrackProgress = { value: 0 };
        this.uCrackAxis = { value: 0 };   // 0 = along X, 1 = along Y
        this.uCrackFlip = { value: 0 };   // reverse growth
        this.uCrackStart = { value: 0.15 };
        this.uCrackEnd = { value: 0.85 };

        // Ambient cycle (off while crack pass is disabled).
        this._crackCycle = false;
        this._crackInterval = 5.2;
        this._crackAge = 0;
        this._crackGrowDuration = 1.55;

        // First pass: existing glitch / shake / RGB split (always on).
        this.pass = this.addPass({
            name: 'glitch',
            fragment: glitchFragment,
            uniforms: {
                uTime: this.uTime,
                uGlitch: this.uGlitch,
                uShakeOffset: this.uShakeOffset,
                uBgColorA: this.uBgColorA,
                uBgColorB: this.uBgColorB,
                uResolution: this.uResolution,
                uBlockDir: this.uBlockDir,
                uBlockSeed: this.uBlockSeed,
                uBlockSize: this.uBlockSize,
                uBlockRandomness: this.uBlockRandomness,
                uBlockAmount: this.uBlockAmount
            }
        });

        // Second pass: plug-in template. Off by default so the look is unchanged.
        this.addPass({
            name: 'template',
            fragment: templateFragment,
            enabled: false,
            uniforms: {
                uTime: this.uTime,
                uGrain: this.uGrain,
                uVignette: this.uVignette
            }
        });

        // Third pass: screen crack / rift (off by default).
        this.addPass({
            name: 'crack',
            fragment: crackFragment,
            enabled: false,
            uniforms: {
                uTime: this.uTime,
                uResolution: this.uResolution,
                uSeed: this.uCrackSeed,
                uAmount: this.uCrackAmount,
                uInk: this.uCrackInk,
                uDisplace: this.uCrackDisplace,
                uThickness: this.uCrackThickness,
                uJagged: this.uCrackJagged,
                uProgress: this.uCrackProgress,
                uAxis: this.uCrackAxis,
                uFlip: this.uCrackFlip,
                uStart: this.uCrackStart,
                uEnd: this.uCrackEnd
            }
        });
    }

    // Register a named fullscreen pass on the OGL Post ping-pong. Returns the
    // raw OGL pass object (mesh / program / enabled) for advanced tweaks.
    addPass({ name, fragment, uniforms = {}, enabled = true, textureUniform = 'tMap' } = {}) {
        if (!name) throw new Error('PostFX.addPass requires a name');
        if (this.passes.has(name)) {
            throw new Error(`PostFX pass "${name}" already exists`);
        }
        const pass = this.post.addPass({
            fragment,
            uniforms,
            enabled,
            textureUniform
        });
        this.passes.set(name, pass);
        return pass;
    }

    setEnabled(name, enabled) {
        const pass = this.passes.get(name);
        if (!pass) return false;
        pass.enabled = !!enabled;
        return true;
    }

    isEnabled(name) {
        const pass = this.passes.get(name);
        return pass ? !!pass.enabled : false;
    }

    // Re-seed the ambient glitch from a freshly spawned/evolved form. The slide
    // direction points from screen centre toward the form's centre (normalized,
    // y up), and the seed jumps so the block layout reshuffles.
    reseed(center) {
        if (center && center.length === 2) {
            const dx = center[0] - 0.5;
            const dy = center[1] - 0.5;
            const len = Math.hypot(dx, dy) || 1;
            this.uBlockDir.value[0] = dx / len;
            this.uBlockDir.value[1] = dy / len;
        }
        this.uBlockSeed.value = Math.random();
    }

    // Jump the crack path to a new jagged route (same left→right layout).
    reseedCrack(seed = Math.random()) {
        this.uCrackSeed.value = seed;
    }

    // Pick a new axis, growth direction, and diagonal endpoints.
    randomizeCrack() {
        this.uCrackSeed.value = Math.random();
        this.uCrackAxis.value = Math.random() < 0.5 ? 0 : 1;
        this.uCrackFlip.value = Math.random() < 0.5 ? 0 : 1;

        // Lateral start/end: often a diagonal, sometimes nearly flat.
        const lo = 0.06 + Math.random() * 0.28;
        const hi = 0.62 + Math.random() * 0.32;
        if (Math.random() < 0.5) {
            this.uCrackStart.value = lo;
            this.uCrackEnd.value = hi;
        } else {
            this.uCrackStart.value = hi;
            this.uCrackEnd.value = lo;
        }
    }

    // Grow the crack over `duration` seconds from the current progress origin.
    revealCrack({ duration = 1.4, seed } = {}) {
        if (seed !== undefined) this.uCrackSeed.value = seed;
        gsap.killTweensOf(this.uCrackProgress);
        this.uCrackProgress.value = 0;
        this.setEnabled('crack', true);
        gsap.to(this.uCrackProgress, {
            value: 1,
            duration,
            ease: 'power2.out'
        });
        this._crackAge = 0;
    }

    // Retract (unless immediate), randomize direction/path, then grow again.
    spawnRandomCrack({ duration = 1.55, immediate = false } = {}) {
        gsap.killTweensOf(this.uCrackProgress);
        this.setEnabled('crack', true);
        this._crackAge = 0;

        const grow = () => {
            this.randomizeCrack();
            this.uCrackProgress.value = 0;
            gsap.to(this.uCrackProgress, {
                value: 1,
                duration,
                ease: 'power2.out'
            });
        };

        if (immediate || this.uCrackProgress.value < 0.02) {
            grow();
            return;
        }

        gsap.to(this.uCrackProgress, {
            value: 0,
            duration: 0.28,
            ease: 'power1.in',
            onComplete: grow
        });
    }

    // Drive the ambient crack cycle from App's rAF tick.
    update(dt = 0) {
        if (!this._crackCycle || !this.isEnabled('crack')) return;
        this._crackAge += dt;
        if (this._crackAge < this._crackInterval) return;
        this._crackAge = 0;
        this.spawnRandomCrack({ duration: this._crackGrowDuration });
    }

    // Fast screen-shake burst (camera wiggle), e.g. when a connector collides.
    triggerShake(amount = 1) {
        gsap.killTweensOf(this.uShake);
        this.uShake.value = amount;
        gsap.to(this.uShake, { value: 0, duration: 0.65, ease: 'power2.out' });
    }

    // Brief glitch burst, e.g. on click. uGlitch boosts block amount in post.frag.
    triggerGlitch() {
        gsap.killTweensOf(this.uGlitch);
        this.uGlitch.value = 1;
        gsap.to(this.uGlitch, { value: 0, duration: 0.6, ease: 'power2.out' });
    }

    resize() {
        this.post.resize();
    }

    render(texture) {
        this.uTime.value = performance.now() * 0.001;
        this.uResolution.value[0] = this.gl.drawingBufferWidth;
        this.uResolution.value[1] = this.gl.drawingBufferHeight;
        this.post.render({ texture });
    }
}
