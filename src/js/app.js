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
import { getFrustum, getFullscreenTriangle, ticker, tween, clearTween } from "@alienkitty/space.js/three";
import { Wobble } from "@alienkitty/alien.js/three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Debug from "./utils/Debug";
import UI from "./UI";
import { throttle } from "./utils/Utils";
import postVert from "./shader/postVert.glsl";
import postFrag from "./shader/postFrag.glsl";
import AppModel from "./model/AppModel";
import PortfolioFlowScene from "./classes/PortfolioFlowScene";
import { PORTFOLIO_ITEMS } from "./data/portfolioItems";

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
    this.model = new AppModel(this.container);
    this.debug = new Debug();
    this.mouse = this.model.mouse;
    this.pointerUv = this.model.pointerUv;
    this.textureCache = new Map();
    this.tempVecA = new Vector3();
    this.tempVecB = new Vector3();
    this.tempVecC = new Vector3();

    this.state = this.model.state;
    this.config = this.model.config;
    this.isLowPowerDevice = this.model.isLowPowerDevice;

    this.ui = new UI({
      onAboutToggle: this.handleAboutToggle.bind(this)
    });

    this.frameId = null;
    this.bottomText = null;
    this.managersReady = false;
    this.aboutCanvas = null;
    this.aboutTexture = null;
    this.aboutMesh = null;
    this.cameraWobble = null;
    this.portfolioScene = null;
    this.portfolioFlowScene = null;

  }

  async bootstrap() {
    await this.setupManagers();
    this.setupEvents();
    this.showIntro();
    ticker.add(this.render);
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

    this.aboutBackdropTarget = new WebGLRenderTarget(this.state.width, this.state.height, {
      minFilter: LinearFilter,
      magFilter: LinearFilter,
      format: RGBAFormat
    });

    const ph = new Uint8Array([240, 240, 240, 255]);
    this.portfolioPlaceholderTex = new DataTexture(ph, 1, 1, RGBAFormat);
    this.portfolioPlaceholderTex.needsUpdate = true;

    const wm = new Uint8Array([255, 255, 255, 255]);
    this.whiteFluidMaskTex = new DataTexture(wm, 1, 1, RGBAFormat);
    this.whiteFluidMaskTex.needsUpdate = true;

    const bd = new Uint8Array([200, 200, 200, 255]);
    this.aboutBackdropPlaceholderTex = new DataTexture(bd, 1, 1, RGBAFormat);
    this.aboutBackdropPlaceholderTex.needsUpdate = true;

    this.postMaterial = new ShaderMaterial({
      uniforms: {
        uScene: { value: null },
        uSceneBackdrop: { value: this.aboutBackdropPlaceholderTex },
        uTime: { value: 0 },
        uResolution: { value: new Vector2(this.state.width, this.state.height) },
        uIntensity: { value: this.isLowPowerDevice ? 0.3 : 0.51 },
        uActive: { value: 0 },
        uAboutTransition: { value: 0 },
        uAboutOpen: { value: 0 },
        uAboutMorphing: { value: 0 },
        uRevealActive: { value: 0 },
        uFluidMask: { value: this.whiteFluidMaskTex },
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

    this.postQuad = new Mesh(getFullscreenTriangle(), this.postMaterial);
    this.postQuad.frustumCulled = false;
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
    this.cameraWobble = new Wobble(this.cameraManager.getCamera().position);
    this.cameraWobble.frequency.set(0.72, 0.46, 0.31);
    this.cameraWobble.amplitude.set(0.16, 0.12, 0.04);
    this.cameraWobble.scale = this.isLowPowerDevice ? 0.35 : 1;
    this.cameraWobble.lerpSpeed = 0.025;
    this.geneticGrid = new GeneticGrid(this.scene, this.config);
    this.portfolioScene = new Scene();
    this.portfolioFlowScene = new PortfolioFlowScene({
      renderer: this.renderer,
      items: PORTFOLIO_ITEMS,
      isLowPowerDevice: this.isLowPowerDevice,
      onSelect: item => document.dispatchEvent(new CustomEvent("portfolio:openDetail", { detail: { id: item.id } }))
    });
    this.portfolioScene.add(this.portfolioFlowScene);
    await this.portfolioFlowScene.ready();
    this.portfolioFlowScene.layout(this.state.width, this.state.height);
    document.body.classList.add("portfolio-webgl-active");
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
    this.handleSceneClickBound = this.handleSceneClick.bind(this);
    this.handlePortfolioDetailClosedBound = this.handlePortfolioDetailClosed.bind(this);

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
    this.container.addEventListener("click", this.handleSceneClickBound);
    document.addEventListener("portfolio:detailClosed", this.handlePortfolioDetailClosedBound);

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

    clearTween(this.state);

    return tween(this.state, { aboutTransition: 1 }, 950, "easeInOutCubic").then(() => {
      this.state.aboutTransitioning = false;
      this.state.aboutTransition = 0;
      if (this.postMaterial) {
        this.postMaterial.uniforms.uAboutTransition.value = 0;
      }
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
    if (this.portfolioFlowScene) this.portfolioFlowScene.visible = true;
    this.state.pointerRevealActive = false;
    if (this.postMaterial) {
      this.postMaterial.uniforms.uRevealActive.value = 0;
      this.postMaterial.uniforms.uFluidMask.value = this.whiteFluidMaskTex;
    }
  }

  showAbout() {
    if (!this.geneticGrid) return;
    this.geneticGrid.hideGrid();
    if (this.portfolioFlowScene) this.portfolioFlowScene.visible = false;
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
    const { width: visibleWidth, height: visibleHeight } = getFrustum(camera, this.aboutMesh.position.z);
    this.aboutMesh.scale.set(visibleWidth * 0.95, visibleHeight * 0.92, 1);
  }

  handlePointerMove(event) {
    if (this.state.aboutOpen) {
      this.updateMousePosition(event);
      return;
    }
    this.updateMousePosition(event);
    this.handleGridInteraction();
  }

  onMouseMove(event) {
    if (this.state.aboutOpen) {
      this.updateMousePosition(event);
      return;
    }
    this.updateMousePosition(event);
    this.handleGridInteraction();
  }

  updateMousePosition(event) {
    this.model.setPointerFromEvent(event);
    this.state.pointerRevealActive = false;
    this.portfolioFlowScene?.handlePointerMove(event, this.cameraManager.getCamera(), this.container);
  }

  handleGridInteraction() {
    this.geneticGrid.setMouseWorld(this.mouse.x * 14, this.mouse.y * 11, 1);
  }

  handleSceneClick(event) {
    this.portfolioFlowScene?.handleClick(event, this.cameraManager.getCamera(), this.container);
  }

  handlePortfolioDetailClosed() {
    this.portfolioFlowScene?.clearFocus();
  }

  handleBottomTextHover() {
    this.geneticGrid?.pulseRandomDot();
  }

  resize() {
    const w = Math.max(1, Math.floor(this.container.clientWidth));
    const h = Math.max(1, Math.floor(this.container.clientHeight));
    this.model.setViewport(w, h);

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.config.MAX_PIXEL_RATIO));
    this.renderer.setSize(w, h);
    if (this.renderTarget) this.renderTarget.setSize(w, h);
    if (this.aboutBackdropTarget) this.aboutBackdropTarget.setSize(w, h);
    if (this.postMaterial) {
      this.postMaterial.uniforms.uResolution.value.set(this.state.width, this.state.height);
    }
    if (this.cameraManager) {
      this.cameraManager.resize(this.state.width, this.state.height);
    }
    this.fitGeneticGridToViewport();
    this.portfolioFlowScene?.layout(w, h);
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
    const frustum = getFrustum(camera, 0);
    const halfVisibleH = frustum.height * 0.5;
    const halfVisibleW = frustum.width * 0.5;

    const halfW = ((this.config.GRID_COLS - 1) * this.config.GRID_SPREAD) / 2;
    const halfH = ((this.config.GRID_ROWS - 1) * this.config.GRID_SPREAD) / 2;
    const margin = 0.99;
    const s = margin * Math.min(halfVisibleW / Math.max(halfW, 1e-5), halfVisibleH / Math.max(halfH, 1e-5));
    geos.scale.setScalar(s);
  }

  render(timeSec = performance.now() * 0.001) {
    if (!this.managersReady) return;

    this.state.frameTick += 1;
    const shouldUpdate = !this.isLowPowerDevice || this.state.frameTick % 2 === 0;
    if (shouldUpdate) {
      this.cameraWobble?.update(timeSec * 0.35);
      this.geneticGrid.update(timeSec, this.state.aboutTransitioning);
      this.portfolioFlowScene?.update(timeSec);
    }

    this.renderWithPostProcessing(timeSec);
  }

  renderWithPostProcessing(timeSec = performance.now() * 0.001) {
    if (!this.renderTarget || !this.postMaterial) {
      this.renderer.render(this.scene, this.cameraManager.getCamera());
      return;
    }

    const now = performance.now();
    this.postMaterial.uniforms.uTime.value = timeSec;
    const aboutMorph = this.state.aboutTransitioning ? this.state.aboutTransition : 0;
    this.postMaterial.uniforms.uAboutTransition.value = aboutMorph;
    this.postMaterial.uniforms.uAboutOpen.value = this.state.aboutOpen ? 1 : 0;
    this.postMaterial.uniforms.uAboutMorphing.value = this.state.aboutTransitioning ? 1 : 0;
    this.postMaterial.uniforms.uRevealActive.value = this.state.pointerRevealActive ? 1 : 0;

    this.updateGlitchState(now);
    this.updateGridAreaMask();

    if (this.state.aboutOpen && this.aboutBackdropTarget && this.aboutMesh && this.geneticGrid) {
      const cam = this.cameraManager.getCamera();
      const saveAbout = this.aboutMesh.visible;
      const saveGrid = this.geneticGrid.getMain().visible;
      this.aboutMesh.visible = false;
      this.geneticGrid.getMain().visible = true;
      this.renderer.setRenderTarget(this.aboutBackdropTarget);
      this.renderer.render(this.scene, cam);
      this.aboutMesh.visible = saveAbout;
      this.geneticGrid.getMain().visible = saveGrid;
      this.renderer.setRenderTarget(null);
      this.postMaterial.uniforms.uSceneBackdrop.value = this.aboutBackdropTarget.texture;
    } else if (this.postMaterial.uniforms.uSceneBackdrop) {
      this.postMaterial.uniforms.uSceneBackdrop.value = this.aboutBackdropPlaceholderTex;
    }

    this.renderer.setRenderTarget(this.renderTarget);
    this.renderer.render(this.scene, this.cameraManager.getCamera());

    this.postMaterial.uniforms.uScene.value = this.renderTarget.texture;
    this.renderer.setRenderTarget(null);
    this.renderer.render(this.postScene, this.postCamera);
    this.renderPortfolioLayer();
  }

  renderPortfolioLayer() {
    if (!this.portfolioScene || !this.portfolioFlowScene || this.state.aboutOpen) return;

    const previousAutoClear = this.renderer.autoClear;
    this.renderer.autoClear = false;
    this.renderer.clearDepth();
    this.renderer.render(this.portfolioScene, this.cameraManager.getCamera());
    this.renderer.autoClear = previousAutoClear;
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
    ticker.remove(this.render);
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
    if (this.container && this.handleSceneClickBound) {
      this.container.removeEventListener("click", this.handleSceneClickBound);
    }
    if (this.handlePortfolioDetailClosedBound) {
      document.removeEventListener("portfolio:detailClosed", this.handlePortfolioDetailClosedBound);
    }
    if (!this.isLowPowerDevice) {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
    if (this.bottomText) {
      this.bottomText.removeEventListener("mouseenter", this.handleBottomTextHoverBound);
    }
  }

  cleanupResources() {
    clearTween(this.state);

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
    if (this.aboutBackdropTarget) this.aboutBackdropTarget.dispose();
    if (this.aboutBackdropPlaceholderTex) this.aboutBackdropPlaceholderTex.dispose();
    if (this.postQuad?.geometry) this.postQuad.geometry.dispose();
    if (this.postMaterial) this.postMaterial.dispose();
    if (this.portfolioPlaceholderTex) this.portfolioPlaceholderTex.dispose();
    if (this.whiteFluidMaskTex) this.whiteFluidMaskTex.dispose();
    if (this.aboutTexture) this.aboutTexture.dispose();
    if (this.aboutMesh?.geometry) this.aboutMesh.geometry.dispose();
    if (this.aboutMaterial) this.aboutMaterial.dispose();
    if (this.portfolioFlowScene) this.portfolioFlowScene.dispose();
    if (this.model) this.model.destroy();
    document.body.classList.remove("portfolio-webgl-active");

  }
}
