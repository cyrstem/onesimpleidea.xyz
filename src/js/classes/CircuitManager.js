import { Geometry, Program, Mesh, Transform } from 'ogl';
import gsap from 'gsap';
import vertex from '../shader/circuit.vert';
import fragment from '../shader/circuit.frag';

const rand = (min = 0, max = 1) => min + Math.random() * (max - min);
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// Builds and animates "circuit board" traces: thin black Manhattan (right-angle)
// lines capped with small square nodes, rendered as a single triangle program.
// Positions are normalized [0,1] (y up); thickness / node size are pixel values
// applied in the vertex shader, so nothing needs rebuilding on resize.
export default class CircuitManager {
    constructor(gl, { resolution } = {}) {
        this.gl = gl;
        this.scene = new Transform();

        // Shared uniform objects (passed by reference into every trace program).
        this.uResolution = { value: resolution || [1, 1] };
        this.uTime = { value: 0 };
        this.uColor = { value: [0, 0, 0] };
        this.uAlpha = { value: 1 };

        this.thickness = 2;       // line width in CSS px
        this.nodeSize = 14;       // terminal node square size in CSS px
        this.jointSize = 8;       // intermediate joint square size in CSS px
        this.maxTraces = 40;

        this.traces = [];

        // Idle auto-spawn cadence (seconds).
        this._spawnEvery = 2.2;
        this._spawnTimer = 0;

        this.generateInitial();
    }

    generateInitial(count = 14) {
        for (let i = 0; i < count; i++) {
            this.createTrace(this.antennaPath(), {
                duration: rand(0.9, 1.8),
                delay: rand(0, 1.2)
            });
        }
    }

    // Vertical "antenna" traces concentrated on the right side (matches the
    // reference image): rising from near the baseline with optional jogs.
    antennaPath() {
        const points = [];
        let x = rand(0.5, 0.97);
        let y = rand(0, 0.12);
        points.push({ x, y });

        if (Math.random() < 0.5) {
            x = clamp(x + rand(-0.12, 0.12), 0.3, 0.99);
            points.push({ x, y });
        }

        const height = rand(0.25, 0.85);
        const steps = 1 + Math.floor(Math.random() * 2);
        for (let i = 0; i < steps; i++) {
            y = clamp(y + height / steps, 0, 0.96);
            points.push({ x, y });
            if (i < steps - 1 && Math.random() < 0.5) {
                x = clamp(x + rand(-0.12, 0.12), 0.3, 0.99);
                points.push({ x, y });
            }
        }
        return points;
    }

    // Random Manhattan walk starting from an arbitrary point (used on click).
    pathFrom(px, py) {
        const points = [{ x: px, y: py }];
        let x = px;
        let y = py;
        let horizontal = Math.random() < 0.5;
        const segs = 3 + Math.floor(Math.random() * 3);

        for (let i = 0; i < segs; i++) {
            const len = rand(0.05, 0.22);
            const dir = Math.random() < 0.5 ? -1 : 1;
            if (horizontal) {
                x = clamp(x + dir * len, 0.02, 0.98);
            } else {
                y = clamp(y + dir * len, 0.02, 0.98);
            }
            points.push({ x, y });
            horizontal = !horizontal;
        }
        return points;
    }

    spawnFrom(px, py) {
        this.createTrace(this.pathFrom(px, py), {
            duration: rand(0.6, 1.1),
            delay: 0
        });
    }

    buildGeometryData(points) {
        // Cumulative normalized distance along the path (drives the reveal).
        const cum = [0];
        let total = 0;
        for (let i = 1; i < points.length; i++) {
            total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
            cum.push(total);
        }
        const dist = cum.map((c) => (total > 0 ? c / total : 0));

        const aBase = [];
        const aOffset = [];
        const aDist = [];
        const aNode = [];
        const index = [];

        const pushQuad = (cx, cy, offsets, d, node) => {
            const base = aDist.length; // current vertex count
            for (let k = 0; k < 4; k++) {
                aBase.push(cx, cy);
                aOffset.push(offsets[k][0], offsets[k][1]);
                aDist.push(d);
                aNode.push(node);
            }
            index.push(base, base + 1, base + 2, base + 2, base + 1, base + 3);
        };

        const h = this.thickness * 0.5;

        // Line segments (axis-aligned -> perpendicular is a pure axis).
        for (let i = 0; i < points.length - 1; i++) {
            const p1 = points[i];
            const p2 = points[i + 1];
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const nx = Math.abs(dx) >= Math.abs(dy) ? 0 : h;
            const ny = Math.abs(dx) >= Math.abs(dy) ? h : 0;

            const base = aDist.length;
            // v0,v1 at p1 ; v2,v3 at p2
            aBase.push(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p2.x, p2.y);
            aOffset.push(nx, ny, -nx, -ny, nx, ny, -nx, -ny);
            aDist.push(dist[i], dist[i], dist[i + 1], dist[i + 1]);
            aNode.push(0, 0, 0, 0);
            index.push(base, base + 1, base + 2, base + 2, base + 1, base + 3);
        }

        // Square nodes: a big one at the terminal point, smaller at interior joints.
        for (let i = 1; i < points.length; i++) {
            const isEnd = i === points.length - 1;
            const s = (isEnd ? this.nodeSize : this.jointSize) * 0.5;
            const offsets = [
                [s, s],
                [-s, s],
                [s, -s],
                [-s, -s]
            ];
            pushQuad(points[i].x, points[i].y, offsets, dist[i], 1);
        }

        return {
            aBase: new Float32Array(aBase),
            aOffset: new Float32Array(aOffset),
            aDist: new Float32Array(aDist),
            aNode: new Float32Array(aNode),
            index: new Uint16Array(index)
        };
    }

    createTrace(points, { duration = 1, delay = 0 } = {}) {
        if (points.length < 2) return;

        const data = this.buildGeometryData(points);
        const geometry = new Geometry(this.gl, {
            aBase: { size: 2, data: data.aBase },
            aOffset: { size: 2, data: data.aOffset },
            aDist: { size: 1, data: data.aDist },
            aNode: { size: 1, data: data.aNode },
            index: { data: data.index }
        });

        const program = new Program(this.gl, {
            vertex,
            fragment,
            uniforms: {
                uResolution: this.uResolution,
                uTime: this.uTime,
                uColor: this.uColor,
                uAlpha: this.uAlpha,
                uProgress: { value: 0 }
            },
            transparent: true,
            depthTest: false,
            depthWrite: false
        });

        const mesh = new Mesh(this.gl, { geometry, program });
        mesh.frustumCulled = false;
        mesh.setParent(this.scene);

        const trace = { geometry, program, mesh };
        this.traces.push(trace);

        gsap.to(program.uniforms.uProgress, {
            value: 1,
            duration,
            delay,
            ease: 'power2.out'
        });

        this.enforceLimit();
        return trace;
    }

    enforceLimit() {
        while (this.traces.length > this.maxTraces) {
            this.removeTrace(this.traces[0]);
        }
    }

    removeTrace(trace) {
        const i = this.traces.indexOf(trace);
        if (i === -1) return;
        this.traces.splice(i, 1);

        gsap.killTweensOf(trace.program.uniforms.uProgress);
        trace.mesh.setParent(null);
        if (trace.geometry.remove) trace.geometry.remove();
        if (trace.program.remove) trace.program.remove();
    }

    setAlpha(value, duration = 0.6) {
        gsap.to(this.uAlpha, { value, duration, ease: 'power2.out' });
    }

    update(time) {
        this.uTime.value = time;

        // Keep things alive while idle by occasionally adding a right-side trace.
        const dt = this._lastTime === undefined ? 0 : time - this._lastTime;
        this._lastTime = time;
        this._spawnTimer += dt;
        if (this._spawnTimer >= this._spawnEvery) {
            this._spawnTimer = 0;
            this.createTrace(this.antennaPath(), { duration: rand(0.8, 1.5), delay: 0 });
        }
    }

    resize(width, height) {
        this.uResolution.value[0] = width;
        this.uResolution.value[1] = height;
    }

    dispose() {
        [...this.traces].forEach((trace) => this.removeTrace(trace));
        this.traces = [];
    }
}
