import { Scene, WebGLRenderer, Vector2, Raycaster, Clock, Group, Fog, TextureLoader, LoadingManager, PointLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Debug from './utils/Debug';
import gsap from 'gsap';
import { throttle } from 'lodash';
import UI from './UI';
import CubeManager from './classes/CubeManager';
import ShaderManager from './classes/ShaderManager';
import CameraManager from './classes/CameraManager';

export default class App {
    constructor(stage) {
        this.init(stage);
        this.setupScene();
        this.setupLights();
        this.setupManagers();
        this.setupEvents();
        this.render();
    }

    init(stage) {
        // Core setup
        this.container = stage.dom;
        this.debug = new Debug();
        this.ui = new UI();
        this.clock = new Clock();
        this.mouse = new Vector2();
        this.raycaster = new Raycaster();
        this.textureCache = new Map();
        
        // State
        this.state = {
            animating: false,
            current: 0,
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
        };

        // Constants
        this.config = {
            CUBE_COUNT: 150,
            CUBE_SIZE: 1.5,
            CUBE_SPREAD: 8,
            CAMERA_DISTANCE: 30,
            SHADER_CONTAINER_SIZE: 600,
            TEXTURE_URLS: ['insta-0.png', 'insta-1.png', 'insta-2.png', 'insta-3.png']
        };
    }

    setupScene() {
        this.scene = new Scene();
        this.scene.fog = new Fog(0xeeeeee, 3, 50);

        this.renderer = new WebGLRenderer({ 
            antialias: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.state.width, this.state.height);
        this.renderer.setClearColor(0xeeeeee, 1);
        this.container.appendChild(this.renderer.domElement);

        if (this.debug.active) {
            this.setupDebugControls();
        }
    }

    setupDebugControls() {
        this.controls = new OrbitControls(this.cameraManager.getCamera(), this.renderer.domElement);
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
        const lightPositions = [[0.2, 0, 0], [0, 0, 0]];
        this.lights = lightPositions.map(pos => {
            const light = new PointLight(0xffffff, 1, 0);
            light.position.set(...pos);
            this.scene.add(light);
            return light;
        });
    }

    setupManagers() {
        this.cameraManager = new CameraManager(this.config);
        this.cubeManager = new CubeManager(this.scene, this.config);
        this.shaderManager = new ShaderManager(this.config);
        this.loadTextures();
    }

    loadTextures() {
        console.log('Starting texture loading...');
        const manager = new LoadingManager(() => {
            console.log('All textures loaded:', this.textures?.length);
            if (this.textures?.length > 0) {
                this.showCubes();
            }
        });

        const loader = new TextureLoader(manager);
        this.textures = this.config.TEXTURE_URLS.map(url => {
            console.log('Loading texture:', url);
            if (this.textureCache.has(url)) {
                console.log('Using cached texture:', url);
                return this.textureCache.get(url);
            }
            const texture = loader.load(url);
            this.textureCache.set(url, texture);
            return texture;
        });
    }

    showCubes() {
        this.cubeManager.showCubes();
    }

    setupEvents() {
        this.handleResize = throttle(this.resize.bind(this), 250);
        this.handleMouseMove = throttle(this.onMouseMove.bind(this), 16);

        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('click', this.handleView.bind(this));
        window.addEventListener('click', this.handleCubeClick.bind(this));
    }

    handleView() {
        this.navItems = document.querySelectorAll('.nav_item');
        this.textItems = document.querySelectorAll('.info');
        this.portafolio = this.ui.portafolio;
        this.about = this.ui.about;

        if (this.portafolio) {
            this.showPortfolio();
        } else if (this.about) {
            this.showAbout();
        }

        this.setupNavListeners();
    }

    showPortfolio() {
        this.cubeManager.getMain().visible = true;
        
        gsap.to(this.cubeManager.getGeos().position, { 
            x: 10, y: -1, z: 0, 
            ease: "power2.in", 
            delay: 0.4, 
            onComplete: () => this.repositionCubes() 
        });
    }

    showAbout() {
        this.cubeManager.getMain().visible = false;
        
        gsap.to(this.cubeManager.getGeos().position, { 
            x: 0, y: 0, z: 0, 
            ease: "power2.out", 
            delay: 0.4, 
            onComplete: () => this.repositionCubes() 
        });
    }

    setupNavListeners() {
        if (this.navItems) {
            this.navItems.forEach((el, i) => {
                el.addEventListener('click', () => this.switchTextures(i));
            });
        }
    }

    switchTextures(index) {
        if (this.state.animating) return;
        this.state.animating = true;
        
        this.updateNavItems(index);
        this.updateTextItems(index);
        this.animateTextureTransition(index);
    }

    updateNavItems(index) {
        if (this.navItems[this.state.current]) {
            this.navItems[this.state.current].classList.remove('item--current');
            this.navItems[index].classList.add('item--current');
        }
    }

    updateTextItems(index) {
        if (this.textItems[this.state.current]) {
            this.textItems[this.state.current].classList.remove('show__info');
            this.textItems[index].classList.add('show__info');
        }
    }

    animateTextureTransition(index) {
        this.state.current = index;
        gsap.timeline({
            onComplete: () => {
                this.state.animating = false;
            }
        })
        .fromTo(this.textItems[index],
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: 'power2.in' }, 0
        );
    }

    repositionCubes() {
        this.cubeManager.getCubes().forEach(cube => {
            gsap.to(cube.rotation, {
                x: (Math.random() - 0.07) * 10 * Math.random(),
                y: (Math.random() - 0.07) * 10 * Math.random(),
                z: (Math.random() - 0.07) * 10 * Math.random(),
                ease: "power4.out",
            });
        });
    }

    onMouseMove(event) {
        this.updateMousePosition(event);
        this.handleCubeInteraction();
    }

    updateMousePosition(event) {
        this.mouse.x = (event.clientX / this.state.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.state.height) * 2 + 1;
    }

    handleCubeInteraction() {
        this.raycaster.setFromCamera(this.mouse, this.cameraManager.getCamera());
        const intersects = this.raycaster.intersectObjects(this.cubeManager.getCubes(), false);

        if (intersects.length > 0) {
            const mouseWorldPos = new Vector2(this.mouse.x * 15, this.mouse.y * 15);
            intersects.forEach(({ object }) => {
                const distance = new Vector2(object.position.x, object.position.y)
                    .distanceTo(mouseWorldPos);
                if (distance < 8) {
                    this.cubeManager.animateCubeRepulsion(object, mouseWorldPos, distance);
                }
            });
        }
    }

    handleCubeClick(event) {
        const mouse = new Vector2(
            (event.clientX / this.state.width) * 2 - 1,
            -(event.clientY / this.state.height) * 2 + 1
        );

        this.raycaster.setFromCamera(mouse, this.cameraManager.getCamera());
        const intersects = this.raycaster.intersectObjects(this.cubeManager.getCubes(), false);

        if (intersects.length > 0) {
            const clickedCube = intersects[0].object;
            this.cameraManager.animateWiggle();
            this.showShaderElement(clickedCube);
        }
    }

    showShaderElement(cube) {
        const existingShaders = document.querySelectorAll('.shader-container');
        if (existingShaders.length >= 2) {
            this.shaderManager.hideShaderElement(existingShaders[0]);
        }
        
        this.cubeManager.animateCubesOnShaderCreate();
        this.shaderManager.createShaderContainer(this.textures);
    }

    resize() {
        this.state.width = this.container.offsetWidth;
        this.state.height = this.container.offsetHeight;
        
        this.renderer.setSize(this.state.width, this.state.height);
        this.cameraManager.resize(this.state.width, this.state.height);
    }

    render() {
        const time = this.clock.getElapsedTime();
        
        this.updateAnimations();
        this.cubeManager.updateCubes();
        
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.cameraManager.getCamera());
    }

    updateAnimations() {
        this.cubeManager.getGeos().rotation.x += 0.001;
        this.cubeManager.getGeos().rotation.y += 0.0005;
    }

    dispose() {
        this.removeEventListeners();
        this.cleanupResources();
    }

    removeEventListeners() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('click', this.handleView);
    }

    cleanupResources() {
        this.scene.traverse(object => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (object.material.map) object.material.map.dispose();
                object.material.dispose();
            }
        });

        this.textureCache.forEach(texture => texture.dispose());
        this.textureCache.clear();

        this.renderer.dispose();
        if (this.controls) this.controls.dispose();

        document.querySelectorAll('.shader-container').forEach(container => {
            this.shaderManager.cleanupShaderResources(container);
        });
    }
}