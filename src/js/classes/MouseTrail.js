import { CanvasTexture, LinearFilter } from 'three';

// 2D canvas that follows the cursor with a thick black trail on white.
// Wrapped in a CanvasTexture so the fluid sim can sample it each frame.
export default class MouseTrail {
    constructor(width = 512, height = 512) {
        this.width = width;
        this.height = height;
        this.opacity = 0;
        this.targetX = width * 0.5;
        this.targetY = height * 0.5;
        this.currentX = null;
        this.currentY = null;
        this.lastX = 0;
        this.lastY = 0;

        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');
        this.lineWidth = Math.max(width * 0.18, 80);

        this.ctx.fillStyle = 'white';
        this.ctx.fillRect(0, 0, width, height);

        this.texture = new CanvasTexture(this.canvas);
        this.texture.minFilter = LinearFilter;
        this.texture.magFilter = LinearFilter;
        this.texture.generateMipmaps = false;
    }

    setTarget(nx, ny) {
        this.targetX = nx * this.width;
        this.targetY = ny * this.height;
    }

    tick() {
        if (this.currentX === null) {
            this.currentX = this.targetX;
            this.currentY = this.targetY;
            this.lastX = this.targetX;
            this.lastY = this.targetY;
            return;
        }

        // Damped follow.
        this.currentX += (this.targetX - this.currentX) * 0.18;
        this.currentY += (this.targetY - this.currentY) * 0.18;

        const moved = Math.hypot(this.currentX - this.lastX, this.currentY - this.lastY);
        // Ramp opacity up while moving, decay quickly when idle.
        if (moved > 0.5) {
            this.opacity = Math.min(1, this.opacity + 0.15);
        } else {
            this.opacity *= 0.85;
        }

        const { ctx, canvas, lineWidth } = this;
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (this.opacity > 0.01) {
            ctx.beginPath();
            ctx.moveTo(this.lastX, this.lastY);
            ctx.lineTo(this.currentX, this.currentY);
            ctx.lineCap = 'round';
            ctx.lineWidth = lineWidth;
            ctx.strokeStyle = `rgba(0, 0, 0, ${this.opacity})`;
            ctx.stroke();
        }

        this.lastX = this.currentX;
        this.lastY = this.currentY;
        this.texture.needsUpdate = true;
    }

    dispose() {
        this.texture.dispose();
    }
}
