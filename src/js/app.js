import { Renderer, RenderTarget } from 'ogl';
import gsap from 'gsap';
import { throttle } from './utils/Utils';
import CircuitManager from './classes/CircuitManager';
import Forms3DManager from './classes/Forms3DManager';
import TextManager from './classes/TextManager';
import PlaneManager from './classes/PlaneManager';
import PostFX from './classes/PostFX';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// Lightweight OGL app. A 3D wireframe scene and a 2D circuit scene are rendered
// into one RenderTarget (white background), then sent through the Post FBO.
// An idle director keeps spawning forms on the right half; clicking adds one.
export default class App {
    constructor(stage, bus) {
        this.bus = bus;
        this.container = stage.dom;
        this._raf = null;

        // Idle director state. Paused while the Work view is active.
        this._spawnEvery = 1.4;
        this._spawnTimer = 0;
        this._maxForms = 3;
        this._lastTime = undefined;
        this._idle = true;
        this._portfolioTitleReady = false;

        // Viewport target (normalized, y up) of the latest shape; nav connectors
        // walk toward it and collide.
        this._lastTarget = [0.78, 0.5];

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

        // DOM overlay that shakes in lockstep with the FBO (holds the routed copy).
        this.overlay = document.getElementById('terminal');

        this.size = this.measure();
        this.renderer.setSize(this.size.width, this.size.height);

        // NEAREST keeps the crisp circuit strokes sharp through the FBO composite
        // (LINEAR sampling softens the thin lines).
        this.sceneRT = new RenderTarget(this.gl, {
            width: this.size.width * this.dpr,
            height: this.size.height * this.dpr,
            minFilter: this.gl.NEAREST,
            magFilter: this.gl.NEAREST
        });

        this.circuit = new CircuitManager(this.gl, {
            resolution: [this.size.width, this.size.height]
        });
        this.forms3D = new Forms3DManager(this.gl, {
            aspect: this.size.width / this.size.height
        });
        this.text = new TextManager(this.gl, {
            aspect: this.size.width / this.size.height
        });
        this.plane = new PlaneManager(this.gl, {
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
        this._onPortfolioActive = (detail) => this.handlePortfolioActive(detail);
        this.bus.on('route:change', this._onRouteChange);
        this.bus.on('portfolio:active', this._onPortfolioActive);
    }

    handleRouteChange(name) {
        this._routeName = name;

        if (name === 'portfolio') {
            // Pan the 3D camera right, slide the circuit off to the left and fade
            // both out, then bring in the project plane from the right.
            this._idle = false;
            gsap.to(this.forms3D.camera.position, { x: 1.6, duration: 1.0, ease: 'power3.inOut' });
            this.forms3D.setAlpha(0);
            this.circuit.setShift(-2.4);
            this.circuit.setAlpha(0);
            this.plane.show();
        } else {
            // Restore the field for the text-heavy views (About dims it for legibility).
            this._idle = true;
            this._portfolioTitleReady = false;
            const value = name === 'about' ? 0.35 : 1;
            gsap.to(this.forms3D.camera.position, { x: 0, duration: 1.0, ease: 'power3.inOut' });
            this.forms3D.setAlpha(value);
            this.circuit.setShift(0);
            this.circuit.setAlpha(value);
            this.plane.hide();
            this.text.setText('about me');
        }

        this.updateTextVisibility();
    }

    // Swap the plane texture for the freshly selected project. The MSDF title and
    // the DOM copy are only revealed once the image has actually loaded.
    handlePortfolioActive({ index, project } = {}) {
        if (!project) return;

        // Hide the current title while the new image loads.
        this._portfolioTitleReady = false;
        this.updateTextVisibility();

        const token = (this._activeToken || 0) + 1;
        this._activeToken = token;

        this.plane.setTexture(project.image, () => {
            // Ignore stale loads if the user already picked another project.
            if (token !== this._activeToken) return;
            this.text.setText(project.title);
            this._portfolioTitleReady = true;
            this.updateTextVisibility();
            if (this.bus) this.bus.emit('portfolio:reveal', { index });
        });
    }

    // The MSDF heading shows on About ("about me") and on Work (the project
    // title, once it has loaded), only on wider screens with room for the copy.
    updateTextVisibility() {
        const wide = window.innerWidth > 480;
        const show = wide && (
            this._routeName === 'about' ||
            (this._routeName === 'portfolio' && this._portfolioTitleReady)
        );
        this.text.setVisible(show);
    }

    handleClick(event) {
        // Nav links shoot a connector from the menu toward the latest shape.
        const navLink = event.target.closest && event.target.closest('#nav [data-route]');
        if (navLink) {
            this.shootConnector(navLink);
            return;
        }

        // Let other real UI (links, buttons) behave normally without spawning.
        if (event.target.closest && event.target.closest('a, button')) return;

        const x = event.clientX / this.size.width;
        const y = 1 - event.clientY / this.size.height;

        this.circuit.spawnForm({ x, y });
        this._lastTarget = this.circuit.lastCenter;
        this.post.triggerShake();
    }

    // High-frequency screen shake offset (UV units) derived from the current
    // amplitude. Applied to the post pass and mirrored onto the DOM overlay so
    // GPU content and HTML copy wobble together.
    applyShake(t) {
        const amp = this.post.uShake.value;
        const ox = (Math.sin(t * 127.0) + Math.sin(t * 211.0)) * amp * 0.006;
        const oy = (Math.sin(t * 173.0 + 1.7) + Math.sin(t * 251.0)) * amp * 0.006;

        this.post.uShakeOffset.value[0] = ox;
        this.post.uShakeOffset.value[1] = oy;

        if (this.overlay) {
            // Sampling the FBO at uv+offset shifts content by -offset in screen
            // space; y is flipped because UV is y-up while the DOM is y-down.
            this.overlay.style.transform = amp > 0.0001
                ? `translate(${-ox * this.size.width}px, ${oy * this.size.height}px)`
                : '';
        }
    }

    // Grow a line+dot from the menu item's edge that random-walks across the
    // viewport and collides with the most recently spawned shape.
    shootConnector(link) {
        const rect = link.getBoundingClientRect();
        const fromX = clamp((rect.left + rect.width) / this.size.width, 0, 1);
        const fromY = clamp(1 - (rect.top + rect.height * 0.5) / this.size.height, 0, 1);
        const [toX, toY] = this._lastTarget || [0.78, 0.5];

        this.circuit.spawnConnector(fromX, fromY, toX, toY, () => this.post.triggerShake());
    }

    director(dt) {
        if (!this._idle) return;
        this._spawnTimer += dt;
        if (this._spawnTimer < this._spawnEvery) return;
        this._spawnTimer = 0;

        const active = this.circuit.activeCount + this.forms3D.activeCount;
        if (active >= this._maxForms) return;

        if (Math.random() < 0.35) {
            this.forms3D.spawnForm();
            this._lastTarget = this.forms3D.lastCenter;
        } else {
            this.circuit.spawnForm();
            this._lastTarget = this.circuit.lastCenter;
        }
    }

    resize() {
        this.size = this.measure();
        this.renderer.setSize(this.size.width, this.size.height);
        this.sceneRT.setSize(this.size.width * this.dpr, this.size.height * this.dpr);
        this.circuit.resize(this.size.width, this.size.height);
        this.forms3D.resize(this.size.width, this.size.height);
        this.text.resize(this.size.width, this.size.height);
        this.plane.resize(this.size.width, this.size.height);
        this.post.resize();
        this.updateTextVisibility();
    }

    start() {
        const loop = (ms) => {
            const t = ms * 0.001;
            const dt = this._lastTime === undefined ? 0 : t - this._lastTime;
            this._lastTime = t;

            this.director(dt);
            this.forms3D.update(t);
            this.circuit.update(t);
            this.applyShake(t);

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
            this.plane.render(this.sceneRT);
            this.text.render(this.sceneRT);

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

        if (this.bus) {
            this.bus.off('route:change', this._onRouteChange);
            this.bus.off('portfolio:active', this._onPortfolioActive);
        }

        this.circuit.dispose();
        this.forms3D.dispose();
        this.text.dispose();
        this.plane.dispose();

        if (this.gl.canvas.parentNode) {
            this.gl.canvas.parentNode.removeChild(this.gl.canvas);
        }
    }
}
