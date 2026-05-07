import { DoubleSide, Group, Mesh, MeshBasicMaterial, PlaneGeometry, Object3D, Quaternion, Vector3 } from "three";
import texts from "../../data/texts.json?raw";

export default class PortfolioArc {
  constructor(scene, textureSource, options = {}) {
    this.scene = scene;
    /** @type {import("three").PerspectiveCamera | null} */
    this.camera = options.camera ?? null;
    this.projects = JSON.parse(texts).shaderTexts;
    this.textureMap = this._buildTextureMap(textureSource);
    this.group = new Group();
    this.group.visible = false;
    this.group.name = "PortfolioArc";
    this.scene.add(this.group);

    /** Scene-root helper so lookAt runs in world space; parent group rotation invalidates mesh.lookAt alone. */
    this._faceCamHelper = new Object3D();
    this._faceCamHelper.name = "PortfolioArcBillboardHelper";
    this.scene.add(this._faceCamHelper);
    this._qParent = new Quaternion();
    this._qWorld = new Quaternion();
    this._qLocal = new Quaternion();
    this._vWorld = new Vector3();

    this.items = [];
    this.scroll = 0;
    this.scrollSmooth = 0;
    this.mouseBias = 0;
    this.verticalSpacing = options.verticalSpacing ?? 3.85;
    this.radiansPerStep = options.radiansPerStep ?? 0.11;
    this.radius = options.radius ?? 13.2;
    this.onFocusChange = options.onFocusChange ?? (() => {});
    this.lastFocused = -1;

    this.cardWidth = options.cardWidth ?? 4.6;
    this.cardHeight = options.cardHeight ?? 2.95;

    this._buildCards();
    this.setGroupPose(options);
  }

  setGroupPose(options) {
    this.group.position.set(options.groupX ?? 9.2, options.groupY ?? 0.35, options.groupZ ?? -1.2);
    this.group.rotation.set(options.rotX ?? 0, options.rotY ?? -0.42, options.rotZ ?? 0);
  }

  _buildTextureMap(source) {
    const map = new Map();
    if (!source) return map;
    if (source instanceof Map) {
      source.forEach((tex, key) => map.set(key, tex));
      return map;
    }
    if (Array.isArray(source)) {
      source.forEach((tex, i) => {
        const proj = this.projects[i];
        if (proj?.texture) map.set(proj.texture, tex);
      });
    }
    return map;
  }

  _resolveTexture(project, fallbackIndex) {
    if (project?.texture && this.textureMap.has(project.texture)) {
      return this.textureMap.get(project.texture);
    }
    const values = Array.from(this.textureMap.values());
    return values[fallbackIndex] ?? null;
  }

  _buildCards() {
    const n = this.projects.length;

    for (let i = 0; i < n; i++) {
      const geo = new PlaneGeometry(this.cardWidth, this.cardHeight);
      const tex = this._resolveTexture(this.projects[i], i);
      const mat = new MeshBasicMaterial({
        map: tex || null,
        transparent: false,
        side: DoubleSide,
        fog: false
      });
      const mesh = new Mesh(geo, mat);
      mesh.userData.projectIndex = i;
      mesh.userData.isPortfolioCard = true;
      mesh.renderOrder = 5;
      this.group.add(mesh);
      this.items.push(mesh);
    }
  }

  getMeshes() {
    return this.items;
  }

  getFocusedIndex() {
    const n = this.projects.length;
    const centerT = -this.scrollSmooth;
    let idx = Math.round(centerT);
    if (idx < 0) idx = 0;
    if (idx > n - 1) idx = n - 1;
    return idx;
  }

  show(activeProjectIndex) {
    this.group.visible = true;
    const n = this.projects.length;
    const clamped = Math.max(0, Math.min(n - 1, activeProjectIndex));
    this.scroll = -clamped;
    this.scrollSmooth = -clamped;
    this.mouseBias = 0;
    this._layout();
    const focused = this.getFocusedIndex();
    this.lastFocused = focused;
    this.onFocusChange(focused);
  }

  hide() {
    this.group.visible = false;
  }

  update(mouseNormY, dtSec, useMouseDrive) {
    if (!this.group.visible) return;

    const range = 2.1;
    const targetBias = useMouseDrive ? mouseNormY * range : 0;
    this.mouseBias += (targetBias - this.mouseBias) * Math.min(1, dtSec * 6);

    const n = this.projects.length;
    const maxS = 1.2;
    const scrollTarget = this.scroll + this.mouseBias;
    const clampedTarget = Math.max(-(n - 1) - maxS, Math.min(maxS, scrollTarget));

    this.scrollSmooth += (clampedTarget - this.scrollSmooth) * Math.min(1, dtSec * 5.5);

    this._layout();

    const focused = this.getFocusedIndex();
    if (focused !== this.lastFocused) {
      this.lastFocused = focused;
      this.onFocusChange(focused);
    }
  }

  _layout() {
    const R = this.radius;
    const { verticalSpacing: dy, radiansPerStep: k } = this;

    this.items.forEach((mesh, i) => {
      const t = i + this.scrollSmooth;
      const phi = t * k;
      const y = -t * dy;
      const x = R * Math.sin(phi);
      const z = -R * Math.cos(phi) + R * 0.82;

      mesh.position.set(x, y, z);

      if (this.camera) {
        mesh.updateMatrixWorld(true);
        mesh.getWorldPosition(this._vWorld);
        this._faceCamHelper.position.copy(this._vWorld);
        this._faceCamHelper.quaternion.identity();
        this._faceCamHelper.lookAt(this.camera.position);
        this._faceCamHelper.rotateY(Math.PI);
        this._faceCamHelper.getWorldQuaternion(this._qWorld);
        mesh.parent.getWorldQuaternion(this._qParent);
        this._qLocal.copy(this._qParent).invert().multiply(this._qWorld);
        mesh.quaternion.copy(this._qLocal);
      } else {
        mesh.rotation.y = phi + Math.PI * 0.5;
      }

      const focus = Math.abs(t);
      // Rim cards stay small; focused slot (t → 0) is much larger so the picked project reads clearly.
      const sRim = 0.62;
      const sPeak = 2.75;
      const focusSharpness = 0.1;
      const s = sRim + (sPeak - sRim) * Math.exp(-focus * focus * focusSharpness);
      mesh.scale.setScalar(s);
      mesh.renderOrder = focus < 0.42 ? 24 : 5;
    });
  }

  resizeGroupPose(width, height, isLowPower) {
    const aspect = width / Math.max(height, 1);
    const narrow = aspect < 1.1;
    if (narrow || isLowPower) {
      this.setGroupPose({
        groupX: 6.5,
        groupY: 0.2,
        groupZ: 0.5,
        rotY: -0.32
      });
    } else {
      this.setGroupPose({});
    }
  }

  dispose() {
    this.items.forEach(mesh => {
      if (mesh.geometry) mesh.geometry.dispose();
      if (mesh.material) mesh.material.dispose();
    });
    this.items = [];
    if (this._faceCamHelper && this._faceCamHelper.parent) {
      this._faceCamHelper.parent.remove(this._faceCamHelper);
    }
    if (this.group.parent) this.group.parent.remove(this.group);
  }
}
