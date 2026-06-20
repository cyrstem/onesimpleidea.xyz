import { Plane, Texture, Program, Mesh, Camera, Transform } from 'ogl';
import gsap from 'gsap';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

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

        this.imageAspect = 1;

        // Fraction of the frustum the plane region occupies; anchorFrac centres it
        // on the right side. Tuned so the image sits opposite the left copy.
        this.regionWidthFrac = 0.42;
        this.regionHeightFrac = 0.72;
        this.anchorFrac = 0.24;

        this.uAlpha = { value: 1 };

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
    // The plane is parked at its Work-room anchor; the world pan moves the camera
    // (not the mesh) so it slides in from the right as you navigate to Work.
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
        this.mesh.position.x = vW * this.anchorFrac;
    }

    // World offset 0 (About) .. 1 (Work). At 1 the camera sits at the plane's
    // room so it reads centred-right; at 0 the camera is one screen left, so the
    // plane sits off the right edge.
    panTo(world) {
        const { vW } = this.frustum();
        this.camera.position.x = (world - 1) * vW;
    }

    // Normalized viewport coords (y up) of a point inside the plane's left half,
    // as it rests when the Work room is fully in view. A nav connector grows
    // toward this point and collides with the incoming image there. Sitting
    // halfway to the left edge keeps it on the image for any aspect ratio.
    connectTarget() {
        const { vW } = this.frustum();
        const cx = 0.5 + this.mesh.position.x / vW; // camera x = 0 at world = 1 (Work)
        const halfW = (this.mesh.scale.x * 0.5) / vW;
        return [clamp(cx - halfW * 0.5, 0.02, 0.98), 0.5];
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

    render(target) {
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
