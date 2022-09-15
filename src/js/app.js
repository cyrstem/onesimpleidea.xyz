//import * as THREE from "three";
import { Scene,Camera,PerspectiveCamera, WebGLRenderer,Mesh,BoxGeometry,MeshBasicMaterial } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export default class App {
    constructor(stage) {
        console.log('dev')
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

        
        this.camera.position.set(0, 2, 6);
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.time = 0;
        this.addListener()
        this.addObjects();
        this.resize();
        this.render();
    }
    addListener() {
        window.addEventListener("resize", this.resize.bind(this));
      }


    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {
        this.geometry = new BoxGeometry(1, 1, 1);
        this.material = new MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new Mesh(this.geometry, this.material);
        this.scene.add(this.cube);

    }


    render() {
        this.time += 0.05;
        // this.material.uniforms.time.value = this.time;
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

}