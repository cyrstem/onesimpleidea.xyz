// Lightweight on-screen panel that shows the raw mouse-trail canvas and the
// post-fluid mask. Activate with `?debug-fluid` in the URL.
export default class FluidDebug {
    constructor(mouseTrail, fluidSim, renderer) {
        this.mouseTrail = mouseTrail;
        this.fluidSim = fluidSim;
        this.renderer = renderer;

        this.size = 160;

        this.wrap = document.createElement('div');
        this.wrap.style.cssText = `
            position: fixed; top: 8px; right: 8px;
            display: flex; flex-direction: column; gap: 6px;
            font: 11px/1 monospace; color: #fff;
            background: rgba(0,0,0,0.6); padding: 6px; border-radius: 4px;
            z-index: 9999; pointer-events: none;
        `;
        this.wrap.appendChild(this.#labeled('trail', mouseTrail.canvas, this.size));

        this.maskCanvas = document.createElement('canvas');
        this.maskCanvas.width = fluidSim.width;
        this.maskCanvas.height = fluidSim.height;
        this.maskCtx = this.maskCanvas.getContext('2d');
        this.maskImage = this.maskCtx.createImageData(fluidSim.width, fluidSim.height);
        this.pixelBuf = new Uint8Array(fluidSim.width * fluidSim.height * 4);
        this.wrap.appendChild(this.#labeled('mask', this.maskCanvas, this.size));

        document.body.appendChild(this.wrap);
    }

    #labeled(name, canvasEl, displaySize) {
        const box = document.createElement('div');
        const lbl = document.createElement('div');
        lbl.textContent = name;
        canvasEl.style.width = `${displaySize}px`;
        canvasEl.style.height = `${displaySize}px`;
        canvasEl.style.display = 'block';
        canvasEl.style.imageRendering = 'pixelated';
        canvasEl.style.background = '#fff';
        box.appendChild(lbl);
        box.appendChild(canvasEl);
        return box;
    }

    tick() {
        const target = this.fluidSim.getCurrentRenderTarget();
        const w = this.fluidSim.width;
        const h = this.fluidSim.height;
        this.renderer.readRenderTargetPixels(target, 0, 0, w, h, this.pixelBuf);
        // Render targets are read bottom-up; flip when copying into the canvas.
        const out = this.maskImage.data;
        for (let y = 0; y < h; y++) {
            const srcRow = (h - 1 - y) * w * 4;
            const dstRow = y * w * 4;
            for (let x = 0; x < w * 4; x++) out[dstRow + x] = this.pixelBuf[srcRow + x];
        }
        this.maskCtx.putImageData(this.maskImage, 0, 0);
    }

    dispose() {
        this.wrap.remove();
    }
}
