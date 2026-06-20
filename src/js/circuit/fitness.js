// Fitness scoring for evolved circuit forms.
//
// Circuit "beauty" is subjective, so fitness is just a weighted sum of cheap
// geometric heuristics. Each term returns roughly [0,1] (penalties are negative)
// and the weights below decide the aesthetic. Tune the weights to taste, or feed
// a different `target` to evolve forms that reach a particular point.

import { REGION, CELL } from './genome.js';

const DEFAULT_WEIGHTS = {
    coverage: 1.2,     // fill the region without clustering
    overlap: -2.0,     // traces should not retrace themselves
    reach: 1.5,        // a tip should land near the target
    rhythm: 0.8,       // pleasing turn density (not a line, not noise)
    clamped: -0.6      // punish moves squashed flat against the region edge
};

// Snap a normalized point to integer grid cell coordinates.
function cellKey(x, y, cell) {
    return `${Math.round(x / cell)},${Math.round(y / cell)}`;
}

// Unique grid cells touched along all (axis-aligned) segments.
function coverageCells(form, cell) {
    const cells = new Set();
    for (const s of form.segments) {
        const x0 = Math.round(s.x1 / cell);
        const y0 = Math.round(s.y1 / cell);
        const x1 = Math.round(s.x2 / cell);
        const y1 = Math.round(s.y2 / cell);
        const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) || 1;
        for (let i = 0; i <= steps; i++) {
            const cx = Math.round(x0 + ((x1 - x0) * i) / steps);
            const cy = Math.round(y0 + ((y1 - y0) * i) / steps);
            cells.add(`${cx},${cy}`);
        }
    }
    return cells;
}

// Fraction of the region's cells that are filled, capped so sprawl past a
// comfortable density stops helping.
function coverage(form, cell) {
    const cols = Math.round((REGION.x1 - REGION.x0) / cell);
    const rows = Math.round((REGION.y1 - REGION.y0) / cell);
    const cap = cols * rows * 0.18; // ~18% fill reads as a busy-but-legible board
    const filled = coverageCells(form, cell).size;
    return Math.min(filled / cap, 1);
}

// Count grid edges used more than once (retraced / overlapping traces).
function overlap(form, cell) {
    const used = new Map();
    let extra = 0;
    for (const s of form.segments) {
        const x0 = Math.round(s.x1 / cell);
        const y0 = Math.round(s.y1 / cell);
        const x1 = Math.round(s.x2 / cell);
        const y1 = Math.round(s.y2 / cell);
        const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0)) || 1;
        let px = x0;
        let py = y0;
        for (let i = 1; i <= steps; i++) {
            const cx = Math.round(x0 + ((x1 - x0) * i) / steps);
            const cy = Math.round(y0 + ((y1 - y0) * i) / steps);
            const a = `${px},${py}`;
            const b = `${cx},${cy}`;
            const key = a < b ? `${a}|${b}` : `${b}|${a}`;
            const count = (used.get(key) || 0) + 1;
            used.set(key, count);
            if (count > 1) extra++;
            px = cx;
            py = cy;
        }
    }
    // Normalize against segment count so the penalty stays in a sane range.
    return form.segments.length ? Math.min(extra / form.segments.length, 1) : 0;
}

// Reward the closest node to the target landing on it.
function reach(form, target) {
    if (!form.nodes.length) return 0;
    let best = Infinity;
    for (const n of form.nodes) {
        best = Math.min(best, Math.hypot(n.x - target[0], n.y - target[1]));
    }
    return Math.max(0, 1 - best / 0.5);
}

// Turn density: ratio of direction changes to segments, rewarded near ~0.4.
function rhythm(form) {
    const segs = form.segments.length;
    if (segs < 2) return 0;
    let turns = 0;
    for (let i = 1; i < segs; i++) {
        const a = form.segments[i - 1];
        const b = form.segments[i];
        const ah = Math.abs(a.x2 - a.x1) > Math.abs(a.y2 - a.y1) ? 0 : 1;
        const bh = Math.abs(b.x2 - b.x1) > Math.abs(b.y2 - b.y1) ? 0 : 1;
        if (ah !== bh) turns++;
    }
    const ratio = turns / segs;
    return Math.max(0, 1 - Math.abs(ratio - 0.4) / 0.4);
}

// Fraction of segments squashed to near-zero by region clamping (wasted genes).
function clamped(form, cell) {
    if (!form.segments.length) return 0;
    let bad = 0;
    for (const s of form.segments) {
        if (Math.hypot(s.x2 - s.x1, s.y2 - s.y1) < cell * 0.6) bad++;
    }
    return bad / form.segments.length;
}

// Score a decoded form. `target` is a normalized [x,y] the form should reach.
export function fitness(form, { target = [0.75, 0.5], weights = {}, cell = CELL } = {}) {
    const w = { ...DEFAULT_WEIGHTS, ...weights };
    if (!form.segments.length) return -1;
    return (
        w.coverage * coverage(form, cell) +
        w.overlap * overlap(form, cell) +
        w.reach * reach(form, target) +
        w.rhythm * rhythm(form) +
        w.clamped * clamped(form, cell)
    );
}

export const terms = { coverage, overlap, reach, rhythm, clamped };
