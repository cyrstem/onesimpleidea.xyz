
import { Scene, Camera, PerspectiveCamera, WebGLRenderer, Mesh, SphereGeometry, BackSide, Color, BoxGeometry, MeshBasicMaterial, ShaderMaterial, RawShaderMaterial, Vector2, Raycaster, Clock, GLSL3, Object3D, Group, PlaneGeometry, AmbientLight, MeshStandardMaterial, LinearToneMapping, PointLight, sRGBEncoding, ACESFilmicToneMapping, Vector4, Texture, MeshPhongMaterial, Fog, TextureLoader, LoadingManager, AdditiveBlending, MultiplyBlending } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Debug from './utils/Debug';
import assets from './utils/assets';
import gsap from 'gsap';

import fragment from './shader/fragment.glsl';
import vertex from './shader/vertex.glsl/';

import rawVert from './shader/rawVert.glsl'
import rawFrag from './shader/rawFrag.glsl'

import UI from './UI';

export default class App {
    constructor(stage) {
        this.c = console.log.bind(document);
        this.c("wintermute..")
        this.debug = new Debug();
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
        this.container.appendChild(this.renderer.domElement);

        this.camera = new PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        );

        this.camera.position.set(0, 0, 45);


        //this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        this.time = 0;
        this.clock = new Clock();
        this.fog = new Fog(0xffffff)
        this.images = []
        this.scene.fog = new Fog(this.scene.background, 1, 500)
        this.target = new Vector2();
        this.mouse = new Vector2();
        this.raycaster = new Raycaster();
      //  this.raycaster.setFromCamera(this.mouse, this.camera)


        this.config()
        this.env();

        this.addListener()

        this.addObjects();
        this.resize();
        this.render();
        //console.log(this.second.children.scale)

    }
    //----------------------------------------------------
    config() {
        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('material')
            this.paramsColor = {
                color: "#000000",
                emissive: "#000000",
                specular: "#000000"
            }
            this.debugFolder.addColor(this.paramsColor, 'color').onChange(() => {
                this.update()
            });
            this.debugFolder.addColor(this.paramsColor, 'emissive').onChange(() => {
                this.update()
            });
            this.debugFolder.addColor(this.paramsColor, 'specular').onChange(() => {
                this.update()
            });
        }

        // this.assets = assets
        this.textureUrls = [
            'insta-0.jpg',
            'insta-1.jpg',
            'insta-2.jpg',
            'insta-3.jpg',

        ];

        //console.log("hello", this.textureUrls)
        // this.assets.forEach((item) => {
        //     this.images.push(item.url)
        // })
    }
    //--------------------------------------------------------------
    loadTexturesAndAddToScene(textureUrls) {
        const loader = new TextureLoader();
        const textures = [];
        this.second = new Group()

        // Load all the textures using the TextureLoader
        for (let i = 0; i < textureUrls.length; i++) {
            const texture = loader.load(textureUrls[i]);
            loader.crossOrigin = true
            textures.push(texture);
        }

        // Create a plane for each texture and add it to the scene
        for (let i = 0; i < textures.length; i++) {
            const geometry = new PlaneGeometry(6, 6, 32, 32);
            this.shadeMat = new ShaderMaterial({
                uniforms: {
                    uTime: { value: 0.0 },
                    uTexture: { value: textures[i] }
                },
                vertexShader: rawVert,
                fragmentShader: rawFrag,

                //map:textures[i],
            })
            // const material = new MeshBasicMaterial({ map: textures[i] });
            const meshPlane = new Mesh(geometry, this.shadeMat);
            meshPlane.position.set(i * 3.6, 0, 0);
            this.second.visible = false
            this.second.add(meshPlane)
            //this.second.position.multiplyScalar(  -0.5 );
            this.scene.add(this.second);



        }
    }

    env() {
        //-------------lights
        this.light1 = new PointLight(0xffffff, 1, 0)
        this.light1.position.set(0.200, 0)
        this.scene.add(this.light1)

        this.light2 = new PointLight(0xffffff, 1, 0)
        this.light2.position.set(0, 0, 0)
        this.scene.add(this.light2)
    }


    ///---------------------------------------------
    addListener() {
        window.addEventListener("resize", this.resize.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
        window.addEventListener('mouseover',this.onMouseOver.bind(this));
        //this allowsme to read the click from the ui dont knwon if its right but it works
        window.addEventListener("click", this.view.bind(this))


    }



    resize() {

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.renderer.setSize(this.width, this.height);
        this.camera.aspect = this.width / this.height;
        this.camera.updateProjectionMatrix();

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
        this.geos = new Object3D();
        this.phongMat = new MeshPhongMaterial({
            color: 0x000000,
            emissive: 0x000000,
            specular: 0xf5e5e5,
        })

        this.geom = new BoxGeometry(1, 1, 1);

        for (let i = 0; i < 250; i++) {
            this.mesh = new Mesh(this.geom, this.phongMat);

            this.mesh.position.x = (Math.random() - 0.5) * 10 * Math.random();
            this.mesh.position.y = (Math.random() - 0.5) * 10 * Math.random();
            this.mesh.position.z = (Math.random() - 0.5) * 10 * Math.random();
            this.geos.add(this.mesh);
        }

        // this.scene.add(this.geos);
        this.main = new Group()
        this.main.add(this.geos)
        this.scene.add(this.main);
        this.c(this.scene.children)
        //this.geos.visible = true;
        //this.c(this.images)

        this.loadTexturesAndAddToScene(this.textureUrls)

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

        // console.log(this.scene.children[3].children)
        this.cubeElements = this.scene.children[2].children //select onlycubes elements
        this.intersects = this.raycaster.intersectObjects(this.cubeElements, true);

        for (var i = 0; i < this.intersects.length; i++) {
            gsap.to(this.intersects[i].object.position, {
                duration: 2,
                x: (Math.random() - 0.5) * -10 * Math.random(),
                z: (Math.random() - 0.5) * -10 * Math.random(),
                y: (Math.random() - 0.5) * -10 * Math.random(),
                ease: "power2.out"
            });
        }

        gsap.to(this.camera.position, { y: 0, z: 15, ease: "power2.InOut", delay: 1.5 });
    }
    onMouseOver(e){

      //  this.intersects2 = this.raycaster.intersectObjects(this.second.children, true);

        // for (var i = 0; i < this.intersects.length; i++) {
        //     gsap.to(this.intersects[i].object.position, {
        //         duration: 2,
        //         x: (Math.random() - 0.5) * -10 * Math.random(),
        //         z: (Math.random() - 0.5) * -10 * Math.random(),
        //         y: (Math.random() - 0.5) * -10 * Math.random(),
        //         ease: "power2.out"
        //     });
        // }

        //this.shadeMat.uniforms.uTime.value = this.clock.getElapsedTime()
    }



    view() {

        this.portafolio = this.ui.portafolio;
        this.about = this.ui.about;


        if (this.portafolio === true) {
            this.main.visible = true;
            gsap.to(this.geos.position, { x: 10, y: -1, z: 0, ease: "power2.in", delay: 0.4, onComplete: this.reposition() });

            gsap.to(this.second.position, {
                x: 0, y: 0, z: -10, ease: "power2.out", delay: 0.8, onComplete: () => {
                    console.log(this.second)
                }
            });
            //gsap.to(this.second.children.scale)

            this.second.visible = false
        }
        if (this.about === true) {
            /// this.c('something new')
            this.main.visible = false;
            gsap.to(this.geos.position, { x: 0, y: 0, z: 0, ease: "power2.out", delay: 0.4, onComplete: this.reposition() });
            this.second.visible = true
            gsap.to(this.second.position, { x: 0, y: -0.5, z: 5, ease: "power2.in", delay: 0.4, onComplete: this.recast });

        }
    }

    update() {
        this.mesh.material.color.set(this.paramsColor.color)
        this.mesh.material.color.set(this.paramsColor.emissive)
        this.mesh.material.specular.set(this.paramsColor.specular)
    }


    render() {

        this.time += 0.05;
        // this.controls.maxDistance = 45
        // this.camera.minDistance = 20;
        this.geos.rotation.x += 0.003;
        requestAnimationFrame(this.render.bind(this));
      
        
        this.renderer.render(this.scene, this.camera);

    }

}