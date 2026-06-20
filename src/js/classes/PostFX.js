import { Post, Texture } from 'ogl';
import gsap from 'gsap';
import fragment from '../shader/post.frag';

// Thin wrapper around OGL's Post (fullscreen FBO). For now it runs a single
// passthrough pass that composites the circuit scene over the white clear.
// Uniforms for a future glitch / gradient look are pre-wired so the effect can
// be turned on by editing post.frag, without touching the render pipeline.
export default class PostFX {
    constructor(gl) {
        this.gl = gl;
        // NEAREST filtering avoids softening the crisp line art during the
        // fullscreen FBO composite.
        this.post = new Post(gl, { minFilter: gl.NEAREST, magFilter: gl.NEAREST });

        // Shared uniform objects (mutate `.value` to drive the effect).
        this.uTime = { value: 0 };
        this.uGlitch = { value: 0 };
        // Shake amplitude (0..1) tweened by triggerShake; the per-frame screen
        // offset derived from it lives in uShakeOffset (also mirrored to the DOM).
        this.uShake = { value: 0 };
        this.uShakeOffset = { value: [0, 0] };
        this.uBgColorA = { value: [1, 1, 1] };
        this.uBgColorB = { value: [1, 1, 1] };

        // Ambient block-fracture glitch (ported from the Cinder blockss shader).
        // Kept deliberately subtle and always-on; the circuit GA re-seeds the
        // direction/seed each spawn so the pattern drifts with the field.
        this.uResolution = { value: [1, 1] };
        this.uBlockDir = { value: [1, 0] };
        this.uBlockSeed = { value: 0 };
        this.uBlockSize = { value: 0.5 };
        this.uBlockRandomness = { value: 0.12 };
        this.uBlockAmount = { value: 1.0 };

        // Portfolio images revealed inside active glitch blocks over empty
        // (white) areas, so the tear is visible where there is no scene content.
        // 1x1 white placeholder until the real images load.
        this.placeholder = new Texture(gl, {
            image: new Uint8Array([255, 255, 255, 255]),
            width: 1,
            height: 1,
            generateMipmaps: false
        });
        this.uGlitchTex = { value: this.placeholder };
        this.uBlockReveal = { value: 0.65 };
        this.glitchTextures = [];

        this.pass = this.post.addPass({
            fragment,
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
                uBlockAmount: this.uBlockAmount,
                tGlitchTex: this.uGlitchTex,
                uBlockReveal: this.uBlockReveal
            }
        });
    }

    // Preload portfolio images as glitch-reveal sources. Each loads async; the
    // first becomes the active source as soon as it is ready.
    loadGlitchImages(urls = []) {
        urls.forEach((url) => {
            if (!url) return;
            const tex = new Texture(this.gl, {
                generateMipmaps: false,
                wrapS: this.gl.CLAMP_TO_EDGE,
                wrapT: this.gl.CLAMP_TO_EDGE
            });
            const img = new Image();
            img.onload = () => {
                tex.image = img;
                if (this.uGlitchTex.value === this.placeholder) this.uGlitchTex.value = tex;
            };
            img.src = url;
            this.glitchTextures.push(tex);
        });
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

        // Drift the revealed image with the field: pick a fresh portfolio image
        // (only among those that have actually loaded, to avoid empty blocks).
        const ready = this.glitchTextures.filter((t) => t.image);
        if (ready.length) {
            this.uGlitchTex.value = ready[Math.floor(Math.random() * ready.length)];
        }
    }

    // Fast screen-shake burst (camera wiggle), e.g. when a connector collides.
    triggerShake(amount = 1) {
        gsap.killTweensOf(this.uShake);
        this.uShake.value = amount;
        gsap.to(this.uShake, { value: 0, duration: 0.65, ease: 'power2.out' });
    }

    // Brief glitch burst, e.g. on click. Currently the shader hook is disabled,
    // so this just ramps the uniform (ready for when the effect is enabled).
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
