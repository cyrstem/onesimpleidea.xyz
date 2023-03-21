
import { Scene, Camera, PerspectiveCamera, WebGLRenderer, Mesh, SphereGeometry, BackSide, Color, BoxGeometry, MeshBasicMaterial, ShaderMaterial, RawShaderMaterial, Vector2, Raycaster, Clock, GLSL3, Object3D, Group, PlaneGeometry, AmbientLight, MeshStandardMaterial, LinearToneMapping, PointLight, sRGBEncoding, ACESFilmicToneMapping, Vector4, Texture, MeshPhongMaterial, Fog } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Debug from './utils/Debug';
import gsap from 'gsap';

import fragment from './shader/fragment.glsl';
import vertex from './shader/vertex.glsl/';

import rawVertex from './shader/rawVertex.glsl'
import rawFragment from './shader/rawFragment.glsl'

import UI from './UI';

export default class App {
    constructor(stage) {
        this.c = console.log.bind(document);
        this.c("wintermute..")
        this.debug = new Debug();
        this.clock = new Clock();
        this.ui = new UI();
        this.scene = new Scene();

        this.container = stage.dom;

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;

        this.renderer = new WebGLRenderer();
        this.renderer.antialias = true
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(0xeeeeee, 1);
        this.renderer.outputEncoding = sRGBEncoding;

        this.container.appendChild(this.renderer.domElement);

        this.camera = new PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        );

        this.camera.position.set(0, 0, 45);


        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.time = 0;
        this.fog = new Fog(0xffffff)

        this.scene.fog = new Fog(this.scene.background, 1, 500)
        this.target = new Vector2();
        this.mouse = new Vector2();
        this.raycaster = new Raycaster();
        this.raycaster.setFromCamera(this.mouse, this.camera)

        this.light1 = new PointLight(0xffffff, 1, 0)
        this.light1.position.set(0.200, 0)
        this.scene.add(this.light1)

        this.light2 = new PointLight(0xffffff, 1, 0)
        this.light2.position.set(0, 0, 0)
        this.scene.add(this.light2)

        this.addListener()
        this.addObjects();
        this.resize();
        this.render();
        this.env();
    }
    addListener() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));

        //this allowsme to read the click from the ui dont knwo if its right but it works
        window.addEventListener("click", this.view.bind(this))

    }
    


    resize() {

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();

    }

    env() {
        this.colorA = new Color(0xffffff)
        this.colorB = new Color(0x000000)
        this.skyGeo = new SphereGeometry(1600, 32, 12);
        this.skyMat = new ShaderMaterial({
            uniforms: {
                'topColor': { value: this.colorA },
                'bottomColor': { value: this.colorB },
                'offset': { value: 5 },
            },
            wireframe: true,
            vertexShader: rawVertex,
            fragmentShader: rawFragment,
            side: BackSide
        })
        this.sky = new Mesh(this.skyGeo, this.skyMat)
        this.scene.add(this.sky);

    }
    reposition() {

        this.elements = this.geos.children
        //console.log(this.elements)
        this.elements.forEach(element => {
            element.rotation.x = (Math.random() - 0.06) * 10 * Math.random();
            element.rotation.y = (Math.random() - 0.06) * 10 * Math.random();
            element.rotation.z = (Math.random() - 0.06) * 10 * Math.random();
        });


    }

    addObjects() {
        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('material')
            this.paramsColor = {
                color:"#000000",
                emissive:"#000000",
                specular:"#000000"
            }
            this.debugFolder.addColor(this.paramsColor,'color').onChange(()=>{
                this.update()
            });
            this.debugFolder.addColor(this.paramsColor,'emissive').onChange(()=>{
                this.update()
            });
            this.debugFolder.addColor(this.paramsColor,'specular').onChange(()=>{
                this.update()
            });
        }
        this.geos = new Object3D();

        // this.mat = new ShaderMaterial({
        //     uniforms: {
        //         uTime: { value: this.clock },
        //         res: {
        //             value: new Vector4(window.innerWidth, window.innerHeight, null, null)
        //         },

        //     },
        //     vertexShader: vertex,
        //     fragmentShader: fragment,

        // })

        this.phongMat = new MeshPhongMaterial({
            color: 0x000000,
            emissive: 0x00000,
            specular: 0xc1c2c3,
        })



        this.geom = new BoxGeometry(1, 1, 1);

        for (let i = 0; i < 250; i++) {
            this.mesh = new Mesh(this.geom, this.phongMat);

            this.mesh.position.x = (Math.random() - 0.5) * 10 * Math.random();
            this.mesh.position.y = (Math.random() - 0.5) * 10 * Math.random();
            this.mesh.position.z = (Math.random() - 0.5) * 10 * Math.random();
            this.geos.add(this.mesh);
        }

        this.scene.add(this.geos);
        this.geos.visible = true;


    }
    colorSwitch() {
        console.log('hello color')
    }

    onMouseMove(event) {
        //this for camera 
        this.mouse.x = (event.clientX / this.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.height) * 2 + 1;

        //console.log(event)
        this.target.x = (event.x - this.mouse.x) * 0.009;
        this.target.y = -(event.y - this.mouse.y) * 0.009;

        this.geos.rotation.x += 0.005 * (this.target.y - this.geos.rotation.x);
        this.geos.rotation.y += 0.005 * (this.target.x - this.geos.rotation.y);


        gsap.to(this.geos.rotation, { duration: 1.3, z: -1.5, yoyo: true })
        this.raycaster.setFromCamera(this.mouse, this.camera);

        this.intersects = this.raycaster.intersectObjects(this.scene.children, true);

        for (var i = 0; i < this.intersects.length; i++) {
            gsap.to(this.intersects[i].object.position, {
                duration: 1.5,
                x: (Math.random() - 0.5) * -10 * Math.random(),
                z: (Math.random() - 0.5) * -10 * Math.random(),
                y: (Math.random() - 0.5) * -10 * Math.random(),
                ease: "power2.out"
            });
        }

        gsap.to(this.camera.position, { y: 0, z: 15, ease: "power3.InOut", delay: 0.2 });
    }

    view() {

        this.portafolio = this.ui.portafolio;
        this.about = this.ui.about;


        if (this.portafolio === true) {
            this.geos.visible = true;
            gsap.to(this.geos.position, { x: 10, y: -2, z: 0, ease: "power3.InOut", delay: 0.2, onComplete: this.reposition() });

        }
        if (this.about === true) {
            this.c('something new')
            //this.geos.visible = false;
            gsap.to(this.geos.position, { x: 0, y: 0, z: 0, ease: "power3.InOut", delay: 0.2, onComplete: this.reposition() });
            //this.planes.visible = true

        }
    }

    update(){
        this.mesh.material.color.set(this.paramsColor.color)
        this.mesh.material.color.set(this.paramsColor.emissive)
        this.mesh.material.specular.set(this.paramsColor.specular)
    }
    render() {

        this.time += 0.05;
        this.controls.minDistance = 20
        this.controls.maxDistance = 45
        //this.mati.uniforms.uTime.value = this.time;
        this.camera.minDistance = 20;

        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);

    }

}