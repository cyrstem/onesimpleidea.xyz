
import { Scene, Camera, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, SphereGeometry, BackSide, Color, MeshBasicMaterial, ShaderMaterial, Vector2, Raycaster, Clock, GLSL3, Object3D, Group, PlaneGeometry, AmbientLight, MeshStandardMaterial, PointLight, Vector4, Texture, MeshPhongMaterial, Fog, TextureLoader, LoadingManager } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Debug from './utils/Debug';
import gsap from 'gsap';

import gVert from './shader/gVert.glsl'
import gFrag from './shader/gFrag.glsl'

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

        this.camera.position.set(0, 0, 35);

        this.time = 0;
        this.clock = new Clock();
        this.fog = new Fog(0xffffff)
        this.scene.fog = new Fog(this.scene.background, 3, 50)
        this.target = new Vector2();
        this.mouse = new Vector2();
        this.raycaster = new Raycaster();
        this.config()
        this.env();

        this.addListener()

        this.addObjects();
        this.resize();
        this.render();


    }
    //----------------------------------------------------
    config() {
        // Debug
        if (this.debug.active) {
            this.controls = new OrbitControls(this.camera, this.renderer.domElement);
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

        this.textureUrls = [
            'insta-0.png',
            'insta-1.png',
            'insta-2.png',
            'insta-3.png',
        ];

        this.state = {
            animating: false,
            current: 0
        }
    }
    //--------------------------------------------------------------
    loadTexturesAndAddToScene(textureUrls) {
        const manager = new LoadingManager(() => {
            // console.log("check loading of textures",this.textures)
            this.material.uniforms.uCurrTex.value = this.textures[0];

        })

        const loader = new TextureLoader(manager);
        this.textures = [];
        this.second = new Group()

        // Load all the textures using the TextureLoader
        for (let i = 0; i < textureUrls.length; i++) {
            const texture = loader.load(textureUrls[i]);
            loader.crossOrigin = true
            this.textures.push(texture);

        }

        // // Create a plane for each texture and add it to the scene
        //--------------------------------------------------------------
        // for (let i = 0; i < textures.length; i++) {
        //     const geometry = new PlaneGeometry(6, 6, 32, 32);
        //     this.shadeMat = new ShaderMaterial({
        //         uniforms: {
        //             uTime: { value: 0.0 },
        //             uTexture: { value: textures[i] }
        //         },

        //         vertexShader: rawVert,
        //         fragmentShader: rawFrag,
        //     })

        //     const meshPlane = new Mesh(geometry, this.material);
        //     meshPlane.position.set(i * 5.6, 0, 0);
        //     this.second.visible = false
        //     this.second.add(meshPlane)
        //     //this.second.position.multiplyScalar(  -0.5 );
        //     this.scene.add(this.second);    

        // }
        
        //--------------- maybe needed sometime later or for other project
        this.plane = new PlaneGeometry(6, 6, 12, 12)
        this.material = new ShaderMaterial({
            uniforms: {
                uCurrTex: { value: 0 },
                uNextTex: { value: 0 },
                uDisp: { value: this.textures[1] },
                uMeshSize: { value: [6, 6] },
                uImageSize: { value: [0, 0] },
                uTime: { value: 0 },
                uProg: { value: 0 },
                animate:{value :false}
            },
            vertexShader: gVert,
            fragmentShader: gFrag,
        })
        const meshPlane = new Mesh(this.plane, this.material);
        meshPlane.position.set(3.2, 0, 0);
        this.second.visible = false
        this.second.add(meshPlane)
        this.scene.add(this.second);
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

      //read click and touchs
        window.addEventListener("click", this.view.bind(this))
        window.addEventListener("onTouch", this.onTouch.bind(this));
    }

    switchTextures(index) {
        if (this.state.animating) return;

        this.state.animating = true;
        this.navItems[this.state.current].classList.remove('item--current');
        this.navItems[index].classList.add('item--current');

        this.textItems[this.state.current].classList.remove('show__info');
        this.textItems[index].classList.add('show__info');

        this.state.current = index;
        this.material.uniforms.uNextTex.value = this.textures[index];
        this.material.uniforms.animate.value = true
        
        

        const tl = gsap.timeline({
            onComplete: () => {
                this.state.animating = false;
                this.material.uniforms.uCurrTex.value = this.textures[index];
                this.material.uniforms.animate.value = false
            }
        });

        tl
            .fromTo(this.material.uniforms.uProg, {
                value: 0
            }, {
                value: 1,
                duration: 2,
                ease: 'expo3.out',
            }, 0)
                .fromTo(this.textItems[index],{
                opacity:0},{opacity:1,duration:0.5,ease:'power2.in'
            },0);
        
    }

    view(event) {
        this.navItems = document.querySelectorAll('.nav_item');
        this.textItems = document.querySelectorAll('.info')

        this.portafolio = this.ui.portafolio;
        this.about = this.ui.about;

        if (this.portafolio) {
            this.main.visible = true;
            gsap.to(this.geos.position, { x: 10, y: -1, z: 0, ease: "power2.in", delay: 0.4, onComplete: this.reposition() });
            this.second.visible = false
            this.material.uniforms.uNextTex.value = this.textures[0]
            gsap.to(this.second.position, {
                x: 0, y: 0, z: -10, ease: "power2.out", delay: 0.2
            });
        }
        
        if (this.about) {
            this.main.visible = false;
            gsap.to(this.geos.position, { x: 0, y: 0, z: 0, ease: "power2.out", delay: 0.4, onComplete: this.reposition() });
            this.second.visible = true
            //aqui va una parte rara del click
            gsap.to(this.second.position, { x: -0.5, y: 0, z: 5, ease: "power2.in" });

        }


        this.navItems.forEach((el, i) => {
            el.addEventListener('click', () => {
                this.switchTextures(i);
            });
        });
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

        this.elements.forEach(element => {
            gsap.to(element.rotation, {
                x: (Math.random() - 0.07) * 10 * Math.random(),
                y: (Math.random() - 0.07) * 10 * Math.random(),
                z: (Math.random() - 0.07) * 10 * Math.random(),
                ease: "power4.out",
            });
        });



    }

    addObjects() {
        this.geos = new Object3D();
        this.phongMat = new MeshPhongMaterial({
            color: 0x000000,
            emissive: 0x000000,
            specular: 0x000000,
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


        this.loadTexturesAndAddToScene(this.textureUrls)

    }
    onMouseMove(event) {
        //this for camera 
        this.mouse.x = (event.clientX / this.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.height) * 2 + 1;

        this.target.x = (event.x - this.mouse.x) * 0.003;
        this.target.y = -(event.y - this.mouse.y) * 0.003;

        // this.geos.rotation.x += 0.003 * (this.target.y - this.geos.rotation.x);
        // this.geos.rotation.y += 0.003 * (this.target.x - this.geos.rotation.y);


        gsap.to(this.geos.rotation, { duration: 1.3, z: -1.3, yoyo: true })
        this.raycaster.setFromCamera(this.mouse, this.camera);

        this.cubeElements = this.scene.children[2].children //select onlycubes elements
        this.intersects = this.raycaster.intersectObjects(this.cubeElements, true);

        for (var i = 0; i < this.intersects.length; i++) {
            gsap.to(this.intersects[i].object.position, {
                duration: 2,
                x: (Math.random() - 0.3) * -10 * Math.random(),
                z: (Math.random() - 0.3) * -10 * Math.random(),
                y: (Math.random() - 0.3) * -10 * Math.random(),
                ease: "power2.out"
            });
        }

        gsap.to(this.camera.position, { y: 0, z: 15, ease: "power3.InOut", delay: 1 });
    }

    onTouch(event) {
        const touch = event.touches[0]
        // const touchX = this.touch.clientX
        // const touchY = this.touch.clientY
    }


    update() {
        this.mesh.material.color.set(this.paramsColor.color)
        this.mesh.material.color.set(this.paramsColor.emissive)
        this.mesh.material.specular.set(this.paramsColor.specular)
    }


    render() {
        this.time += 0.05;
        this.geos.rotation.x += 0.002;
        requestAnimationFrame(this.render.bind(this));
        this.material.uniforms.uTime.value = this.clock.getElapsedTime();
        this.renderer.render(this.scene, this.camera);

    }

}