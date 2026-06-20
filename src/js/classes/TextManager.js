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

export default class TextManager {
    constructor(gl, { text = 'about me', aspect = 1, size = 0.45 } = {}) {
        this.gl = gl;
        this.text = text;
        this.size = size;
        this.scene = new Transform();
        this.camera = new Camera(gl, { fov: 45, near: 0.1, far: 100, aspect });
        this.camera.position.z = 7;

        this.uAlpha = { value: 1 };
        this.visible = false;
        this.mesh = null;

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
        this.program = new Program(this.gl, {
            vertex: renderer.isWebgl2 ? vertex300 : vertex100,
            fragment: renderer.isWebgl2 ? fragment300 : fragment100,
            uniforms: {
                tMap: { value: texture },
                uAlpha: this.uAlpha
            },
            transparent: true,
            cullFace: false,
            depthWrite: false
        });

        this.build();
    }

    // Builds (or rebuilds) the mesh geometry for the current text. Safe to call
    // repeatedly; the previous geometry is released first.
    build() {
        if (!this.font || !this.program) return;

        const layout = new Text({
            font: this.font,
            text: this.text,
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

        if (this.mesh) {
            if (this.mesh.geometry?.remove) this.mesh.geometry.remove();
            this.mesh.geometry = geometry;
        } else {
            this.mesh = new Mesh(this.gl, { geometry, program: this.program });
            this.mesh.frustumCulled = false;
            this.mesh.setParent(this.scene);
        }

        this.layout = layout;
        this.mesh.visible = this.visible;
        this.place();
    }

    setText(text) {
        if (text === this.text) return;
        this.text = text;
        this.build();
    }

    // Anchor the heading near the upper-left of the viewport. OGL text grows to
    // the right from x=0 and downward from y=0, so we offset by the frustum size.
    place() {
        if (!this.mesh) return;
        const dist = this.camera.position.z;
        const vH = 2 * dist * Math.tan((this.camera.fov * Math.PI) / 180 / 2);
        const vW = vH * this.camera.aspect;
        const margin = 0.07;
        this.mesh.position.x = -vW / 2 + vW * margin;
        this.mesh.position.y = vH / 2 - vH * margin;
    }

    setVisible(value) {
        this.visible = value;
        if (this.mesh) this.mesh.visible = value;
    }

    setAlpha(value) {
        this.uAlpha.value = value;
    }

    render(target) {
        if (!this.mesh || !this.visible) return;
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

    dispose() {
        if (!this.mesh) return;
        this.mesh.setParent(null);
        if (this.mesh.geometry?.remove) this.mesh.geometry.remove();
        if (this.mesh.program?.remove) this.mesh.program.remove();
        this.mesh = null;
    }
}
