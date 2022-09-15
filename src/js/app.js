import { Renderer, Camera, Transform, Program, Mesh, Box, Orbit } from 'ogl'


export default class App {
    constructor(stage) {
        this.scene = new Transform();
        this.container = stage.dom;

        //stage sizes
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.renderer = new Renderer();

        this.gl = this.renderer.gl;
        this.gl.clearColor(0.945, 0.945, 0.945, 0.1);
        this.container.appendChild(this.gl.canvas);
        this.renderer.setSize(this.width, this.height)

        this.camera = new Camera(this.gl);
        this.camera.fov = 35;
        this.camera.position.set(0, 1, 7)


        //functions
        this.addObjects();
        this.resize();
        this.render();
    }
    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight
        this.renderer.setSize(this.width, this.height)
    }

    addObjects() {

        // Let's use the Box helper from OGL
        const geometry = new Box(this.gl);
        const program = new Program(this.gl, {
            vertex: /* glsl */ `
            attribute vec2 uv;
            attribute vec3 position;
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
            fragment: /* glsl */ `
        precision highp float;
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;
        void main() {
            gl_FragColor.rgb = 0.3 + .5 * cos(vUv.xyx + uTime) + uColor;
            gl_FragColor.a = 1.0;
        }
    `,
            uniforms: {
                uTime: { value: 0 },
            }
        });

        const mesh = new Mesh(this.gl, { geometry, program });

        // And finally we add it to the scene
        mesh.setParent(this.scene);
    }


    render() {
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera)
    }

}