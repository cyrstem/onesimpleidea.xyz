import Navbar from "./interface/Nav";
import Contact from "./interface/Contact";
import About from "./pages/About";

export default class UI {
  constructor({ onAboutToggle } = {}) {
    this.onAboutToggle = onAboutToggle;
    this.aboutOpen = false;
    this.initHTML();
    this.addListeners();
    this.render();
  }

  initHTML() {
    const uiRoot = document.getElementById("ui");
    const contactRoot = document.getElementById("contact");
    if (uiRoot) uiRoot.innerHTML = Navbar();
    if (contactRoot) contactRoot.innerHTML = Contact();
  }

  addListeners() {
    this.nav = document.getElementById("nav");
    if (!this.nav) return;
    this.handleNavClickBound = this.handleNavClick.bind(this);
    this.nav.addEventListener("click", this.handleNavClickBound);
  }

  handleNavClick(event) {
    const btn = event.target.closest("[data-view='about']");
    if (!btn) return;
    event.preventDefault();
    this.aboutOpen = !this.aboutOpen;
    this.updateNavState();
    this.render();
    if (typeof this.onAboutToggle === "function") {
      this.onAboutToggle(this.aboutOpen);
    }
  }

  updateNavState() {
    if (!this.nav) return;
    const btn = this.nav.querySelector("[data-view='about']");
    if (!btn) return;
    btn.classList.toggle("is-active", this.aboutOpen);
    btn.setAttribute("aria-pressed", this.aboutOpen ? "true" : "false");
  }

  render() {
    const terminal = document.getElementById("terminal");
    if (!terminal) return;
    terminal.innerHTML = this.aboutOpen ? About() : "";
  }

  destroy() {
    if (this.nav && this.handleNavClickBound) {
      this.nav.removeEventListener("click", this.handleNavClickBound);
    }
  }
}
