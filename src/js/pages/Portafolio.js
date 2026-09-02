const INSTAGRAM_URL = 'https://www.instagram.com/cyrstem/';

// Single-page home: bio on the right, numbered project list below, WebGL plane
// for the dissolve image. Image appears only after a work is clicked (none selected at start).
const template = `
    <main id="home">
        <div class="home-scroll">
            <section id="bio" class="bio" aria-label="About">
                <p>I'm <b>Jacobo Heredia</b>, a <b>Creative Developer</b> and <b>Front-End Developer</b> based in Quito with <b>10+ years</b> of experience creating custom digital and physical experiences that blend technology, design, and interactivity.</p>
                <p>I'm a <b>self-taught</b> developer specializing in <b>WebGL, JavaScript, C++, OpenGL, GLSL</b>, creative coding, and interactive systems. In recent years my work has expanded into <b>Machine Learning</b>, computational thinking, and <b>Unreal Engine</b> development.</p>
                <p>Currently with <a href="https://thegardeninthemachine.com/" target="_blank" rel="noopener">the Garden in the Machine</a> as a Creative Developer, exploring generative systems, emergent behaviors, and AI-driven experiences. Previously: <a href="https://activetheory.net/" target="_blank" rel="noopener">Active Theory</a>, <a href="https://visualgoodness.com/" target="_blank" rel="noopener">Visual Goodness</a>, <a href="https://smartco.com.ec" target="_blank" rel="noopener">Smartco</a>, <a href="https://www.yaesta.com" target="_blank" rel="noopener">YaEsta</a>.</p>
                <p>I co-authored the research paper <a href="https://openreview.net/forum?id=pKXJ0wQ3Vn" target="_blank" rel="noopener">Orchestrating Emergent Storytelling with Embodied Multi-Agent Systems</a>, presented at <b>NeurIPS 2025</b> (Creative AI), on the multi-agent systems behind <i>Conflicts</i> and <i>The Game of Whispers</i>.</p>
            </section>

            <section id="works" class="works" aria-label="Selected works">
                <h2 class="works-heading">Selected works <span id="works-count">(0)</span></h2>
                <ol id="project-list" class="project-list"></ol>
                <p class="works-more"><a href="${INSTAGRAM_URL}" target="_blank" rel="noopener">More Work</a></p>
            </section>
        </div>
    </main>
`;

async function loadProjects() {
    try {
        const res = await fetch('projects.json');
        return await res.json();
    } catch (e) {
        return [];
    }
}

function padIndex(i) {
    return String(i + 1).padStart(2, '0');
}

function metaRows(project) {
    const rows = [];
    if (project.description) {
        rows.push(`<div class="meta-row"><span class="meta-label">Info.</span><span class="meta-value">${project.description}</span></div>`);
    }
    if (project.feat) {
        rows.push(`<div class="meta-row"><span class="meta-label">Feat.</span><span class="meta-value">${project.feat}</span></div>`);
    }
    if (project.with) {
        rows.push(`<div class="meta-row"><span class="meta-label">With.</span><span class="meta-value">${project.with}</span></div>`);
    }
    if (project.year) {
        rows.push(`<div class="meta-row"><span class="meta-label">Year.</span><span class="meta-value">${project.year}</span></div>`);
    }
    const links = (project.links || [])
        .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
        .join('');
    if (links) {
        rows.push(`<div class="meta-row meta-links"><span class="meta-label">Link.</span><span class="meta-value project-links">${links}</span></div>`);
    }
    return rows.join('');
}

function renderProjectItem(project, index) {
    return `
        <li class="project-item" data-index="${index}">
            <button type="button" class="project-trigger" data-index="${index}" aria-pressed="false">
                <span class="project-index">${padIndex(index)}.</span>
                <span class="project-title">${project.title}</span>
            </button>
            <div class="project-meta" hidden>
                ${metaRows(project)}
            </div>
            <img class="project-thumb" src="${project.image}" alt="" loading="lazy">
        </li>
    `;
}

let cleanup = null;

export default {
    name: 'home',
    render: () => template,
    onEnter: async ({ bus, root }) => {
        const list = root.querySelector('#project-list');
        const countEl = root.querySelector('#works-count');
        if (!list) return;

        const projects = await loadProjects();
        if (!document.body.contains(list)) return;

        if (countEl) countEl.textContent = `(${projects.length})`;
        list.innerHTML = projects.map(renderProjectItem).join('');

        const isMobile = window.matchMedia('(max-width: 600px)').matches;
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        // Nothing selected on load — image stays hidden until a click.
        let locked = -1;

        const items = Array.from(list.querySelectorAll('.project-item'));
        const triggers = Array.from(list.querySelectorAll('.project-trigger'));

        const setMetaVisible = (index, visible) => {
            items.forEach((item, i) => {
                const meta = item.querySelector('.project-meta');
                if (!meta) return;
                if (visible && i === index) meta.removeAttribute('hidden');
                else meta.setAttribute('hidden', '');
            });
        };

        const setActiveClasses = (index) => {
            triggers.forEach((btn, i) => {
                const on = index >= 0 && i === index;
                btn.classList.toggle('is-active', on);
                btn.classList.remove('is-preview');
                btn.setAttribute('aria-pressed', on ? 'true' : 'false');
                items[i]?.classList.toggle('is-active', on);
                items[i]?.classList.remove('is-preview');
            });
        };

        const select = (index) => {
            if (index < 0 || index >= projects.length) return;
            if (index === locked) return;

            locked = index;
            setActiveClasses(index);
            setMetaVisible(index, true);

            bus?.emit('portfolio:active', {
                index,
                project: projects[index],
                reducedMotion
            });
        };

        // Desktop: click selects and reveals image. Mobile: tap toggles open state.
        triggers.forEach((btn) => {
            const index = Number(btn.dataset.index);

            btn.addEventListener('click', (event) => {
                event.preventDefault();
                if (isMobile) {
                    if (locked === index && items[index]?.classList.contains('is-open')) {
                        items[index].classList.remove('is-open');
                        setMetaVisible(index, false);
                        locked = -1;
                        setActiveClasses(-1);
                        bus?.emit('portfolio:clear');
                        return;
                    }
                    items.forEach((item) => item.classList.remove('is-open'));
                    items[index]?.classList.add('is-open');
                    select(index);
                    return;
                }
                select(index);
            });
        });

        const onKey = (event) => {
            const active = document.activeElement;
            if (!active || !active.classList.contains('project-trigger')) return;
            let next = Number(active.dataset.index);
            if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                event.preventDefault();
                next = Math.min(projects.length - 1, next + 1);
                triggers[next]?.focus();
            } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                event.preventDefault();
                next = Math.max(0, next - 1);
                triggers[next]?.focus();
            } else if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                select(next);
            }
        };
        list.addEventListener('keydown', onKey);

        bus?.emit('portfolio:preload', { projects });
        bus?.emit('portfolio:clear');

        cleanup = () => {
            list.removeEventListener('keydown', onKey);
        };
    },
    onLeave: () => {
        cleanup?.();
        cleanup = null;
    }
};
