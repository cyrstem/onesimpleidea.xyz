// Genetic algorithm over circuit genomes.
//
// Standard generational GA: score the population, keep a few elites, then fill
// the rest with tournament-selected parents crossed over and mutated. The only
// domain-specific bits are decode (genome -> form) and fitness (form -> number),
// both imported; everything here is the generic breeding machinery.

import { decode, randomGenome, randomGene, GENE_TYPES } from './genome.js';
import { fitness } from './fitness.js';

// Small deterministic PRNG (mulberry32) so runs are reproducible from a seed.
export function makeRng(seed = 1) {
    let a = seed >>> 0;
    return function rng() {
        a |= 0;
        a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

export function clone(genome) {
    return { h0: genome.h0, genes: genome.genes.map((g) => ({ ...g })) };
}

// Single-point crossover of the two gene arrays.
export function crossover(a, b, rng) {
    const ca = a.genes;
    const cb = b.genes;
    const i = Math.floor(rng() * ca.length);
    const j = Math.floor(rng() * cb.length);
    const genes = [...ca.slice(0, i), ...cb.slice(j)].map((g) => ({ ...g }));
    return { h0: rng() < 0.5 ? a.h0 : b.h0, genes };
}

// Point mutations (tweak a gene) plus structural ones (insert / delete / dup).
export function mutate(genome, rng, rate = 0.12) {
    const g = clone(genome);

    if (rng() < rate) g.h0 = Math.floor(rng() * 4);

    for (const gene of g.genes) {
        if (rng() < rate) gene.type = GENE_TYPES[Math.floor(rng() * GENE_TYPES.length)];
        if (rng() < rate) gene.dir = gene.dir ? 0 : 1;
        if (rng() < rate) gene.len = 1 + Math.floor(rng() * 4);
    }

    if (rng() < rate && g.genes.length > 4) {
        g.genes.splice(Math.floor(rng() * g.genes.length), 1);
    }
    if (rng() < rate && g.genes.length < 60) {
        g.genes.splice(Math.floor(rng() * g.genes.length), 0, randomGene(rng));
    }
    if (rng() < rate && g.genes.length < 60) {
        const i = Math.floor(rng() * g.genes.length);
        g.genes.splice(i, 0, { ...g.genes[i] });
    }

    return g;
}

export function tournament(scored, rng, k = 4) {
    let best = null;
    for (let i = 0; i < k; i++) {
        const pick = scored[Math.floor(rng() * scored.length)];
        if (!best || pick.f > best.f) best = pick;
    }
    return best.g;
}

// Evolve a population and return the ranked survivors of the final generation:
// [{ genome, form, fitness }] sorted best-first.
export function evolve(options = {}) {
    const {
        seed = 1,
        population = 120,
        generations = 60,
        elite = 6,
        mutationRate = 0.12,
        target = [0.75, 0.5],
        weights = {},
        onGeneration = null
    } = options;

    const rng = makeRng(seed);
    const score = (g) => fitness(decode(g), { target, weights });

    let pop = [];
    for (let i = 0; i < population; i++) pop.push(randomGenome(rng));

    let ranked = [];
    for (let gen = 0; gen < generations; gen++) {
        ranked = pop
            .map((g) => ({ g, f: score(g) }))
            .sort((a, b) => b.f - a.f);

        if (onGeneration) {
            onGeneration(gen, {
                best: ranked[0].f,
                mean: ranked.reduce((s, r) => s + r.f, 0) / ranked.length
            });
        }

        if (gen === generations - 1) break;

        const next = ranked.slice(0, elite).map((r) => clone(r.g));
        while (next.length < population) {
            const a = tournament(ranked, rng);
            const b = tournament(ranked, rng);
            next.push(mutate(crossover(a, b, rng), rng, mutationRate));
        }
        pop = next;
    }

    return ranked.map((r) => ({ genome: r.g, form: decode(r.g), fitness: r.f }));
}
