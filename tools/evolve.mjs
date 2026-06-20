// Offline circuit evolver.
//
// Runs the genetic algorithm and serializes the best forms to
// public/circuits.json, which CircuitManager loads at runtime and spawns instead
// of (or alongside) its random generators. Re-run whenever you tweak the fitness
// weights or want a fresh library:
//
//   npm run evolve
//   npm run evolve -- --count=24 --generations=80 --seed=7
//
// Pure ESM core (genome/fitness/ga) with no browser deps, so it imports directly.

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { evolve } from '../src/js/circuit/ga.js';
import { REGION, CELL } from '../src/js/circuit/genome.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function arg(name, def) {
    const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
    if (!hit) return def;
    const v = hit.split('=')[1];
    const n = Number(v);
    return Number.isFinite(n) ? n : v;
}

const COUNT = arg('count', 24);
const GENERATIONS = arg('generations', 70);
const POPULATION = arg('population', 140);
const BASE_SEED = arg('seed', 1);

const round = (v, p = 4) => Math.round(v * 10 ** p) / 10 ** p;

function packForm(form) {
    return {
        center: form.center.map((v) => round(v)),
        segments: form.segments.map((s) => ({
            x1: round(s.x1), y1: round(s.y1), x2: round(s.x2), y2: round(s.y2),
            r0: round(s.r0, 3), r1: round(s.r1, 3)
        })),
        nodes: form.nodes.map((n) => ({
            x: round(n.x), y: round(n.y), size: n.size, r: round(n.r, 3)
        }))
    };
}

// Evolve COUNT independent runs (different seeds) and take each run's champion,
// giving a diverse library rather than COUNT near-clones from one run.
const forms = [];
console.log(`Evolving ${COUNT} forms  (pop=${POPULATION}, gens=${GENERATIONS})\n`);

for (let i = 0; i < COUNT; i++) {
    const seed = BASE_SEED + i * 101;
    let firstBest = null;
    let lastBest = null;
    const ranked = evolve({
        seed,
        population: POPULATION,
        generations: GENERATIONS,
        onGeneration: (gen, stats) => {
            if (gen === 0) firstBest = stats.best;
            lastBest = stats.best;
        }
    });
    const champ = ranked[0];
    // Persist the genome too so the live in-app GA (CircuitGA) can warm-start its
    // population from these champions, not just replay the decoded geometry.
    forms.push({ fitness: round(champ.fitness, 3), genome: champ.genome, ...packForm(champ.form) });
    console.log(
        `  #${String(i + 1).padStart(2)}  seed=${String(seed).padStart(5)}  ` +
        `fit ${firstBest.toFixed(3)} -> ${lastBest.toFixed(3)}  ` +
        `(${champ.form.segments.length} segs, ${champ.form.nodes.length} nodes)`
    );
}

forms.sort((a, b) => b.fitness - a.fitness);

const out = {
    generatedAt: new Date().toISOString(),
    region: REGION,
    cell: CELL,
    count: forms.length,
    forms
};

mkdirSync(join(ROOT, 'public'), { recursive: true });
const dest = join(ROOT, 'public', 'circuits.json');
writeFileSync(dest, JSON.stringify(out, null, 0));

console.log(`\nWrote ${forms.length} forms -> public/circuits.json`);
console.log(`Best fitness ${forms[0].fitness}, worst ${forms[forms.length - 1].fitness}`);
