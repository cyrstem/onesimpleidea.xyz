// Hash-based "spatial" router. Instead of swapping content in place, every view
// is mounted once into a horizontal strip of rooms (one per route). Navigation
// only changes which room is active and emits `route:change` with its index; the
// 3D app animates a shared world offset that pans both the scene and the strip,
// so moving between views feels like walking through one continuous space.
export default class Router {
    constructor({ bus, mount, routes, navSelector = '#nav [data-route]', fallback = '/' }) {
        this.bus = bus;
        this.mount = mount;
        this.routes = routes; // ordered: [{ path, view }]
        this.navSelector = navSelector;
        this.fallback = fallback;
        this.current = null;
        this.rooms = [];

        this._onHashChange = this.resolve.bind(this);
    }

    start() {
        this.build();
        window.addEventListener('hashchange', this._onHashChange);
        this.resolve();
    }

    destroy() {
        window.removeEventListener('hashchange', this._onHashChange);
    }

    // Render each view once into its own room, laid out side by side in the strip.
    build() {
        const strip = document.createElement('div');
        strip.id = 'strip';

        this.routes.forEach(({ path, view }) => {
            const room = document.createElement('section');
            room.className = 'room';
            room.setAttribute('data-route', path);
            room.innerHTML = typeof view.render === 'function' ? view.render() : '';
            strip.appendChild(room);
            this.rooms.push(room);
        });

        this.mount.appendChild(strip);
        this.strip = strip;
    }

    path() {
        const hash = window.location.hash.replace(/^#/, '');
        return hash || this.fallback;
    }

    index() {
        const path = this.path();
        const i = this.routes.findIndex((r) => r.path === path);
        return i === -1 ? Math.max(0, this.routes.findIndex((r) => r.path === this.fallback)) : i;
    }

    resolve() {
        const index = this.index();
        const route = this.routes[index];
        const room = this.rooms[index];
        const changed = !this.current || this.current.view !== route.view;

        if (changed && this.current && typeof this.current.view.onLeave === 'function') {
            this.current.view.onLeave({ bus: this.bus, root: this.current.room });
        }

        this.setActive(route.path);

        if (changed && typeof route.view.onEnter === 'function') {
            route.view.onEnter({ bus: this.bus, root: room });
        }

        this.current = { view: route.view, room };
        this.bus.emit('route:change', { name: route.view.name, path: route.path, index });
    }

    setActive(path) {
        document.querySelectorAll(this.navSelector).forEach((el) => {
            const isActive = el.getAttribute('data-route') === path;
            el.classList.toggle('item--current', isActive);
        });
    }
}
