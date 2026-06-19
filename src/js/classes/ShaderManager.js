import { Scene, PerspectiveCamera, WebGLRenderer, Mesh, PlaneGeometry, ShaderMaterial } from 'three';
import gsap from 'gsap';
import gVert from '../shader/gVert.glsl';
import gFrag from '../shader/gFrag.glsl';
import texts from '../../data/texts.json?raw';

export default class ShaderManager {
    constructor(config) {
        this.config = config;
        this.textIndex = 0;
        this.textureIndex = 0;
        this.texts = JSON.parse(texts);
        this.maxActiveShaders = 3;

        // All active panels share one WebGL context / renderer / overlay canvas.
        this.panels = [];
        this.renderer = null;
        this.overlay = null;
        this._raf = null;
        this._animate = this.animate.bind(this);
    }

    ensureRenderer() {
        if (this.renderer) return;

        this.overlay = document.createElement('canvas');
        this.overlay.className = 'shader-overlay';
        document.body.appendChild(this.overlay);

        this.renderer = new WebGLRenderer({
            canvas: this.overlay,
            alpha: true,
            antialias: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.autoClear = false;
    }

    createShaderContainer(textures) {
        this.ensureRenderer();

        // Single source of truth for the panel limit.
        if (this.panels.length >= this.maxActiveShaders) {
            this.hideShaderElement(this.panels[0].container);
        }

        const size = this.config.SHADER_CONTAINER_SIZE;
        const { x, y } = this.randomPosition(size);
        const { title, description, link } = this.nextText();

        const container = document.createElement('div');
        container.className = 'shader-container';
        Object.assign(container.style, { left: `${x}px`, top: `${y}px`, width: `${size}px`, height: `${size}px` });
        container.innerHTML = `
            <button class="shader-close" type="button" aria-label="Close">&times;</button>
            <div class="shader-info">
                <h3>${title}</h3>
                <p>${description}</p>
                ${link ? `<a class="shader-link" href="${link}" target="_blank" rel="noopener">View Project</a>` : ''}
            </div>
        `;
        container.querySelector('.shader-close').addEventListener('click', () => this.hideShaderElement(container));
        document.body.appendChild(container);

        this.registerPanel(container, size, textures);
        gsap.to(container, { opacity: 1, duration: 0.3, ease: 'power2.out' });

        return container;
    }

    randomPosition(size) {
        return {
            x: Math.random() * Math.max(0, window.innerWidth - size),
            y: Math.random() * Math.max(0, window.innerHeight - size)
        };
    }

    nextText() {
        const content = this.texts.shaderTexts[this.textIndex];
        this.textIndex = (this.textIndex + 1) % this.texts.shaderTexts.length;
        return content;
    }

    registerPanel(container, size, textures) {
        const scene = new Scene();
        const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 1.5;

        const currTexture = textures[this.textureIndex];
        this.textureIndex = (this.textureIndex + 1) % textures.length;
        const nextTexture = textures[this.textureIndex];
        const dispTexture = textures[(this.textureIndex + 1) % textures.length];

        const geometry = new PlaneGeometry(2.5, 2.5);
        const material = new ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uCurrTex: { value: currTexture },
                uNextTex: { value: nextTexture },
                uDisp: { value: dispTexture },
                uMeshSize: { value: [size, size] },
                uImageSize: { value: [size, size] },
                uProg: { value: 0 },
                animate: { value: false }
            },
            vertexShader: gVert,
            fragmentShader: gFrag,
            transparent: true
        });

        const mesh = new Mesh(geometry, material);
        scene.add(mesh);

        this.panels.push({ container, scene, camera, material, geometry, mesh });
        this.startLoop();
    }

    startLoop() {
        if (this._raf === null) {
            this._raf = requestAnimationFrame(this._animate);
        }
    }

    stopLoop() {
        if (this._raf !== null) {
            cancelAnimationFrame(this._raf);
            this._raf = null;
        }
    }

    animate() {
        if (!this.renderer || this.panels.length === 0) {
            this._raf = null;
            return;
        }

        const time = performance.now() * 0.001;
        const viewportHeight = window.innerHeight;

        // Clear the whole overlay once (transparent), then draw each panel in its rect.
        this.renderer.setScissorTest(false);
        this.renderer.clear(true, true, true);
        this.renderer.setScissorTest(true);

        this.panels.forEach((panel) => {
            const rect = panel.container.getBoundingClientRect();
            // WebGL origin is bottom-left, so flip Y.
            const x = rect.left;
            const y = viewportHeight - rect.bottom;

            panel.material.uniforms.uTime.value = time;
            this.renderer.setViewport(x, y, rect.width, rect.height);
            this.renderer.setScissor(x, y, rect.width, rect.height);
            this.renderer.render(panel.scene, panel.camera);
        });

        this._raf = requestAnimationFrame(this._animate);
    }

    hideShaderElement(container) {
        if (!container) return;

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
        const index = this.panels.findIndex((panel) => panel.container === container);
        if (index === -1) return;

        const panel = this.panels[index];
        panel.geometry.dispose();
        panel.material.dispose();
        this.panels.splice(index, 1);

        if (this.panels.length === 0) {
            this.stopLoop();
        }
    }

    resize() {
        if (this.renderer) {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    }

    dispose() {
        this.stopLoop();
        this.panels.forEach((panel) => {
            panel.geometry.dispose();
            panel.material.dispose();
            panel.container.remove();
        });
        this.panels = [];

        if (this.renderer) {
            this.renderer.dispose();
            this.renderer = null;
        }
        if (this.overlay) {
            this.overlay.remove();
            this.overlay = null;
        }
    }
}
