import { Plane, Texture, Program, Mesh, Camera, Transform } from 'ogl';
import gsap from 'gsap';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// Textured project plane with a grain dissolve reveal (no permanent edge vignette).
// Dual textures (prev/next) crossfade via a noise threshold so rapid switches
// stay race-safe and visually continuous.
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
    uniform sampler2D tPrev;
    uniform sampler2D tNext;
    uniform float uAlpha;
    uniform float uProgress;
    uniform float uEdge;
    uniform float uSeed;
    uniform float uHasPrev;
    uniform float uHasNext;

    varying vec2 vUv;

    float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }

    float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }

    float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 4; i++) {
            v += a * noise(p);
            p *= 2.07;
            a *= 0.5;
        }
        return v;
    }

    void main() {
        vec4 prev = texture2D(tPrev, vUv) * uHasPrev;
        vec4 next = texture2D(tNext, vUv) * uHasNext;

        float n = fbm(vUv * 9.0 + vec2(uSeed * 3.1, uSeed * 1.7));
        // Grain dissolve for appear / crossfade only — no permanent edge vignette.
        float m = smoothstep(n - uEdge, n + uEdge, uProgress);

        if (uHasPrev < 0.5) {
            prev = vec4(0.0);
        }

        vec4 col = mix(prev, next, clamp(m, 0.0, 1.0));
        gl_FragColor = vec4(col.rgb, col.a * uAlpha);
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

function makePlaceholder(gl) {
    return new Texture(gl, {
        image: new Uint8Array([255, 255, 255, 0]),
        width: 1,
        height: 1,
        generateMipmaps: false
    });
}

export default class PlaneManager {
    constructor(gl, { aspect = 1 } = {}) {
        this.gl = gl;
        this.scene = new Transform();
        this.camera = new Camera(gl, { fov: 45, near: 0.1, far: 100, aspect });
        this.camera.position.z = 5;

        this.imageAspect = 1;

        // Center-left preview region (single-page layout).
        this.regionWidthFrac = 0.38;
        this.regionHeightFrac = 0.55;
        this.anchorFrac = -0.18;

        this.uAlpha = { value: 1 };
        this.uProgress = { value: 1 };
        this.uEdge = { value: 0.12 };
        this.uSeed = { value: Math.random() };
        this.uHasPrev = { value: 0 };
        this.uHasNext = { value: 0 };

        this.prevTexture = makePlaceholder(gl);
        this.nextTexture = makePlaceholder(gl);
        this._cache = new Map();
        this._token = 0;
        this._currentUrl = null;

        const renderer = gl.renderer;
        const geometry = new Plane(gl, { width: 1, height: 1 });
        const program = new Program(gl, {
            vertex: renderer.isWebgl2 ? vertex300 : vertex100,
            fragment: renderer.isWebgl2 ? fragment300 : fragment100,
            uniforms: {
                tPrev: { value: this.prevTexture },
                tNext: { value: this.nextTexture },
                uAlpha: this.uAlpha,
                uProgress: this.uProgress,
                uEdge: this.uEdge,
                uSeed: this.uSeed,
                uHasPrev: this.uHasPrev,
                uHasNext: this.uHasNext
            },
            transparent: true,
            cullFace: false,
            depthTest: false,
            depthWrite: false
        });

        this.mesh = new Mesh(gl, { geometry, program });
        this.mesh.frustumCulled = false;
        this.mesh.setParent(this.scene);
        this.program = program;

        this.layout();
    }

    frustum() {
        const dist = this.camera.position.z;
        const vH = 2 * dist * Math.tan((this.camera.fov * Math.PI) / 180 / 2);
        const vW = vH * this.camera.aspect;
        return { vW, vH };
    }

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
        this.mesh.position.y = vH * 0.02;
    }

    // Single-page: camera stays put; world pan is unused.
    panTo() {
        this.camera.position.x = 0;
    }

    connectTarget() {
        const { vW } = this.frustum();
        const cx = 0.5 + this.mesh.position.x / vW;
        const halfW = (this.mesh.scale.x * 0.5) / vW;
        return [clamp(cx - halfW * 0.5, 0.02, 0.98), 0.5];
    }

    preload(urls = []) {
        urls.forEach((url) => {
            if (url) this._loadImage(url).catch(() => {});
        });
    }

    _loadImage(url) {
        if (this._cache.has(url)) return this._cache.get(url);

        const promise = new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load ${url}`));
            img.src = url;
        });
        this._cache.set(url, promise);
        return promise;
    }

    _applyTexture(target, img) {
        target.image = img;
        target.needsUpdate = true;
        this.imageAspect = (img.naturalWidth || 1) / (img.naturalHeight || 1);
        this.layout();
    }

    // Dissolve to `url`. If `reducedMotion`, snap immediately.
    async dissolveTo(url, { reducedMotion = false, duration = 0.55 } = {}) {
        const token = ++this._token;
        if (!url) return;
        if (url === this._currentUrl && this.uProgress.value >= 0.999) return;

        let img;
        try {
            img = await this._loadImage(url);
        } catch (e) {
            return;
        }
        if (token !== this._token) return;

        // Promote current next → prev for crossfade (if we already showed something).
        if (this._currentUrl && this.uHasNext.value > 0.5) {
            this.prevTexture.image = this.nextTexture.image;
            this.prevTexture.needsUpdate = true;
            this.program.uniforms.tPrev.value = this.prevTexture;
            this.uHasPrev.value = 1;
        } else {
            this.uHasPrev.value = 0;
        }

        this._applyTexture(this.nextTexture, img);
        this.program.uniforms.tNext.value = this.nextTexture;
        this.uHasNext.value = 1;
        this.uSeed.value = Math.random();
        this._currentUrl = url;

        gsap.killTweensOf(this.uProgress);

        if (reducedMotion) {
            this.uProgress.value = 1;
            this.uHasPrev.value = 0;
            return;
        }

        this.uProgress.value = 0;
        await new Promise((resolve) => {
            gsap.to(this.uProgress, {
                value: 1,
                duration,
                ease: 'power2.inOut',
                onComplete: () => {
                    // Collapse to single texture so the next transition starts clean.
                    if (token === this._token) {
                        this.uHasPrev.value = 0;
                        this.prevTexture.image = this.nextTexture.image;
                        this.prevTexture.needsUpdate = true;
                    }
                    resolve();
                }
            });
        });
    }

    // Hide the plane until a work is selected again.
    clear({ reducedMotion = false, duration = 0.35 } = {}) {
        const token = ++this._token;
        gsap.killTweensOf(this.uProgress);
        this._currentUrl = null;

        if (this.uHasNext.value < 0.5) {
            this.uHasPrev.value = 0;
            this.uHasNext.value = 0;
            this.uProgress.value = 0;
            return;
        }

        // Dissolve current image out by treating it as prev and animating progress
        // with an empty next.
        this.prevTexture.image = this.nextTexture.image;
        this.prevTexture.needsUpdate = true;
        this.program.uniforms.tPrev.value = this.prevTexture;
        this.uHasPrev.value = 1;
        this.uHasNext.value = 0;
        this.uSeed.value = Math.random();

        if (reducedMotion) {
            this.uHasPrev.value = 0;
            this.uProgress.value = 0;
            return;
        }

        this.uProgress.value = 0;
        gsap.to(this.uProgress, {
            value: 1,
            duration,
            ease: 'power2.inOut',
            onComplete: () => {
                if (token !== this._token) return;
                this.uHasPrev.value = 0;
                this.uProgress.value = 0;
            }
        });
    }

    // Back-compat alias used by older call sites.
    setTexture(url, onReady) {
        this.dissolveTo(url).then(() => {
            if (typeof onReady === 'function') onReady();
        });
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
        gsap.killTweensOf(this.uProgress);
        gsap.killTweensOf(this.uAlpha);
        this.mesh.setParent(null);
        if (this.mesh.geometry?.remove) this.mesh.geometry.remove();
        if (this.mesh.program?.remove) this.mesh.program.remove();
        this.mesh = null;
        this._cache.clear();
    }
}
