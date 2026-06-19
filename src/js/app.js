import { Renderer } from 'ogl';
import { throttle } from './utils/Utils';
import CircuitManager from './classes/CircuitManager';
import PostFX from './classes/PostFX';

// Lightweight OGL app: renders an animated black "circuit" scene into a
// fullscreen FBO over a white background. Clicking the background spawns a new
// trace and triggers a (currently no-op) glitch burst.
export default class App {
    constructor(stage, bus) {
        this.bus = bus;
        this.container = stage.dom;
        this._raf = null;

        this.init();
        this.setupEvents();
        this.subscribeToBus();
        this.start();
    }

    init() {
        this.renderer = new Renderer({
            antialias: true,
            alpha: false,
            dpr: Math.min(window.devicePixelRatio, 2)
        });
        this.gl = this.renderer.gl;
        this.gl.clearColor(1, 1, 1, 1);
        this.container.appendChild(this.gl.canvas);

        this.size = this.measure();
        this.renderer.setSize(this.size.width, this.size.height);

        this.circuit = new CircuitManager(this.gl, {
            resolution: [this.size.width, this.size.height]
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
        // Dim the circuits behind text-heavy views so copy stays readable.
        const alpha = { home: 1, portfolio: 0.4, about: 0.15 };
        this.circuit.setAlpha(alpha[name] ?? 1);
    }

    handleClick(event) {
        // Let real UI (nav links, buttons) behave normally without spawning.
        if (event.target.closest && event.target.closest('a, button')) return;

        const x = event.clientX / this.size.width;
        const y = 1 - event.clientY / this.size.height;

        this.circuit.spawnFrom(x, y);
        this.post.triggerGlitch();
    }

    resize() {
        this.size = this.measure();
        this.renderer.setSize(this.size.width, this.size.height);
        this.circuit.resize(this.size.width, this.size.height);
        this.post.resize();
    }

    start() {
        const loop = (t) => {
            this.circuit.update(t * 0.001);
            this.post.render(this.circuit.scene);
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
        if (this.gl.canvas.parentNode) {
            this.gl.canvas.parentNode.removeChild(this.gl.canvas);
        }
    }
}
