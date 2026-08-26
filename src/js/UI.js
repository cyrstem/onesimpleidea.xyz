import Navbar from "./interface/Nav";
import Contact from "./interface/Contact";

// Static chrome: identity rail (live GA stats) + contact links.
export default class UI {
    constructor(bus) {
        this.bus = bus;
        this.initHTML();
        this.bindGa();
    }

    initHTML() {
        document.getElementById("ui").innerHTML = Navbar();
        document.getElementById("contact").innerHTML = Contact();

        this.els = {
            gen: document.getElementById('ga-gen'),
            fit: document.getElementById('ga-fit'),
            avg: document.getElementById('ga-avg'),
            act: document.getElementById('ga-act')
        };
    }

    bindGa() {
        if (!this.bus) return;
        this._onGaUpdate = (detail) => this.updateGaStats(detail);
        this.bus.on('ga:update', this._onGaUpdate);
    }

    updateGaStats({ generation = 0, best = 0, mean = 0, active = 0, ready = false } = {}) {
        const { gen, fit, avg, act } = this.els;
        if (!gen || !fit || !avg || !act) return;

        gen.textContent = String(Math.max(0, generation | 0)).padStart(4, '0');
        act.textContent = String(Math.max(0, active | 0));

        if (ready) {
            fit.textContent = Number(best).toFixed(3);
            avg.textContent = Number(mean).toFixed(3);
        } else {
            fit.textContent = '--.---';
            avg.textContent = '--.---';
        }
    }
}
