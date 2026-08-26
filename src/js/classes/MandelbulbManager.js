import { Program, Mesh, Triangle, Transform } from 'ogl';
import gsap from 'gsap';
import vertex from '../shader/mandelbulb.vert';
import fragment from '../shader/mandelbulb.frag';
import {
    PHENOTYPE_BOUNDS,
    clampPhenotype,
    decode as decodeSdfGenome,
    defaultGenome,
    mutate as mutateSdfGenome,
    crossover as crossoverSdfGenome,
    randomGenome as randomSdfGenome
} from '../circuit/sdfGenome.js';
import { makeRng } from '../circuit/ga.js';

// Re-export bounds / clamp so callers can document and validate phenotypes
// next to the renderer without importing the genome module directly.
export { PHENOTYPE_BOUNDS, clampPhenotype, decodeSdfGenome };

// Ambient SDF Mandelbulb background. Visual params flow through setPhenotype()
// so a future GA can drive the look without touching the render pipeline:
//   decode(sdfGenome) → mandelbulb.setPhenotype(params)
// App calls reveal() on boot so the bulb is visible immediately. Each
// circuit-GA generation also breeds the SDF genome (mutate / occasional
// crossover) so the bulb drifts with evolution.
export default class MandelbulbManager {
    constructor(gl, { isMobile = false, seed = (Date.now() & 0xffffffff) } = {}) {
        this.gl = gl;
        this.isMobile = isMobile;
        this._reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        this._onMotionChange = (e) => {
            this._reducedMotion = e.matches;
        };
        this._motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (this._motionMq.addEventListener) {
            this._motionMq.addEventListener('change', this._onMotionChange);
        } else if (this._motionMq.addListener) {
            this._motionMq.addListener(this._onMotionChange);
        }

        this._rng = makeRng(seed >>> 0);
        this.genome = defaultGenome();
        this.phenotype = clampPhenotype(this.genome.params);
        this.unlocked = false;
        this._lastGeneration = -1;
        this._mutationRate = 0.28;

        this.uResolution = { value: [1, 1] };
        this.uTime = { value: 0 };
        this.uPower = { value: this.phenotype.power };
        this.uBailout = { value: this.phenotype.bailout };
        this.uIterations = { value: this.phenotype.iterations };
        this.uMaxSteps = { value: this.phenotype.maxSteps };
        this.uScale = { value: this.phenotype.scale };
        this.uCameraDistance = { value: this.phenotype.cameraDistance };
        this.uDetail = { value: this.phenotype.detail };
        this.uGlow = { value: this.phenotype.glow };
        this.uContrast = { value: this.phenotype.contrast };
        this.uAlpha = { value: this.phenotype.alpha };
        this.uReveal = { value: 0 };
        // Composition: compact accent on the left (not a full-bleed hero).
        this.uViewOffset = { value: [-0.52, 0.04] };
        this.uViewZoom = { value: 2.65 };
        this.uColor = { value: this.phenotype.color.slice() };
        this.uBgColor = { value: [0.9646, 0.9647, 0.9650] };
        this.uLightDir = { value: this.phenotype.lightDir.slice() };
        this.uRotation = { value: this.phenotype.rotationOffset.slice() };

        this._rotationSpeed = this.phenotype.rotationSpeed;
        this._timeScale = 1;
        this._empty = new Transform();

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex,
            fragment,
            uniforms: {
                uResolution: this.uResolution,
                uTime: this.uTime,
                uPower: this.uPower,
                uBailout: this.uBailout,
                uIterations: this.uIterations,
                uMaxSteps: this.uMaxSteps,
                uScale: this.uScale,
                uCameraDistance: this.uCameraDistance,
                uDetail: this.uDetail,
                uGlow: this.uGlow,
                uContrast: this.uContrast,
                uAlpha: this.uAlpha,
                uReveal: this.uReveal,
                uViewOffset: this.uViewOffset,
                uViewZoom: this.uViewZoom,
                uColor: this.uColor,
                uBgColor: this.uBgColor,
                uLightDir: this.uLightDir,
                uRotation: this.uRotation
            },
            depthTest: false,
            depthWrite: false
        });

        this.mesh = new Mesh(gl, { geometry, program });
        this.mesh.frustumCulled = false;
        this.program = program;

        this.applyQualityProfile();
        this.applyViewProfile();
        this._pushUniforms({ animate: false });
    }

    // Show the wireframe (idempotent). duration 0 snaps on for first paint.
    reveal({ duration = 2.4, reducedMotion = false } = {}) {
        if (this.unlocked) return;
        this.unlocked = true;
        gsap.killTweensOf(this.uReveal);
        if (reducedMotion || this._reducedMotion || duration <= 0) {
            this.uReveal.value = 1;
            return;
        }
        gsap.to(this.uReveal, {
            value: 1,
            duration,
            ease: 'power2.out'
        });
    }

    /**
     * Keep the SDF genome in lockstep with the live circuit GA.
     * Each new generation mutates (and occasionally crosses with a random
     * immigrant) then applies the decoded phenotype to the shader.
     */
    syncGeneration(generation = 0) {
        const gen = generation | 0;
        if (gen === this._lastGeneration) return this.phenotype;

        const prev = this._lastGeneration;
        this._lastGeneration = gen;

        // Catch up if multiple gens were skipped between bus events.
        const steps = prev < 0 ? Math.max(0, gen) : Math.max(0, gen - prev);
        for (let i = 0; i < steps; i++) {
            this._breedStep();
        }

        if (steps > 0) {
            this.setGenome(this.genome, {
                animate: this.unlocked && !this._reducedMotion
            });
        }
        return this.phenotype;
    }

    _breedStep() {
        // Mostly mutate the current champion; sometimes inject crossover diversity.
        if (this._rng() < 0.18) {
            this.genome = crossoverSdfGenome(
                this.genome,
                randomSdfGenome(this._rng),
                this._rng
            );
        }
        this.genome = mutateSdfGenome(this.genome, this._rng, this._mutationRate);
    }

    // Apply phenotype params (typically from decode(sdfGenome)).
    setPhenotype(params = {}, { animate = false, duration = 1.4 } = {}) {
        this.phenotype = clampPhenotype({ ...this.phenotype, ...params });
        this._rotationSpeed = this.phenotype.rotationSpeed;
        this.applyQualityProfile();
        this._pushUniforms({ animate, duration });
        return this.phenotype;
    }

    // Apply a full SDF genome: decode → setPhenotype.
    setGenome(genome, opts = {}) {
        const phenotype = decodeSdfGenome(genome);
        this.genome = {
            params: {
                ...phenotype,
                rotationOffset: phenotype.rotationOffset.slice(),
                color: phenotype.color.slice(),
                lightDir: phenotype.lightDir.slice()
            }
        };
        return this.setPhenotype(phenotype, opts);
    }

    getPhenotype() {
        return {
            ...this.phenotype,
            rotationOffset: this.phenotype.rotationOffset.slice(),
            color: this.phenotype.color.slice(),
            lightDir: this.phenotype.lightDir.slice()
        };
    }

    getGenome() {
        return {
            params: {
                ...this.genome.params,
                rotationOffset: this.genome.params.rotationOffset.slice(),
                color: this.genome.params.color.slice(),
                lightDir: this.genome.params.lightDir.slice()
            }
        };
    }

    applyQualityProfile() {
        // Mobile / high-DPR: cut the raymarch budget so the background stays cheap.
        const dpr = this.gl.renderer?.dpr || 1;
        let steps = this.phenotype.maxSteps;
        let iters = this.phenotype.iterations;

        if (this.isMobile) {
            steps = Math.min(steps, 36);
            iters = Math.min(iters, 7);
        } else if (dpr > 1.5) {
            steps = Math.min(steps, 48);
        }

        if (this._reducedMotion) {
            steps = Math.min(steps, 40);
            this._timeScale = 0;
        } else {
            this._timeScale = 1;
        }

        this.uMaxSteps.value = steps;
        this.uIterations.value = iters;
    }

    applyViewProfile() {
        if (this.isMobile) {
            this.uViewOffset.value = [-0.12, 0.16];
            this.uViewZoom.value = 2.15;
        } else {
            this.uViewOffset.value = [-0.52, 0.04];
            this.uViewZoom.value = 2.65;
        }
    }

    setMobile(isMobile) {
        this.isMobile = !!isMobile;
        this.applyQualityProfile();
        this.applyViewProfile();
    }

    _killPhenotypeTweens() {
        gsap.killTweensOf(this.uPower);
        gsap.killTweensOf(this.uBailout);
        gsap.killTweensOf(this.uScale);
        gsap.killTweensOf(this.uCameraDistance);
        gsap.killTweensOf(this.uDetail);
        gsap.killTweensOf(this.uGlow);
        gsap.killTweensOf(this.uContrast);
        gsap.killTweensOf(this.uAlpha);
        gsap.killTweensOf(this.uColor.value);
        gsap.killTweensOf(this.uLightDir.value);
    }

    _pushUniforms({ animate = false, duration = 1.4 } = {}) {
        const p = this.phenotype;
        this._killPhenotypeTweens();

        // Integers / quality knobs snap; continuous look params can ease.
        this.applyQualityProfile();

        if (!animate) {
            this.uPower.value = p.power;
            this.uBailout.value = p.bailout;
            this.uScale.value = p.scale;
            this.uCameraDistance.value = p.cameraDistance;
            this.uDetail.value = p.detail;
            this.uGlow.value = p.glow;
            this.uContrast.value = p.contrast;
            this.uAlpha.value = p.alpha;
            this.uColor.value[0] = p.color[0];
            this.uColor.value[1] = p.color[1];
            this.uColor.value[2] = p.color[2];
            this.uLightDir.value[0] = p.lightDir[0];
            this.uLightDir.value[1] = p.lightDir[1];
            this.uLightDir.value[2] = p.lightDir[2];
            return;
        }

        const ease = 'power2.inOut';
        gsap.to(this.uPower, { value: p.power, duration, ease });
        gsap.to(this.uBailout, { value: p.bailout, duration, ease });
        gsap.to(this.uScale, { value: p.scale, duration, ease });
        gsap.to(this.uCameraDistance, { value: p.cameraDistance, duration, ease });
        gsap.to(this.uDetail, { value: p.detail, duration, ease });
        gsap.to(this.uGlow, { value: p.glow, duration, ease });
        gsap.to(this.uContrast, { value: p.contrast, duration, ease });
        gsap.to(this.uAlpha, { value: p.alpha, duration, ease });
        gsap.to(this.uColor.value, { 0: p.color[0], 1: p.color[1], 2: p.color[2], duration, ease });
        gsap.to(this.uLightDir.value, {
            0: p.lightDir[0],
            1: p.lightDir[1],
            2: p.lightDir[2],
            duration,
            ease
        });
    }

    update(t) {
        if (this.uReveal.value < 0.001) return;
        this.uTime.value = t * this._timeScale;
        const speed = this._reducedMotion ? 0 : this._rotationSpeed;
        const off = this.phenotype.rotationOffset;
        this.uRotation.value[0] = off[0] + t * speed * 0.35 * this._timeScale;
        this.uRotation.value[1] = off[1] + t * speed * this._timeScale;
        this.uRotation.value[2] = off[2] + t * speed * 0.15 * this._timeScale;
    }

    resize(width, height) {
        this.uResolution.value[0] = width * (this.gl.renderer?.dpr || 1);
        this.uResolution.value[1] = height * (this.gl.renderer?.dpr || 1);
        this.applyQualityProfile();
    }

    render(target, { clear = true } = {}) {
        // Skip the raymarch until unlocked — clear to the site background only.
        if (this.uReveal.value < 0.001) {
            this.gl.renderer.render({
                scene: this._empty,
                target,
                clear
            });
            return;
        }
        this.gl.renderer.render({
            scene: this.mesh,
            target,
            clear
        });
    }

    dispose() {
        this._killPhenotypeTweens();
        gsap.killTweensOf(this.uReveal);
        if (this._motionMq) {
            if (this._motionMq.removeEventListener) {
                this._motionMq.removeEventListener('change', this._onMotionChange);
            } else if (this._motionMq.removeListener) {
                this._motionMq.removeListener(this._onMotionChange);
            }
        }
        if (this.mesh?.geometry?.remove) this.mesh.geometry.remove();
        if (this.mesh?.program?.remove) this.mesh.program.remove();
        this.mesh = null;
        this.program = null;
    }
}
