import { Geometry, Program, Mesh, Transform, Camera, Vec3 } from 'ogl';
import gsap from 'gsap';
import vertex from '../shader/solid.vert';
import fragment from '../shader/solid.frag';
import pointVertex from '../shader/point.vert';
import { decode } from '../circuit/genome';
import CircuitGA from '../circuit/CircuitGA';
import { buildForm } from './impossibleForms';

const rand = (min = 0, max = 1) => min + Math.random() * (max - min);
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// GA traces are decoded into this unit square, then mapped onto each beam face.
const UNIT_REGION = { x0: 0, y0: 0, x1: 1, y1: 1 };

// Spawns rotating impossible figures (Penrose tribars) on the right half of the
// viewport. Each figure is honest 3D geometry whose isometric "magic" viewpoint
// is baked in (see impossibleForms.js), so the illusion reads when the form is
// locked flat to the camera. Beam faces are detailed with circuit traces pulled
// from the same genetic algorithm that drives the 2D circuits.
//
// Hybrid motion: a form grows in at a random orientation, its edges populate via
// uProgress, it eases ("locks") into the impossible alignment, holds, then fades.
// An orthographic camera is required: the illusion relies on the projected beam
// endpoints coinciding, which perspective foreshortening would pull apart.
export default class Forms3DManager {
    constructor(gl, { aspect = 1 } = {}) {
        this.gl = gl;
        this.scene = new Transform();

        this.viewSize = 1.2; // half-height of the orthographic frustum (world units)
        this.aspect = aspect;
        this.camera = new Camera(gl, { near: 0.1, far: 100 });
        this.camera.position.z = 10;
        this._applyOrtho();

        this.uColor = { value: [0, 0, 0] };
        this.uAlpha = { value: 1 };
        this.uSize = { value: 7 * (gl.renderer?.dpr || 1) };

        this.forms = [];
        // Viewport position (normalized, y up) of the most recently spawned form,
        // used as a collision target for nav connectors.
        this.lastCenter = [0.78, 0.5];
        this._tmpVec = new Vec3();

        // Live genetic algorithm shared in spirit with CircuitManager: warm-started
        // from public/circuits.json by loadLibrary. Until then it stays random and
        // figures fall back to undetailed wireframes.
        this.ga = new CircuitGA();
        this.gaReady = false;
        this.gaTarget = [0.78, 0.5];
    }

    _applyOrtho() {
        const h = this.viewSize;
        const w = h * this.aspect;
        this.camera.orthographic({ left: -w, right: w, bottom: -h, top: h, near: 0.1, far: 100 });
    }

    // Fetch the evolved circuit library and warm-start the GA. Missing/invalid
    // library is non-fatal: figures simply render without circuit detailing.
    async loadLibrary(url = '/circuits.json') {
        try {
            const res = await fetch(url);
            if (!res.ok) return;
            const data = await res.json();
            if (!Array.isArray(data.forms)) return;
            const genomes = data.forms.map((f) => f.genome).filter(Boolean);
            if (!genomes.length) return;
            this.ga.seed(genomes);
            this.gaReady = true;
        } catch (e) {
            // Keep the plain wireframes when the library can't be loaded.
        }
    }

    setEvolveTarget(target) {
        if (target && target.length === 2) this.gaTarget = target;
    }

    // Projects a world-space position to normalized viewport coords (y up).
    projectToViewport(pos) {
        this.camera.updateMatrixWorld();
        const v = this._tmpVec.set(pos.x, pos.y, pos.z).applyMatrix4(this.camera.projectionViewMatrix);
        return [clamp((v.x + 1) * 0.5, 0.02, 0.98), clamp((v.y + 1) * 0.5, 0.02, 0.98)];
    }

    get activeCount() {
        return this.forms.length;
    }

    // Detail one beam face with an evolved circuit board: pull a genome, decode it
    // into the unit square, then map every trace point onto the face plane
    // (origin + s*u + t*v) so the board wraps the impossible figure in 3D.
    detailFace(face, segs, dots) {
        const form = decode(this.ga.nextGenome(this.gaTarget), { region: UNIT_REGION });
        const { origin, u, v } = face;
        const at = (s, t) => [
            origin[0] + u[0] * s + v[0] * t,
            origin[1] + u[1] * s + v[1] * t,
            origin[2] + u[2] * s + v[2] * t
        ];
        for (const s of form.segments) {
            segs.push({ a: at(s.x1, s.y1), b: at(s.x2, s.y2), r0: s.r0, r1: s.r1 });
        }
        for (const n of form.nodes) {
            dots.push({ p: at(n.x, n.y), r: n.r });
        }
    }

    buildDotGeometry(dots, scale) {
        const position = new Float32Array(dots.length * 3);
        const aReveal = new Float32Array(dots.length);
        dots.forEach((d, i) => {
            position[i * 3] = d.p[0] * scale;
            position[i * 3 + 1] = d.p[1] * scale;
            position[i * 3 + 2] = d.p[2] * scale;
            aReveal[i] = d.r;
        });
        return new Geometry(this.gl, {
            position: { size: 3, data: position },
            aReveal: { size: 1, data: aReveal }
        });
    }

    // segs: [{ a:[x,y,z], b:[x,y,z], r0?, r1?, r? }] -> gl.LINES geometry.
    buildGeometry(segs, scale) {
        const position = new Float32Array(segs.length * 2 * 3);
        const aReveal = new Float32Array(segs.length * 2);
        segs.forEach((s, i) => {
            const o = i * 6;
            position[o] = s.a[0] * scale;
            position[o + 1] = s.a[1] * scale;
            position[o + 2] = s.a[2] * scale;
            position[o + 3] = s.b[0] * scale;
            position[o + 4] = s.b[1] * scale;
            position[o + 5] = s.b[2] * scale;
            aReveal[i * 2] = s.r0 ?? s.r ?? 0;
            aReveal[i * 2 + 1] = s.r1 ?? s.r ?? 0;
        });
        return new Geometry(this.gl, {
            position: { size: 3, data: position },
            aReveal: { size: 1, data: aReveal }
        });
    }

    spawnForm() {
        const figure = buildForm();

        const segs = figure.segs.map((s) => ({ a: s.a, b: s.b, r: s.r }));
        const dots = figure.dots.map((d) => ({ p: d.p, r: d.r }));
        if (this.gaReady) {
            figure.faces.forEach((face) => this.detailFace(face, segs, dots));
        }

        const geometry = this.buildGeometry(segs, figure.scale);
        const uFade = { value: 1 };
        const uProgress = { value: 0 };

        const program = new Program(this.gl, {
            vertex,
            fragment,
            uniforms: { uColor: this.uColor, uAlpha: this.uAlpha, uFade, uProgress },
            transparent: true,
            depthTest: true,
            depthWrite: false
        });

        const mesh = new Mesh(this.gl, { geometry, program, mode: this.gl.LINES });
        mesh.frustumCulled = false;
        // Keep figures in the right half, inset from the edges so they don't clip.
        const hw = this.viewSize * this.aspect;
        mesh.position.set(rand(0.18 * hw, 0.55 * hw), rand(-0.5, 0.5) * this.viewSize, 0);
        // Start tilted: impossible figures ease to lockRot; platonic solids spin.
        mesh.rotation.set(rand(-0.9, 0.9), rand(-1.3, 1.3), rand(-0.5, 0.5));
        mesh.scale.set(0.001);
        mesh.setParent(this.scene);

        this.lastCenter = this.projectToViewport(mesh.position);

        const dotGeometry = this.buildDotGeometry(dots, figure.scale);
        const dotProgram = new Program(this.gl, {
            vertex: pointVertex,
            fragment,
            uniforms: { uColor: this.uColor, uAlpha: this.uAlpha, uSize: this.uSize, uFade, uProgress },
            transparent: true,
            depthTest: true,
            depthWrite: false
        });
        const dotMesh = new Mesh(this.gl, { geometry: dotGeometry, program: dotProgram, mode: this.gl.POINTS });
        dotMesh.frustumCulled = false;
        dotMesh.setParent(mesh);

        const target = rand(0.62, 0.82);
        const lock = figure.lockRot || { x: 0, y: 0, z: 0 };
        const free = !!figure.free;
        const form = {
            mesh, geometry, program, dotMesh, dotGeometry, dotProgram, uFade, uProgress,
            free,
            speedX: free ? rand(-0.5, 0.5) : 0,
            speedY: free ? rand(0.3, 0.9) : 0
        };
        this.forms.push(form);

        const tl = gsap.timeline({ onComplete: () => this.removeForm(form) });
        tl.to(mesh.scale, { x: target, y: target, z: target, duration: 0.8, ease: 'back.out(1.5)' }, 0);
        // Impossible figures rotate ("lock") into alignment while populating;
        // platonic solids skip the lock tween and free-spin in update() instead.
        if (!free) {
            tl.to(mesh.rotation, { x: lock.x, y: lock.y, z: lock.z, duration: 2.2, ease: 'power3.inOut' }, 0);
        }
        tl.to(uProgress, { value: 1, duration: 1.5, ease: 'power1.inOut' }, 0.2);
        tl.to(uFade, { value: 0, duration: 0.8, ease: 'power2.in' }, '+=1.3');
        form.timeline = tl;

        return form;
    }

    removeForm(form) {
        const i = this.forms.indexOf(form);
        if (i === -1) return;
        this.forms.splice(i, 1);

        if (form.timeline) form.timeline.kill();
        form.dotMesh.setParent(null);
        form.mesh.setParent(null);
        if (form.dotGeometry.remove) form.dotGeometry.remove();
        if (form.dotProgram.remove) form.dotProgram.remove();
        if (form.geometry.remove) form.geometry.remove();
        if (form.program.remove) form.program.remove();
    }

    setAlpha(value, duration = 0.6) {
        gsap.to(this.uAlpha, { value, duration, ease: 'power2.out' });
    }

    // World offset 0 (About) .. 1 (Work). Pan the camera right by one viewport
    // width per room so the forms slide one screen to the left as you advance.
    panTo(world) {
        this.camera.position.x = world * (2 * this.viewSize * this.aspect);
    }

    // Impossible figures' rotation is owned by their lock timeline; platonic
    // solids (free) spin continuously here.
    update(time) {
        const dt = this._last === undefined ? 0 : time - this._last;
        this._last = time;
        for (const form of this.forms) {
            if (!form.free) continue;
            form.mesh.rotation.x += form.speedX * dt;
            form.mesh.rotation.y += form.speedY * dt;
        }
    }

    resize(width, height) {
        this.aspect = width / height;
        this._applyOrtho();
    }

    dispose() {
        [...this.forms].forEach((form) => this.removeForm(form));
        this.forms = [];
    }
}
