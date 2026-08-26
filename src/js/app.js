import { Renderer, RenderTarget } from 'ogl';
import { throttle } from './utils/Utils';
import Forms3DManager from './classes/Forms3DManager';
import TextManager from './classes/TextManager';
import PlaneManager from './classes/PlaneManager';
import PostFX from './classes/PostFX';
import MandelbulbManager from './classes/MandelbulbManager';

// Lightweight OGL app for the single-page portfolio. A raymarched Mandelbulb
// fills the ambient background; 3D impossible figures sit on top. 2D circuits /
// connectors are intentionally disabled (CircuitManager is left in the codebase
// for later restoration).
export default class App {
    constructor(stage, bus) {
        this.bus = bus;
        this.container = stage.dom;
        this._raf = null;

        // Idle director: sparse ambient 3D forms only.
        this._spawnEvery = 3.2;
        this._spawnTimer = 0;
        this._maxForms = 2;
        this._lastTime = undefined;
        this._idle = true;
        // Wireframe Mandelbulb unlocks once the live circuit GA reaches this gen.
        this._sdfUnlockGeneration = 20;

        this.init();
        this.setupEvents();
        this.subscribeToBus();
        this.start();
    }

    init() {
        this.isMobile = window.matchMedia('(max-width: 600px)').matches;

        this.dpr = Math.min(window.devicePixelRatio, 2);
        this.renderer = new Renderer({
            antialias: true,
            alpha: false,
            dpr: this.dpr
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(0.9646, 0.9647, 0.9650, 1);
        this.container.appendChild(this.gl.canvas);

        this.overlay = document.getElementById('terminal');

        this.size = this.measure();
        this.renderer.setSize(this.size.width, this.size.height);

        // LINEAR sampling so soft dissolve edges aren't stair-stepped.
        this.sceneRT = new RenderTarget(this.gl, {
            width: this.size.width * this.dpr,
            height: this.size.height * this.dpr,
            minFilter: this.gl.LINEAR,
            magFilter: this.gl.LINEAR
        });

        // Ambient SDF Mandelbulb — phenotype API is GA-ready via setPhenotype().
        this.mandelbulb = new MandelbulbManager(this.gl, {
            isMobile: this.isMobile
        });
        this.mandelbulb.resize(this.size.width, this.size.height);

        this.forms3D = new Forms3DManager(this.gl, {
            aspect: this.size.width / this.size.height,
            bus: this.bus
        });
        this.forms3D.loadLibrary();

        // MSDF headings are retired in favour of DOM typography; keep the
        // manager constructed so dispose paths stay simple, but never show it.
        this.text = new TextManager(this.gl, {
            aspect: this.size.width / this.size.height
        });
        this.text.setWide(false);

        this.plane = new PlaneManager(this.gl, {
            aspect: this.size.width / this.size.height
        });
        // Hide the WebGL plane on mobile — thumbs live in the DOM list.
        this.plane.uAlpha.value = this.isMobile ? 0 : 1;

        this.post = new PostFX(this.gl);
        // Quiet the ambient block glitch so grain dissolve reads cleanly.
        this.post.uBlockAmount.value = 0.08;
        this.post.uBlockRandomness.value = 0.04;

        this.forms3D.uAlpha.value = 0.22;
    }

    measure() {
        return {
            width: this.container.offsetWidth || window.innerWidth,
            height: this.container.offsetHeight || window.innerHeight
        };
    }

    setupEvents() {
        this._onResize = throttle(this.resize.bind(this), 200);
        window.addEventListener('resize', this._onResize);
    }

    subscribeToBus() {
        if (!this.bus) return;
        this._onRouteChange = (detail) => this.handleRouteChange(detail);
        this._onPortfolioActive = (detail) => this.handlePortfolioShow(detail);
        this._onPortfolioClear = () => this.handlePortfolioClear();
        this._onPortfolioPreload = (detail) => this.handlePortfolioPreload(detail);
        this._onGaUpdate = (detail) => this.handleGaUpdate(detail);

        this.bus.on('route:change', this._onRouteChange);
        this.bus.on('portfolio:active', this._onPortfolioActive);
        this.bus.on('portfolio:clear', this._onPortfolioClear);
        this.bus.on('portfolio:preload', this._onPortfolioPreload);
        this.bus.on('ga:update', this._onGaUpdate);
    }

    handleGaUpdate({ generation = 0 } = {}) {
        const gen = generation | 0;
        // Breed the SDF genome every circuit-GA generation (even before unlock).
        this.mandelbulb.syncGeneration(gen);
        if (!this.mandelbulb.unlocked && gen >= this._sdfUnlockGeneration) {
            this.mandelbulb.reveal();
        }
    }

    handleRouteChange() {
        // Single-page: no room pan. Ambient forms keep idling quietly.
        this._idle = true;
    }

    handlePortfolioPreload({ projects } = {}) {
        if (!projects?.length) return;
        this.plane.preload(projects.map((p) => p.image).filter(Boolean));
    }

    handlePortfolioShow({ project, reducedMotion } = {}) {
        if (!project?.image || this.isMobile) return;

        const token = (this._activeToken || 0) + 1;
        this._activeToken = token;

        this.plane.dissolveTo(project.image, {
            reducedMotion: !!reducedMotion,
            duration: 0.55
        }).then(() => {
            if (token !== this._activeToken) return;
            if (this.bus) this.bus.emit('portfolio:reveal', { index: project.id });
        });
    }

    handlePortfolioClear() {
        this._activeToken = (this._activeToken || 0) + 1;
        this.plane.clear();
    }

    applyWorld() {
        // Camera stays locked; plane and forms share the single viewport.
        this.forms3D.panTo(0);
        this.plane.panTo(0);
        this.text.panTo(0);
    }

    applyShake(t) {
        const amp = this.post.uShake.value;
        const ox = (Math.sin(t * 127.0) + Math.sin(t * 211.0)) * amp * 0.006;
        const oy = (Math.sin(t * 173.0 + 1.7) + Math.sin(t * 251.0)) * amp * 0.006;

        this.post.uShakeOffset.value[0] = ox;
        this.post.uShakeOffset.value[1] = oy;

        if (this.overlay) {
            this.overlay.style.transform = amp > 0.0001
                ? `translate(${-ox * this.size.width}px, ${oy * this.size.height}px)`
                : '';
        }
    }

    director(dt) {
        if (!this._idle || this.isMobile) return;
        this._spawnTimer += dt;
        if (this._spawnTimer < this._spawnEvery) return;
        this._spawnTimer = 0;

        if (this.forms3D.activeCount >= this._maxForms) return;
        this.forms3D.spawnForm();
    }

    resize() {
        this.isMobile = window.matchMedia('(max-width: 600px)').matches;
        this.plane.uAlpha.value = this.isMobile ? 0 : 1;
        this.mandelbulb.setMobile(this.isMobile);

        this.size = this.measure();
        this.renderer.setSize(this.size.width, this.size.height);
        this.sceneRT.setSize(this.size.width * this.dpr, this.size.height * this.dpr);
        this.mandelbulb.resize(this.size.width, this.size.height);
        this.forms3D.resize(this.size.width, this.size.height);
        this.text.resize(this.size.width, this.size.height);
        this.plane.resize(this.size.width, this.size.height);
        this.post.resize();
        this.text.setWide(false);
    }

    start() {
        const loop = (ms) => {
            const t = ms * 0.001;
            const dt = this._lastTime === undefined ? 0 : t - this._lastTime;
            this._lastTime = t;

            this.director(dt);
            this.mandelbulb.update(t);
            this.forms3D.update(t);
            this.applyWorld();
            this.applyShake(t);

            // Layer order: Mandelbulb → wireframe forms → project plane → post.
            this.mandelbulb.render(this.sceneRT, { clear: true });
            this.renderer.render({
                scene: this.forms3D.scene,
                camera: this.forms3D.camera,
                target: this.sceneRT,
                clear: false
            });
            this.plane.render(this.sceneRT);
            // TextManager intentionally skipped (DOM typography only).

            this.post.render(this.sceneRT.texture);

            this._raf = requestAnimationFrame(loop);
        };
        this._raf = requestAnimationFrame(loop);
    }

    dispose() {
        if (this._raf !== null) {
            cancelAnimationFrame(this._raf);
            this._raf = null;
        }

        if (this._onResize?.cancel) this._onResize.cancel();
        window.removeEventListener('resize', this._onResize);

        if (this.bus) {
            this.bus.off('route:change', this._onRouteChange);
            this.bus.off('portfolio:active', this._onPortfolioActive);
            this.bus.off('portfolio:clear', this._onPortfolioClear);
            this.bus.off('portfolio:preload', this._onPortfolioPreload);
            this.bus.off('ga:update', this._onGaUpdate);
        }

        this.mandelbulb.dispose();
        this.forms3D.dispose();
        this.text.dispose();
        this.plane.dispose();

        if (this.gl.canvas.parentNode) {
            this.gl.canvas.parentNode.removeChild(this.gl.canvas);
        }
    }
}
