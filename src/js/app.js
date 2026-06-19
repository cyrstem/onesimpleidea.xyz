import { Renderer, RenderTarget } from 'ogl';
import { throttle } from './utils/Utils';
import CircuitManager from './classes/CircuitManager';
import Forms3DManager from './classes/Forms3DManager';
import PostFX from './classes/PostFX';

// Lightweight OGL app. A 3D wireframe scene and a 2D circuit scene are rendered
// into one RenderTarget (white background), then sent through the Post FBO.
// An idle director keeps spawning forms on the right half; clicking adds one.
export default class App {
    constructor(stage, bus) {
        this.bus = bus;
        this.container = stage.dom;
        this._raf = null;

        // Idle director state.
        this._spawnEvery = 1.4;
        this._spawnTimer = 0;
        this._maxForms = 3;
        this._lastTime = undefined;

        this.init();
        this.setupEvents();
        this.subscribeToBus();
        this.start();
    }

    init() {
        this.dpr = Math.min(window.devicePixelRatio, 2);
        this.renderer = new Renderer({
            antialias: true,
            alpha: false,
            dpr: this.dpr
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(1, 1, 1, 1);
        this.container.appendChild(this.gl.canvas);

        this.size = this.measure();
        this.renderer.setSize(this.size.width, this.size.height);

        this.sceneRT = new RenderTarget(this.gl, {
            width: this.size.width * this.dpr,
            height: this.size.height * this.dpr
        });

        this.circuit = new CircuitManager(this.gl, {
            resolution: [this.size.width, this.size.height]
        });
        this.forms3D = new Forms3DManager(this.gl, {
            aspect: this.size.width / this.size.height
        });
        this.post = new PostFX(this.gl);
    }

    measure() {
        return {
            width: this.container.offsetWidth || window.innerWidth,
            height: this.container.offsetHeight || window.innerHeight
        };
    }

    setupEvents() {
        this._onResize = throttle(this.resize.bind(this), 200);
        this._onClick = this.handleClick.bind(this);

        window.addEventListener('resize', this._onResize);
        window.addEventListener('click', this._onClick);
    }

    subscribeToBus() {
        if (!this.bus) return;
        this._onRouteChange = ({ name }) => this.handleRouteChange(name);
        this.bus.on('route:change', this._onRouteChange);
    }

    handleRouteChange(name) {
        // Dim the field behind text-heavy views so copy stays readable.
        const alpha = { home: 1, portfolio: 0.4, about: 0.15 };
        const value = alpha[name] ?? 1;
        this.circuit.setAlpha(value);
        this.forms3D.setAlpha(value);
    }

    handleClick(event) {
        // Let real UI (nav links, buttons) behave normally without spawning.
        if (event.target.closest && event.target.closest('a, button')) return;

        const x = event.clientX / this.size.width;
        const y = 1 - event.clientY / this.size.height;

        this.circuit.spawnForm({ x, y });
        this.post.triggerGlitch();
    }

    director(dt) {
        this._spawnTimer += dt;
        if (this._spawnTimer < this._spawnEvery) return;
        this._spawnTimer = 0;

        const active = this.circuit.activeCount + this.forms3D.activeCount;
        if (active >= this._maxForms) return;

        if (Math.random() < 0.35) {
            this.forms3D.spawnForm();
        } else {
            this.circuit.spawnForm();
        }
    }

    resize() {
        this.size = this.measure();
        this.renderer.setSize(this.size.width, this.size.height);
        this.sceneRT.setSize(this.size.width * this.dpr, this.size.height * this.dpr);
        this.circuit.resize(this.size.width, this.size.height);
        this.forms3D.resize(this.size.width, this.size.height);
        this.post.resize();
    }

    start() {
        const loop = (ms) => {
            const t = ms * 0.001;
            const dt = this._lastTime === undefined ? 0 : t - this._lastTime;
            this._lastTime = t;

            this.director(dt);
            this.forms3D.update(t);
            this.circuit.update(t);

            // Composite 3D (depth) then 2D (overlay) into one target.
            this.renderer.render({
                scene: this.forms3D.scene,
                camera: this.forms3D.camera,
                target: this.sceneRT,
                clear: true
            });
            this.renderer.render({
                scene: this.circuit.scene,
                target: this.sceneRT,
                clear: false
            });

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
        window.removeEventListener('click', this._onClick);

        if (this.bus) this.bus.off('route:change', this._onRouteChange);

        this.circuit.dispose();
        this.forms3D.dispose();

        if (this.gl.canvas.parentNode) {
            this.gl.canvas.parentNode.removeChild(this.gl.canvas);
        }
    }
}
