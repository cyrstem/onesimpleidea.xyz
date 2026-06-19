import { Scene, WebGLRenderer, Vector2, Raycaster, Clock, Fog, TextureLoader, LoadingManager, PointLight } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Debug from './utils/Debug';
import gsap from 'gsap';
import { throttle } from './utils/Utils';
import CubeManager from './classes/CubeManager';
import ShaderManager from './classes/ShaderManager';
import CameraManager from './classes/CameraManager';

export default class App {
    constructor(stage, bus) {
        this.bus = bus;

        this.init(stage);
        this.setupScene();
        this.setupLights();
        this.setupManagers();
        this.setupDebugControls();
        this.setupEvents();
        this.subscribeToBus();
        this.start();
    }

    init(stage) {
        this.container = stage.dom;
        this.debug = new Debug();
        this.clock = new Clock();
        this.mouse = new Vector2();
        this.raycaster = new Raycaster();
        this.textureCache = new Map();
        this._raf = null;

        this.state = {
            animating: false,
            current: 0,
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
        };

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

    setupDebugControls() {
        if (!this.debug.active) return;

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

    updateMaterials() {
        const material = this.cubeManager.getMesh().material;
        material.color.set(this.materialParams.color);
        material.emissive.set(this.materialParams.emissive);
        material.specular.set(this.materialParams.specular);
    }

    loadTextures() {
        const manager = new LoadingManager(() => {
            if (this.textures?.length > 0) {
                this.cubeManager.showCubes();
            }
        });

        const loader = new TextureLoader(manager);
        this.textures = this.config.TEXTURE_URLS.map(url => {
            if (this.textureCache.has(url)) {
                return this.textureCache.get(url);
            }
            const texture = loader.load(url);
            this.textureCache.set(url, texture);
            return texture;
        });
    }

    setupEvents() {
        // Bound handlers stored as fields so removeEventListener works.
        this._onResize = throttle(this.resize.bind(this), 250);
        this._onMouseMove = throttle(this.onMouseMove.bind(this), 16);
        this._onClick = this.handleCubeClick.bind(this);
        this._onBottomTextHover = this.handleBottomTextHover.bind(this);

        window.addEventListener('resize', this._onResize);
        window.addEventListener('mousemove', this._onMouseMove);
        window.addEventListener('click', this._onClick);

        const bottomText = document.getElementById('bottom-text');
        if (bottomText) {
            bottomText.addEventListener('mouseenter', this._onBottomTextHover);
        }
    }

    subscribeToBus() {
        if (!this.bus) return;

        this._onRouteChange = ({ name }) => this.handleRouteChange(name);
        this._onPortfolioSelect = () => this.cubeManager.repositionCubes();

        this.bus.on('route:change', this._onRouteChange);
        this.bus.on('portfolio:select', this._onPortfolioSelect);
    }

    handleRouteChange(name) {
        const views = {
            home: { visible: true, x: 0, y: 0, ease: "power2.out", delay: 0.2 },
            portfolio: { visible: true, x: 10, y: -1, ease: "power2.in", delay: 0.4 },
            about: { visible: false, x: 0, y: 0, ease: "power2.out", delay: 0.4 }
        };
        const view = views[name] || views.home;

        this.cubeManager.getMain().visible = view.visible;
        gsap.to(this.cubeManager.getGeos().position, {
            x: view.x, y: view.y, z: 0,
            ease: view.ease,
            delay: view.delay,
            onComplete: () => this.cubeManager.repositionCubes()
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
        if (!this.cubeManager.getMain().visible) return;

        this.raycaster.setFromCamera(this.mouse, this.cameraManager.getCamera());
        const intersects = this.raycaster.intersectObject(this.cubeManager.getMesh(), false);
        if (intersects.length === 0) return;

        const mouseWorldPos = new Vector2(this.mouse.x * 15, this.mouse.y * 15);
        const handled = new Set();

        intersects.forEach(({ instanceId }) => {
            if (instanceId === undefined || handled.has(instanceId)) return;
            handled.add(instanceId);

            const basePosition = this.cubeManager.getInstanceBasePosition(instanceId);
            if (!basePosition) return;

            const distance = new Vector2(basePosition.x, basePosition.y).distanceTo(mouseWorldPos);
            if (distance < 8) {
                this.cubeManager.animateCubeRepulsion(instanceId, mouseWorldPos, distance);
            }
        });
    }

    handleCubeClick(event) {
        if (!this.cubeManager.getMain().visible) return;

        const mouse = new Vector2(
            (event.clientX / this.state.width) * 2 - 1,
            -(event.clientY / this.state.height) * 2 + 1
        );

        this.raycaster.setFromCamera(mouse, this.cameraManager.getCamera());
        const intersects = this.raycaster.intersectObject(this.cubeManager.getMesh(), false);

        if (intersects.length > 0) {
            this.cameraManager.animateWiggle();
            this.showShaderElement();
        }
    }

    showShaderElement() {
        this.cubeManager.animateCubesOnShaderCreate();
        this.shaderManager.createShaderContainer(this.textures);
    }

    handleBottomTextHover() {
        if (this.cubeManager) {
            this.cubeManager.makeRandomCubeBigger();
        }
    }

    resize() {
        this.state.width = this.container.offsetWidth;
        this.state.height = this.container.offsetHeight;

        this.renderer.setSize(this.state.width, this.state.height);
        this.cameraManager.resize(this.state.width, this.state.height);
        this.shaderManager.resize();
    }

    start() {
        const loop = () => {
            this.updateAnimations();
            this.cubeManager.updateCubes();
            if (this.controls) this.controls.update();

            this.renderer.render(this.scene, this.cameraManager.getCamera());
            this._raf = requestAnimationFrame(loop);
        };
        this._raf = requestAnimationFrame(loop);
    }

    updateAnimations() {
        this.cubeManager.getGeos().rotation.x += 0.001;
        this.cubeManager.getGeos().rotation.y += 0.0005;
    }

    dispose() {
        if (this._raf !== null) {
            cancelAnimationFrame(this._raf);
            this._raf = null;
        }
        this.removeEventListeners();
        this.cleanupResources();
    }

    removeEventListeners() {
        if (this._onResize?.cancel) this._onResize.cancel();
        if (this._onMouseMove?.cancel) this._onMouseMove.cancel();

        window.removeEventListener('resize', this._onResize);
        window.removeEventListener('mousemove', this._onMouseMove);
        window.removeEventListener('click', this._onClick);

        const bottomText = document.getElementById('bottom-text');
        if (bottomText && this._onBottomTextHover) {
            bottomText.removeEventListener('mouseenter', this._onBottomTextHover);
        }

        if (this.bus) {
            this.bus.off('route:change', this._onRouteChange);
            this.bus.off('portfolio:select', this._onPortfolioSelect);
        }
    }

    cleanupResources() {
        this.cubeManager.dispose();
        this.shaderManager.dispose();

        this.textureCache.forEach(texture => texture.dispose());
        this.textureCache.clear();

        this.renderer.dispose();
        if (this.controls) this.controls.dispose();
    }
}
