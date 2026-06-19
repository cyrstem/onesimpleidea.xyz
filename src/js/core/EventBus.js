// Tiny EventTarget-based pub/sub used to decouple the router from the 3D scene.
export default class EventBus {
    constructor() {
        this.target = new EventTarget();
        // type -> Map(originalHandler -> wrappedListener) so off() can remove the exact ref.
        this.wrappers = new Map();
    }

    on(type, handler) {
        const wrapped = (event) => handler(event.detail);

        if (!this.wrappers.has(type)) {
            this.wrappers.set(type, new Map());
        }
        this.wrappers.get(type).set(handler, wrapped);
        this.target.addEventListener(type, wrapped);

        return () => this.off(type, handler);
    }

    off(type, handler) {
        const handlers = this.wrappers.get(type);
        if (!handlers) return;

        const wrapped = handlers.get(handler);
        if (wrapped) {
            this.target.removeEventListener(type, wrapped);
            handlers.delete(handler);
        }
    }

    emit(type, detail = null) {
        this.target.dispatchEvent(new CustomEvent(type, { detail }));
    }
}
