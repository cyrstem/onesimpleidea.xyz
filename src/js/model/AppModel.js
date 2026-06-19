import { Vector2 } from "three";
import { Component } from "@alienkitty/space.js";

export default class AppModel extends Component {
  constructor(container) {
    super();

    this.container = container;
    this.mouse = new Vector2();
    this.pointerUv = new Vector2(0.5, 0.5);
    this.isLowPowerDevice = this.detectLowPowerDevice();

    this.state = {
      animating: false,
      width: Math.max(1, Math.floor(container.clientWidth)),
      height: Math.max(1, Math.floor(container.clientHeight)),
      frameTick: 0,
      aboutOpen: false,
      aboutTransition: 0,
      aboutTransitioning: false,
      glitchStrength: 0,
      glitchUntil: 0,
      pointerRevealActive: false
    };

    this.config = this.createConfig();
  }

  detectLowPowerDevice() {
    return (
      window.matchMedia("(max-width: 900px)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  createConfig() {
    return {
      GRID_COLS: this.isLowPowerDevice ? 32 : 46,
      GRID_ROWS: this.isLowPowerDevice ? 20 : 30,
      GRID_SPREAD: this.isLowPowerDevice ? 0.38 : 0.34,
      GRID_POINT_SIZE: this.isLowPowerDevice ? 0.2 : 0.14,
      GRID_GENE_AMPLITUDE: 2.35,
      GRID_MUTATION: 0.24,
      GRID_GA_PASSES_PER_FRAME: this.isLowPowerDevice ? 120 : 260,
      CAMERA_DISTANCE: 30,
      SHADER_CONTAINER_SIZE: this.isLowPowerDevice ? 360 : 600,
      MAX_PIXEL_RATIO: this.isLowPowerDevice ? 1.25 : 2,
      TEXTURE_URLS: ["insta-0.png", "insta-1.png", "insta-2.png", "insta-3.png"]
    };
  }

  setViewport(width, height) {
    this.state.width = Math.max(1, Math.floor(width));
    this.state.height = Math.max(1, Math.floor(height));
  }

  setPointerFromEvent(event) {
    const rect = this.container.getBoundingClientRect();
    const nx = (event.clientX - rect.left) / Math.max(rect.width, 1);
    const ny = (event.clientY - rect.top) / Math.max(rect.height, 1);

    this.mouse.x = nx * 2 - 1;
    this.mouse.y = -(ny * 2 - 1);
    this.pointerUv.set(nx, 1 - ny);
    this.state.pointerRevealActive = true;
  }
}
