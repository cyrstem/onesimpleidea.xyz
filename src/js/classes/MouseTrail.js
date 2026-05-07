import { CanvasTexture, LinearFilter } from "three";

/**
 * Black-on-white stroke texture for the fluid sim (Codrops dual-scene fluid mask pattern).
 */
export default class MouseTrail {
  constructor(width, height) {
    this.canvas = document.createElement("canvas");
    this.texture = null;
    this.currentX = null;
    this.currentY = null;
    this.lastX = null;
    this.lastY = null;
    this.opacity = 0;
    this.resize(width, height);
  }

  resize(width, height) {
    const w = Math.max(8, Math.floor(width));
    const h = Math.max(8, Math.floor(height));
    this.canvas.width = w;
    this.canvas.height = h;
    this.ctx = this.canvas.getContext("2d");
    // Trail radius in fluid texels — keep modest so reveal stays a fine “brush” not a slab.
    this.lineWidth = Math.max(w * 0.045, 18);
    if (!this.texture) {
      this.texture = new CanvasTexture(this.canvas);
      this.texture.minFilter = LinearFilter;
      this.texture.magFilter = LinearFilter;
      this.texture.generateMipmaps = false;
    }
    this.clear();
  }

  clear() {
    if (!this.ctx) return;
    this.ctx.fillStyle = "rgb(255,255,255)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.currentX = null;
    this.currentY = null;
    this.lastX = null;
    this.lastY = null;
    this.opacity = 0;
    if (this.texture) this.texture.needsUpdate = true;
  }

  #lerp(targetX, targetY) {
    const k = 0.38;
    this.currentX += (targetX - this.currentX) * k;
    this.currentY += (targetY - this.currentY) * k;
  }

  #updateOpacity(dx, dy) {
    const speed = Math.sqrt(dx * dx + dy * dy);
    if (speed > 0.35) {
      this.opacity = Math.min(1, this.opacity + 0.22);
    } else {
      this.opacity *= 0.94;
    }
    if (this.opacity < 0.02) this.opacity = 0;
  }

  /**
   * @param {number} nx normalized X [0,1] left→right
   * @param {number} ny normalized Y [0,1] top→bottom (canvas space; pass `1 - pointerUv.y` from App).
   */
  update(nx, ny) {
    const targetX = nx * this.canvas.width;
    const targetY = ny * this.canvas.height;

    if (this.currentX === null) {
      this.currentX = targetX;
      this.currentY = targetY;
      this.lastX = targetX;
      this.lastY = targetY;
      this.opacity = 1;
      this.#draw();
      this.texture.needsUpdate = true;
      return;
    }

    const lx = this.lastX;
    const ly = this.lastY;
    this.#lerp(targetX, targetY);
    this.#updateOpacity(this.currentX - lx, this.currentY - ly);

    this.#draw();

    this.lastX = this.currentX;
    this.lastY = this.currentY;
    this.texture.needsUpdate = true;
  }

  #draw() {
    const { canvas, ctx, lineWidth } = this;
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (this.opacity > 0.008 && this.lastX !== null) {
      ctx.beginPath();
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(this.currentX, this.currentY);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = `rgba(0,0,0,${this.opacity})`;
      ctx.stroke();
    }
  }

  dispose() {
    if (this.texture) this.texture.dispose();
    this.texture = null;
  }
}
