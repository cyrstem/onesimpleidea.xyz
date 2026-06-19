import {
  Scene,
  OrthographicCamera,
  Mesh,
  ShaderMaterial,
  WebGLRenderTarget,
  LinearFilter,
  RGBAFormat,
  Color,
  Vector2
} from "three";
import { getFullscreenTriangle } from "@alienkitty/space.js/three";
import fluidVert from "../shader/fluidVert.glsl";
import fluidFrag from "../shader/fluidFrag.glsl";

/**
 * Ping-pong fluid mask from mouse trail (Codrops fluid X-ray pipeline, WebGL version).
 */
export default class FluidSim {
  constructor(renderer, width, height) {
    this.renderer = renderer;
    this.scene = new Scene();
    this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.material = new ShaderMaterial({
      uniforms: {
        uPrev: { value: null },
        uTrail: { value: null },
        uResolution: { value: new Vector2(1, 1) },
        uTime: { value: 0 }
      },
      vertexShader: fluidVert,
      fragmentShader: fluidFrag,
      depthTest: false,
      depthWrite: false
    });
    this.quad = new Mesh(getFullscreenTriangle(), this.material);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);

    this.targetA = null;
    this.targetB = null;
    this.width = 0;
    this.height = 0;
    this.setSize(width, height);
  }

  setSize(width, height) {
    const w = Math.max(8, Math.floor(width));
    const h = Math.max(8, Math.floor(height));
    if (w === this.width && h === this.height && this.targetA) return;

    this.width = w;
    this.height = h;

    const opts = {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RGBAFormat,
      depthBuffer: false,
      stencilBuffer: false
    };

    if (this.targetA) this.targetA.dispose();
    if (this.targetB) this.targetB.dispose();

    this.targetA = new WebGLRenderTarget(w, h, opts);
    this.targetB = new WebGLRenderTarget(w, h, opts);

    this.material.uniforms.uResolution.value.set(w, h);
    this.clearTargets();
  }

  clearTargets() {
    const prev = this.renderer.getClearColor(new Color());
    const pa = this.renderer.getClearAlpha();

    this.renderer.setClearColor(0xffffff, 1);

    this.renderer.setRenderTarget(this.targetA);
    this.renderer.clear();

    this.renderer.setRenderTarget(this.targetB);
    this.renderer.clear();

    this.renderer.setRenderTarget(null);
    this.renderer.setClearColor(prev, pa);
  }

  /** Texture to sample in the compositor (after {@link #update}). */
  getMaskTexture() {
    return this.targetA.texture;
  }

  update(trailTexture, timeSec) {
    if (!this.targetA || !this.targetB || !trailTexture) return;

    this.material.uniforms.uPrev.value = this.targetA.texture;
    this.material.uniforms.uTrail.value = trailTexture;
    this.material.uniforms.uTime.value = timeSec;

    this.renderer.setRenderTarget(this.targetB);
    this.renderer.render(this.scene, this.camera);
    this.renderer.setRenderTarget(null);

    const tmp = this.targetA;
    this.targetA = this.targetB;
    this.targetB = tmp;
  }

  dispose() {
    if (this.targetA) this.targetA.dispose();
    if (this.targetB) this.targetB.dispose();
    this.material.dispose();
    this.quad.geometry.dispose();
  }
}
