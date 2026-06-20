import { Plane, Texture, Program, Mesh, Camera, Transform } from 'ogl';
import gsap from 'gsap';

// A single textured plane that lives on the right half of the viewport and
// carries the active project image. Rendered into the shared FBO so it inherits
// the post-processing shake. Sizing fits the image (aspect-preserved) inside the
// right region of the camera frustum, so it stays responsive on resize.
const vertex = /* glsl */ `
    attribute vec2 uv;
    attribute vec3 position;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = /* glsl */ `
    uniform sampler2D tMap;
    uniform float uAlpha;

    varying vec2 vUv;

    void main() {
        vec4 tex = texture2D(tMap, vUv);
        gl_FragColor = vec4(tex.rgb, tex.a * uAlpha);
    }
`;

const vertex100 = vertex;
const fragment100 = /* glsl */ `precision highp float;
` + fragment;

const vertex300 = /* glsl */ `#version 300 es
    #define attribute in
    #define varying out
` + vertex;

const fragment300 = /* glsl */ `#version 300 es
    precision highp float;
    #define varying in
    #define texture2D texture
    #define gl_FragColor FragColor
    out vec4 FragColor;
` + fragment;

export default class PlaneManager {
    constructor(gl, { aspect = 1 } = {}) {
        this.gl = gl;
        this.scene = new Transform();
        this.camera = new Camera(gl, { fov: 45, near: 0.1, far: 100, aspect });
        this.camera.position.z = 5;

        this.visible = false;
        this.imageAspect = 1;

        // Fraction of the frustum the plane region occupies; anchorFrac centres it
        // on the right side. Tuned so the image sits opposite the left copy.
        this.regionWidthFrac = 0.42;
        this.regionHeightFrac = 0.72;
        this.anchorFrac = 0.24;

        this.uAlpha = { value: 0 };

        // 1x1 white placeholder so a missing/late image never renders black.
        this.texture = new Texture(gl, {
            image: new Uint8Array([255, 255, 255, 255]),
            width: 1,
            height: 1,
            generateMipmaps: false
        });

        const renderer = gl.renderer;
        const geometry = new Plane(gl, { width: 1, height: 1 });
        const program = new Program(gl, {
            vertex: renderer.isWebgl2 ? vertex300 : vertex100,
            fragment: renderer.isWebgl2 ? fragment300 : fragment100,
            uniforms: {
                tMap: { value: this.texture },
                uAlpha: this.uAlpha
            },
            transparent: true,
            cullFace: false,
            depthTest: false,
            depthWrite: false
        });

        this.mesh = new Mesh(gl, { geometry, program });
        this.mesh.frustumCulled = false;
        this.mesh.setParent(this.scene);

        this.layout();
    }

    // Frustum dimensions at the plane depth (z=0).
    frustum() {
        const dist = this.camera.position.z;
        const vH = 2 * dist * Math.tan((this.camera.fov * Math.PI) / 180 / 2);
        const vW = vH * this.camera.aspect;
        return { vW, vH };
    }

    // Fit the plane inside the right-side region, preserving the image aspect.
    layout() {
        const { vW, vH } = this.frustum();
        const regionW = vW * this.regionWidthFrac;
        const regionH = vH * this.regionHeightFrac;
        const regionAspect = regionW / regionH;

        let planeW;
        let planeH;
        if (this.imageAspect > regionAspect) {
            planeW = regionW;
            planeH = regionW / this.imageAspect;
        } else {
            planeH = regionH;
            planeW = regionH * this.imageAspect;
        }

        this.mesh.scale.set(planeW, planeH, 1);
        this._anchorX = vW * this.anchorFrac;
        this._offscreenX = vW * 0.5 + planeW;
        // Keep the resting/offscreen positions in sync with visibility state.
        this.mesh.position.x = this.visible ? this._anchorX : this._offscreenX;
    }

    // Loads the image and swaps it in. `onReady` fires once the texture is
    // displayable (on load, or on error so dependent UI never gets stuck).
    setTexture(url, onReady) {
        const done = typeof onReady === 'function' ? onReady : () => {};
        if (!url) {
            done();
            return;
        }
        const img = new Image();
        img.onload = () => {
            this.texture.image = img;
            this.imageAspect = (img.naturalWidth || 1) / (img.naturalHeight || 1);
            this.layout();
            done();
        };
        img.onerror = () => {
            // Missing file: fall back to the white placeholder, keep layout stable.
            done();
        };
        img.src = url;
    }

    show() {
        if (this.visible) return;
        this.visible = true;
        gsap.killTweensOf(this.mesh.position);
        gsap.killTweensOf(this.uAlpha);
        this.mesh.position.x = this._offscreenX;
        gsap.to(this.mesh.position, { x: this._anchorX, duration: 1.0, ease: 'power3.out' });
        gsap.to(this.uAlpha, { value: 1, duration: 0.8, ease: 'power2.out' });
    }

    hide() {
        if (!this.visible) return;
        this.visible = false;
        gsap.killTweensOf(this.mesh.position);
        gsap.killTweensOf(this.uAlpha);
        gsap.to(this.mesh.position, { x: this._offscreenX, duration: 0.7, ease: 'power3.in' });
        gsap.to(this.uAlpha, { value: 0, duration: 0.5, ease: 'power2.in' });
    }

    render(target) {
        if (this.uAlpha.value <= 0.001 && !this.visible) return;
        this.gl.renderer.render({
            scene: this.scene,
            camera: this.camera,
            target,
            clear: false
        });
    }

    resize(width, height) {
        this.camera.perspective({ aspect: width / height });
        this.layout();
    }

    dispose() {
        gsap.killTweensOf(this.mesh.position);
        gsap.killTweensOf(this.uAlpha);
        this.mesh.setParent(null);
        if (this.mesh.geometry?.remove) this.mesh.geometry.remove();
        if (this.mesh.program?.remove) this.mesh.program.remove();
        this.mesh = null;
    }
}
