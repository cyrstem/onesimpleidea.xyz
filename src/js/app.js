import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, ShaderMaterial, Vector2, Vector3, Raycaster, Clock, Object3D, Group, PlaneGeometry, PointLight, MeshPhongMaterial, Fog, TextureLoader, LoadingManager } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Debug from './utils/Debug';
import gsap from 'gsap';
import { throttle } from 'lodash';

import gVert from './shader/gVert.glsl'
import gFrag from './shader/gFrag.glsl'

import UI from './UI';

export default class App {
    constructor(stage) {
        // Initialize core properties
        this.container = stage.dom;
        this.debug = new Debug();
        this.ui = new UI();
        this.clock = new Clock();
        this.mouse = new Vector2();
        this.target = new Vector2();
        this.raycaster = new Raycaster();
        this.textureCache = new Map();
        
        // Initialize state
        this.state = {
            animating: false,
            current: 0,
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
        };

        this.textureUrls = [
            'insta-0.png',
            'insta-1.png',
            'insta-2.png',
            'insta-3.png'
        ];

        // Setup scene and start rendering
        this.setupScene();
        this.setupLights();
        this.setupObjects();
        this.setupEvents();
        this.render();
    }

    setupScene() {
        // Scene setup with fog
        this.scene = new Scene();
        this.scene.fog = new Fog(0xeeeeee, 3, 50);

        // Optimized renderer setup
        this.renderer = new WebGLRenderer({ 
            antialias: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.state.width, this.state.height);
        this.renderer.setClearColor(0xeeeeee, 1);
        this.container.appendChild(this.renderer.domElement);

        // Camera setup
        this.camera = new PerspectiveCamera(45, this.state.width / this.state.height, 0.001, 1000);
        this.camera.position.set(0, 0, 35);

        // Debug controls
        if (this.debug.active) {
            this.setupDebugControls();
        }
    }

    setupDebugControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.debugFolder = this.debug.ui.addFolder('material');
        this.materialParams = {
            color: "#000000",
            emissive: "#000000",
            specular: "#000000"
        };

        ['color', 'emissive', 'specular'].forEach(param => {
            this.debugFolder.addColor(this.materialParams, param)
                .onChange(() => this.updateMaterials());
        });
    }

    setupLights() {
        const lights = [
            { position: [0.2, 0, 0] },
            { position: [0, 0, 0] }
        ];

        this.lights = lights.map(config => {
            const light = new PointLight(0xffffff, 1, 0);
            light.position.set(...config.position);
            this.scene.add(light);
            return light;
        });
    }

    setupObjects() {
        // Create and setup cube group
        this.geos = new Object3D();
        this.main = new Group();

        // Create reusable geometry and material
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshPhongMaterial({
            color: 0x111111,
            emissive: 0x000000,
            specular: 0x111111,
            shininess: 30
        });

        // Create cube instances efficiently
        const cubeCount = 150;
        this.cubes = new Array(cubeCount).fill(null).map(() => {
            const mesh = new Mesh(geometry, material.clone());
            mesh.userData = {
                basePosition: new Vector3(
                    (Math.random() - 0.5) * 6.8,
                    (Math.random() - 0.5) * 6.8,
                    (Math.random() - 0.5) * 6.8
                ),
                rotationSpeed: new Vector3(
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01
                )
            };
            mesh.position.copy(mesh.userData.basePosition);
            this.geos.add(mesh);
            return mesh;
        });

        this.main.add(this.geos);
        this.scene.add(this.main);
        this.main.visible = true;

        // Load textures
        this.loadTextures();
    }

    loadTextures() {
        const manager = new LoadingManager(() => {
            if (this.textures?.length > 0) {
                this.material.uniforms.uCurrTex.value = this.textures[0];
            }
        });

        const loader = new TextureLoader(manager);
        this.textures = this.textureUrls.map(url => {
            if (this.textureCache.has(url)) {
                return this.textureCache.get(url);
            }
            const texture = loader.load(url);
            this.textureCache.set(url, texture);
            return texture;
        });

        this.setupPlane();
    }

    setupPlane() {
        this.second = new Group();
        
        const planeGeometry = new PlaneGeometry(12, 12, 24, 24);
        this.material = new ShaderMaterial({
            uniforms: {
                uCurrTex: { value: 0 },
                uNextTex: { value: 0 },
                uDisp: { value: this.textures[1] },
                uMeshSize: { value: [12, 12] },
                uImageSize: { value: [0, 0] },
                uTime: { value: 0 },
                uProg: { value: 0 },
                animate: { value: false },
                uMouse: { value: new Vector2(0, 0) }
            },
            vertexShader: gVert,
            fragmentShader: gFrag
        });

        const plane = new Mesh(planeGeometry, this.material);
        plane.position.set(6.4, 2, 0);
        
        this.second.visible = false;
        this.second.add(plane);
        this.scene.add(this.second);
    }

    setupEvents() {
        // Throttled event handlers for better performance
        this.handleResize = throttle(this.resize.bind(this), 250);
        this.handleMouseMove = throttle(this.onMouseMove.bind(this), 16);

        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('click', this.handleView.bind(this));
    }

    handleView(event) {
        this.navItems = document.querySelectorAll('.nav_item');
        this.textItems = document.querySelectorAll('.info');

        this.portafolio = this.ui.portafolio;
        this.about = this.ui.about;

        if (this.portafolio) {
            this.main.visible = true;
            gsap.to(this.geos.position, { 
                x: 10, 
                y: -1, 
                z: 0, 
                ease: "power2.in", 
                delay: 0.4, 
                onComplete: () => this.repositionCubes() 
            });
            this.second.visible = false;
            this.material.uniforms.uNextTex.value = this.textures[0];
            gsap.to(this.second.position, {
                x: 0, 
                y: 2,
                z: -10, 
                ease: "power2.out", 
                delay: 0.2
            });
        }
        
        if (this.about) {
            this.main.visible = false;
            gsap.to(this.geos.position, { 
                x: 0, 
                y: 0, 
                z: 0, 
                ease: "power2.out", 
                delay: 0.4, 
                onComplete: () => this.repositionCubes() 
            });
            this.second.visible = true;
            gsap.to(this.second.position, { 
                x: -0.5, 
                y: 2,
                z: 5, 
                ease: "power2.in" 
            });
        }

        if (this.navItems) {
            this.navItems.forEach((el, i) => {
                el.addEventListener('click', () => {
                    this.switchTextures(i);
                });
            });
        }
    }

    switchTextures(index) {
        if (this.state.animating) return;

        this.state.animating = true;
        
        if (this.navItems[this.state.current]) {
            this.navItems[this.state.current].classList.remove('item--current');
            this.navItems[index].classList.add('item--current');
        }

        if (this.textItems[this.state.current]) {
            this.textItems[this.state.current].classList.remove('show__info');
            this.textItems[index].classList.add('show__info');
        }

        this.state.current = index;
        this.material.uniforms.uNextTex.value = this.textures[index];
        this.material.uniforms.animate.value = true;

        const tl = gsap.timeline({
            onComplete: () => {
                this.state.animating = false;
                this.material.uniforms.uCurrTex.value = this.textures[index];
                this.material.uniforms.animate.value = false;
            }
        });

        tl.fromTo(this.material.uniforms.uProg, 
            { value: 0 }, 
            { value: 1, duration: 2, ease: 'expo3.out' }, 0
        ).fromTo(this.textItems[index],
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: 'power2.in' }, 0
        );
    }

    repositionCubes() {
        this.cubes.forEach(cube => {
            gsap.to(cube.rotation, {
                x: (Math.random() - 0.07) * 10 * Math.random(),
                y: (Math.random() - 0.07) * 10 * Math.random(),
                z: (Math.random() - 0.07) * 10 * Math.random(),
                ease: "power4.out",
            });
        });
    }

    onMouseMove(event) {
        // Update mouse position
        this.mouse.x = (event.clientX / this.state.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.state.height) * 2 + 1;

        if (this.material) {
            const targetMouseX = this.mouse.x * 0.3;
            const targetMouseY = this.mouse.y * 0.3;
            
            gsap.to(this.material.uniforms.uMouse.value, {
                x: targetMouseX,
                y: targetMouseY,
                duration: 1,
                ease: "power2.out"
            });
        }

        // Optimized cube interaction
        this.handleCubeInteraction();
    }

    handleCubeInteraction() {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.cubes, false);

        if (intersects.length > 0) {
            const mouseWorldPos = new Vector2(this.mouse.x * 10, this.mouse.y * 10);
            
            intersects.forEach(({ object }) => {
                const cubeScreenPos = new Vector2(object.position.x, object.position.y);
                const distanceToMouse = cubeScreenPos.distanceTo(mouseWorldPos);
                
                if (distanceToMouse < 5) {
                    this.animateCubeRepulsion(object, mouseWorldPos, distanceToMouse);
                }
            });
        }
    }

    animateCubeRepulsion(cube, mouseWorldPos, distance) {
        const repelForce = 1 - (distance / 5);
        const repelStrength = repelForce * 2;

        const direction = new Vector2(
            cube.position.x - mouseWorldPos.x,
            cube.position.y - mouseWorldPos.y
        ).normalize();

        gsap.to(cube.position, {
            x: cube.userData.basePosition.x + direction.x * repelStrength,
            y: cube.userData.basePosition.y + direction.y * repelStrength,
            z: cube.userData.basePosition.z + (repelForce * 0.5),
            duration: 0.8,
            ease: "power1.out"
        });
    }

    resize() {
        this.state.width = this.container.offsetWidth;
        this.state.height = this.container.offsetHeight;
        
        this.renderer.setSize(this.state.width, this.state.height);
        this.camera.aspect = this.state.width / this.state.height;
        this.camera.updateProjectionMatrix();
    }

    render() {
        const time = this.clock.getElapsedTime();
        
        // Update animations
        this.geos.rotation.x += 0.001;
        this.geos.rotation.y += 0.0005;
        
        // Update cube positions
        this.cubes.forEach((cube, i) => {
            const { basePosition, rotationSpeed } = cube.userData;
            
            // Smooth position updates
            cube.position.lerp(basePosition, 0.1);
            
            // Smooth rotation updates
            cube.rotation.x += rotationSpeed.x;
            cube.rotation.y += rotationSpeed.y;
            cube.rotation.z += rotationSpeed.z;
        });
        
        // Update shader uniforms
        if (this.material) {
            this.material.uniforms.uTime.value = time;
        }
        
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    dispose() {
        // Remove event listeners
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('click', this.handleView);

        // Dispose geometries and materials
        this.scene.traverse(object => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (object.material.map) object.material.map.dispose();
                object.material.dispose();
            }
        });

        // Clear texture cache
        this.textureCache.forEach(texture => texture.dispose());
        this.textureCache.clear();

        // Dispose renderer and controls
        this.renderer.dispose();
        if (this.controls) this.controls.dispose();
    }
}