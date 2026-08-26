// Genome <-> Mandelbulb phenotype encoding for a future SDF genetic algorithm.
//
// Unlike the circuit turtle genome, an SDF genome is a flat parameter vector.
// Decoding is deterministic and returns an object that drops straight into
// MandelbulbManager.setPhenotype(params). Circuit genome / fitness modules are
// intentionally untouched; a future evolve loop can reuse makeRng / tournament
// from ga.js while calling the breeding helpers exported here.
//
// Phenotype bounds are the single source of truth for mutation and clamp:
// invalid powers, runaway loop budgets, NaNs, and camera-inside-surface states
// are rejected here before they reach the shader.

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const finite = (v, fallback) => (Number.isFinite(v) ? v : fallback);

/**
 * Safe ranges for every evolvable / tunable Mandelbulb trait.
 * - iterations / maxSteps map to early-exits inside fixed GLSL ceilings (12 / 80).
 * - cameraDistance is also re-enforced vs scale so the eye never starts inside
 *   the fractal hull (~scale radius).
 * - vector traits use per-channel min/max to keep lighting and color finite.
 */
export const PHENOTYPE_BOUNDS = {
    power: { min: 2, max: 16, default: 8 },
    bailout: { min: 1.5, max: 8, default: 2 },
    iterations: { min: 4, max: 12, default: 8, integer: true },
    maxSteps: { min: 24, max: 80, default: 56, integer: true },
    scale: { min: 0.4, max: 2.5, default: 0.85 },
    cameraDistance: { min: 1.6, max: 4.5, default: 2.85 },
    detail: { min: 0.0004, max: 0.01, default: 0.0012 },
    // glow → soft miss proximity; contrast → denser / sharper lattice wires
    glow: { min: 0, max: 0.6, default: 0.08 },
    contrast: { min: 0.1, max: 0.7, default: 0.48 },
    alpha: { min: 0.05, max: 0.85, default: 0.55 },
    rotationSpeed: { min: 0, max: 0.4, default: 0.07 },
    rotationOffset: {
        min: [-Math.PI, -Math.PI, -Math.PI],
        max: [Math.PI, Math.PI, Math.PI],
        default: [0.35, 0.1, 0.0]
    },
    color: {
        min: [0.02, 0.02, 0.02],
        max: [0.55, 0.55, 0.55],
        default: [0.05, 0.05, 0.06]
    },
    lightDir: {
        min: [-1, -1, -1],
        max: [1, 1, 1],
        default: [0.45, 0.75, 0.4]
    }
};

/** Scalar + vector keys that make up a genome / phenotype. */
export const GENOME_KEYS = Object.keys(PHENOTYPE_BOUNDS);

function defaultPhenotype() {
    const p = {};
    for (const [key, bound] of Object.entries(PHENOTYPE_BOUNDS)) {
        p[key] = Array.isArray(bound.default) ? bound.default.slice() : bound.default;
    }
    return p;
}

function clampVec3(value, bound, fallback) {
    const src = Array.isArray(value) ? value : fallback;
    const out = [
        finite(src[0], fallback[0]),
        finite(src[1], fallback[1] ?? fallback[0]),
        finite(src[2], fallback[2] ?? fallback[0])
    ];
    if (bound.min && bound.max) {
        out[0] = clamp(out[0], bound.min[0], bound.max[0]);
        out[1] = clamp(out[1], bound.min[1], bound.max[1]);
        out[2] = clamp(out[2], bound.min[2], bound.max[2]);
    }
    return out;
}

/**
 * Clamp / sanitize a raw phenotype so it is always shader-safe.
 * Prefer this (or decode) before calling setPhenotype.
 */
export function clampPhenotype(raw = {}) {
    const base = defaultPhenotype();
    const out = { ...base };

    for (const [key, bound] of Object.entries(PHENOTYPE_BOUNDS)) {
        if (Array.isArray(bound.default)) {
            out[key] = clampVec3(raw[key], bound, bound.default);
            continue;
        }

        const v = finite(raw[key], bound.default);
        let n = clamp(v, bound.min, bound.max);
        if (bound.integer) n = Math.round(n);
        out[key] = n;
    }

    // Guard: camera must stay outside the fractal hull (~scale radius).
    const minCam = Math.max(PHENOTYPE_BOUNDS.cameraDistance.min, out.scale * 1.35);
    out.cameraDistance = clamp(out.cameraDistance, minCam, PHENOTYPE_BOUNDS.cameraDistance.max);

    // Reject zero-length light directions (would NaN normalize in the shader).
    const ld = out.lightDir;
    if (ld[0] * ld[0] + ld[1] * ld[1] + ld[2] * ld[2] < 1e-6) {
        out.lightDir = PHENOTYPE_BOUNDS.lightDir.default.slice();
    }

    return out;
}

/** Genome shape: `{ params: phenotypeFields }`. */
export function encode(phenotype) {
    return { params: clampPhenotype(phenotype) };
}

/**
 * Decode a genome into setPhenotype-ready params.
 * Accepts either `{ params }` or a flat phenotype object for convenience.
 */
export function decode(genome = {}) {
    const raw = genome && genome.params && typeof genome.params === 'object'
        ? genome.params
        : genome;
    return clampPhenotype(raw);
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function sampleBound(bound, rng) {
    if (Array.isArray(bound.default)) {
        return [
            lerp(bound.min[0], bound.max[0], rng()),
            lerp(bound.min[1], bound.max[1], rng()),
            lerp(bound.min[2], bound.max[2], rng())
        ];
    }
    let v = lerp(bound.min, bound.max, rng());
    if (bound.integer) v = Math.round(v);
    return v;
}

export function randomGenome(rng = Math.random) {
    const params = {};
    for (const [key, bound] of Object.entries(PHENOTYPE_BOUNDS)) {
        params[key] = sampleBound(bound, rng);
    }
    return { params: clampPhenotype(params) };
}

export function clone(genome) {
    const params = decode(genome);
    return {
        params: {
            ...params,
            rotationOffset: params.rotationOffset.slice(),
            color: params.color.slice(),
            lightDir: params.lightDir.slice()
        }
    };
}

/**
 * Uniform blend of scalar params + per-axis blend of vectors.
 * Mirrors the role of circuit crossover but for a continuous parameter genome.
 */
export function crossover(a, b, rng = Math.random) {
    const pa = decode(a);
    const pb = decode(b);
    const params = {};

    for (const [key, bound] of Object.entries(PHENOTYPE_BOUNDS)) {
        if (Array.isArray(bound.default)) {
            const t0 = rng();
            const t1 = rng();
            const t2 = rng();
            params[key] = [
                lerp(pa[key][0], pb[key][0], t0),
                lerp(pa[key][1], pb[key][1], t1),
                lerp(pa[key][2], pb[key][2], t2)
            ];
        } else {
            const t = rng();
            let v = lerp(pa[key], pb[key], t);
            if (bound.integer) v = Math.round(v);
            params[key] = v;
        }
    }

    return { params: clampPhenotype(params) };
}

/**
 * Gaussian-ish jitter within each trait's bounds.
 * rate is the per-key mutation probability (same spirit as circuit mutate).
 */
export function mutate(genome, rng = Math.random, rate = 0.12) {
    const params = decode(genome);
    const out = { ...params };

    for (const [key, bound] of Object.entries(PHENOTYPE_BOUNDS)) {
        if (rng() >= rate) continue;

        if (Array.isArray(bound.default)) {
            const span0 = bound.max[0] - bound.min[0];
            const span1 = bound.max[1] - bound.min[1];
            const span2 = bound.max[2] - bound.min[2];
            out[key] = [
                out[key][0] + (rng() * 2 - 1) * span0 * 0.15,
                out[key][1] + (rng() * 2 - 1) * span1 * 0.15,
                out[key][2] + (rng() * 2 - 1) * span2 * 0.15
            ];
        } else {
            const span = bound.max - bound.min;
            let v = out[key] + (rng() * 2 - 1) * span * 0.15;
            if (bound.integer) v = Math.round(v);
            out[key] = v;
        }
    }

    return { params: clampPhenotype(out) };
}

export function defaultGenome() {
    return encode(defaultPhenotype());
}
