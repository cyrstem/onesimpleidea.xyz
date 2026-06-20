// Genome <-> circuit form encoding for the genetic algorithm.
//
// A genome is a tiny "turtle on a grid" program. Decoding walks an axis-aligned
// turtle through the right-half region, emitting one trace `segment` per forward
// move and a `node` at pads / branch tips / endpoints. The output shape matches
// exactly what CircuitManager.createTrace expects:
//   segment: { x1, y1, x2, y2, r0, r1 }   node: { x, y, size, r }
// so an evolved form drops straight into the existing reveal animation.
//
// Decoding is fully deterministic (genes carry explicit values, no RNG), which
// is what lets the GA score a genome consistently across generations. Randomness
// only appears when *creating* or *mutating* genomes.

// Region the circuit field occupies (normalized viewport, y up). Mirrors
// CircuitManager.xRange / yRange so evolved forms land in the same space.
export const REGION = { x0: 0.54, x1: 0.96, y0: 0.12, y1: 0.88 };

// Grid step in normalized units. Region (~0.42 x 0.76) => ~14 x 25 cells.
export const CELL = 0.03;

// Node sizes in CSS px, matching CircuitManager defaults (nodeSize / jointSize).
const NODE = 13;
const JOINT = 7;

// Headings: 0 = +x, 1 = +y, 2 = -x, 3 = -y.
const HEADINGS = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
];

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export const GENE_TYPES = ['F', 'T', 'B', 'P'];

// Decode a genome into a circuit form. Reveal thresholds are assigned in draw
// order (each emitted primitive bumps a sequence counter) then normalized to
// [0,1], so uProgress sweeps the form into existence in the order it was grown.
export function decode(genome, opts = {}) {
    const region = opts.region || REGION;
    const cell = opts.cell || CELL;
    const genes = genome.genes || [];

    const segments = [];
    const nodes = [];
    let seq = 0;

    const cx = (region.x0 + region.x1) / 2;
    const cy = (region.y0 + region.y1) / 2;

    let x = cx;
    let y = cy;
    let h = ((genome.h0 | 0) % 4 + 4) % 4;

    const inX = (v) => clamp(v, region.x0, region.x1);
    const inY = (v) => clamp(v, region.y0, region.y1);

    // Seed terminal at the start point.
    nodes.push({ x, y, size: NODE, _seq: seq++ });

    for (const g of genes) {
        const len = clamp(g.len | 0, 1, 6);

        if (g.type === 'T') {
            // Turn left (dir 1) or right (dir 0); no geometry emitted.
            h = (h + (g.dir ? 1 : 3) + 4) % 4;
            continue;
        }

        if (g.type === 'P') {
            nodes.push({ x, y, size: JOINT, _seq: seq++ });
            continue;
        }

        if (g.type === 'B') {
            // Perpendicular stub + pad, without moving the main trunk turtle.
            const ph = (h + (g.dir ? 1 : 3) + 4) % 4;
            const [dx, dy] = HEADINGS[ph];
            const ex = inX(x + dx * len * cell);
            const ey = inY(y + dy * len * cell);
            if (Math.hypot(ex - x, ey - y) > cell * 0.4) {
                segments.push({ x1: x, y1: y, x2: ex, y2: ey, _s0: seq, _s1: seq });
                nodes.push({ x: ex, y: ey, size: JOINT, _seq: seq });
                seq++;
            }
            continue;
        }

        // 'F' (forward): step along the current heading, emit a trunk segment.
        const [dx, dy] = HEADINGS[h];
        const nx = inX(x + dx * len * cell);
        const ny = inY(y + dy * len * cell);
        if (Math.hypot(nx - x, ny - y) > cell * 0.4) {
            segments.push({ x1: x, y1: y, x2: nx, y2: ny, _s0: seq, _s1: seq + 1 });
            x = nx;
            y = ny;
            seq++;
        }
    }

    // Terminal pad at the trunk tip.
    nodes.push({ x, y, size: NODE, _seq: seq++ });

    const total = Math.max(seq - 1, 1);
    for (const s of segments) {
        s.r0 = s._s0 / total;
        s.r1 = s._s1 / total;
        delete s._s0;
        delete s._s1;
    }
    for (const n of nodes) {
        n.r = n._seq / total;
        delete n._seq;
    }

    // Centroid of all points, used as the uScale pulse origin.
    let sx = 0;
    let sy = 0;
    let n = 0;
    for (const s of segments) {
        sx += s.x1 + s.x2;
        sy += s.y1 + s.y2;
        n += 2;
    }
    const center = n ? [sx / n, sy / n] : [cx, cy];

    return { segments, nodes, center };
}

// ---- Random genome construction / mutation primitives ----

export function randomGene(rng) {
    const r = rng();
    let type;
    if (r < 0.55) type = 'F';
    else if (r < 0.78) type = 'T';
    else if (r < 0.93) type = 'B';
    else type = 'P';
    return { type, dir: rng() < 0.5 ? 0 : 1, len: 1 + Math.floor(rng() * 4) };
}

export function randomGenome(rng) {
    const count = 12 + Math.floor(rng() * 28);
    const genes = [];
    for (let i = 0; i < count; i++) genes.push(randomGene(rng));
    return { h0: Math.floor(rng() * 4), genes };
}

// Translate a decoded form so its centre lands on (tx,ty). Used when an evolved
// form (built around the region centre) is spawned at a specific point.
export function translateForm(form, tx, ty) {
    const dx = tx - form.center[0];
    const dy = ty - form.center[1];
    const segments = form.segments.map((s) => ({
        x1: s.x1 + dx, y1: s.y1 + dy, x2: s.x2 + dx, y2: s.y2 + dy, r0: s.r0, r1: s.r1
    }));
    const nodes = form.nodes.map((nd) => ({ x: nd.x + dx, y: nd.y + dy, size: nd.size, r: nd.r }));
    return { segments, nodes, center: [tx, ty] };
}
