
import { Scene, Camera, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial, ShaderMaterial, Vector2, Raycaster,Clock ,GLSL3, Object3D} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

import fragment from './shader/fragment.glsl';
import vertex from './shader/vertex.glsl/'
import UI from './UI';
// import { imgLoc } from './utils/lib';

export default class App {
    constructor(stage) {
        this.c = console.log.bind(document);
        this.c("wintermute..")

        this.clock = new Clock();
       // this.c(imgLoc)
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

        //this.addObjects();
        this.resize();
        this.render();
    }
    addListener() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
      
    }


    resize() {
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();
    }

    addObjects() {
        this.geos = new Object3D();

        this.material = new ShaderMaterial({
            uniforms: {
                time: { value: this.clock }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
            
        })
        this.geometry = new BoxGeometry(1, 1, 1);
        
        for(let i =0; i<250; i++){
            this.mesh = new Mesh(this.geometry,this.material);
            this.mesh.position.x = (Math.random() - 0.5) * 90 * Math.random();
            this.mesh.position.y = (Math.random() - 0.5) * 90 * Math.random();
            this.mesh.position.z = (Math.random() - 0.5) * 100 * Math.random();
            this.geos.add(this.mesh);
        }
        this.scene.add(this.geos);
        

    }

    galleryLoad(){

    }
    onMouseMove(event) {
        //this for camera 
        this.mouse.x = (event.clientX / this.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.height) * 2 + 1;

        //console.log(event)
        this.target.x = (event.x - this.mouse.x) * 0.0072;
        this.target.y = -(event.y - this.mouse.y) * 0.0072;

        this.geos.rotation.x += 0.001 * (this.target.y - this.geos.rotation.x);
        this.geos.rotation.y += 0.001 * (this.target.x - this.geos.rotation.y);


        gsap.to(this.geos.rotation, { duration: 1, z: -0.5, yoyo: true })
        this.raycaster.setFromCamera(this.mouse,this.camera);

        this.intersects = this.raycaster.intersectObjects(this.scene.children, true);

        for (var i = 0; i <this.intersects.length; i++) {
            gsap.to(this.intersects[i].object.position, {
                duration: 1.2,
                x: -0.5,
                z: -0.3,
                repeat:-1,
                yoyo:true,
            });
        }

    }

    view(element) {


    }
    onClick = (event) => {
        event.preventDefault();
        //console.log('click', this.ui.links)
        let links = event.target.id;
       
    }

    render() {
        this.time += 0.02;
        //mouse 
        // console.log(this.time)
        this.material.uniforms.time.value = this.time;
        //movement mouse 

        this.camera.position.x = this.mouse.x * 0.05;
        //this.camera.lookAt(this.cube.position)

        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

}