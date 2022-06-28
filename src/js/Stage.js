

import { Renderer, Camera, Transform, Program, Mesh, Box } from 'ogl'



export default class Stage {
    constructor() {
        //methots
        this.createRenderer()
        this.createCamera()
        this.createScene()
        //this.createBackground()
        this.onResize()
        this.createGeo()
        this.update()
        this.addEventListeners()
    }

    createRenderer() {
        this.renderer = new Renderer()

        this.gl = this.renderer.gl
        this.gl.clearColor(0.945, 0.945, 0.945, 0.1);

        document.body.appendChild(this.gl.canvas)
    }
    createCamera() {
        this.camera = new Camera(this.gl)
        this.camera.fov = 35
        this.camera.position.set(0, 1, 7);
        //this.camera.position.z = 7
    }
    createScene() {
        this.scene = new Transform()
    }
    createBackground() {
        this.background = new Background({
            gl: this.gl,
            scene: this.scene,
            viewport: this.viewport
        })
    }
    createGeo() {

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
            gl_FragColor.rgb = 0.5 + 0.3 * cos(vUv.xyx + uTime) + uColor;
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
    /**
   * Events.
   */

    /**
 * Resize.
 */
    onResize() {
        this.screen = {
            height: window.innerHeight,
            width: window.innerWidth
        }

        this.renderer.setSize(this.screen.width, this.screen.height)

        this.camera.perspective({
            aspect: this.gl.canvas.width / this.gl.canvas.height
        })

        const fov = this.camera.fov * (Math.PI / 180)
        const height = 2 * Math.tan(fov / 2) * this.camera.position.z
        const width = height * this.camera.aspect

        this.viewport = {
            height,
            width
        }
    }
    update() {
        this.renderer.render({
            scene: this.scene,
            camera: this.camera
        })

        window.requestAnimationFrame(this.update.bind(this))
    }
    addEventListeners() {
        window.addEventListener('resize', this.onResize.bind(this))
    }
}