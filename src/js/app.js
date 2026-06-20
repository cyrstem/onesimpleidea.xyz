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

        // Shared world offset (0 = About room, 1 = Work room). Every layer and the
        // DOM strip read from this so navigation pans the whole space as one.
        this._nav = { x: 0 };
        this._navStarted = false;

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

        // The field (forms + circuit) lives in the About room; dim it a touch so
        // the copy stays legible. It pans away when navigating to Work.
        this.circuit.uAlpha.value = 0.45;
        this.forms3D.uAlpha.value = 0.45;
        this.text.setWide(window.innerWidth > 480);
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
        this._onRouteChange = (detail) => this.handleRouteChange(detail);
        this._onPortfolioActive = (detail) => this.handlePortfolioActive(detail);
        this.bus.on('route:change', this._onRouteChange);
        this.bus.on('portfolio:active', this._onPortfolioActive);
    }

    // Navigation just animates the shared world offset toward the room index; the
    // render loop applies it to every layer and the DOM strip in lockstep.
    handleRouteChange({ name, index } = {}) {
        this._routeName = name;
        this._idle = name !== 'portfolio';

        if (!this._navStarted) {
            // Snap on first load so we don't pan in from the wrong room.
            this._navStarted = true;
            gsap.killTweensOf(this._nav);
            this._nav.x = index;
        } else {
            gsap.to(this._nav, { x: index, duration: 1.1, ease: 'power3.inOut' });
        }
    }

    // Swap the plane texture for the freshly selected project. The MSDF title and
    // the DOM copy are only revealed once the image has actually loaded.
    handlePortfolioActive({ index, project } = {}) {
        if (!project) return;

        // Hide the current title while the new image loads.
        this.text.setWorkVisible(false);

        const token = (this._activeToken || 0) + 1;
        this._activeToken = token;

        this.plane.setTexture(project.image, () => {
            // Ignore stale loads if the user already picked another project.
            if (token !== this._activeToken) return;
            this.text.setWorkTitle(project.title);
            this.text.setWorkVisible(true);
            if (this.bus) this.bus.emit('portfolio:reveal', { index });
        });
    }

    // Drive every layer and the DOM strip from the single world offset so the
    // scene, plane, headings, and HTML rooms all pan together as one space.
    applyWorld() {
        const x = this._nav.x;
        this.forms3D.panTo(x);
        this.circuit.panTo(x);
        this.plane.panTo(x);
        this.text.panTo(x);

        if (!this._strip) this._strip = document.getElementById('strip');
        if (this._strip) this._strip.style.transform = `translateX(${-x * 100}vw)`;
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

        // Only seed the ambient field while in the About room.
        if (!this._idle) return;

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
        this.text.setWide(window.innerWidth > 480);
    }

    start() {
        const loop = (ms) => {
            const t = ms * 0.001;
            const dt = this._lastTime === undefined ? 0 : t - this._lastTime;
            this._lastTime = t;

            this.director(dt);
            this.forms3D.update(t);
            this.circuit.update(t);
            this.applyWorld();
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
