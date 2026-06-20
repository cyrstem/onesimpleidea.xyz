import { Geometry, Program, Mesh, Transform, Camera, Vec3 } from 'ogl';
import gsap from 'gsap';
import vertex from '../shader/solid.vert';
import fragment from '../shader/solid.frag';
import pointVertex from '../shader/point.vert';

const rand = (min = 0, max = 1) => min + Math.random() * (max - min);
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];

const FACES = [
    { axis: 0, sign: 1 }, { axis: 0, sign: -1 },
    { axis: 1, sign: 1 }, { axis: 1, sign: -1 },
    { axis: 2, sign: 1 }, { axis: 2, sign: -1 }
];

const CUBE = {
    verts: [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]],
    scale: 0.55
};
const TETRA = {
    verts: [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]],
    edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]],
    scale: 0.7
};
const OCTA = {
    verts: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
    edges: [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]],
    scale: 0.8
};

// Spawns rotating 3D "circuit" solids on the right half of the viewport: a
// wireframe shell populated with internal traces and (for the cube) face grids.
// Edges grow in via per-edge reveal + uProgress, then the form holds, rotates,
// and fades out.
export default class Forms3DManager {
    constructor(gl, { aspect = 1 } = {}) {
        this.gl = gl;
        this.scene = new Transform();
        this.camera = new Camera(gl, { fov: 45, near: 0.1, far: 100, aspect });
        this.camera.position.z = 4;

        this.uColor = { value: [0, 0, 0] };
        this.uAlpha = { value: 1 };
        this.uSize = { value: 8 * (gl.renderer?.dpr || 1) };

        this.forms = [];
        // Viewport position (normalized, y up) of the most recently spawned form,
        // used as a collision target for nav connectors.
        this.lastCenter = [0.78, 0.5];
        this._tmpVec = new Vec3();
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

    // Grid lines across a cube face, each with a scattered reveal threshold.
    addFaceGrid(face, divisions, segs) {
        const free = [0, 1, 2].filter((a) => a !== face.axis);
        const [u, v] = free;
        const pt = (uv, vv) => {
            const p = [0, 0, 0];
            p[face.axis] = face.sign;
            p[u] = uv;
            p[v] = vv;
            return p;
        };
        for (let i = 1; i < divisions; i++) {
            const t = -1 + (2 * i) / divisions;
            segs.push({ a: pt(-1, t), b: pt(1, t), r: rand(0.15, 1) });
            segs.push({ a: pt(t, -1), b: pt(t, 1), r: rand(0.15, 1) });
        }
    }

    cubeCircuit() {
        const segs = [];
        CUBE.edges.forEach((e) => segs.push({ a: CUBE.verts[e[0]], b: CUBE.verts[e[1]], r: rand(0, 0.12) }));
        FACES.forEach((f) => this.addFaceGrid(f, 3, segs));
        // A few internal wires from the centre to random corners.
        for (let i = 0; i < 4; i++) {
            const c = CUBE.verts[Math.floor(Math.random() * CUBE.verts.length)];
            segs.push({ a: [0, 0, 0], b: c, r: rand(0.3, 1) });
        }
        return { segs, scale: CUBE.scale, dots: CUBE.verts };
    }

    shapeCircuit(shape) {
        const segs = [];
        shape.edges.forEach((e) => segs.push({ a: shape.verts[e[0]], b: shape.verts[e[1]], r: rand(0, 0.12) }));
        // Internal lattice: vertices and edge midpoints wired to the centre.
        shape.verts.forEach((v) => segs.push({ a: v, b: [0, 0, 0], r: rand(0.2, 1) }));
        shape.edges.forEach((e) => segs.push({ a: mid(shape.verts[e[0]], shape.verts[e[1]]), b: [0, 0, 0], r: rand(0.3, 1) }));
        return { segs, scale: shape.scale, dots: shape.verts };
    }

    // Square pad geometry (gl.POINTS) at each shape vertex; dots appear with the shell.
    buildDotGeometry(dots, scale) {
        const position = new Float32Array(dots.length * 3);
        const aReveal = new Float32Array(dots.length);
        dots.forEach((d, i) => {
            position[i * 3] = d[0] * scale;
            position[i * 3 + 1] = d[1] * scale;
            position[i * 3 + 2] = d[2] * scale;
            aReveal[i] = rand(0, 0.14);
        });
        return new Geometry(this.gl, {
            position: { size: 3, data: position },
            aReveal: { size: 1, data: aReveal }
        });
    }

    buildGeometry({ segs, scale }) {
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
            aReveal[i * 2] = s.r;
            aReveal[i * 2 + 1] = s.r;
        });
        return new Geometry(this.gl, {
            position: { size: 3, data: position },
            aReveal: { size: 1, data: aReveal }
        });
    }

    spawnForm(type) {
        const builders = {
            cube: () => this.cubeCircuit(),
            tetra: () => this.shapeCircuit(TETRA),
            octa: () => this.shapeCircuit(OCTA)
        };
        const keys = Object.keys(builders);
        const key = type && builders[type] ? type : keys[Math.floor(Math.random() * keys.length)];

        const built = builders[key]();
        const geometry = this.buildGeometry(built);
        const uFade = { value: 1 };
        const uProgress = { value: 0 };

        const program = new Program(this.gl, {
            vertex,
            fragment,
            uniforms: {
                uColor: this.uColor,
                uAlpha: this.uAlpha,
                uFade,
                uProgress
            },
            transparent: true,
            depthTest: true,
            depthWrite: false
        });

        const mesh = new Mesh(this.gl, { geometry, program, mode: this.gl.LINES });
        mesh.frustumCulled = false;
        mesh.position.set(rand(0.5, 1.5), rand(-1.1, 1.1), rand(-0.5, 0.5));
        mesh.rotation.set(rand(0, Math.PI), rand(0, Math.PI), 0);
        mesh.scale.set(0.001);
        mesh.setParent(this.scene);

        this.lastCenter = this.projectToViewport(mesh.position);

        // Square pads at each vertex (inherit the shell's transform as a child).
        const dotGeometry = this.buildDotGeometry(built.dots, built.scale);
        const dotProgram = new Program(this.gl, {
            vertex: pointVertex,
            fragment,
            uniforms: {
                uColor: this.uColor,
                uAlpha: this.uAlpha,
                uSize: this.uSize,
                uFade,
                uProgress
            },
            transparent: true,
            depthTest: true,
            depthWrite: false
        });
        const dotMesh = new Mesh(this.gl, { geometry: dotGeometry, program: dotProgram, mode: this.gl.POINTS });
        dotMesh.frustumCulled = false;
        dotMesh.setParent(mesh);

        const target = rand(0.6, 1.0);
        const form = {
            mesh,
            geometry,
            program,
            dotMesh,
            dotGeometry,
            dotProgram,
            uFade,
            uProgress,
            speedX: rand(-0.5, 0.5),
            speedY: rand(0.3, 0.9)
        };
        this.forms.push(form);

        const tl = gsap.timeline({ onComplete: () => this.removeForm(form) });
        tl.to(mesh.scale, { x: target, y: target, z: target, duration: 0.8, ease: 'back.out(1.5)' }, 0);
        tl.to(uProgress, { value: 1, duration: 1.5, ease: 'power1.inOut' }, 0);
        tl.to(uFade, { value: 0, duration: 0.8, ease: 'power2.in' }, '+=1.6');
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

    // World offset 0 (About) .. 1 (Work). Pan the camera right by one frustum
    // width per room so the forms slide one screen to the left as you advance.
    panTo(world) {
        const dist = this.camera.position.z;
        const vH = 2 * dist * Math.tan((this.camera.fov * Math.PI) / 180 / 2);
        const vW = vH * this.camera.aspect;
        this.camera.position.x = world * vW;
    }

    update(time) {
        const dt = this._last === undefined ? 0 : time - this._last;
        this._last = time;

        this.forms.forEach((form) => {
            form.mesh.rotation.x += form.speedX * dt;
            form.mesh.rotation.y += form.speedY * dt;
        });
    }

    resize(width, height) {
        this.camera.perspective({ aspect: width / height });
    }

    dispose() {
        [...this.forms].forEach((form) => this.removeForm(form));
        this.forms = [];
    }
}
