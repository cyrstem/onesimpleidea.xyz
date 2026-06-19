// Minimal hash-based router. Works on static hosting (GitHub Pages) and drives
// the 3D scene indirectly by emitting `route:change` on the shared event bus.
export default class Router {
    constructor({ bus, outlet, routes, navSelector = '#nav [data-route]', fallback = '/' }) {
        this.bus = bus;
        this.outlet = outlet;
        this.routes = routes;
        this.navSelector = navSelector;
        this.fallback = fallback;
        this.current = null;

        this._onHashChange = this.resolve.bind(this);
    }

    start() {
        window.addEventListener('hashchange', this._onHashChange);
        this.resolve();
    }

    destroy() {
        window.removeEventListener('hashchange', this._onHashChange);
    }

    path() {
        const hash = window.location.hash.replace(/^#/, '');
        return hash || this.fallback;
    }

    resolve() {
        const path = this.path();
        const route = this.routes[path] || this.routes[this.fallback];

        if (this.current && typeof this.current.onLeave === 'function') {
            this.current.onLeave({ bus: this.bus, outlet: this.outlet });
        }

        this.outlet.innerHTML = typeof route.render === 'function' ? route.render() : '';
        this.setActive(path);

        if (typeof route.onEnter === 'function') {
            route.onEnter({ bus: this.bus, outlet: this.outlet });
        }

        this.current = route;
        this.bus.emit('route:change', { name: route.name, path });
    }

    setActive(path) {
        document.querySelectorAll(this.navSelector).forEach((el) => {
            const isActive = el.getAttribute('data-route') === path;
            el.classList.toggle('item--current', isActive);
        });
    }
}
