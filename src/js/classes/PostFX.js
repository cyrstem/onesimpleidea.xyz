import { Post } from 'ogl';
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

        this.pass = this.post.addPass({
            fragment,
            uniforms: {
                uTime: this.uTime,
                uGlitch: this.uGlitch,
                uShakeOffset: this.uShakeOffset,
                uBgColorA: this.uBgColorA,
                uBgColorB: this.uBgColorB
            }
        });
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
        this.post.render({ texture });
    }
}
