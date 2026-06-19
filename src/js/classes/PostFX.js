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
        this.post = new Post(gl);

        // Shared uniform objects (mutate `.value` to drive the effect).
        this.uTime = { value: 0 };
        this.uGlitch = { value: 0 };
        this.uBgColorA = { value: [1, 1, 1] };
        this.uBgColorB = { value: [1, 1, 1] };

        this.pass = this.post.addPass({
            fragment,
            uniforms: {
                uTime: this.uTime,
                uGlitch: this.uGlitch,
                uBgColorA: this.uBgColorA,
                uBgColorB: this.uBgColorB
            }
        });
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
