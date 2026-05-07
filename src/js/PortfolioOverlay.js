import { PORTFOLIO_ITEMS } from "./data/portfolioItems";

export default class PortfolioOverlay {
  constructor(root) {
    this.root = root;
    this.detailEl = null;
    this.layerEl = null;
    this.titleStripEl = null;
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onCloseFromUi = () => this.closeDetail();

    if (!this.root) return;

    this._build();
    document.addEventListener("keydown", this._onKeyDown);
    document.addEventListener("portfolio:closeDetail", this._onCloseFromUi);
  }

  _build() {
    this.root.classList.add("portfolio-root");
    this.root.innerHTML = "";

    this.titleStripEl = document.createElement("div");
    this.titleStripEl.className = "portfolio-title-strip";
    this.titleStripEl.setAttribute("aria-label", "Projects");

    PORTFOLIO_ITEMS.forEach(item => {
      const label = document.createElement("button");
      label.type = "button";
      label.className = "portfolio-title-item";
      label.dataset.portfolioId = item.id;
      label.textContent = item.title;
      label.addEventListener("click", () => this.openDetail(item));
      this.titleStripEl.appendChild(label);
    });

    this.layerEl = document.createElement("div");
    this.layerEl.className = "portfolio-float-layer";

    const trackEl = document.createElement("div");
    trackEl.className = "portfolio-float-track";

    PORTFOLIO_ITEMS.forEach(item => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "portfolio-card";
      card.dataset.portfolioId = item.id;
      card.setAttribute("aria-label", `Open project: ${item.title}`);

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.title;
      img.decoding = "async";
      img.loading = "lazy";
      card.appendChild(img);

      card.addEventListener("click", () => this.openDetail(item));
      trackEl.appendChild(card);
    });

    this.layerEl.appendChild(trackEl);

    this.detailEl = document.createElement("div");
    this.detailEl.className = "portfolio-detail";
    this.detailEl.hidden = true;
    this.detailEl.setAttribute("role", "dialog");
    this.detailEl.setAttribute("aria-modal", "true");
    this.detailEl.setAttribute("aria-label", "Project details");

    this.detailEl.innerHTML = `
      <div class="portfolio-detail__inner">
        <button type="button" class="portfolio-detail__close" aria-label="Close">×</button>
        <h2 class="portfolio-detail__title"></h2>
        <div class="portfolio-detail__body"></div>
      </div>
    `;

    const closeBtn = this.detailEl.querySelector(".portfolio-detail__close");
    closeBtn.addEventListener("click", () => this.closeDetail());

    this.root.appendChild(this.titleStripEl);
    this.root.appendChild(this.layerEl);
    this.root.appendChild(this.detailEl);
  }

  _clearActive() {
    this.layerEl?.querySelectorAll(".portfolio-card--active").forEach(c => c.classList.remove("portfolio-card--active"));
    this.titleStripEl?.querySelectorAll(".portfolio-title-item--active").forEach(el => el.classList.remove("portfolio-title-item--active"));
  }

  openDetail(item) {
    if (!this.detailEl) return;
    this._clearActive();

    this.layerEl?.querySelector(`.portfolio-card[data-portfolio-id="${item.id}"]`)?.classList.add("portfolio-card--active");
    this.titleStripEl?.querySelector(`.portfolio-title-item[data-portfolio-id="${item.id}"]`)?.classList.add("portfolio-title-item--active");

    const title = this.detailEl.querySelector(".portfolio-detail__title");
    const body = this.detailEl.querySelector(".portfolio-detail__body");
    title.textContent = item.title;
    body.innerHTML = item.html;
    this.detailEl.hidden = false;
    document.body.classList.add("portfolio-detail-open");
    this.detailEl.querySelector(".portfolio-detail__close")?.focus();
  }

  closeDetail() {
    if (!this.detailEl) return;
    this._clearActive();
    this.detailEl.hidden = true;
    document.body.classList.remove("portfolio-detail-open");
  }

  _onKeyDown(e) {
    if (e.key === "Escape" && this.detailEl && !this.detailEl.hidden) {
      this.closeDetail();
    }
  }

  destroy() {
    document.removeEventListener("keydown", this._onKeyDown);
    document.removeEventListener("portfolio:closeDetail", this._onCloseFromUi);
    if (this.root) {
      this.root.innerHTML = "";
      this.root.classList.remove("portfolio-root");
    }
    document.body.classList.remove("portfolio-detail-open");
  }
}
