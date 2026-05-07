import {
  Scene,
  WebGLRenderer,
  Vector2,
  Raycaster,
  Fog,
  TextureLoader,
  LoadingManager,
  PointLight
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Debug from "./utils/Debug";
import gsap from "gsap";
import UI from "./UI";
import { throttle } from "./utils/Utils";

export default class App {
  constructor(stage) {
    this.render = this.render.bind(this);
    this.handleCubeClick = this.handleCubeClick.bind(this);
    this.init(stage);
    this.setupScene();
    this.setupLights();
    this.bootstrap();
  }

  init(stage) {
    this.container = stage.dom;
    this.debug = new Debug();
    this.mouse = new Vector2();
    this.raycaster = new Raycaster();
    this.textureCache = new Map();

    this.state = {
      animating: false,
      width: this.container.offsetWidth,
      height: this.container.offsetHeight,
      frameTick: 0,
      aboutOpen: false
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
    this.shaderManager = null;

    this.config = {
      CUBE_COUNT: this.isLowPowerDevice ? 80 : 150,
      CUBE_SIZE: this.isLowPowerDevice ? 1.25 : 1.5,
      CUBE_SPREAD: this.isLowPowerDevice ? 7 : 8,
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
    this.scene.fog = new Fog(0xeeeeee, 3, 50);

    this.renderer = new WebGLRenderer({
      antialias: !this.isLowPowerDevice,
      powerPreference: "high-performance"
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.config.MAX_PIXEL_RATIO));
    this.renderer.setSize(this.state.width, this.state.height);
    this.renderer.setClearColor(0xeeeeee, 1);
    this.container.appendChild(this.renderer.domElement);
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
    const [{ default: CubeManager }, { default: CameraManager }] = await Promise.all([
      import("./classes/CubeManager"),
      import("./classes/CameraManager")
    ]);

    this.cameraManager = new CameraManager(this.config);
    this.cubeManager = new CubeManager(this.scene, this.config);
    this.loadTextures();
    this.managersReady = true;

    if (this.debug.active) {
      this.setupDebugControls();
    }
  }

  async ensureShaderManager() {
    if (this.shaderManager) return this.shaderManager;
    const module = await import("./classes/ShaderManager");
    this.shaderManager = new module.default(this.config);
    return this.shaderManager;
  }

  setupDebugControls() {
    this.controls = new OrbitControls(this.cameraManager.getCamera(), this.renderer.domElement);
    this.debugFolder = this.debug.ui.addFolder("material");
    this.materialParams = {
      color: "#111111",
      emissive: "#000000",
      specular: "#111111"
    };

    ["color", "emissive", "specular"].forEach(param => {
      this.debugFolder.addColor(this.materialParams, param).onChange(() => this.updateMaterials());
    });
  }

  updateMaterials() {
    const cubes = this.cubeManager?.getCubes() || [];
    cubes.forEach(cube => {
      cube.material.color.set(this.materialParams.color);
      cube.material.emissive.set(this.materialParams.emissive);
      cube.material.specular.set(this.materialParams.specular);
    });
  }

  loadTextures() {
    const manager = new LoadingManager(() => {});
    const loader = new TextureLoader(manager);
    this.textures = this.config.TEXTURE_URLS.map(url => {
      if (this.textureCache.has(url)) return this.textureCache.get(url);
      const texture = loader.load(url);
      this.textureCache.set(url, texture);
      return texture;
    });
  }

  setupEvents() {
    this.handleResize = throttle(this.resize.bind(this), 250);
    this.handleMouseMove = throttle(this.onMouseMove.bind(this), 16);
    this.handleBottomTextHoverBound = this.handleBottomTextHover.bind(this);

    window.addEventListener("resize", this.handleResize);
    window.addEventListener("click", this.handleCubeClick);

    if (!this.isLowPowerDevice) {
      window.addEventListener("mousemove", this.handleMouseMove);
    }

    this.bottomText = document.getElementById("bottom-text");
    if (this.bottomText && !this.isLowPowerDevice) {
      this.bottomText.addEventListener("mouseenter", this.handleBottomTextHoverBound);
    }
  }

  handleAboutToggle(isOpen) {
    this.state.aboutOpen = isOpen;
    if (isOpen) {
      this.showAbout();
      return;
    }
    this.showIntro();
  }

  showIntro() {
    if (!this.cubeManager) return;
    this.cubeManager.getMain().visible = true;
    this.cubeManager.getGeos().position.set(0, 0, 0);
    this.cubeManager.showCubes();
    this.repositionCubes();
  }

  showAbout() {
    if (!this.cubeManager) return;
    this.cubeManager.getMain().visible = false;
  }

  repositionCubes() {
    this.cubeManager.getCubes().forEach(cube => {
      gsap.to(cube.rotation, {
        x: (Math.random() - 0.07) * 10 * Math.random(),
        y: (Math.random() - 0.07) * 10 * Math.random(),
        z: (Math.random() - 0.07) * 10 * Math.random(),
        ease: "power4.out"
      });
    });
  }

  onMouseMove(event) {
    if (this.state.aboutOpen) return;
    this.updateMousePosition(event);
    this.handleCubeInteraction();
  }

  updateMousePosition(event) {
    this.mouse.x = (event.clientX / this.state.width) * 2 - 1;
    this.mouse.y = -(event.clientY / this.state.height) * 2 + 1;
  }

  handleCubeInteraction() {
    this.raycaster.setFromCamera(this.mouse, this.cameraManager.getCamera());
    const intersects = this.raycaster.intersectObjects(this.cubeManager.getCubes(), false);

    if (intersects.length > 0) {
      const mouseWorldPos = new Vector2(this.mouse.x * 15, this.mouse.y * 15);
      intersects.forEach(({ object }) => {
        const distance = new Vector2(object.position.x, object.position.y).distanceTo(mouseWorldPos);
        if (distance < 8) {
          this.cubeManager.animateCubeRepulsion(object, mouseWorldPos, distance);
        }
      });
    }
  }

  async handleCubeClick(event) {
    if (this.state.aboutOpen) return;
    if (event.target.closest("a, button, #ui, #terminal, #contact, .shader-container")) return;

    const mouse = new Vector2(
      (event.clientX / this.state.width) * 2 - 1,
      -(event.clientY / this.state.height) * 2 + 1
    );

    this.raycaster.setFromCamera(mouse, this.cameraManager.getCamera());
    const intersects = this.raycaster.intersectObjects(this.cubeManager.getCubes(), false);
    if (intersects.length === 0) return;

    this.cameraManager.animateWiggle();
    await this.showShaderElement();
  }

  async showShaderElement() {
    const shaderManager = await this.ensureShaderManager();
    const existingShaders = document.querySelectorAll(".shader-container");
    if (existingShaders.length >= 2) {
      shaderManager.hideShaderElement(existingShaders[0]);
    }
    this.cubeManager.animateCubesOnShaderCreate();
    shaderManager.createShaderContainer(this.textures);
  }

  handleBottomTextHover() {
    if (this.cubeManager) {
      this.cubeManager.makeRandomCubeBigger();
    }
  }

  resize() {
    this.state.width = this.container.offsetWidth;
    this.state.height = this.container.offsetHeight;
    this.renderer.setSize(this.state.width, this.state.height);
    if (this.cameraManager) {
      this.cameraManager.resize(this.state.width, this.state.height);
    }
  }

  render() {
    if (!this.managersReady) return;

    this.state.frameTick += 1;
    const shouldUpdate = !this.isLowPowerDevice || this.state.frameTick % 2 === 0;
    if (shouldUpdate && !this.state.aboutOpen) {
      this.updateAnimations();
      this.cubeManager.updateCubes();
    }

    this.frameId = requestAnimationFrame(this.render);
    this.renderer.render(this.scene, this.cameraManager.getCamera());
  }

  updateAnimations() {
    const geos = this.cubeManager.getGeos();
    geos.rotation.x += 0.001;
    geos.rotation.y += 0.0005;
  }

  dispose() {
    this.removeEventListeners();
    this.cleanupResources();
    this.ui.destroy();
  }

  removeEventListeners() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("click", this.handleCubeClick);
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

    if (this.shaderManager) {
      document.querySelectorAll(".shader-container").forEach(container => {
        this.shaderManager.cleanupShaderResources(container);
      });
    }
  }
}
