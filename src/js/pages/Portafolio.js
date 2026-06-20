import gsap from 'gsap';

// The project list (top) and the active description (left) are built from
// projects.json at runtime. Selecting a project updates the left copy and emits
// `portfolio:active`, which the 3D app uses to swap the plane texture and the
// MSDF title. The image itself is rendered as a WebGL plane (see PlaneManager).
const template = `
    <main id="work">
        <nav id="ex" class="project-list"></nav>
        <div class="infoFile">
            <article class="info show__info" id="portfolio-copy"></article>
        </div>
    </main>
`;

async function loadProjects() {
    try {
        const res = await fetch('projects.json');
        return await res.json();
    } catch (e) {
        // No data file: leave the list empty rather than breaking the route.
        return [];
    }
}

function renderCopy(container, project) {
    const links = (project.links || [])
        .map((l) => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
        .join('');
    container.innerHTML = `
        <p>${project.description}</p>
        ${links ? `<div class="project-links">${links}</div>` : ''}
    `;
}

// Unsubscribe handle for the `portfolio:reveal` listener, cleared on route leave.
let revealOff = null;

export default {
    name: 'portfolio',
    render: () => template,
    onEnter: async ({ bus, root }) => {
        const list = root.querySelector('#ex');
        const copy = root.querySelector('#portfolio-copy');
        if (!list || !copy) return;

        const projects = await loadProjects();
        // The router may have navigated away while the JSON was loading.
        if (!projects.length || !document.body.contains(list)) return;

        // The copy is revealed only once the matching image has loaded (the app
        // emits `portfolio:reveal` from the plane's texture onload).
        if (bus) {
            revealOff?.();
            revealOff = bus.on('portfolio:reveal', () => {
                gsap.fromTo(copy, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: 'power2.in' });
            });
        }

        let current = -1;

        const select = (index) => {
            if (index === current) return;
            const items = Array.from(list.querySelectorAll('.nav_item'));
            items[current]?.classList.remove('item--current');
            items[index]?.classList.add('item--current');

            const project = projects[index];
            renderCopy(copy, project);
            // Hide until the image is ready; the reveal handler fades it in.
            gsap.set(copy, { opacity: 0 });

            current = index;
            bus?.emit('portfolio:active', { index, project });
        };

        list.innerHTML = projects
            .map((p, i) => `<a class="nav_item" href="#" data-index="${i}"><h1>${p.title}</h1></a>`)
            .join('');

        list.querySelectorAll('.nav_item').forEach((el) => {
            el.addEventListener('click', (event) => {
                event.preventDefault();
                select(Number(el.dataset.index));
            });
        });

        // Show the first project by default.
        select(0);
    },
    onLeave: () => {
        revealOff?.();
        revealOff = null;
    }
};
