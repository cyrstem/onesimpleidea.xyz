// Impossible-figure templates for the 3D layer (Penrose tribar family).
//
// How the illusion works in a pure-wireframe, no-occlusion renderer: an
// impossible figure like the Penrose triangle is a 2D viewpoint trick. We build
// each figure as honest 3D beams (so it has real depth and "comes apart" while
// rotating), then bake the magic isometric viewpoint into the geometry:
//
//   1. author beams as axis-aligned boxes in model space,
//   2. project every model point through a fixed isometric projection to get the
//      on-screen XY (this is the actual impossible drawing),
//   3. keep the body-diagonal (1,1,1) component as a small Z "depth" channel.
//
// Because each figure's beam path runs +X -> +Y -> +Z by equal lengths, its
// start (0,0,0) and end (L,L,L) differ by a vector parallel to (1,1,1): the
// projection collapses them onto the same XY point, so the gap closes and the
// figure reads as impossible. lockRot is therefore identity -- when the form
// faces the camera flat (orthographic), the screen shows exactly the baked
// drawing. Rotating away from lock exposes the depth offsets (the "trick").
//
// Variety comes from three distinct families (solid beams, a segmented cube
// chain, and a nested double tribar) crossed with random orientation (in-plane
// quarter-turns + mirror), handedness, proportions and depth.
//
// Each builder returns geometry already in normalized render space:
//   { segs:[{a,b,r}], faces:[{origin,u,v}], dots:[{p,r}], scale, lockRot }
// where a face maps a GA trace point (s,t) in [0,1]^2 to origin + s*u + t*v.

const COS30 = Math.cos(Math.PI / 6); // 0.8660254
const SIN30 = 0.5;

const rand = (min = 0, max = 1) => min + Math.random() * (max - min);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffle = (arr) => arr.map((v) => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map((x) => x[1]);

// Fixed isometric projection. Returns [screenX, screenY, depth] where depth is
// the (1,1,1) body-diagonal component (scaled down so the figure stays shallow).
function project(p, depthScale) {
    const [x, y, z] = p;
    return [
        (x - z) * COS30,
        y - (x + z) * SIN30,
        (x + y + z) * depthScale
    ];
}

// Axis-aligned box -> 8 corners + 12 edges + 6 faces (each face as ordered corner
// indices a,b,c,d with a->b spanning u and a->d spanning v).
function box(min, max) {
    const [x0, y0, z0] = min;
    const [x1, y1, z1] = max;
    const corners = [
        [x0, y0, z0], [x1, y0, z0], [x1, y1, z0], [x0, y1, z0],
        [x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]
    ];
    const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7]
    ];
    const faces = [
        [0, 1, 2, 3], [4, 5, 6, 7],
        [0, 1, 5, 4], [3, 2, 6, 7],
        [0, 3, 7, 4], [1, 2, 6, 5]
    ];
    return { corners, edges, faces };
}

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

// Uniformly scale a box about a model-space point (keeps it axis-aligned).
function scaleBoxAbout(b, f, c) {
    const xs = b.corners.map((p) => p[0]);
    const ys = b.corners.map((p) => p[1]);
    const zs = b.corners.map((p) => p[2]);
    const min = [Math.min(...xs), Math.min(...ys), Math.min(...zs)];
    const max = [Math.max(...xs), Math.max(...ys), Math.max(...zs)];
    const sc = (v, ci) => c[ci] + (v - c[ci]) * f;
    return box(
        [sc(min[0], 0), sc(min[1], 1), sc(min[2], 2)],
        [sc(max[0], 0), sc(max[1], 1), sc(max[2], 2)]
    );
}

function modelCentroid(boxes) {
    let n = 0;
    const s = [0, 0, 0];
    for (const b of boxes) for (const c of b.corners) { s[0] += c[0]; s[1] += c[1]; s[2] += c[2]; n++; }
    return n ? [s[0] / n, s[1] / n, s[2] / n] : [0, 0, 0];
}

// Turn model-space boxes into normalized render geometry.
// - detailFaces: camera-facing faces per box offered to the GA,
// - maxFaces / maxDots: global caps (randomly sampled) to bound clutter & cost,
// - mirror: reflect the finished drawing in screen-X (a left-handed tribar),
// - rotate2D: in-plane quarter-turn baked into the drawing (orientation variety).
// mirror/rotate2D are 2D transforms of an already-valid figure, so the gap still
// closes at lock.
function buildFromBoxes(boxes, opts = {}) {
    const {
        depthScale = 0.32,
        detailFaces = 2,
        maxFaces = 7,
        maxDots = 30,
        mirror = false,
        rotate2D = 0
    } = opts;

    const mx = mirror ? -1 : 1;
    const cos = Math.cos(rotate2D);
    const sin = Math.sin(rotate2D);
    // Screen-space transform applied after projection: mirror then quarter-turn.
    const xform = (p) => {
        const x = p[0] * mx;
        const y = p[1];
        return [x * cos - y * sin, x * sin + y * cos, p[2]];
    };

    const projected = boxes.map((b) => ({
        corners: b.corners.map((c) => xform(project(c, depthScale))),
        model: b
    }));

    let minX = Infinity; let maxX = -Infinity;
    let minY = Infinity; let maxY = -Infinity;
    let sumD = 0; let nD = 0;
    for (const pb of projected) {
        for (const c of pb.corners) {
            minX = Math.min(minX, c[0]); maxX = Math.max(maxX, c[0]);
            minY = Math.min(minY, c[1]); maxY = Math.max(maxY, c[1]);
            sumD += c[2]; nD++;
        }
    }
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    const cd = nD ? sumD / nD : 0;
    const s = 1.8 / Math.max(maxX - minX, maxY - minY);
    const norm = (p) => [(p[0] - cx) * s, (p[1] - cy) * s, (p[2] - cd) * s];

    const segs = [];
    let dots = [];
    let faceCandidates = [];

    for (const pb of projected) {
        const c = pb.corners.map(norm);

        pb.model.edges.forEach((e) => {
            segs.push({ a: c[e[0]], b: c[e[1]], r: rand(0, 0.1) });
        });
        c.forEach((p) => dots.push({ p, r: rand(0, 0.12) }));

        const mc = pb.model.corners
            .reduce((acc, v) => [acc[0] + v[0], acc[1] + v[1], acc[2] + v[2]], [0, 0, 0])
            .map((v) => v / 8);

        const scored = pb.model.faces.map((q) => {
            const fc = q.map((i) => pb.model.corners[i])
                .reduce((acc, v) => [acc[0] + v[0], acc[1] + v[1], acc[2] + v[2]], [0, 0, 0])
                .map((v) => v / 4);
            return { q, score: dot3(sub(fc, mc), [1, 1, 1]) };
        }).filter((f) => f.score > 0).sort((a, b) => b.score - a.score);

        scored.slice(0, detailFaces).forEach(({ q }) => {
            faceCandidates.push({
                origin: c[q[0]],
                u: sub(c[q[1]], c[q[0]]),
                v: sub(c[q[3]], c[q[0]])
            });
        });
    }

    if (faceCandidates.length > maxFaces) faceCandidates = shuffle(faceCandidates).slice(0, maxFaces);
    if (dots.length > maxDots) dots = shuffle(dots).slice(0, maxDots);

    return { segs, faces: faceCandidates, dots, scale: 0.95, lockRot: { x: 0, y: 0, z: 0 } };
}

// ---- Beam-path constructors (all share the equal-arm +X/+Y/+Z closure) ----

// Three equal-length square beams running +X, +Y, +Z (the solid tribar).
function triBeamBoxes(L, t) {
    const h = t / 2;
    return [
        box([0, -h, -h], [L, h, h]),
        box([L - h, 0, -h], [L + h, L, h]),
        box([L - h, L - h, 0], [L + h, L + h, L])
    ];
}

// Each arm broken into a chain of cubes with gaps (Reutersvard's segmented look).
function cubeChainBoxes(n, cube, gap) {
    const step = cube + gap;
    const L = n * step - gap; // last cube ends exactly at the corner
    const h = cube / 2;
    const boxes = [];
    for (let i = 0; i < n; i++) {
        const a = i * step;
        // +X arm
        boxes.push(box([a, -h, -h], [a + cube, h, h]));
        // +Y arm (skip the shared corner cube so beams interlock, not double up)
        if (i > 0) boxes.push(box([L - h, a, -h], [L + h, a + cube, h]));
        // +Z arm
        if (i > 0) boxes.push(box([L - h, L - h, a], [L + h, L + h, a + cube]));
    }
    return boxes;
}

// ---- Public figure builders ----

export function penroseSolid({ L = rand(3.8, 4.4), t = rand(1.45, 1.8) } = {}) {
    return triBeamBoxes(L, t);
}

export function penroseCubes({ n = pick([3, 4, 5]), cube = rand(0.9, 1.25), gap = rand(0.25, 0.6) } = {}) {
    return cubeChainBoxes(n, cube, gap);
}

// Two concentric tribars (outer + a shrunken inner) sharing orientation.
export function penroseNested({ L = rand(3.8, 4.4), t = rand(1.0, 1.3), inner = rand(0.45, 0.62) } = {}) {
    const outer = triBeamBoxes(L, t);
    const c = modelCentroid(outer);
    const innerBoxes = outer.map((b) => scaleBoxAbout(b, inner, c));
    return [...outer, ...innerBoxes];
}

// Registry: each entry returns model boxes; build options (orientation, detail)
// are randomized per spawn so repeats of the same family still look fresh.
const FAMILIES = [
    { make: penroseSolid, detailFaces: 2, maxFaces: 7, maxDots: 26 },
    { make: penroseCubes, detailFaces: 1, maxFaces: 6, maxDots: 30 },
    { make: penroseNested, detailFaces: 1, maxFaces: 7, maxDots: 30 }
];

export function buildFigure() {
    const fam = pick(FAMILIES);
    const boxes = fam.make();
    return buildFromBoxes(boxes, {
        depthScale: rand(0.26, 0.38),
        detailFaces: fam.detailFaces,
        maxFaces: fam.maxFaces,
        maxDots: fam.maxDots,
        mirror: Math.random() < 0.5,
        rotate2D: pick([0, 1, 2, 3]) * (Math.PI / 2)
    });
}

// ---- Platonic solids (real 3D, free-rotating, also GA-detailed) ----

const CUBE = {
    verts: [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ],
    edges: [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]],
    faces: [[0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4], [3, 2, 6, 7], [0, 3, 7, 4], [1, 2, 6, 5]],
    tri: false
};
const TETRA = {
    verts: [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]],
    edges: [[0, 1], [0, 2], [0, 3], [1, 2], [1, 3], [2, 3]],
    faces: [[0, 1, 2], [0, 1, 3], [0, 2, 3], [1, 2, 3]],
    tri: true
};
const OCTA = {
    verts: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
    edges: [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5]],
    faces: [[0, 2, 4], [0, 2, 5], [0, 3, 4], [0, 3, 5], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5]],
    tri: true
};

// True-3D solid -> normalized render geometry with GA-detail faces. Unlike the
// impossible figures there is no isometric projection or depth-lift: the solid
// keeps its real geometry and rotates freely (free: true).
function buildSolid(solid, { maxFaces = 5, maxDots = 26 } = {}) {
    const { verts, edges, faces, tri } = solid;
    let maxR = 0;
    for (const v of verts) maxR = Math.max(maxR, Math.hypot(v[0], v[1], v[2]));
    const s = 1 / (maxR || 1);
    const V = verts.map((p) => [p[0] * s, p[1] * s, p[2] * s]);

    const segs = edges.map((e) => ({ a: V[e[0]], b: V[e[1]], r: rand(0, 0.1) }));
    let dots = V.map((p) => ({ p, r: rand(0, 0.12) }));

    let faceCandidates = faces.map((f) => {
        const o = V[f[0]];
        if (tri) {
            // Inscribe the GA board inside the triangular face (s,t kept under the
            // s+t<=1 hypotenuse so traces stay mostly on the face).
            const e1 = sub(V[f[1]], o);
            const e2 = sub(V[f[2]], o);
            const k = 0.12;
            const origin = [o[0] + (e1[0] + e2[0]) * k, o[1] + (e1[1] + e2[1]) * k, o[2] + (e1[2] + e2[2]) * k];
            return { origin, u: e1.map((c) => c * 0.38), v: e2.map((c) => c * 0.38) };
        }
        return { origin: o, u: sub(V[f[1]], o), v: sub(V[f[3]], o) };
    });

    if (faceCandidates.length > maxFaces) faceCandidates = shuffle(faceCandidates).slice(0, maxFaces);
    if (dots.length > maxDots) dots = shuffle(dots).slice(0, maxDots);

    return { segs, faces: faceCandidates, dots, scale: 0.95, lockRot: { x: 0, y: 0, z: 0 }, free: true };
}

const SOLIDS = [CUBE, TETRA, OCTA];

export function buildPlatonic() {
    return buildSolid(pick(SOLIDS));
}

// Top-level picker: half impossible figures (lock into place), half platonic
// solids (free-rotating). Both are detailed by the circuit GA.
export function buildForm() {
    if (Math.random() < 0.5) return buildPlatonic();
    return { ...buildFigure(), free: false };
}
