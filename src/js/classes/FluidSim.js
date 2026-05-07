import {
    Scene,
    OrthographicCamera,
    PlaneGeometry,
    Mesh,
    ShaderMaterial,
    WebGLRenderTarget,
    LinearFilter,
    RGBAFormat,
    Color,
} from 'three';
import fluidFrag from '../shader/fluidFrag.glsl';

const VERT = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
    }
`;

// Diffuses the mouse-trail texture into a soft, turbulent grayscale mask
// using two render targets that ping-pong each frame.
export default class FluidSim {
    constructor(renderer, width = 256, height = 256, fade = 0.015) {
        this.width = width;
        this.height = height;

        const opts = {
            minFilter: LinearFilter,
            magFilter: LinearFilter,
            format: RGBAFormat,
            depthBuffer: false,
            stencilBuffer: false,
        };
        this.targetA = new WebGLRenderTarget(width, height, opts);
        this.targetB = new WebGLRenderTarget(width, height, opts);

        this.material = new ShaderMaterial({
            vertexShader: VERT,
            fragmentShader: fluidFrag,
            uniforms: {
                uPrev: { value: this.targetA.texture },
                uInput: { value: null },
                uFade: { value: fade },
            },
        });

        this.scene = new Scene();
        this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this.quad = new Mesh(new PlaneGeometry(2, 2), this.material);
        this.scene.add(this.quad);

        this.#clearToWhite(renderer);
    }

    #clearToWhite(renderer) {
        const prevColor = new Color();
        renderer.getClearColor(prevColor);
        const prevAlpha = renderer.getClearAlpha();
        const prevTarget = renderer.getRenderTarget();

        renderer.setClearColor(0xffffff, 1);
        renderer.setRenderTarget(this.targetA);
        renderer.clear(true, true, false);
        renderer.setRenderTarget(this.targetB);
        renderer.clear(true, true, false);

        renderer.setRenderTarget(prevTarget);
        renderer.setClearColor(prevColor, prevAlpha);
    }

    update(renderer, trailTexture) {
        this.material.uniforms.uPrev.value = this.targetA.texture;
        this.material.uniforms.uInput.value = trailTexture;

        const prevTarget = renderer.getRenderTarget();
        renderer.setRenderTarget(this.targetB);
        renderer.render(this.scene, this.camera);
        renderer.setRenderTarget(prevTarget);

        // Swap so getMaskTexture() always returns the latest result.
        const tmp = this.targetA;
        this.targetA = this.targetB;
        this.targetB = tmp;
    }

    getMaskTexture() {
        return this.targetA.texture;
    }

    getCurrentRenderTarget() {
        return this.targetA;
    }

    dispose() {
        this.targetA.dispose();
        this.targetB.dispose();
        this.material.dispose();
        this.quad.geometry.dispose();
    }
}
