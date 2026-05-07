import { animate, scrambleText } from 'animejs';

/** Plain-text blocks — must stay in sync with copy in `About.js` for the illusion. */
export const ABOUT_GENOME_BLOCKS = [
    "I'm Jacob a Creative Developer and Front-End Developer based in Quito - Ecuador, specialized in building custom digital or physical experiences.",
    'Self-taught developer, fast learner that works with WebGL, JS, C++, OpenGL, GLSL and recently working with Machine Learning, Computational Thinking, AI and Unreal Engine.',
    'I have collaborated with: the Garden in the machine · Creative Developer · Active Theory · WebGL Developer · Visual Goodness · WebGL Developer · Smartco · Unity Developer · YaEsta · Front-end & Designer.',
    'Contact me at cyrstem[at]gmail[dot]com',
];

function wrapParagraph(text, cols) {
    const words = text.split(/\s+/).filter(Boolean);
    const lines = [];
    let line = '';
    for (const w of words) {
        let word = w;
        while (word.length > cols) {
            if (line) {
                lines.push(line.padEnd(cols, ' '));
                line = '';
            }
            lines.push(word.slice(0, cols));
            word = word.slice(cols);
        }
        const tryLine = line ? `${line} ${word}` : word;
        if (tryLine.length <= cols) line = tryLine;
        else {
            if (line) lines.push(line.padEnd(cols, ' '));
            line = word;
        }
    }
    if (line) lines.push(line.padEnd(cols, ' '));
    return lines;
}

function buildGridLines(blocks, cols) {
    const lines = [];
    for (const block of blocks) {
        lines.push(...wrapParagraph(block, cols));
        lines.push(''.padEnd(cols, ' '));
    }
    if (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
    return lines;
}

function genePoolFromText(str) {
    const uniq = [...new Set(str.replace(/\s+/g, '').split(''))].join('');
    return uniq.length >= 6 ? uniq : uniq + 'abcdefghijklmnopqrstuvwxyz';
}

function neighbors(i, cols, rows) {
    const r = Math.floor(i / cols);
    const c = i % cols;
    const out = [];
    if (c > 0) out.push(i - 1);
    if (c < cols - 1) out.push(i + 1);
    if (r > 0) out.push(i - cols);
    if (r < rows - 1) out.push(i + cols);
    return out;
}

function bfsDistances(cellCount, cols, rows, seeds) {
    const dist = new Array(cellCount).fill(Infinity);
    const q = [];
    for (const s of seeds) {
        if (s >= 0 && s < cellCount) {
            dist[s] = 0;
            q.push(s);
        }
    }
    while (q.length) {
        const i = q.shift();
        for (const j of neighbors(i, cols, rows)) {
            if (dist[j] > dist[i] + 1) {
                dist[j] = dist[i] + 1;
                q.push(j);
            }
        }
    }
    return dist;
}

function pickSeeds(cellCount, n) {
    const seeds = new Set();
    while (seeds.size < n && seeds.size < cellCount) {
        seeds.add(Math.floor(Math.random() * cellCount));
    }
    return [...seeds];
}

export function initAboutGenome(root = document) {
    const gridEl = root.querySelector('.about-genome__grid');
    const finalEl = root.querySelector('.about-genome-final');
    if (!gridEl || !finalEl) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
        finalEl.classList.remove('is-hidden');
        finalEl.classList.add('is-visible');
        finalEl.setAttribute('aria-hidden', 'false');
        gridEl.closest('.about-genome')?.classList.add('is-done');
        return;
    }

    // ~1.5rem proportional glyphs: wider column budget so lines match #content width.
    const cols = Math.max(14, Math.min(30, Math.floor((gridEl.clientWidth || 480) / 19)));
    const lineStrings = buildGridLines(ABOUT_GENOME_BLOCKS, cols);
    const rows = lineStrings.length;
    const flat = lineStrings.join('');
    const cellCount = flat.length;
    const pool = genePoolFromText(flat);
    const rndChar = () => pool[Math.floor(Math.random() * pool.length)];

    gridEl.style.setProperty('--about-cols', String(cols));

    const seeds = pickSeeds(cellCount, Math.min(6, Math.floor(cellCount / 80) + 3));
    const dist = bfsDistances(cellCount, cols, rows, seeds);
    const maxDist = Math.max(...dist.filter((d) => d < Infinity), 0);

    const frag = document.createDocumentFragment();
    const cells = [];
    for (let i = 0; i < cellCount; i++) {
        const ch = flat[i];
        const span = document.createElement('span');
        span.className = 'about-genome__cell';
        span.dataset.target = ch;
        if (ch === ' ') {
            span.textContent = '\u00a0';
            span.classList.add('about-genome__cell--space');
        } else {
            span.textContent = rndChar();
            cells.push({ el: span, d: dist[i] === Infinity ? maxDist : dist[i], target: ch });
        }
        frag.appendChild(span);
    }
    gridEl.appendChild(frag);

    const staggerMs = 38;
    const settleMs = 380;
    let pending = cells.length;
    const done = () => {
        pending -= 1;
        if (pending > 0) return;
        gridEl.closest('.about-genome')?.classList.add('is-done');
        finalEl.classList.remove('is-hidden');
        finalEl.setAttribute('aria-hidden', 'false');
        finalEl.classList.add('is-visible');
    };

    if (!cells.length) {
        done();
        return;
    }

    for (const { el, d, target } of cells) {
        animate(el, {
            innerHTML: scrambleText({
                text: target,
                chars: pool,
                ease: 'outCubic',
                duration: settleMs,
                revealRate: 88,
                settleRate: 26,
            }),
            delay: d * staggerMs,
        }).then(done);
    }
}
