import Navbar from "./interface/Nav";
import Contact from "./interface/Contact";

// UI is now purely presentational: it injects the static layout (nav + contact).
// View routing and the related scene transitions are handled by the Router + EventBus.
export default class UI {
    constructor() {
        this.initHTML();
    }

    initHTML() {
        document.getElementById("ui").innerHTML = Navbar();
        document.getElementById("contact").innerHTML = Contact();
    }
}
