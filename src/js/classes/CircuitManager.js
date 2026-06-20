import { Geometry, Program, Mesh, Transform } from 'ogl';
import gsap from 'gsap';
import vertex from '../shader/circuit.vert';
import fragment from '../shader/circuit.frag';
import { translateForm } from '../circuit/genome';
import CircuitGA from '../circuit/CircuitGA';

const rand = (min = 0, max = 1) => min + Math.random() * (max - min);
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// Builds and animates "circuit board" forms in the right half of the viewport.
// A form is a set of line segments + square nodes, each carrying a `reveal`
// threshold in [0,1]. As the shared uProgress sweeps 0->1, sections pop in from
// different areas (scattered reveal) so the board appears to populate itself.
// Positions are normalized [0,1] (y up); thickness / node size are pixel values
// applied in the vertex shader, so nothing rebuilds on resize.
export default class CircuitManager {
    constructor(gl, { resolution } = {}) {
        this.gl = gl;
        this.scene = new Transform();

        // Shared uniform objects (passed by reference into every trace program).
        this.uResolution = { value: resolution || [1, 1] };
        this.uTime = { value: 0 };
        this.uColor = { value: [0, 0, 0] };
        this.uAlpha = { value: 1 };
        // Shared clip-space offset; animated to slide the circuit off-screen.
        this.uShift = { value: [0, 0] };

        this.thickness = 2;       // line width in CSS px
        this.nodeSize = 13;       // terminal / pad square size in CSS px
        this.jointSize = 7;       // small joint square size in CSS px

        // Forms live in the right half of the viewport.
        this.xRange = [0.54, 0.96];
        this.yRange = [0.12, 0.88];

        this.traces = [];
        // Centre of the most recently spawned form (normalized, y up). Used as the
        // collision target for nav connectors. Defaults to the right-half middle.
        this.lastCenter = [0.75, 0.5];

        // Live, in-browser genetic algorithm. Its population evolves as the page
        // runs and is warm-started from public/circuits.json by loadLibrary.
        // gaReady gates whether spawnForm offers evolved forms at all, so the
        // procedural mix is untouched until (and unless) the library loads.
        this.ga = new CircuitGA();
        this.gaReady = false;
        // Fitness target the live GA evolves toward (normalized, y up). Updated by
        // the app to follow the last place the user interacted.
        this.gaTarget = [0.75, 0.5];
    }

    // Fetch the evolved circuit library and warm-start the live GA population from
    // the stored champion genomes. Missing/invalid library is non-fatal: the GA
    // simply keeps its random population and gaReady stays false.
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
            // Keep the procedural forms when the library can't be loaded.
        }
    }

    // Point the live GA's fitness target at (x,y) (normalized, y up).
    setEvolveTarget(target) {
        if (target && target.length === 2) this.gaTarget = target;
    }

    get activeCount() {
        return this.traces.length;
    }

    // ---- Form generators. Each returns { segments, nodes, center }. ----
    // segment: { x1, y1, x2, y2, r0, r1 }  node: { x, y, size, r }

    // A square boundary recursively subdivided into sections, populated with
    // pads and short stub traces. Reveal is scattered so areas grow independently.
    boardForm(cx, cy, half) {
        const segments = [];
        const nodes = [];
        const seg = (x1, y1, x2, y2, r) => segments.push({ x1, y1, x2, y2, r0: r, r1: r });
        const addRect = (ax, ay, bx, by, r) => {
            seg(ax, ay, bx, ay, r);
            seg(bx, ay, bx, by, r);
            seg(bx, by, ax, by, r);
            seg(ax, by, ax, ay, r);
        };

        const x0 = cx - half;
        const y0 = cy - half;
        const x1 = cx + half;
        const y1 = cy + half;

        addRect(x0, y0, x1, y1, rand(0, 0.12));
        nodes.push({ x: x0, y: y1, size: this.nodeSize, r: 0.05 });
        nodes.push({ x: x1, y: y1, size: this.nodeSize, r: 0.05 });

        const maxDepth = 4;
        const subdivide = (ax, ay, bx, by, depth) => {
            const w = bx - ax;
            const h = by - ay;
            const small = Math.min(w, h);

            // Leaf: drop a pad and an optional stub trace toward a wall.
            if (depth <= 0 || small < 0.028 || Math.random() < 0.22) {
                if (Math.random() < 0.65) {
                    const px = ax + w * rand(0.3, 0.7);
                    const py = ay + h * rand(0.3, 0.7);
                    const r = clamp(0.2 + Math.random() * 0.75, 0, 1);
                    nodes.push({ x: px, y: py, size: this.jointSize, r });
                    if (Math.random() < 0.7) {
                        const horiz = Math.random() < 0.5;
                        if (horiz) seg(px, py, Math.random() < 0.5 ? ax : bx, py, r);
                        else seg(px, py, px, Math.random() < 0.5 ? ay : by, r);
                    }
                }
                return;
            }

            const r = clamp(0.12 + (1 - depth / maxDepth) * 0.4 + Math.random() * 0.35, 0, 1);
            if (Math.random() < 0.5) {
                const sx = ax + w * rand(0.32, 0.68);
                seg(sx, ay, sx, by, r);
                subdivide(ax, ay, sx, by, depth - 1);
                subdivide(sx, ay, bx, by, depth - 1);
            } else {
                const sy = ay + h * rand(0.32, 0.68);
                seg(ax, sy, bx, sy, r);
                subdivide(ax, ay, bx, sy, depth - 1);
                subdivide(ax, sy, bx, by, depth - 1);
            }
        };
        subdivide(x0, y0, x1, y1, maxDepth);

        return { segments, nodes, center: [cx, cy] };
    }

    // Outline shapes (triangle / branching walk) drawn as a single
    // path that reveals progressively along its length.
    outlineForm(points, center) {
        const cum = [0];
        let total = 0;
        for (let i = 1; i < points.length; i++) {
            total += Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
            cum.push(total);
        }
        const reveal = cum.map((c) => (total > 0 ? c / total : 0));

        const segments = [];
        for (let i = 0; i < points.length - 1; i++) {
            segments.push({
                x1: points[i].x, y1: points[i].y,
                x2: points[i + 1].x, y2: points[i + 1].y,
                r0: reveal[i], r1: reveal[i + 1]
            });
        }
        const nodes = [];
        for (let i = 1; i < points.length; i++) {
            const isEnd = i === points.length - 1;
            nodes.push({ x: points[i].x, y: points[i].y, size: isEnd ? this.nodeSize : this.jointSize, r: reveal[i] });
        }
        return { segments, nodes, center };
    }

    trianglePath(cx, cy, r) {
        const pts = [];
        for (let i = 0; i < 3; i++) {
            const a = -Math.PI / 2 + (i * Math.PI * 2) / 3;
            pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r });
        }
        pts.push({ ...pts[0] });
        return pts;
    }

    pathFrom(px, py) {
        const points = [{ x: px, y: py }];
        let x = px;
        let y = py;
        let horizontal = Math.random() < 0.5;
        const segs = 3 + Math.floor(Math.random() * 3);
        for (let i = 0; i < segs; i++) {
            const len = rand(0.05, 0.2);
            const dir = Math.random() < 0.5 ? -1 : 1;
            if (horizontal) x = clamp(x + dir * len, this.xRange[0], this.xRange[1]);
            else y = clamp(y + dir * len, this.yRange[0], this.yRange[1]);
            points.push({ x, y });
            horizontal = !horizontal;
        }
        return points;
    }

    // Pull the next form from the live GA (which may evolve a generation) and
    // translate it so its centroid lands on (cx,cy).
    evolvedForm(cx, cy) {
        const form = this.ga.nextForm(this.gaTarget);
        return translateForm(form, cx, cy);
    }

    // ---- Public spawn API ----

    spawnForm({ type, x, y, radius } = {}) {
        const pick = () => {
            const r = Math.random();
            // Once the live GA is warm-started, favour evolved forms while keeping
            // the procedural shapes for variety.
            if (this.gaReady) {
                if (r < 0.5) return 'evolved';
                if (r < 0.74) return 'board';
                if (r < 0.9) return 'triangle';
                return 'walk';
            }
            // Original procedural mix when the GA library isn't available.
            if (r < 0.6) return 'board';
            if (r < 0.85) return 'triangle';
            return 'walk';
        };
        const kind = type || pick();
        const r = radius ?? rand(0.06, 0.13);
        const cx = clamp(x ?? rand(this.xRange[0] + r, this.xRange[1] - r), this.xRange[0] + r, this.xRange[1] - r);
        const cy = clamp(y ?? rand(this.yRange[0] + r, this.yRange[1] - r), this.yRange[0] + r, this.yRange[1] - r);

        let form;
        switch (kind) {
            case 'evolved':
                form = this.evolvedForm(cx, cy);
                break;
            case 'board':
                form = this.boardForm(cx, cy, r);
                break;
            case 'triangle':
                form = this.outlineForm(this.trianglePath(cx, cy, r), [cx, cy]);
                break;
            default:
                form = this.outlineForm(this.pathFrom(cx, cy), [cx, cy]);
        }

        this.lastCenter = [form.center[0], form.center[1]];
        return this.createTrace(form);
    }

    // Orthogonal "aleatory walk" from (x0,y0) to (x1,y1): alternating H/V steps
    // that mostly head toward the target but occasionally wander, always finishing
    // with axis-aligned moves so the path reliably collides with the target.
    walkTo(x0, y0, x1, y1) {
        const points = [{ x: x0, y: y0 }];
        let x = x0;
        let y = y0;
        let horizontal = Math.abs(x1 - x0) >= Math.abs(y1 - y0);
        const eps = 0.018;
        const maxSteps = 26;

        for (let i = 0; i < maxSteps; i++) {
            if (Math.abs(x - x1) <= eps && Math.abs(y - y1) <= eps) break;

            if (horizontal) {
                const remaining = x1 - x;
                const toward = remaining >= 0 ? 1 : -1;
                const dir = Math.random() < 0.78 ? toward : -toward;
                let len = rand(0.03, 0.14);
                if (dir === toward) len = Math.min(len, Math.abs(remaining));
                x = clamp(x + dir * len, 0.04, 0.98);
            } else {
                const remaining = y1 - y;
                const toward = remaining >= 0 ? 1 : -1;
                const dir = Math.random() < 0.78 ? toward : -toward;
                let len = rand(0.03, 0.14);
                if (dir === toward) len = Math.min(len, Math.abs(remaining));
                y = clamp(y + dir * len, 0.05, 0.95);
            }
            points.push({ x, y });
            horizontal = !horizontal;
        }

        if (Math.abs(x - x1) > 1e-4) { x = x1; points.push({ x, y }); }
        if (Math.abs(y - y1) > 1e-4) { y = y1; points.push({ x, y }); }
        return points;
    }

    // A line+dot that grows from (fromX,fromY) and walks to (toX,toY), colliding
    // with whatever shape lives there. onArrive fires once the tip lands.
    spawnConnector(fromX, fromY, toX, toY, onArrive) {
        const points = this.walkTo(fromX, fromY, toX, toY);
        if (points.length < 2) return null;

        const form = this.outlineForm(points, [toX, toY]);
        // Emphasise the colliding tip so the impact reads clearly.
        if (form.nodes.length) {
            form.nodes[form.nodes.length - 1].size = this.nodeSize * 1.5;
        }
        return this.createConnectorTrace(form, onArrive);
    }

    buildGeometryData({ segments, nodes }) {
        const aBase = [];
        const aOffset = [];
        const aDist = [];
        const aNode = [];
        const index = [];

        const h = this.thickness * 0.5;

        for (const s of segments) {
            let dx = s.x2 - s.x1;
            let dy = s.y2 - s.y1;
            const len = Math.hypot(dx, dy) || 1;
            dx /= len;
            dy /= len;
            const nx = -dy * h;
            const ny = dx * h;

            const base = aDist.length;
            aBase.push(s.x1, s.y1, s.x1, s.y1, s.x2, s.y2, s.x2, s.y2);
            aOffset.push(nx, ny, -nx, -ny, nx, ny, -nx, -ny);
            aDist.push(s.r0, s.r0, s.r1, s.r1);
            aNode.push(0, 0, 0, 0);
            index.push(base, base + 1, base + 2, base + 2, base + 1, base + 3);
        }

        for (const n of nodes) {
            const s = n.size * 0.5;
            const offsets = [[s, s], [-s, s], [s, -s], [-s, -s]];
            const base = aDist.length;
            for (let k = 0; k < 4; k++) {
                aBase.push(n.x, n.y);
                aOffset.push(offsets[k][0], offsets[k][1]);
                aDist.push(n.r);
                aNode.push(1);
            }
            index.push(base, base + 1, base + 2, base + 2, base + 1, base + 3);
        }

        return {
            aBase: new Float32Array(aBase),
            aOffset: new Float32Array(aOffset),
            aDist: new Float32Array(aDist),
            aNode: new Float32Array(aNode),
            index: new Uint16Array(index)
        };
    }

    // Builds the GPU objects for a form (no animation attached). Centre drives the
    // uScale pulse origin. `overrides` can swap the shared shift/alpha uniforms for
    // per-trace ones (e.g. a connector that stays fixed while the field pans).
    buildTrace(form, center, overrides = {}) {
        const data = this.buildGeometryData(form);
        const geometry = new Geometry(this.gl, {
            aBase: { size: 2, data: data.aBase },
            aOffset: { size: 2, data: data.aOffset },
            aDist: { size: 1, data: data.aDist },
            aNode: { size: 1, data: data.aNode },
            index: { data: data.index }
        });

        const uProgress = { value: 0 };
        const uFade = { value: 1 };
        const uScale = { value: 1 };
        const uCenter = { value: [center[0], center[1]] };

        const program = new Program(this.gl, {
            vertex,
            fragment,
            uniforms: {
                uResolution: this.uResolution,
                uTime: this.uTime,
                uColor: this.uColor,
                uAlpha: overrides.uAlpha || this.uAlpha,
                uShift: overrides.uShift || this.uShift,
                uProgress,
                uFade,
                uScale,
                uCenter
            },
            transparent: true,
            depthTest: false,
            depthWrite: false
        });

        const mesh = new Mesh(this.gl, { geometry, program });
        mesh.frustumCulled = false;
        mesh.setParent(this.scene);

        const trace = { geometry, program, mesh, uProgress, uFade, uScale };
        this.traces.push(trace);
        return trace;
    }

    createTrace(form) {
        if (!form || form.segments.length === 0) return null;

        const trace = this.buildTrace(form, form.center);

        // Lifecycle: populate (uProgress) -> hold -> fade -> remove.
        const tl = gsap.timeline({ onComplete: () => this.removeTrace(trace) });
        tl.to(trace.uProgress, { value: 1, duration: rand(1.1, 1.8), ease: 'power1.inOut' });
        tl.to(trace.uFade, { value: 0, duration: 0.7, ease: 'power2.in' }, '+=0.5');
        trace.timeline = tl;

        return trace;
    }

    // Connector lifecycle: draw the tip along the walk (grow from the menu) ->
    // recoil on impact (uScale pulse centred on the colliding tip) -> fade.
    createConnectorTrace(form, onArrive) {
        if (!form || form.segments.length === 0) return null;

        const trace = this.buildTrace(form, form.center);

        let fired = false;
        const arrive = () => {
            if (fired) return;
            fired = true;
            if (typeof onArrive === 'function') onArrive();
        };

        const tl = gsap.timeline({ onComplete: () => this.removeTrace(trace) });
        tl.to(trace.uProgress, { value: 1, duration: rand(0.7, 1.0), ease: 'power2.out', onComplete: arrive });
        tl.to(trace.uFade, { value: 0, duration: 0.6, ease: 'power2.in' }, '+=0.7');
        trace.timeline = tl;

        return trace;
    }

    // Connector that grows toward the portfolio image plane and collides with it.
    // Unlike ambient traces it stays fixed in screen space (uShift [0,0]) at full
    // opacity, so it draws across the room transition rather than panning away,
    // and vanishes the moment its tip reaches the image.
    spawnPlaneConnector(fromX, fromY, toX, toY, onArrive) {
        const points = this.walkTo(fromX, fromY, toX, toY);
        if (points.length < 2) return null;

        const form = this.outlineForm(points, [toX, toY]);
        if (form.nodes.length) {
            form.nodes[form.nodes.length - 1].size = this.nodeSize * 1.6;
        }
        return this.createPlaneConnector(form, onArrive);
    }

    createPlaneConnector(form, onArrive) {
        if (!form || form.segments.length === 0) return null;

        const trace = this.buildTrace(form, form.center, {
            uShift: { value: [0, 0] },
            uAlpha: { value: 1 }
        });

        let fired = false;
        const arrive = () => {
            if (fired) return;
            fired = true;
            if (typeof onArrive === 'function') onArrive();
        };

        const tl = gsap.timeline({ onComplete: () => this.removeTrace(trace) });
        // Grow across the room transition so the tip lands as the image settles.
        tl.to(trace.uProgress, { value: 1, duration: 1.15, ease: 'power2.inOut', onComplete: arrive });
        // Collide and disappear.
        tl.to(trace.uFade, { value: 0, duration: 0.3, ease: 'power2.in' });
        trace.timeline = tl;

        return trace;
    }

    removeTrace(trace) {
        const i = this.traces.indexOf(trace);
        if (i === -1) return;
        this.traces.splice(i, 1);

        if (trace.timeline) trace.timeline.kill();
        trace.mesh.setParent(null);
        if (trace.geometry.remove) trace.geometry.remove();
        if (trace.program.remove) trace.program.remove();
    }

    setAlpha(value, duration = 0.6) {
        gsap.to(this.uAlpha, { value, duration, ease: 'power2.out' });
    }

    // Slide the whole circuit in clip space (x,y). Used to push it off the left
    // edge during the Work-view transition.
    setShift(x, y = 0, duration = 0.9, ease = 'power3.inOut') {
        gsap.to(this.uShift.value, { 0: x, 1: y, duration, ease });
    }

    // World offset 0 (About) .. 1 (Work). Clip space is 2 units wide, so one room
    // = a shift of -2, pushing the circuit exactly one screen to the left.
    panTo(world) {
        this.uShift.value[0] = -world * 2.0;
    }

    update(time) {
        this.uTime.value = time;
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
