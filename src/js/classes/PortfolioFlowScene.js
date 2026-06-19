import {
  Color,
  DoubleSide,
  GLSL3,
  Group,
  LinearFilter,
  MathUtils,
  Mesh,
  NormalBlending,
  PlaneGeometry,
  RawShaderMaterial,
  Raycaster,
  RepeatWrapping,
  TextureLoader,
  Vector2,
  Vector3
} from "three";
import { Flowmap, Reflector, ReflectorMaterial } from "@alienkitty/alien.js/three";
import { clearTween, tween } from "@alienkitty/space.js";

const rgbShift = /* glsl */ `
vec4 getRGB(sampler2D image, vec2 uv, float angle, float amount) {
  vec2 offset = vec2(cos(angle), sin(angle)) * amount;
  vec4 r = texture(image, uv + offset);
  vec4 g = texture(image, uv);
  vec4 b = texture(image, uv - offset);
  return vec4(r.r, g.g, b.b, g.a);
}
`;

class PortfolioFlowMaterial extends RawShaderMaterial {
  constructor(texture, flowUniform) {
    super({
      glslVersion: GLSL3,
      uniforms: {
        tMap: { value: texture },
        tFlow: flowUniform,
        uTime: { value: 0 },
        uOpacity: { value: 1 },
        uDim: { value: 0 }
      },
      vertexShader: /* glsl */ `
        in vec3 position;
        in vec2 uv;

        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform sampler2D tFlow;
        uniform float uTime;

        out vec2 vUv;
        out vec3 vFlow;

        void main() {
          vUv = uv;
          vFlow = texture(tFlow, uv).rgb;

          vec3 transformed = position;
          float wave = sin((uv.x * 5.0 + uv.y * 3.0 + uTime) * 2.2) * 0.035;
          transformed.x += vFlow.r * 0.22;
          transformed.y += vFlow.g * 0.16;
          transformed.z += vFlow.b * 0.36 + wave;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;

        uniform sampler2D tMap;
        uniform sampler2D tFlow;
        uniform float uOpacity;
        uniform float uDim;

        in vec2 vUv;
        in vec3 vFlow;

        out vec4 FragColor;

        ${rgbShift}

        void main() {
          vec3 flow = texture(tFlow, vUv).rgb;
          vec2 uv = clamp(vUv - flow.rg * 0.045, vec2(0.001), vec2(0.999));
          vec2 dir = 0.5 - vUv;
          float angle = atan(dir.y, dir.x);
          float amount = length(flow.rg) * 0.018 + flow.b * 0.004;

          FragColor = getRGB(tMap, uv, angle, amount);
          float gray = dot(FragColor.rgb, vec3(0.299, 0.587, 0.114));
          FragColor.rgb = mix(FragColor.rgb, vec3(gray) * 0.72 + 0.18, uDim);
          FragColor.a *= uOpacity;
        }
      `,
      blending: NormalBlending,
      transparent: true,
      depthWrite: true,
      side: DoubleSide
    });
  }
}

export default class PortfolioFlowScene extends Group {
  constructor({ renderer, items, isLowPowerDevice = false, onSelect } = {}) {
    super();

    this.renderer = renderer;
    this.items = items;
    this.isLowPowerDevice = isLowPowerDevice;
    this.onSelect = onSelect;
    this.loader = new TextureLoader();
    this.planes = [];
    this.textures = [];
    this.raycaster = new Raycaster();
    this.pointer = new Vector2(-2, -2);
    this.lastPointer = new Vector2();
    this.velocity = new Vector2();
    this.zeroVelocity = new Vector2();
    this.lastTime = 0;
    this.lastMoveTime = 0;
    this.size = { width: 1, height: 1 };
    this.focusedPlane = null;
    this.focusProgress = 0;

    this.position.z = 3.6;

    this.initFloor();
  }

  initFloor() {
    this.reflector = new Reflector({
      width: 512,
      height: 512,
      blurIterations: this.isLowPowerDevice ? 3 : 6
    });

    const material = new ReflectorMaterial({
      color: new Color(0xd6d6d6),
      reflectivity: 0.01,
      mirror: 0.045,
      mixStrength: 0.24,
      dithering: true
    });
    material.uniforms.tReflect = this.reflector.renderTargetUniform;
    material.uniforms.uMatrix = this.reflector.textureMatrixUniform;

    const floor = new Mesh(new PlaneGeometry(36, 22), material);
    floor.position.y = -3.9;
    floor.position.z = -4.4;
    floor.rotation.x = -Math.PI / 2;
    floor.renderOrder = -10;
    floor.add(this.reflector);
    floor.onBeforeRender = (renderer, scene, camera) => {
      floor.visible = false;
      this.reflector.update(renderer, scene, camera);
      floor.visible = true;
    };

    this.floor = floor;
    this.add(floor);
  }

  async ready() {
    const textures = await Promise.all(this.items.map(item => this.loadTexture(item.image)));
    textures.forEach((texture, index) => this.addPlane(this.items[index], texture, index));
    return this;
  }

  loadTexture(url) {
    return new Promise((resolve, reject) => {
      this.loader.load(
        url,
        texture => {
          texture.minFilter = LinearFilter;
          texture.magFilter = LinearFilter;
          texture.wrapS = texture.wrapT = RepeatWrapping;
          this.textures.push(texture);
          resolve(texture);
        },
        undefined,
        reject
      );
    });
  }

  addPlane(item, texture, index) {
    const flowmap = new Flowmap(this.renderer, {
      size: this.isLowPowerDevice ? 96 : 160,
      falloff: 0.18,
      alpha: 0.32,
      dissipation: 0.965
    });

    const material = new PortfolioFlowMaterial(texture, flowmap.uniform);
    const segments = this.isLowPowerDevice ? 18 : 32;
    const mesh = new Mesh(new PlaneGeometry(1, 1, segments, segments), material);
    mesh.userData.item = item;
    mesh.userData.baseIndex = index;
    mesh.userData.flowmap = flowmap;
    mesh.userData.basePosition = new Vector3();
    mesh.userData.baseScale = new Vector3();
    mesh.userData.baseRotationY = 0;
    mesh.userData.focus = 0;
    mesh.renderOrder = 5 + index;

    this.planes.push(mesh);
    this.add(mesh);
    this.layoutPlane(mesh, index);
  }

  layout(width = this.size.width, height = this.size.height) {
    this.size.width = width;
    this.size.height = height;

    const reflectionWidth = Math.max(256, Math.round(width * 0.55));
    const reflectionHeight = this.isLowPowerDevice ? 512 : 768;
    this.reflector.setSize(reflectionWidth, reflectionHeight);
    this.planes.forEach((mesh, index) => this.layoutPlane(mesh, index));
  }

  layoutPlane(mesh, index) {
    const count = Math.max(this.planes.length, this.items.length, 1);
    const spread = this.isLowPowerDevice ? 2.35 : 4.15;
    const center = (count - 1) * 0.5;
    const scale = this.isLowPowerDevice ? 3.15 : 5.65;
    const x = (index - center) * spread;
    const y = this.isLowPowerDevice ? 0.45 : 0.65;
    const z = 0.55 - Math.abs(index - center) * 0.2;

    mesh.position.set(x, y, z);
    mesh.userData.basePosition.copy(mesh.position);
    mesh.scale.set(scale, scale, 1);
    mesh.userData.baseScale.copy(mesh.scale);
    mesh.userData.baseRotationY = MathUtils.degToRad((center - index) * 5.5);
    mesh.rotation.y = mesh.userData.baseRotationY;
  }

  handlePointerMove(event, camera, container) {
    this.lastMoveTime = performance.now();
    this.updatePointer(event, container);
    this.updateVelocity(event);

    const hit = this.getPlaneIntersection(camera);
    this.planes.forEach(mesh => {
      const flowmap = mesh.userData.flowmap;
      if (mesh === hit?.object && hit.uv) {
        flowmap.mouse.copy(hit.uv);
        flowmap.velocity.lerp(this.velocity, this.velocity.length() ? 0.48 : 0.1);
      } else {
        flowmap.mouse.set(-1, -1);
        flowmap.velocity.lerp(this.zeroVelocity, 0.18);
      }
    });
  }

  handleClick(event, camera, container) {
    this.updatePointer(event, container);
    const hit = this.getPlaneIntersection(camera);
    if (hit?.object?.userData.item && typeof this.onSelect === "function") {
      this.focusPlane(hit.object);
      this.onSelect(hit.object.userData.item);
      return true;
    }
    return false;
  }

  focusPlane(mesh) {
    this.focusedPlane = mesh;
    this.animateFocus(1);
  }

  clearFocus() {
    this.focusedPlane = null;
    this.animateFocus(0);
  }

  animateFocus(value) {
    clearTween(this);
    tween(this, { focusProgress: value }, 850, "easeInOutCubic");
  }

  updatePointer(event, container) {
    const rect = container.getBoundingClientRect();
    this.pointer.x = ((event.clientX - rect.left) / Math.max(rect.width, 1)) * 2 - 1;
    this.pointer.y = -(((event.clientY - rect.top) / Math.max(rect.height, 1)) * 2 - 1);
  }

  updateVelocity(event) {
    const now = performance.now();
    const point = new Vector2(event.clientX, event.clientY);
    if (!this.lastTime) {
      this.lastTime = now;
      this.lastPointer.copy(point);
    }

    const delta = Math.max(14, now - this.lastTime);
    this.velocity.set((point.x - this.lastPointer.x) / delta, (point.y - this.lastPointer.y) / delta);
    this.velocity.multiplyScalar(0.72);
    this.lastPointer.copy(point);
    this.lastTime = now;
  }

  getPlaneIntersection(camera) {
    this.raycaster.setFromCamera(this.pointer, camera);
    const hits = this.raycaster.intersectObjects(this.planes, false);
    return hits[0];
  }

  update(timeSec) {
    const pointerIdle = performance.now() - this.lastMoveTime > 80;

    this.planes.forEach((mesh, index) => {
      const base = mesh.userData.basePosition;
      const offset = timeSec * 0.8 + index * 0.65;
      const isFocused = mesh === this.focusedPlane;
      const focus = isFocused ? this.focusProgress : 0;
      const background = this.focusedPlane && !isFocused ? this.focusProgress : 0;
      const side = index < (this.focusedPlane?.userData.baseIndex ?? index) ? -1 : 1;
      const targetX = isFocused ? 4.85 : base.x + side * background * 1.7;
      const targetY = isFocused ? 0.6 : base.y;
      const targetZ = isFocused ? 10.5 : base.z - background * 1.8;
      const targetScale = isFocused ? 11.25 : mesh.userData.baseScale.x * (1 - background * 0.28);

      mesh.position.x = MathUtils.lerp(base.x, targetX, Math.max(focus, background));
      mesh.position.y = MathUtils.lerp(base.y + Math.sin(offset) * 0.14, targetY, focus);
      mesh.position.z = MathUtils.lerp(base.z + Math.cos(offset * 0.73) * 0.14, targetZ, Math.max(focus, background));
      mesh.scale.setScalar(MathUtils.lerp(mesh.userData.baseScale.x, targetScale, Math.max(focus, background)));
      mesh.scale.z = 1;
      mesh.rotation.y = MathUtils.lerp(mesh.userData.baseRotationY, isFocused ? -0.16 : mesh.userData.baseRotationY, focus);
      mesh.rotation.z = Math.sin(offset * 0.52) * 0.025 * (1 - focus);
      mesh.material.uniforms.uOpacity.value = MathUtils.lerp(1, 0.14, background);
      mesh.material.uniforms.uDim.value = background;
      mesh.material.uniforms.uTime.value = timeSec;
      if (pointerIdle) {
        mesh.userData.flowmap.mouse.set(-1, -1);
        mesh.userData.flowmap.velocity.lerp(this.zeroVelocity, 0.12);
      }
      mesh.userData.flowmap.update();
    });

    this.floor.material.uniforms.uMirror.value = MathUtils.lerp(0.045, 0.018, this.focusProgress);
    this.floor.material.uniforms.uMixStrength.value = MathUtils.lerp(0.24, 0.09, this.focusProgress);
  }

  dispose() {
    this.planes.forEach(mesh => {
      mesh.geometry.dispose();
      mesh.material.dispose();
      mesh.userData.flowmap.destroy();
    });
    this.textures.forEach(texture => texture.dispose());
    this.floor.geometry.dispose();
    this.floor.material.dispose();
    this.reflector.destroy();
    clearTween(this);
  }
}
