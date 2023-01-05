
import { Scene, Camera, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial, ShaderMaterial, Vector2, Raycaster } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

import fragment from './shader/fragment.glsl';
import vertex from './shader/vertex.glsl/'
import UI from './UI';


export default class App {
    constructor(stage) {
        this.c = console.log.bind(document);
        this.c("wintermute..")

        this.ui = new UI;
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
        this.camera.minDistance = 0.8;
        this.camera.maxDistance = 30;

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.time = 0;
        this.target = new Vector2();
        this.mouse = new Vector2();
        this.raycaster = new Raycaster();
        this.raycaster.setFromCamera(this.mouse, this.camera)



        this.addListener()

        this.addObjects();
        this.resize();
        this.render();
    }
    addListener() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
       // window.addEventListener('click', this.onClick.bind(this));
    }


    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {

        this.material = new ShaderMaterial({
            uniforms: {
                time: { value: 0 }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
        })
        this.geometry = new BoxGeometry(1, 1, 1);
        this.cube = new Mesh(this.geometry, this.material);
        this.scene.add(this.cube)
    }

    onMouseMove(event) {
        //this for camera 
        this.mouse.x = (event.clientX / this.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.height) * 2 + 1;

        //console.log(event)
        this.target.x = (event.x - this.mouse.x) * 0.072;
        this.target.y = -(event.y - this.mouse.y) * 0.072;

        this.cube.rotation.x += 0.001 * (this.target.y - this.cube.rotation.x);
        this.cube.rotation.y += 0.001 * (this.target.x - this.cube.rotation.y);


        gsap.to(this.cube.rotation, { duration: 1, z: -0.5, yoyo: true })
        // this.raycaster.setFromCamera(this.mouse,this.camera);

        // this.intersects = this.raycaster.intersectObjects(this.scene.children, true);

        // for (var i = 0; i <this.intersects.length; i++) {
        //     gsap.to(this.intersects[i].object.position, {
        //         duration: 1.5,
        //         x:-0.5,
        //         repeat:-1,
        //         yoyo:true,
        //     });
        // }

    }
    view(element) {


    }
    onClick = (event) => {
        event.preventDefault();
        //console.log('click', this.ui.links)
        let links = event.target.id;
        // switch (links) {
        //     case 'aboutMe':
        //         document.getElementById("container").innerHTML = About();
        //         break;
        //     case 'experiment':
        //         document.getElementById("container").innerHTML = Experiments();
        //         break;
        // }
    }

    render() {
        this.time += 0.02;
        //mouse 


        // console.log(this.time)
        this.material.uniforms.time.value = this.time;
        //movement mouse 

        this.camera.position.x = this.mouse.x * 0.05;
        this.camera.lookAt(this.cube.position)

        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

}