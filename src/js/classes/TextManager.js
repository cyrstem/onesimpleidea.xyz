import { Text, Texture, Program, Geometry, Mesh, Camera, Transform } from 'ogl';

// MSDF (multichannel signed distance field) text rendered into the shared scene
// target so it inherits the post-processing shake. Based on OGL's msdf-text
// example: https://github.com/oframe/ogl/blob/master/examples/msdf-text.html
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
        vec3 tex = texture2D(tMap, vUv).rgb;
        float signedDist = max(min(tex.r, tex.g), min(max(tex.r, tex.g), tex.b)) - 0.5;
        float d = fwidth(signedDist);
        float alpha = smoothstep(-d, d, signedDist) * uAlpha;

        if (alpha < 0.01) discard;

        gl_FragColor.rgb = vec3(0.0);
        gl_FragColor.a = alpha;
    }
`;

const vertex100 = /* glsl */ `
` + vertex;

const fragment100 = /* glsl */ `#extension GL_OES_standard_derivatives : enable
    precision highp float;
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

const FONT_JSON = 'fonts/Rajdhani-SemiBold.json';
const FONT_PNG = 'fonts/Rajdhani-SemiBold.png';

// Subtle random yaw so each heading leans slightly left or right in perspective.
const TILT_YAW = 0.1;
const TILT_PITCH = 0.035;

export default class TextManager {
    constructor(gl, { aboutText = 'about me', aspect = 1, size = 0.36 } = {}) {
        this.gl = gl;
        this.size = size;
        this.scene = new Transform();
        this.camera = new Camera(gl, { fov: 45, near: 0.1, far: 100, aspect });
        this.camera.position.z = 7;

        this.uAlpha = { value: 1 };

        // Two headings, one per room: the About heading (room 0) and the Work
        // project title (room 1). They share a camera that pans with the world
        // offset, so each stays put in its room.
        this.aboutText = aboutText;
        this.workText = '';
        this.aboutMesh = null;
        this.workMesh = null;

        this.wide = true;        // hidden on narrow screens (no room for copy)
        this._workVisible = false; // gated until the project image has loaded
        this._roomSpacing = 0;   // distance between rooms in world units (= frustum width)

        this.load();
    }

    async load() {
        const renderer = this.gl.renderer;

        const texture = new Texture(this.gl, { generateMipmaps: false });
        const img = new Image();
        img.onload = () => (texture.image = img);
        img.src = FONT_PNG;

        let font;
        try {
            font = await (await fetch(FONT_JSON)).json();
        } catch (e) {
            // Missing atlas just means no heading; the DOM copy still renders.
            return;
        }

        this.font = font;

        const buildMeshes = () => {
            this.program = new Program(this.gl, {
                vertex: renderer.isWebgl2 ? vertex300 : vertex100,
                fragment: renderer.isWebgl2 ? fragment300 : fragment100,
                uniforms: {
                    tMap: { value: texture },
                    uAlpha: this.uAlpha
                },
                transparent: true,
                cullFace: false,
                // Rendered with its own camera into a target that already holds a
                // depth buffer from the 3D pass — depthTest must stay off or the
                // headings fail the test and disappear.
                depthTest: false,
                depthWrite: false
            });

            this.aboutMesh = this._buildMesh(this.aboutText, this.aboutMesh);
            if (this.workText) this.workMesh = this._buildMesh(this.workText, this.workMesh);
            this.place();
            this._applyVisibility();
        };

        if (texture.image) {
            buildMeshes();
        } else {
            img.onload = () => {
                texture.image = img;
                buildMeshes();
            };
        }
    }

    // Builds (or rebuilds) a mesh for `text`, releasing the previous geometry.
    _buildMesh(text, existing) {
        if (!this.font || !this.program) return existing;

        const layout = new Text({
            font: this.font,
            text,
            align: 'left',
            size: this.size,
            letterSpacing: -0.03,
            lineHeight: 1.1
        });

        const geometry = new Geometry(this.gl, {
            position: { size: 3, data: layout.buffers.position },
            uv: { size: 2, data: layout.buffers.uv },
            id: { size: 1, data: layout.buffers.id },
            index: { data: layout.buffers.index }
        });

        let mesh = existing;
        if (mesh) {
            if (mesh.geometry?.remove) mesh.geometry.remove();
            mesh.geometry = geometry;
        } else {
            mesh = new Mesh(this.gl, { geometry, program: this.program });
            mesh.frustumCulled = false;
            mesh.setParent(this.scene);
        }

        this._applyPerspective(mesh);
        return mesh;
    }

    // Small random euler tilt — reads as the heading being pushed a touch left or right.
    _applyPerspective(mesh) {
        if (!mesh) return;
        const sign = Math.random() < 0.5 ? -1 : 1;
        mesh.rotation.y = sign * (0.45 + Math.random() * 0.55) * TILT_YAW;
        mesh.rotation.x = (Math.random() * 2 - 1) * TILT_PITCH;
        mesh.rotation.z = 0;
    }

    setWorkTitle(text) {
        if (text === this.workText) return;
        this.workText = text;
        this.workMesh = this._buildMesh(text, this.workMesh);
        this.place();
        this._applyVisibility();
    }

    setWide(value) {
        this.wide = value;
        this._applyVisibility();
    }

    setWorkVisible(value) {
        this._workVisible = value;
        this._applyVisibility();
    }

    _applyVisibility() {
        if (this.aboutMesh) this.aboutMesh.visible = this.wide;
        if (this.workMesh) this.workMesh.visible = this.wide && this._workVisible;
    }

    // Anchor each heading near the upper-left of its room. OGL text grows right
    // from x=0 and downward from y=0, so we offset by the frustum size. Rooms are
    // one frustum-width apart, matching the world pan and the DOM strip.
    place() {
        const dist = this.camera.position.z;
        const vH = 2 * dist * Math.tan((this.camera.fov * Math.PI) / 180 / 2);
        const vW = vH * this.camera.aspect;
        this._roomSpacing = vW;

        const margin = 0.07;
        const x = -vW / 2 + vW * margin;
        const y = vH / 2 - vH * margin;

        if (this.aboutMesh) {
            this.aboutMesh.position.x = x;
            this.aboutMesh.position.y = y;
        }
        if (this.workMesh) {
            this.workMesh.position.x = x + this._roomSpacing;
            this.workMesh.position.y = y;
        }
    }

    // World offset 0 (About room) .. 1 (Work room).
    panTo(world) {
        this.camera.position.x = world * this._roomSpacing;
    }

    render(target) {
        if (!this.wide || (!this.aboutMesh && !this.workMesh)) return;
        this.gl.renderer.render({
            scene: this.scene,
            camera: this.camera,
            target,
            clear: false
        });
    }

    resize(width, height) {
        this.camera.perspective({ aspect: width / height });
        this.place();
    }

    _disposeMesh(mesh) {
        if (!mesh) return;
        mesh.setParent(null);
        if (mesh.geometry?.remove) mesh.geometry.remove();
    }

    dispose() {
        this._disposeMesh(this.aboutMesh);
        this._disposeMesh(this.workMesh);
        if (this.program?.remove) this.program.remove();
        this.aboutMesh = null;
        this.workMesh = null;
    }
}
