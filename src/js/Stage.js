

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
        this.camera.fov = 45
        this.camera.position.z = 20
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

        // This complicated set of instructions tells our box to be pink. It's called
        // "program" for a reason, but it doesn't matter right now.
        const program = new Program(this.gl, {
            vertex: `
            attribute vec3 position;

            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;

            void main() {
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
            `,
            fragment: `
            void main() {
                gl_FragColor = vec4(0.2, 0.4, 0.4, 1.0); // Pink!
            }
        `,
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