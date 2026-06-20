// Live, in-browser circuit evolution.
//
// Holds a population of genomes in memory and evolves it as the page runs, so
// the spawned circuits drift and adapt over a session instead of replaying the
// static circuits.json library. Warm-started from that library (the offline
// champions) for instant quality, then nudged each generation toward a moving
// fitness target (the last place the user interacted).
//
// Cost is trivial: a generation is `population` decode+score calls of pure JS,
// run between spawns (never inside the render loop), at a small population.

import { decode, randomGenome } from './genome.js';
import { fitness } from './fitness.js';
import { makeRng, clone, crossover, mutate, tournament } from './ga.js';

export default class CircuitGA {
    constructor({
        population = 80,
        elite = 6,
        mutationRate = 0.12,
        evolveEvery = 4,   // run one generation every N spawns
        immigrants = 2,    // random newcomers per generation (fights staleness)
        target = [0.75, 0.5],
        seed = (Date.now() & 0xffffffff)
    } = {}) {
        this.populationSize = population;
        this.eliteCount = elite;
        this.mutationRate = mutationRate;
        this.evolveEvery = evolveEvery;
        this.immigrants = immigrants;
        this.target = target;
        this.rng = makeRng(seed >>> 0);

        this.pop = [];
        this.ranked = [];
        this.spawnsSinceGen = 0;

        this._fill();
    }

    // Top up to populationSize with random genomes, then (re)rank.
    _fill() {
        while (this.pop.length < this.populationSize) this.pop.push(randomGenome(this.rng));
        this._rank();
    }

    // Warm-start from a set of genomes (e.g. circuits.json champions). Invalid or
    // missing entries are ignored; the remainder of the population stays random.
    seed(genomes = []) {
        const valid = genomes.filter((g) => g && Array.isArray(g.genes) && g.genes.length);
        if (valid.length) this.pop = valid.slice(0, this.populationSize).map(clone);
        this._fill();
    }

    setTarget(target) {
        if (target && target.length === 2) this.target = target;
    }

    _score(g) {
        return fitness(decode(g), { target: this.target });
    }

    _rank() {
        this.ranked = this.pop
            .map((g) => ({ g, f: this._score(g) }))
            .sort((a, b) => b.f - a.f);
    }

    // Return a decoded form for the next spawn. Advances the generation counter
    // and evolves one generation whenever evolveEvery spawns have elapsed.
    nextForm(target) {
        this.setTarget(target);

        if (++this.spawnsSinceGen >= this.evolveEvery) {
            this.spawnsSinceGen = 0;
            this.step();
        }
        if (!this.ranked.length) this._rank();

        return decode(tournament(this.ranked, this.rng));
    }

    // One generation against the current target: keep elites, add a few random
    // immigrants, fill the rest with crossover + mutation of tournament parents.
    step() {
        this._rank();

        const next = this.ranked.slice(0, this.eliteCount).map((r) => clone(r.g));
        for (let i = 0; i < this.immigrants && next.length < this.populationSize; i++) {
            next.push(randomGenome(this.rng));
        }
        while (next.length < this.populationSize) {
            const a = tournament(this.ranked, this.rng);
            const b = tournament(this.ranked, this.rng);
            next.push(mutate(crossover(a, b, this.rng), this.rng, this.mutationRate));
        }

        this.pop = next;
        this._rank();
    }
}
