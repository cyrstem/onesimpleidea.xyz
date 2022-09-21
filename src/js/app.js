
import { Scene, Camera, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial, ShaderMaterial, Vector2 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import fragment from './shader/fragment.glsl';
import vertex from './shader/vertex.glsl/'

export default class App {
    constructor(stage) {
        this.scene = new Scene();

        this.container = stage.dom;

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.renderer = new WebGLRenderer();
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xeeeeee, 1);

        this.container.appendChild(this.renderer.domElement);

        this.camera = new PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        );


        this.camera.position.set(0, 2, 3);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.time = 0;
        this.target = new Vector2();
        this.mouse = new Vector2();
      

        this.addListener()
        this.addObjects();
        this.resize();
        this.render();
    }
    addListener() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener('mousemove',this.onMouseMove.bind(this));
    }


    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {


        //this.geometry = new BoxGeometry(1, 1, 1);
        //this.material = new MeshBasicMaterial({ color: 0x00ff00 });

        // this.cube = new Mesh(this.geometry, this.material);
        // this.scene.add(this.cube);


        this.material = new ShaderMaterial({
            uniforms: {
                time: { value: 1.0 }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
        })
        this.geometry = new BoxGeometry(1, 1, 1);
        this.cube = new Mesh(this.geometry, this.material);
        this.scene.add(this.cube)
    }
    onMouseMove(event){
        //console.log(event)
        this.target.x = (event.x - this.mouse.x) * 0.02;
        this.target.y = (event.y - this.mouse.y) * 0.02;
        this.cube.rotation.x += 0.001 * (this.target.y - this.cube.rotation.x);
        this.cube.rotation.y += 0.001 * (this.target.x - this.cube.rotation.y);
        
     
    }

    render() {
        this.time += 0.4;
        this.material.uniforms.time.value = this.time;
        //movement mouse 
      
       

        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

}