import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, PlaneGeometry, ShaderMaterial, Vector2, Color } from 'three';
import gsap from 'gsap';
import gVert from '../shader/gVert.glsl';
import gFrag from '../shader/gFrag.glsl';
import texts from '../../data/texts.json?raw';

export default class ShaderManager {
    constructor(config) {
        this.config = config;
        this.textIndex = 0;
        this.textureIndex = 0;
        this.shaderContainers = new Map();
        this.texts = JSON.parse(texts);
        this.maxActiveShaders = 3; // Maximum number of active shader containers
    }

    createShaderContainer(textures) {
        // Get all active shader containers
        const activeShaders = Array.from(document.querySelectorAll('.shader-container'));
        
        // If we're at the limit, remove the oldest one
        if (activeShaders.length >= this.maxActiveShaders) {
            const oldestShader = activeShaders[0];
            this.hideShaderElement(oldestShader);
        }

        const shaderContainer = document.createElement('div');
        shaderContainer.className = 'shader-container';
        const { containerWidth, containerHeight } = this.getContainerDimensions();
        const { randomX, randomY } = this.calculateRandomPosition(containerWidth, containerHeight);

        this.setupShaderContainerStyles(shaderContainer, randomX, randomY, containerWidth, containerHeight);
        this.setupShaderContent(shaderContainer, containerWidth, containerHeight, textures);
        this.animateShaderContainer(shaderContainer);

        return shaderContainer;
    }

    getContainerDimensions() {
        return {
            containerWidth: this.config.SHADER_CONTAINER_SIZE,
            containerHeight: this.config.SHADER_CONTAINER_SIZE
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

    setupShaderContent(container, width, height, textures) {
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
        
        this.setupShaderRenderer(container, shaderCanvas, width, height, textures);
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
        const textContent = this.texts.shaderTexts[this.textIndex];
        this.textIndex = (this.textIndex + 1) % this.texts.shaderTexts.length;

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

    setupShaderRenderer(container, canvas, width, height, textures) {
        // First, try to get a WebGL context
        const gl = canvas.getContext('webgl', {
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        }) || canvas.getContext('experimental-webgl', {
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });

        if (!gl) {
            console.error('WebGL not supported');
            return;
        }

        const shaderRenderer = new WebGLRenderer({
            canvas,
            context: gl,
            alpha: true,
            powerPreference: 'high-performance'
        });
        shaderRenderer.setSize(width, height);

        const shaderScene = new Scene();
        const shaderCamera = new PerspectiveCamera(75, width / height, 0.1, 1000);
        shaderCamera.position.z = 1.5;

        const shaderTexture = textures[this.textureIndex];
        this.textureIndex = (this.textureIndex + 1) % textures.length;
        const dispTexture = textures[(this.textureIndex + 1) % textures.length];

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
            fragmentShader: gFrag,
            transparent: true
        });

        const shaderMesh = new Mesh(shaderGeometry, shaderMaterial);
        shaderScene.add(shaderMesh);

        // Store references for cleanup
        const shaderData = {
            renderer: shaderRenderer,
            scene: shaderScene,
            camera: shaderCamera,
            material: shaderMaterial,
            geometry: shaderGeometry,
            mesh: shaderMesh
        };
        this.shaderContainers.set(container, shaderData);

        // Start animation
        this.startShaderAnimation(container);
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

    startShaderAnimation(container) {
        const shaderData = this.shaderContainers.get(container);
        if (!shaderData) return;

        const { renderer, material, scene, camera } = shaderData;
        let animationFrameId;

        const animateShader = () => {
            if (container.parentElement) {
                material.uniforms.uTime.value = performance.now() * 0.001;
                renderer.render(scene, camera);
                animationFrameId = requestAnimationFrame(animateShader);
            }
        };

        animateShader();

        // Store the animation frame ID for cleanup
        shaderData.animationFrameId = animationFrameId;
    }

    hideShaderElement(container) {
        if (!container) return;
        
        // Remove from DOM immediately to prevent visual overlap
        container.style.display = 'none';
        
        gsap.to(container, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                this.cleanupShaderResources(container);
                container.remove();
            }
        });
    }

    cleanupShaderResources(container) {
        const shaderData = this.shaderContainers.get(container);
        if (!shaderData) return;

        // Cancel animation frame
        if (shaderData.animationFrameId) {
            cancelAnimationFrame(shaderData.animationFrameId);
        }

        // Dispose of Three.js resources
        if (shaderData.renderer) {
            shaderData.renderer.dispose();
        }
        if (shaderData.material) {
            shaderData.material.dispose();
        }
        if (shaderData.geometry) {
            shaderData.geometry.dispose();
        }
        if (shaderData.mesh) {
            shaderData.mesh.geometry.dispose();
            shaderData.mesh.material.dispose();
        }

        // Dispose of WebGL context
        const canvas = container.querySelector('canvas');
        if (canvas) {
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const ext = gl.getExtension('WEBGL_lose_context');
                if (ext) {
                    ext.loseContext();
                }
            }
        }

        // Remove from our tracking map
        this.shaderContainers.delete(container);

        // Log the number of remaining shaders
        console.log('Active shaders remaining:', this.shaderContainers.size);
    }

    updateShaderMousePosition(mouse, material) {
        if (material) {
            gsap.to(material.uniforms.uMouse.value, {
                x: mouse.x * 0.3,
                y: mouse.y * 0.3,
                duration: 1,
                ease: "power2.out"
            });
        }
    }
} 