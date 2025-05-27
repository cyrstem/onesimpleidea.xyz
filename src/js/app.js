import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, ShaderMaterial, Vector2, Vector3, Raycaster, Clock, Object3D, Group, PlaneGeometry, PointLight, MeshPhongMaterial, Fog, TextureLoader, LoadingManager, Color } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Debug from './utils/Debug';
import gsap from 'gsap';
import { throttle } from 'lodash';
import texts from '../data/texts.json';
import gVert from './shader/gVert.glsl';
import gFrag from './shader/gFrag.glsl';
import UI from './UI';

export default class App {
    constructor(stage) {
        this.init(stage);
        this.setupScene();
        this.setupLights();
        this.setupObjects();
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
        this.textIndex = 0;
        this.textureIndex = 0;
        
        // State
        this.state = {
            animating: false,
            current: 0,
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
        };

        // Constants
        this.CUBE_COUNT = 150;
        this.CUBE_SIZE = 1.5;
        this.CUBE_SPREAD = 8;
        this.CAMERA_DISTANCE = 30;
        this.SHADER_CONTAINER_SIZE = 600;
        this.TEXTURE_URLS = ['insta-0.png', 'insta-1.png', 'insta-2.png', 'insta-3.png'];
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

        this.camera = new PerspectiveCamera(45, this.state.width / this.state.height, 0.001, 1000);
        this.camera.position.set(0, 0, this.CAMERA_DISTANCE);

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
        const lightPositions = [[0.2, 0, 0], [0, 0, 0]];
        this.lights = lightPositions.map(pos => {
            const light = new PointLight(0xffffff, 1, 0);
            light.position.set(...pos);
            this.scene.add(light);
            return light;
        });
    }

    setupObjects() {
        this.setupCubes();
        this.loadTextures();
    }

    setupCubes() {
        this.geos = new Object3D();
        this.main = new Group();

        const geometry = new BoxGeometry(this.CUBE_SIZE, this.CUBE_SIZE, this.CUBE_SIZE);
        const material = new MeshPhongMaterial({
            color: 0x111111,
            emissive: 0x000000,
            specular: 0x111111,
            shininess: 30
        });

        this.cubes = Array(this.CUBE_COUNT).fill(null).map(() => {
            const mesh = new Mesh(geometry, material.clone());
            const basePos = new Vector3(
                (Math.random() - 0.5) * this.CUBE_SPREAD,
                (Math.random() - 0.5) * this.CUBE_SPREAD,
                (Math.random() - 0.5) * this.CUBE_SPREAD
            );
            
            mesh.userData = {
                basePosition: basePos,
                rotationSpeed: new Vector3(
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01
                )
            };
            
            mesh.position.copy(basePos);
            this.geos.add(mesh);
            return mesh;
        });

        this.main.add(this.geos);
        this.scene.add(this.main);
        this.main.visible = false;
    }

    loadTextures() {
        const manager = new LoadingManager(() => {
            if (this.textures?.length > 0) {
            this.material.uniforms.uCurrTex.value = this.textures[0];
                this.showCubes();
            }
        });

        const loader = new TextureLoader(manager);
        this.textures = this.TEXTURE_URLS.map(url => {
            if (this.textureCache.has(url)) return this.textureCache.get(url);
            const texture = loader.load(url);
            this.textureCache.set(url, texture);
            return texture;
        });

        this.setupPlane();
    }

    showCubes() {
        this.main.visible = true;
        this.cubes.forEach(cube => {
            gsap.from(cube.position, {
                x: cube.userData.basePosition.x * 2,
                y: cube.userData.basePosition.y * 2,
                z: cube.userData.basePosition.z * 2,
                duration: 1.5,
                ease: "power2.out",
                delay: Math.random() * 0.5
            });
        });
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
        this.main.visible = true;
        this.second.visible = false;
        
        gsap.to(this.geos.position, { 
            x: 10, y: -1, z: 0, 
            ease: "power2.in", 
            delay: 0.4, 
            onComplete: () => this.repositionCubes() 
        });
        
        this.material.uniforms.uNextTex.value = this.textures[0];
        gsap.to(this.second.position, {
            x: 0, y: 2, z: -10, 
            ease: "power2.out", 
            delay: 0.2
        });
    }

    showAbout() {
        this.main.visible = false;
        this.second.visible = true;
        
        gsap.to(this.geos.position, { 
            x: 0, y: 0, z: 0, 
            ease: "power2.out", 
            delay: 0.4, 
            onComplete: () => this.repositionCubes() 
        });
        
        gsap.to(this.second.position, { 
            x: -0.5, y: 2, z: 5, 
            ease: "power2.in" 
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
        this.material.uniforms.uNextTex.value = this.textures[index];
        this.material.uniforms.animate.value = true;

        gsap.timeline({
            onComplete: () => {
                this.state.animating = false;
                this.material.uniforms.uCurrTex.value = this.textures[index];
                this.material.uniforms.animate.value = false;
            }
        })
        .fromTo(this.material.uniforms.uProg, 
            { value: 0 }, 
            { value: 1, duration: 2, ease: 'expo3.out' }, 0
        )
        .fromTo(this.textItems[index],
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
        this.updateMousePosition(event);
        this.updateShaderMousePosition();
        this.handleCubeInteraction();
    }

    updateMousePosition(event) {
        this.mouse.x = (event.clientX / this.state.width) * 2 - 1;
        this.mouse.y = -(event.clientY / this.state.height) * 2 + 1;
    }

    updateShaderMousePosition() {
        if (this.material) {
            gsap.to(this.material.uniforms.uMouse.value, {
                x: this.mouse.x * 0.3,
                y: this.mouse.y * 0.3,
                duration: 1,
                ease: "power2.out"
            });
        }
    }

    handleCubeInteraction() {
        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.cubes, false);

        if (intersects.length > 0) {
            const mouseWorldPos = new Vector2(this.mouse.x * 15, this.mouse.y * 15);
            intersects.forEach(({ object }) => {
                const distance = new Vector2(object.position.x, object.position.y)
                    .distanceTo(mouseWorldPos);
                if (distance < 8) {
                    this.animateCubeRepulsion(object, mouseWorldPos, distance);
                }
            });
        }
    }

    animateCubeRepulsion(cube, mouseWorldPos, distance) {
        const repelForce = 1 - (distance / 8);
        const direction = new Vector2(
            cube.position.x - mouseWorldPos.x,
            cube.position.y - mouseWorldPos.y
        ).normalize();

        gsap.to(cube.position, {
            x: cube.userData.basePosition.x + direction.x * repelForce * 2,
            y: cube.userData.basePosition.y + direction.y * repelForce * 2,
            z: cube.userData.basePosition.z + (repelForce * 0.8),
            duration: 0.8,
            ease: "power1.out"
        });
    }

    handleCubeClick(event) {
        const mouse = new Vector2(
            (event.clientX / this.state.width) * 2 - 1,
            -(event.clientY / this.state.height) * 2 + 1
        );

        this.raycaster.setFromCamera(mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.cubes, false);

        if (intersects.length > 0) {
            const clickedCube = intersects[0].object;
            this.showShaderElement(clickedCube);
        }
    }

    showShaderElement(cube) {
        this.manageShaderContainers();
        this.animateCubesOnShaderCreate();
        this.createShaderContainer();
    }

    manageShaderContainers() {
        const existingShaders = document.querySelectorAll('.shader-container');
        if (existingShaders.length >= 2) {
            this.hideShaderElement(existingShaders[0]);
        }
    }

    animateCubesOnShaderCreate() {
        this.cubes.forEach(cube => {
            const randomRotation = {
                x: (Math.random() - 0.5) * Math.PI * 2,
                y: (Math.random() - 0.5) * Math.PI * 2,
                z: (Math.random() - 0.5) * Math.PI * 2
            };
            
            gsap.to(cube.rotation, {
                x: randomRotation.x,
                y: randomRotation.y,
                z: randomRotation.z,
                duration: 1.5,
                ease: "power2.inOut"
            });

            const randomOffset = {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2,
                z: (Math.random() - 0.5) * 2
            };

            gsap.to(cube.position, {
                x: cube.userData.basePosition.x + randomOffset.x,
                y: cube.userData.basePosition.y + randomOffset.y,
                z: cube.userData.basePosition.z + randomOffset.z,
                duration: 1.5,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.to(cube.position, {
                        x: cube.userData.basePosition.x,
                        y: cube.userData.basePosition.y,
                        z: cube.userData.basePosition.z,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            });
        });
    }

    createShaderContainer() {
        const shaderContainer = document.createElement('div');
        const { containerWidth, containerHeight } = this.getContainerDimensions();
        const { randomX, randomY } = this.calculateRandomPosition(containerWidth, containerHeight);

        this.setupShaderContainerStyles(shaderContainer, randomX, randomY, containerWidth, containerHeight);
        this.setupShaderContent(shaderContainer, containerWidth, containerHeight);
        this.animateShaderContainer(shaderContainer);
    }

    getContainerDimensions() {
        return {
            containerWidth: this.SHADER_CONTAINER_SIZE,
            containerHeight: this.SHADER_CONTAINER_SIZE
        };
    }

    calculateRandomPosition(width, height) {
        const maxX = window.innerWidth - width;
        const maxY = window.innerHeight - height;
        return {
            randomX: Math.random() * maxX,
            randomY: Math.random() * maxY
        };
    }

    setupShaderContainerStyles(container, x, y, width, height) {
        container.style.cssText = `
            position: fixed;
            top: ${y}px;
            left: ${x}px;
            width: ${width}px;
            height: ${height}px;
            display: none;
            z-index: 1000;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
        `;
        document.body.appendChild(container);
    }

    setupShaderContent(container, width, height) {
        const helpDiv = this.createHelpDiv();
        const { title, description, link } = this.getShaderContent();
        const closeBtn = this.createCloseButton(container);
        const shaderCanvas = this.createShaderCanvas(width, height);
        
        helpDiv.appendChild(title);
        helpDiv.appendChild(description);
        if (link) {
            helpDiv.appendChild(link);
        }
        container.appendChild(helpDiv);
        container.appendChild(closeBtn);
        container.appendChild(shaderCanvas);
        
        this.setupShaderRenderer(container, shaderCanvas, width, height);
    }

    createHelpDiv() {
        const helpDiv = document.createElement('div');
        helpDiv.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 15px;
            background: rgba(49, 37, 37, 0.9);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 1002;
        `;
        return helpDiv;
    }

    getShaderContent() {
        const textContent = texts.shaderTexts[this.textIndex];
        this.textIndex = (this.textIndex + 1) % texts.shaderTexts.length;

        const title = document.createElement('h3');
        title.style.cssText = `
            margin: 8px 0 8px 0;
            font-size: 18px;
            font-weight: bold;
        `;
        title.textContent = textContent.title;

        const description = document.createElement('p');
        description.style.cssText = `
            margin: 0;
            font-size: 14px;
            line-height: 1.4;
            opacity: 0.9;
        `;
        description.textContent = textContent.description;

        // Create link if it exists in the text content
        if (textContent.link) {
            const link = document.createElement('a');
            link.href = textContent.link;
            link.target = '_blank';
            link.style.cssText = `
                display: inline-block;
                margin-top: 10px;
                color: white;
                text-decoration: none;
                font-size: 14px;
                padding: 5px 10px;
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 3px;
                transition: all 0.3s ease;
            `;
            link.textContent = 'View Project';
            link.onmouseover = () => {
                link.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                link.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            };
            link.onmouseout = () => {
                link.style.backgroundColor = 'transparent';
                link.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            };
            return { title, description, link };
        }

        return { title, description };
    }

    createCloseButton(container) {
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            z-index: 1002;
        `;
        closeBtn.onclick = () => this.hideShaderElement(container);
        return closeBtn;
    }

    createShaderCanvas(width, height) {
        const shaderCanvas = document.createElement('canvas');
        shaderCanvas.style.cssText = `
            width: 100%;
            height: 100%;
        `;
        return shaderCanvas;
    }

    setupShaderRenderer(container, canvas, width, height) {
        const shaderRenderer = new WebGLRenderer({
            canvas,
            alpha: true
        });
        shaderRenderer.setSize(width, height);

        const shaderScene = new Scene();
        const shaderCamera = new PerspectiveCamera(75, width / height, 0.1, 1000);
        shaderCamera.position.z = 1.5;

        const shaderTexture = this.textures[this.textureIndex];
        this.textureIndex = (this.textureIndex + 1) % this.textures.length;
        const dispTexture = this.textures[(this.textureIndex + 1) % this.textures.length];

        const shaderGeometry = new PlaneGeometry(2.5, 2.5 * (height / width));
        const shaderMaterial = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uMouse: { value: new Vector2(0, 0) },
                uColor: { value: new Color(0x111111) },
                uTexture: { value: shaderTexture },
                uDisp: { value: dispTexture },
                uMeshSize: { value: [width, height] },
                uImageSize: { value: [width, height] },
                uProg: { value: 0 },
                animate: { value: false }
            },
            vertexShader: gVert,
            fragmentShader: gFrag
        });

        this.animateShaderTransition(shaderMaterial);
        const shaderMesh = new Mesh(shaderGeometry, shaderMaterial);
        shaderMesh.position.y = 0.2;
        shaderScene.add(shaderMesh);

        container.userData = {
            renderer: shaderRenderer,
            material: shaderMaterial,
            geometry: shaderGeometry
        };

        container.classList.add('shader-container');
        this.startShaderAnimation(container, shaderMaterial, shaderRenderer, shaderScene, shaderCamera);
    }

    animateShaderTransition(material) {
        gsap.to(material.uniforms.uProg, {
            value: 1,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
                material.uniforms.uProg.value = 0;
            }
        });
    }

    animateShaderContainer(container) {
        container.style.display = 'block';
        container.style.opacity = '0';
        gsap.to(container, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        });
    }

    startShaderAnimation(container, material, renderer, scene, camera) {
        const animateShader = () => {
            if (container.parentElement) {
                material.uniforms.uTime.value = this.clock.getElapsedTime();
                material.uniforms.uMouse.value = this.mouse;
                renderer.render(scene, camera);
                requestAnimationFrame(animateShader);
            }
        };
        animateShader();
    }

    hideShaderElement(container) {
        this.animateCameraWiggle();
        this.animateContainerFade(container);
    }

    animateCameraWiggle() {
        gsap.to(this.camera.position, {
            x: this.camera.position.x + (Math.random() - 0.5) * 2,
            y: this.camera.position.y + (Math.random() - 0.5) * 2,
            z: this.camera.position.z + (Math.random() - 0.5) * 2,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(this.camera.position, {
                    x: 0,
                    y: 0,
                    z: this.CAMERA_DISTANCE,
                    duration: 0.8,
                    ease: "power2.inOut"
                });
            }
        });
    }

    animateContainerFade(container) {
        gsap.to(container, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => this.cleanupShaderResources(container)
        });
    }

    cleanupShaderResources(container) {
        const { renderer, material, geometry } = container.userData;
        renderer.dispose();
        material.dispose();
        geometry.dispose();
        container.remove();
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
        
        this.updateAnimations();
        this.updateCubes();
        this.updateShader(time);
        
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    updateAnimations() {
        this.geos.rotation.x += 0.001;
        this.geos.rotation.y += 0.0005;
    }

    updateCubes() {
        this.cubes.forEach(cube => {
            const { basePosition, rotationSpeed } = cube.userData;
            cube.position.lerp(basePosition, 0.1);
            cube.rotation.x += rotationSpeed.x;
            cube.rotation.y += rotationSpeed.y;
            cube.rotation.z += rotationSpeed.z;
        });
    }

    updateShader(time) {
        if (this.material) {
            this.material.uniforms.uTime.value = time;
        }
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
            const { renderer, material, geometry } = container.userData;
            renderer.dispose();
            material.dispose();
            geometry.dispose();
            container.remove();
        });
    }
}