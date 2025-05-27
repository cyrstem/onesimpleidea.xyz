import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, BoxGeometry, ShaderMaterial, Vector2, Vector3, Raycaster, Clock, Object3D, Group, PlaneGeometry, PointLight, MeshPhongMaterial, Fog, TextureLoader, LoadingManager, Color } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Debug from './utils/Debug';
import gsap from 'gsap';
import { throttle } from 'lodash';
import texts from '../data/texts.json';

import gVert from './shader/gVert.glsl'
import gFrag from './shader/gFrag.glsl'
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

        // Textures
        this.textureUrls = ['insta-0.png', 'insta-1.png', 'insta-2.png', 'insta-3.png'];
    }

    setupScene() {
        // Scene
        this.scene = new Scene();
        this.scene.fog = new Fog(0xeeeeee, 3, 50);

        // Renderer
        this.renderer = new WebGLRenderer({ 
            antialias: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(this.state.width, this.state.height);
        this.renderer.setClearColor(0xeeeeee, 1);
        this.container.appendChild(this.renderer.domElement);

        // Camera
        this.camera = new PerspectiveCamera(45, this.state.width / this.state.height, 0.001, 1000);
        this.camera.position.set(0, 0, 30);

        // Debug
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
        // Cubes
        this.setupCubes();
        // Plane
        this.loadTextures();
    }

    setupCubes() {
        this.geos = new Object3D();
        this.main = new Group();

        const geometry = new BoxGeometry(1.5, 1.5, 1.5);
        const material = new MeshPhongMaterial({
            color: 0x111111,
            emissive: 0x000000,
            specular: 0x111111,
            shininess: 30
        });

        this.cubes = Array(150).fill(null).map(() => {
            const mesh = new Mesh(geometry, material.clone());
            const basePos = new Vector3(
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 8
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
                // Show cubes after textures are loaded
                this.main.visible = true;
                // Animate cubes in
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
        });

        const loader = new TextureLoader(manager);
        this.textures = this.textureUrls.map(url => {
            if (this.textureCache.has(url)) return this.textureCache.get(url);
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
        // Convert mouse position to normalized device coordinates
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
        // Check for existing shaders and close the oldest if there are already two
        const existingShaders = document.querySelectorAll('.shader-container');
        if (existingShaders.length >= 2) {
            // Close the oldest shader (first one in the DOM)
            this.hideShaderElement(existingShaders[0]);
        }

        // Animate cubes when new shader is created
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

            // Add some position movement
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
                    // Return to base position
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

        // Create new container for each click
        const shaderContainer = document.createElement('div');
        const containerWidth = 600;
        const containerHeight = 600;
        
        // Calculate random position within safe bounds
        const maxX = window.innerWidth - containerWidth;
        const maxY = window.innerHeight - containerHeight;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        shaderContainer.style.cssText = `
            position: fixed;
            top: ${randomY}px;
            left: ${randomX}px;
            width: ${containerWidth}px;
            height: ${containerHeight}px;
            display: none;
            z-index: 1000;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.2);
        `;
        document.body.appendChild(shaderContainer);

        // Add help text div
        const helpDiv = document.createElement('div');
        helpDiv.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top:12px
            padding: 15px;
            background: rgba(49, 37, 37, 0.69);
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        `;

        // Get text from JSON and increment index
        const textContent = texts.shaderTexts[this.textIndex];
        this.textIndex = (this.textIndex + 1) % texts.shaderTexts.length;

        // Get the next texture in sequence
        const shaderTexture = this.textures[this.textureIndex];
        this.textureIndex = (this.textureIndex + 1) % this.textures.length;

        // Get the next texture for displacement
        const nextTextureIndex = (this.textureIndex + 1) % this.textures.length;
        const dispTexture = this.textures[nextTextureIndex];

        // Create title and description elements
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

        helpDiv.appendChild(title);
        helpDiv.appendChild(description);
        shaderContainer.appendChild(helpDiv);

        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            color: black;
            font-size: 24px;
            cursor: pointer;
            z-index: 1001;
        `;
        closeBtn.onclick = () => this.hideShaderElement(shaderContainer);
        shaderContainer.appendChild(closeBtn);

        // Create canvas for shader
        const shaderCanvas = document.createElement('canvas');
        shaderCanvas.style.cssText = `
            width: 100%;
            height: 100%;
        `;
        shaderContainer.appendChild(shaderCanvas);

        // Setup shader renderer with matching size
        const shaderRenderer = new WebGLRenderer({
            canvas: shaderCanvas,
            alpha: true
        });
        shaderRenderer.setSize(containerWidth, containerHeight);

        // Create shader scene with matching aspect ratio
        const shaderScene = new Scene();
        const shaderCamera = new PerspectiveCamera(75, containerWidth / containerHeight, 0.1, 1000);
        shaderCamera.position.z = 2;

        // Create shader material with the specified texture
        const shaderGeometry = new PlaneGeometry(2, 2 * (containerHeight / containerWidth));
        const shaderMaterial = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uMouse: { value: new Vector2(0, 0) },
                uColor: { value: new Color(0x111111) },
                uTexture: { value: shaderTexture },
                uDisp: { value: dispTexture },
                uMeshSize: { value: [containerWidth, containerHeight] },
                uImageSize: { value: [containerWidth, containerHeight] },
                uProg: { value: 0 },
                animate: { value: false }
            },
            vertexShader: gVert,
            fragmentShader: gFrag
        });

        // Start texture transition animation
        gsap.to(shaderMaterial.uniforms.uProg, {
            value: 1,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
                shaderMaterial.uniforms.uProg.value = 0;
            }
        });

        const shaderMesh = new Mesh(shaderGeometry, shaderMaterial);
        shaderScene.add(shaderMesh);

        // Store shader elements for cleanup
        shaderContainer.userData = {
            renderer: shaderRenderer,
            material: shaderMaterial,
            geometry: shaderGeometry
        };

        shaderContainer.classList.add('shader-container');

        // Show container with animation
        shaderContainer.style.display = 'block';
        shaderContainer.style.opacity = '0';
        gsap.to(shaderContainer, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
        });

        // Start animation for this shader
        const animateShader = () => {
            if (shaderContainer.parentElement) {
                shaderMaterial.uniforms.uTime.value = this.clock.getElapsedTime();
                shaderMaterial.uniforms.uMouse.value = this.mouse;
                shaderRenderer.render(shaderScene, shaderCamera);
                requestAnimationFrame(animateShader);
            }
        };
        animateShader();
    }

    hideShaderElement(container) {
        // Add camera wiggle animation with more pronounced movement
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
                    z: 30,
                    duration: 0.8,
                    ease: "power2.inOut"
                });
            }
        });

        gsap.to(container, {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
            onComplete: () => {
                // Cleanup resources
                const { renderer, material, geometry } = container.userData;
                renderer.dispose();
                material.dispose();
                geometry.dispose();
                container.remove();
            }
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
        
        // Update cubes
        this.cubes.forEach(cube => {
            const { basePosition, rotationSpeed } = cube.userData;
            cube.position.lerp(basePosition, 0.1);
            cube.rotation.x += rotationSpeed.x;
            cube.rotation.y += rotationSpeed.y;
            cube.rotation.z += rotationSpeed.z;
        });
        
        // Update shader
        if (this.material) {
            this.material.uniforms.uTime.value = time;
        }
        
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    dispose() {
        // Remove listeners
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('click', this.handleView);

        // Cleanup resources
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