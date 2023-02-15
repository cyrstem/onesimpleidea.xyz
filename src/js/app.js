
import { Scene, Camera, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, MeshBasicMaterial, ShaderMaterial, RawShaderMaterial, Vector2, Raycaster, Clock, GLSL3, Object3D, Group, PlaneGeometry, AmbientLight, MeshStandardMaterial, LinearToneMapping, PointLight, sRGBEncoding, ACESFilmicToneMapping, Vector4, Texture, MeshPhongMaterial } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import gsap from 'gsap';

import fragment from './shader/fragment.glsl';
import vertex from './shader/vertex.glsl/';

import rawVertex from './shader/rawVertex.glsl'
import rawFragment from './shader/rawFragment.glsl'

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
        this.renderer.outputEncoding = sRGBEncoding;

        this.container.appendChild(this.renderer.domElement);

        this.camera = new PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.001,
            1000
        );
        this.camera.position.set(0, 2, 45);
        this.camera.minDistance = 0.8;
        this.camera.maxDistance = 50;

        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.time = 0;
        this.target = new Vector2();
        this.mouse = new Vector2();
        this.raycaster = new Raycaster();
        this.raycaster.setFromCamera(this.mouse, this.camera)

        //lights
        this.ambient = new AmbientLight(0x000000);
        this.scene.add(this.ambient)

        this.light1 = new PointLight(0xffffff, 1, 0)
        this.light1.position.set(0.200, 0)
        this.scene.add(this.light1)

        this.light2 = new PointLight(0xffffff, 1, 0)
        this.light2.position.set(100, 200, 100)
        this.scene.add(this.light2)


        this.light3 = new PointLight(0xffffff, 1, 0)
        this.light3.position.set(- 100, -200, 1100)
        this.scene.add(this.light3)

        /**
* Post processing
*/
        this.effectComposer = new EffectComposer(this.renderer)
        this.effectComposer.setSize(window.innerWidth, window.innerHeight)
        this.effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        this.renderPass = new RenderPass(this.scene, this.camera)


        this.view(this.ui);
        this.addListener()
        this.addObjects();
        this.galleryLoad()
        this.resize();
        this.render();
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

    addObjects() {

        // this.light(0x090909)
        this.geos = new Object3D();

        this.mat = new MeshStandardMaterial({
            color: 0xc1c2c3,
            metalness: 0.152,
            roughness: 0.41,
            emissive: 0x000000,
            depthTest: true,
            depthWrite: true,
        })
        this.phongMat = new MeshPhongMaterial({
            color: 0xc1c2c3,
            emissive: 0x00000,
            specular: 0xffffff,
            depthTest: true,
            depthWrite: true,
          
        })


      
        this.geom = new BoxGeometry(1, 1, 1);

        for (let i = 0; i < 250; i++) {
            this.mesh = new Mesh(this.geom, this.phongMat);

            this.mesh.position.x = (Math.random() - 0.5) * 90 * Math.random();
            this.mesh.position.y = (Math.random() - 0.5) * 90 * Math.random();
            this.mesh.position.z = (Math.random() - 0.5) * 90 * Math.random();
            this.geos.add(this.mesh);
        }

        this.scene.add(this.geos);
        this.geos.visible = true;


    }

    galleryLoad() {

        this.planes = new Object3D();

        this.material = new ShaderMaterial({
            uniforms: {
                uTime: { value: this.clock },
                res: {
                    value: new Vector4(window.innerWidth, window.innerHeight, null, null)
                },

            },
            vertexShader: vertex,
            fragmentShader: fragment,
           // wireframe:true

        })
        this.shaderM = new RawShaderMaterial({
            uniforms: {
                uTime:{value:this.clock},
                res: {
                    value: new Vector4(window.innerWidth, window.innerHeight, null, null)
                },
                mouseRange: { value: 3 },
                mousePos:{ value: new Vector2(null,null)},
                mouseColor:{value:null}
            },
            vertexShader:rawVertex,
            fragmentShader:rawFragment,
           // wireframe: true
        })

        this.geometry = new PlaneGeometry(10, 10);


        this.mesh = new Mesh(this.geometry, this.material);

        this.planes.add(this.mesh);
        this.planes.rotateX(-45)

        this.scene.add(this.planes);

        this.planes.visible = false;
        // this.effectComposer.addPass(this.renderPass)
        // this.displacementPass = new ShaderPass(this.material)
        // this.effectComposer.addPass(this.displacementPass)


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
        this.raycaster.setFromCamera(this.mouse, this.camera);

        this.intersects = this.raycaster.intersectObjects(this.scene.children, true);

        for (var i = 0; i < this.intersects.length; i++) {
            gsap.to(this.intersects[i].object.position, {
                duration: 1.2,
                x: -0.5,
                z: -0.3,
                repeat: -1,
                yoyo: true,
            });
        }

    }


    view(element) {
        this.portafolio = this.ui.portafolio;
        this.about = this.ui.about;

        if (this.portafolio === true) {
            this.c('something else')
            this.geos.visible = true;
            this.planes.visible = false;
        }
        if (this.about === true) {
            this.c('something new')
            this.geos.visible = false;
            this.planes.visible = true
        }
        if (this === ' ') {
            this.c('click')
        }
    }

    render() {

        this.time += 0.05;
        //mouse 
        // console.log(this.time)
        this.material.uniforms.uTime.value = this.time;
        // this.shaderM.uniforms.mousePos.value.x =this.mouse.x;
        // this.shaderM.uniforms.mousePos.value.y =this.mouse.y;
       
        // this.material.uniforms.tFlow.value = this.displacementPass
        //movement mouse 

        this.camera.position.x = this.mouse.x * 0.05;
        //this.camera.lookAt(this.cube.position)

        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
        //this.effectComposer.render()

        this.renderer.toneMapping = ACESFilmicToneMapping

    }

}