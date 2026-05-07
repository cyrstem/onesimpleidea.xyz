import {
  Scene,
  WebGLRenderer,
  Vector2,
  Vector3,
  Fog,
  WebGLRenderTarget,
  OrthographicCamera,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  MeshBasicMaterial,
  CanvasTexture,
  DoubleSide,
  LinearFilter,
  RGBAFormat,
  DataTexture,
  TextureLoader,
  LoadingManager,
  PointLight,
  RepeatWrapping
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Debug from "./utils/Debug";
import gsap from "gsap";
import UI from "./UI";
import { throttle } from "./utils/Utils";
import postVert from "./shader/postVert.glsl";
import postFrag from "./shader/postFrag.glsl";

export default class App {
  constructor(stage) {
    this.render = this.render.bind(this);
    this.init(stage);
    this.setupScene();
    this.setupLights();
    this.bootstrap();
  }

  init(stage) {
    this.container = stage.dom;
    this.debug = new Debug();
    this.mouse = new Vector2();
    this.pointerUv = new Vector2(0.5, 0.5);
    this.textureCache = new Map();
    this.tempVecA = new Vector3();
    this.tempVecB = new Vector3();
    this.tempVecC = new Vector3();

    this.state = {
      animating: false,
      width: Math.max(1, Math.floor(this.container.clientWidth)),
      height: Math.max(1, Math.floor(this.container.clientHeight)),
      frameTick: 0,
      aboutOpen: false,
      aboutTransition: 0,
      aboutTransitioning: false,
      glitchStrength: 0,
      glitchUntil: 0,
      pointerRevealActive: false
    };

    this.ui = new UI({
      onAboutToggle: this.handleAboutToggle.bind(this)
    });

    this.isLowPowerDevice =
      window.matchMedia("(max-width: 900px)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    this.frameId = null;
    this.bottomText = null;
    this.managersReady = false;
    this.aboutCanvas = null;
    this.aboutTexture = null;
    this.aboutMesh = null;

    this.config = {
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

  async bootstrap() {
    await this.setupManagers();
    this.setupEvents();
    this.showIntro();
    this.render();
  }

  setupScene() {
    this.scene = new Scene();
    this.scene.fog = new Fog(0xc6c6c6, 4, 52);

    this.renderer = new WebGLRenderer({
      antialias: !this.isLowPowerDevice,
      powerPreference: "high-performance"
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.config.MAX_PIXEL_RATIO));
    this.renderer.setSize(this.state.width, this.state.height);
    this.renderer.setClearColor(0xc8c8c8, 1);
    this.container.appendChild(this.renderer.domElement);
    this.setupPostProcessing();
  }

  setupPostProcessing() {
    this.postScene = new Scene();
    this.postCamera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.renderTarget = new WebGLRenderTarget(this.state.width, this.state.height, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RGBAFormat
    });

    const ph = new Uint8Array([240, 240, 240, 255]);
    this.portfolioPlaceholderTex = new DataTexture(ph, 1, 1, RGBAFormat);
    this.portfolioPlaceholderTex.needsUpdate = true;

    this.postMaterial = new ShaderMaterial({
      uniforms: {
        uScene: { value: null },
        uTime: { value: 0 },
        uResolution: { value: new Vector2(this.state.width, this.state.height) },
        uIntensity: { value: this.isLowPowerDevice ? 0.3 : 0.51 },
        uActive: { value: 0 },
        uAboutTransition: { value: 0 },
        uAboutOpen: { value: 0 },
        uAboutMorphing: { value: 0 },
        uRevealPointer: { value: new Vector2(0.5, 0.5) },
        uRevealActive: { value: 0 },
        uRevealRadius: { value: 0.26 },
        uAreaCenter: { value: new Vector2(0.5, 0.5) },
        uAreaRadius: { value: new Vector2(0.36, 0.3) },
        uPort0: { value: this.portfolioPlaceholderTex },
        uPort1: { value: this.portfolioPlaceholderTex },
        uPort2: { value: this.portfolioPlaceholderTex },
        uPort3: { value: this.portfolioPlaceholderTex }
      },
      vertexShader: postVert,
      fragmentShader: postFrag
    });

    this.postQuad = new Mesh(new PlaneGeometry(2, 2), this.postMaterial);
    this.postScene.add(this.postQuad);
  }

  setupLights() {
    const lightPositions = [
      [0.2, 0, 0],
      [0, 0, 0]
    ];
    this.lights = lightPositions.map(pos => {
      const light = new PointLight(0xffffff, 1, 0);
      light.position.set(...pos);
      this.scene.add(light);
      return light;
    });
  }

  async setupManagers() {
    const [{ default: GeneticGrid }, { default: CameraManager }] = await Promise.all([
      import("./classes/GeneticGrid"),
      import("./classes/CameraManager")
    ]);

    this.cameraManager = new CameraManager(this.config);
    this.cameraManager.resize(this.state.width, this.state.height);
    this.geneticGrid = new GeneticGrid(this.scene, this.config);
    this.fitGeneticGridToViewport();
    this.setupAboutPanel();
    this.loadTextures();
    this.managersReady = true;

    if (this.debug.active) {
      this.setupDebugControls();
    }
  }

  setupDebugControls() {
    this.controls = new OrbitControls(this.cameraManager.getCamera(), this.renderer.domElement);
    this.debugFolder = this.debug.ui.addFolder("material");
    this.materialParams = {
      color: "#000000"
    };

    this.debugFolder.addColor(this.materialParams, "color").onChange(() => this.updateMaterials());
  }

  updateMaterials() {
    const c = this.materialParams.color;
    const meshes = this.geneticGrid?.getPickMeshes() || [];
    meshes.forEach(mesh => {
      if (mesh.material?.color) mesh.material.color.set(c);
    });
  }

  loadTextures() {
    const manager = new LoadingManager(() => this.assignPortfolioTexturesToPostShader());
    const loader = new TextureLoader(manager);
    this.textures = this.config.TEXTURE_URLS.map(url => {
      if (this.textureCache.has(url)) return this.textureCache.get(url);
      const texture = loader.load(url);
      this.textureCache.set(url, texture);
      return texture;
    });
    setTimeout(() => this.assignPortfolioTexturesToPostShader(), 0);
  }

  assignPortfolioTexturesToPostShader() {
    if (!this.postMaterial?.uniforms || !this.textures?.length) return;
    this.textures.forEach((tex, i) => {
      if (!tex || i > 3) return;
      tex.wrapS = tex.wrapT = RepeatWrapping;
      tex.minFilter = tex.magFilter = LinearFilter;
      const u = this.postMaterial.uniforms[`uPort${i}`];
      if (u) u.value = tex;
    });
  }

  setupEvents() {
    this.handleResize = throttle(this.resize.bind(this), 100);
    this.handleMouseMove = throttle(this.onMouseMove.bind(this), 16);
    this.handleBottomTextHoverBound = this.handleBottomTextHover.bind(this);

    window.addEventListener("resize", this.handleResize);
    if (typeof ResizeObserver !== "undefined" && this.container) {
      this._resizeObserver = new ResizeObserver(() => this.handleResize());
      this._resizeObserver.observe(this.container);
    }
    if (!this.isLowPowerDevice) {
      window.addEventListener("mousemove", this.handleMouseMove);
    } else if (this.container) {
      this.handlePointerMoveBound = this.handlePointerMove.bind(this);
      this.container.addEventListener("pointermove", this.handlePointerMoveBound);
      this.container.addEventListener("pointerdown", this.handlePointerMoveBound);
    }

    this.bottomText = document.getElementById("bottom-text");
    if (this.bottomText && !this.isLowPowerDevice) {
      this.bottomText.addEventListener("mouseenter", this.handleBottomTextHoverBound);
    }

    requestAnimationFrame(() => this.resize());
  }

  async handleAboutToggle(isOpen) {
    if (isOpen) {
      this.state.glitchUntil = 0;
      this.geneticGrid.animateDissolveAscent(0.95);
      await this.playAboutTransition();
      this.state.aboutOpen = true;
      this.showAbout();
      return;
    }

    this.state.aboutOpen = false;
    this.state.aboutTransition = 0;
    if (this.postMaterial) {
      this.postMaterial.uniforms.uAboutTransition.value = 0;
    }
    this.showIntro();
  }

  playAboutTransition() {
    if (this.state.aboutTransitioning) {
      return Promise.resolve();
    }

    this.state.aboutTransitioning = true;
    this.state.aboutTransition = 0;

    return new Promise(resolve => {
      gsap.to(this.state, {
        aboutTransition: 1,
        duration: 0.95,
        ease: "power2.inOut",
        onComplete: () => {
          this.state.aboutTransitioning = false;
          this.state.aboutTransition = 0;
          if (this.postMaterial) {
            this.postMaterial.uniforms.uAboutTransition.value = 0;
          }
          resolve();
        }
      });
    });
  }

  showIntro() {
    if (!this.geneticGrid) return;
    if (this.aboutMesh) this.aboutMesh.visible = false;
    this.geneticGrid.restoreLayout();
    this.geneticGrid.getMain().visible = true;
    this.geneticGrid.getGeos().position.set(0, 0, 0);
    this.geneticGrid.getGeos().rotation.set(0, 0, 0);
    this.geneticGrid.showGrid();
    this.state.pointerRevealActive = false;
    if (this.postMaterial) {
      this.postMaterial.uniforms.uRevealActive.value = 0;
    }
  }

  showAbout() {
    if (!this.geneticGrid) return;
    this.geneticGrid.hideGrid();
    if (this.aboutMesh) {
      this.aboutMesh.visible = true;
      this.drawAboutCanvas();
      if (this.aboutTexture) this.aboutTexture.needsUpdate = true;
    }
  }

  setupAboutPanel() {
    this.aboutCanvas = document.createElement("canvas");
    this.aboutCanvas.width = 2048;
    this.aboutCanvas.height = 1365;
    this.drawAboutCanvas();

    this.aboutTexture = new CanvasTexture(this.aboutCanvas);
    this.aboutTexture.needsUpdate = true;

    this.aboutMaterial = new MeshBasicMaterial({
      map: this.aboutTexture,
      transparent: false,
      fog: false,
      depthTest: false,
      depthWrite: false,
      side: DoubleSide
    });

    this.aboutMesh = new Mesh(new PlaneGeometry(20, 13), this.aboutMaterial);
    this.aboutMesh.position.set(0, -0.15, 0.4);
    this.aboutMesh.renderOrder = 20;
    this.aboutMesh.visible = false;
    this.scene.add(this.aboutMesh);
    this.updateAboutPanelLayout();

    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        this.drawAboutCanvas();
        if (this.aboutTexture) this.aboutTexture.needsUpdate = true;
      });
    }
  }

  drawAboutCanvas() {
    if (!this.aboutCanvas) return;
    const ctx = this.aboutCanvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = this.aboutCanvas;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(239,239,239,0.97)";
    ctx.fillRect(0, 0, width, height);

    const marginX = 260;
    let y = 180;
    const maxWidth = Math.min(1320, width - marginX * 2);

    ctx.fillStyle = "#111111";
    ctx.font = "700 58px Rajdhani, sans-serif";
    ctx.fillText("About", marginX, y);
    y += 88;

    ctx.fillStyle = "#202020";
    ctx.font = "500 46px Rajdhani, sans-serif";
    y = this.drawWrappedText(
      ctx,
      "I'm Jacob, a Creative Developer and Front-End Developer based in Quito - Ecuador, specialized in building custom digital or physical experiences.",
      marginX,
      y,
      maxWidth,
      62
    );
    y += 26;

    y = this.drawWrappedText(
      ctx,
      "Self-taught developer, fast learner that works with WebGL, JS, C++, OpenGL, GLSL and recently working with Machine Learning, Computational Thinking, AI and Unreal Engine.",
      marginX,
      y,
      maxWidth,
      62
    );
    y += 36;

    ctx.fillStyle = "#131313";
    ctx.font = "700 52px Rajdhani, sans-serif";
    ctx.fillText("I have collaborated with:", marginX, y);
    y += 84;

    const items = [
      "the Garden in the machine -- Creative Developer",
      "Active Theory -- WebGL Developer",
      "Visual Goodness -- WebGL Developer",
      "Smartco -- Unity Developer",
      "YaEsta -- Front-end & Designer"
    ];

    ctx.fillStyle = "#202020";
    ctx.font = "500 44px Rajdhani, sans-serif";
    items.forEach(item => {
      ctx.fillText(`• ${item}`, marginX + 24, y);
      y += 72;
    });

    y += 28;
    ctx.fillStyle = "#141414";
    ctx.font = "600 48px Rajdhani, sans-serif";
    ctx.fillText("Contact me at cyrstem[at]gmail[dot]com", marginX, y);
  }

  drawWrappedText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(" ");
    let line = "";
    let cursorY = y;

    words.forEach(word => {
      const testLine = `${line}${word} `;
      const metrics = ctx.measureText(testLine);
      if (metrics.width > maxWidth && line !== "") {
        ctx.fillText(line.trimEnd(), x, cursorY);
        line = `${word} `;
        cursorY += lineHeight;
      } else {
        line = testLine;
      }
    });

    if (line) {
      ctx.fillText(line.trimEnd(), x, cursorY);
      cursorY += lineHeight;
    }

    return cursorY;
  }

  updateAboutPanelLayout() {
    if (!this.aboutMesh || !this.cameraManager) return;
    const camera = this.cameraManager.getCamera();
    const distance = camera.position.z - this.aboutMesh.position.z;
    const visibleHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * distance;
    const visibleWidth = visibleHeight * camera.aspect;
    this.aboutMesh.scale.set(visibleWidth * 0.95, visibleHeight * 0.92, 1);
  }

  handlePointerMove(event) {
    if (this.state.aboutOpen) return;
    this.updateMousePosition(event);
    this.handleGridInteraction();
  }

  onMouseMove(event) {
    if (this.state.aboutOpen) return;
    this.updateMousePosition(event);
    this.handleGridInteraction();
  }

  updateMousePosition(event) {
    const r = this.container.getBoundingClientRect();
    const nx = (event.clientX - r.left) / Math.max(r.width, 1);
    const ny = (event.clientY - r.top) / Math.max(r.height, 1);
    this.mouse.x = nx * 2 - 1;
    this.mouse.y = -(ny * 2 - 1);
    this.pointerUv.set(nx, 1 - ny);
    if (!this.state.pointerRevealActive) {
      this.state.pointerRevealActive = true;
    }
  }

  handleGridInteraction() {
    this.geneticGrid.setMouseWorld(this.mouse.x * 14, this.mouse.y * 11, 1);
  }

  handleBottomTextHover() {
    this.geneticGrid?.pulseRandomDot();
  }

  resize() {
    const w = Math.max(1, Math.floor(this.container.clientWidth));
    const h = Math.max(1, Math.floor(this.container.clientHeight));
    this.state.width = w;
    this.state.height = h;

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.config.MAX_PIXEL_RATIO));
    this.renderer.setSize(w, h);
    if (this.renderTarget) this.renderTarget.setSize(w, h);
    if (this.postMaterial) {
      this.postMaterial.uniforms.uResolution.value.set(this.state.width, this.state.height);
    }
    if (this.cameraManager) {
      this.cameraManager.resize(this.state.width, this.state.height);
    }
    this.fitGeneticGridToViewport();
    this.updateAboutPanelLayout();
  }

  /**
   * Scales the grid so its XY extent fills the perspective frustum at z≈0.
   * Scene is rendered into {@link renderTarget} at full viewport size before the post pass.
   */
  fitGeneticGridToViewport() {
    if (!this.geneticGrid || !this.cameraManager) return;
    const camera = this.cameraManager.getCamera();
    const geos = this.geneticGrid.getGeos();
    const d = Math.abs(camera.position.z);
    const vFOV = (camera.fov * Math.PI) / 180;
    const halfVisibleH = d * Math.tan(vFOV / 2);
    const halfVisibleW = halfVisibleH * camera.aspect;

    const halfW = ((this.config.GRID_COLS - 1) * this.config.GRID_SPREAD) / 2;
    const halfH = ((this.config.GRID_ROWS - 1) * this.config.GRID_SPREAD) / 2;
    const margin = 0.99;
    const s = margin * Math.min(halfVisibleW / Math.max(halfW, 1e-5), halfVisibleH / Math.max(halfH, 1e-5));
    geos.scale.setScalar(s);
  }

  render() {
    if (!this.managersReady) return;

    this.state.frameTick += 1;
    const shouldUpdate = !this.isLowPowerDevice || this.state.frameTick % 2 === 0;
    if (shouldUpdate && !this.state.aboutOpen) {
      const t = performance.now() * 0.001;
      this.geneticGrid.update(t, this.state.aboutTransitioning);
    }

    this.frameId = requestAnimationFrame(this.render);
    this.renderWithPostProcessing();
  }

  renderWithPostProcessing() {
    if (!this.renderTarget || !this.postMaterial) {
      this.renderer.render(this.scene, this.cameraManager.getCamera());
      return;
    }

    const now = performance.now();
    this.postMaterial.uniforms.uTime.value = now * 0.001;
    const aboutMorph = this.state.aboutTransitioning ? this.state.aboutTransition : 0;
    this.postMaterial.uniforms.uAboutTransition.value = aboutMorph;
    this.postMaterial.uniforms.uAboutOpen.value = this.state.aboutOpen ? 1 : 0;
    this.postMaterial.uniforms.uAboutMorphing.value = this.state.aboutTransitioning ? 1 : 0;
    this.postMaterial.uniforms.uRevealPointer.value.copy(this.pointerUv);
    this.postMaterial.uniforms.uRevealActive.value = this.state.pointerRevealActive ? 1 : 0;
    this.updateGlitchState(now);
    this.updateGridAreaMask();

    this.renderer.setRenderTarget(this.renderTarget);
    this.renderer.render(this.scene, this.cameraManager.getCamera());

    this.postMaterial.uniforms.uScene.value = this.renderTarget.texture;
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.postScene, this.postCamera);
  }

  updateGlitchState(now) {
    const target = !this.state.aboutOpen && now < this.state.glitchUntil ? 1 : 0;
    this.state.glitchStrength += (target - this.state.glitchStrength) * 0.12;
    this.postMaterial.uniforms.uActive.value = this.state.glitchStrength;
  }

  updateGridAreaMask() {
    if (!this.geneticGrid || !this.cameraManager || !this.postMaterial) return;

    const geos = this.geneticGrid.getGeos();
    const camera = this.cameraManager.getCamera();
    const halfW = ((this.config.GRID_COLS - 1) * this.config.GRID_SPREAD) / 2;
    const halfH = ((this.config.GRID_ROWS - 1) * this.config.GRID_SPREAD) / 2;

    const center = geos.getWorldPosition(this.tempVecA).clone().project(camera);
    const xEdge = geos.localToWorld(this.tempVecB.set(halfW * 0.92, 0, 0)).clone().project(camera);
    const yEdge = geos.localToWorld(this.tempVecC.set(0, halfH * 0.92, 0)).clone().project(camera);

    const centerUvX = center.x * 0.5 + 0.5;
    const centerUvY = center.y * -0.5 + 0.5;

    const radiusX = Math.max(0.12, Math.min(0.55, Math.abs(xEdge.x - center.x) * 1.05));
    const radiusY = Math.max(0.12, Math.min(0.55, Math.abs(yEdge.y - center.y) * 1.15));

    this.postMaterial.uniforms.uAreaCenter.value.set(centerUvX, centerUvY);
    this.postMaterial.uniforms.uAreaRadius.value.set(radiusX, radiusY);
  }

  dispose() {
    this.removeEventListeners();
    this.cleanupResources();
    this.ui.destroy();
  }

  removeEventListeners() {
    window.removeEventListener("resize", this.handleResize);
    if (this._resizeObserver && this.container) {
      this._resizeObserver.unobserve(this.container);
      this._resizeObserver.disconnect();
      this._resizeObserver = null;
    }
    if (this.isLowPowerDevice && this.container && this.handlePointerMoveBound) {
      this.container.removeEventListener("pointermove", this.handlePointerMoveBound);
      this.container.removeEventListener("pointerdown", this.handlePointerMoveBound);
    }
    if (!this.isLowPowerDevice) {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
    if (this.bottomText) {
      this.bottomText.removeEventListener("mouseenter", this.handleBottomTextHoverBound);
    }
  }

  cleanupResources() {
    if (this.frameId) cancelAnimationFrame(this.frameId);

    this.scene.traverse(object => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (object.material.map) object.material.map.dispose();
        object.material.dispose();
      }
    });

    this.textureCache.forEach(texture => texture.dispose());
    this.textureCache.clear();

    this.renderer.dispose();
    if (this.controls) this.controls.dispose();
    if (this.renderTarget) this.renderTarget.dispose();
    if (this.postQuad?.geometry) this.postQuad.geometry.dispose();
    if (this.postMaterial) this.postMaterial.dispose();
    if (this.portfolioPlaceholderTex) this.portfolioPlaceholderTex.dispose();
    if (this.aboutTexture) this.aboutTexture.dispose();
    if (this.aboutMesh?.geometry) this.aboutMesh.geometry.dispose();
    if (this.aboutMaterial) this.aboutMaterial.dispose();

  }
}
