import {
  Group,
  Object3D,
  InstancedMesh,
  SphereGeometry,
  PlaneGeometry,
  MeshBasicMaterial,
  CanvasTexture,
  LinearFilter,
  ClampToEdgeWrapping,
  DoubleSide,
  Matrix4,
  Vector3,
  Quaternion,
  DynamicDrawUsage,
  InstancedBufferAttribute
} from "three";
import gsap from "gsap";

const LETTER_POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function buildGlyphAtlas(chars) {
  const cell = 56;
  const pad = 6;
  const w = chars.length * (cell + pad) + pad;
  const h = cell + pad * 2;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return { texture: null, count: 1 };
  ctx.fillStyle = "#f6f6f6";
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = "#0a0a0a";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `600 ${cell * 0.72}px ui-monospace, Menlo, Monaco, monospace`;
  for (let i = 0; i < chars.length; i++) {
    const cx = pad + (cell + pad) * i + (cell + pad) / 2;
    const cy = h / 2;
    ctx.fillText(chars[i], cx, cy);
  }
  const tex = new CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = ClampToEdgeWrapping;
  tex.minFilter = tex.magFilter = LinearFilter;
  tex.needsUpdate = true;
  return { texture: tex, count: chars.length };
}

const MAP_FRAGMENT_REPLACE = `
#ifdef USE_MAP
	vec2 atlasUv = vec2((vGlyphId + vUv.x) / uAtlasCount, vUv.y);
	vec4 texel = texture2D( map, atlasUv );
	float luma = dot(texel.rgb, vec3(0.299, 0.587, 0.114));
	float ink = clamp(1.0 - luma, 0.0, 1.0);
	diffuseColor.rgb = vec3(0.0);
	diffuseColor.a *= smoothstep(0.08, 0.92, ink);
#endif
`;

/**
 * Three r144 passes the **program parameters** object (not a Shader object).
 * Shaders still contain `#include <…>` lines here — replacing the inner
 * `texture2D` line never runs. We swap out `#include <map_fragment>` instead.
 */
function hookLetterAtlasShader(material, atlasCount) {
  material.onBeforeCompile = parameters => {
    parameters.uniforms.uAtlasCount = { value: atlasCount };

    parameters.vertexShader = parameters.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
attribute float glyphId;
varying float vGlyphId;`
      )
      .replace("#include <begin_vertex>", `#include <begin_vertex>
vGlyphId = glyphId;`);

    parameters.fragmentShader = parameters.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
varying float vGlyphId;
uniform float uAtlasCount;`
      )
      .replace("#include <map_fragment>", MAP_FRAGMENT_REPLACE)
      .replace("\t#include <map_fragment>", MAP_FRAGMENT_REPLACE);
  };
  material.userData.atlasCount = atlasCount;
}

/**
 * Mixed genetic field: instanced **letters** (glyph atlas on quads) and **dots**
 * (spheres), sharing the same gene field and motion.
 */
export default class GeneticGrid {
  constructor(scene, config) {
    this.scene = scene;
    this.config = config;
    this.main = new Group();
    this.geos = new Object3D();
    this.main.add(this.geos);
    this.scene.add(this.main);
    this.main.visible = false;

    this.cols = config.GRID_COLS;
    this.rows = config.GRID_ROWS;
    this.count = this.cols * this.rows;
    this.spread = config.GRID_SPREAD;
    this.geneAmp = config.GRID_GENE_AMPLITUDE;

    this.base = new Float32Array(this.count * 3);
    this.genes = new Float32Array(this.count * 3);
    this.scratch = new Float32Array(this.count * 3);

    this.mouseWorld = { x: 0, y: 0, active: 0 };
    this.ascentY = 0;
    this._fx = { t: 0 };

    this._p = new Vector3();
    this._q = new Quaternion();
    this._s = new Vector3();
    this._m = new Matrix4();

    this._time = 0;
    this.letterGridIndices = [];
    this.dotGridIndices = [];
    this._buildMixedGrid();
  }

  _buildMixedGrid() {
    const halfW = ((this.cols - 1) * this.spread) / 2;
    const halfH = ((this.rows - 1) * this.spread) / 2;

    let i = 0;
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const x = col * this.spread - halfW;
        const y = row * this.spread - halfH;
        const z = (Math.random() - 0.5) * this.spread * 0.35;
        this.base[i] = x;
        this.base[i + 1] = y;
        this.base[i + 2] = z;
        const cell = row * this.cols + col;
        const isDot = (col * 7 + row * 11 + cell * 3) % 10 < 4;
        if (isDot) this.dotGridIndices.push(cell);
        else this.letterGridIndices.push(cell);
        i += 3;
      }
    }

    const { texture: atlas, count: atlasCount } = buildGlyphAtlas(LETTER_POOL.split(""));
    this._atlasCount = Math.max(1, atlasCount);

    const letterGeom = new PlaneGeometry(1, 1);
    const glyphAttr = new InstancedBufferAttribute(new Float32Array(this.letterGridIndices.length), 1);
    for (let li = 0; li < this.letterGridIndices.length; li++) {
      const cell = this.letterGridIndices[li];
      const col = cell % this.cols;
      const row = (cell / this.cols) | 0;
      const g = (col * 13 + row * 19 + cell * 5) % LETTER_POOL.length;
      glyphAttr.setX(li, g);
    }
    letterGeom.setAttribute("glyphId", glyphAttr);

    const letterMat = new MeshBasicMaterial({
      color: 0x000000,
      map: atlas,
      transparent: true,
      opacity: 1,
      depthWrite: true,
      side: DoubleSide
    });
    hookLetterAtlasShader(letterMat, this._atlasCount);
    letterMat.needsUpdate = true;

    this.letterMesh = new InstancedMesh(letterGeom, letterMat, this.letterGridIndices.length);
    this.letterMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.letterMesh.renderOrder = 2;

    const dotGeom = new SphereGeometry(1, 7, 6);
    const dotMat = new MeshBasicMaterial({
      color: 0x000000,
      transparent: false,
      opacity: 1,
      depthWrite: true
    });
    this.dotMesh = new InstancedMesh(dotGeom, dotMat, this.dotGridIndices.length);
    this.dotMesh.instanceMatrix.setUsage(DynamicDrawUsage);
    this.dotMesh.renderOrder = 0;

    this._m.identity();
    for (let k = 0; k < this.letterMesh.count; k++) this.letterMesh.setMatrixAt(k, this._m);
    for (let k = 0; k < this.dotMesh.count; k++) this.dotMesh.setMatrixAt(k, this._m);
    this.letterMesh.instanceMatrix.needsUpdate = true;
    this.dotMesh.instanceMatrix.needsUpdate = true;

    this.geos.add(this.dotMesh);
    this.geos.add(this.letterMesh);
  }

  _gridIndexToI3(cell) {
    return cell * 3;
  }

  _neighborIndex(i3) {
    const i = i3 / 3;
    const x = i % this.cols;
    const y = (i / this.cols) | 0;
    const picks = [];
    if (x > 0) picks.push(i - 1);
    if (x < this.cols - 1) picks.push(i + 1);
    if (y > 0) picks.push(i - this.cols);
    if (y < this.rows - 1) picks.push(i + this.cols);
    if (!picks.length) return i3;
    const j = picks[(Math.random() * picks.length) | 0];
    return j * 3;
  }

  _fitnessAt(i3, genes, t) {
    const gx = genes[i3];
    const gy = genes[i3 + 1];
    const gz = genes[i3 + 2];
    const bx = this.base[i3];
    const by = this.base[i3 + 1];
    const bz = this.base[i3 + 2];

    const px = bx + gx * this.geneAmp;
    const py = by + gy * this.geneAmp + this.ascentY;
    const pz = bz + gz * this.geneAmp;

    const field =
      Math.sin(t * 0.55 + bx * 0.21 + by * 0.17) * 0.55 +
      Math.cos(t * 0.38 + by * 0.13 - bz * 0.31) * 0.35;

    const penalty = gx * gx + gy * gy + gz * gz;

    let mouseBoost = 0;
    if (this.mouseWorld.active > 0.01) {
      const dx = px - this.mouseWorld.x;
      const dy = py - this.mouseWorld.y;
      const d = Math.sqrt(dx * dx + dy * dy + 1e-6);
      const influence = Math.max(0, 1 - d / 9) * this.mouseWorld.active;
      mouseBoost = influence * 1.15 - influence * 0.08 * penalty;
    }

    return field - penalty * 0.09 + mouseBoost;
  }

  evolveStep(t) {
    const genes = this.genes;
    const n = this.count * 3;
    const passes = this.config.GRID_GA_PASSES_PER_FRAME;

    for (let p = 0; p < passes; p++) {
      const i3 = ((Math.random() * (n / 3)) | 0) * 3;
      const j3 = this._neighborIndex(i3);

      this.scratch[i3] = genes[i3];
      this.scratch[i3 + 1] = genes[i3 + 1];
      this.scratch[i3 + 2] = genes[i3 + 2];

      const blend = 0.35 + Math.random() * 0.35;
      this.scratch[i3] = this.scratch[i3] * (1 - blend) + genes[j3] * blend;
      this.scratch[i3 + 1] = this.scratch[i3 + 1] * (1 - blend) + genes[j3 + 1] * blend;
      this.scratch[i3 + 2] = this.scratch[i3 + 2] * (1 - blend) + genes[j3 + 2] * blend;

      const m = this.config.GRID_MUTATION;
      this.scratch[i3] += (Math.random() - 0.5) * m;
      this.scratch[i3 + 1] += (Math.random() - 0.5) * m;
      this.scratch[i3 + 2] += (Math.random() - 0.5) * m * 0.65;

      const f0 = this._fitnessAt(i3, genes, t);
      const f1 = this._fitnessAt(i3, this.scratch, t);
      if (f1 > f0) {
        genes[i3] = this.scratch[i3];
        genes[i3 + 1] = this.scratch[i3 + 1];
        genes[i3 + 2] = this.scratch[i3 + 2];
      }
    }
  }

  _composeLetter(localIdx, i3, t) {
    const g = this.genes;
    const b = this.base;
    const gx = g[i3];
    const gy = g[i3 + 1];
    const gz = g[i3 + 2];
    const bx = b[i3];
    const by = b[i3 + 1];
    const bz = b[i3 + 2];

    const px = bx + gx * this.geneAmp;
    const py = by + gy * this.geneAmp + this.ascentY;
    const pz = bz + gz * this.geneAmp;
    this._p.set(px, py, pz);

    const mag = Math.sqrt(gx * gx + gy * gy + gz * gz);
    const pulse = 0.88 + 0.14 * Math.sin(t * 2.2 + bx * 0.35 + by * 0.28);
    const baseS = this.config.GRID_POINT_SIZE * pulse * 2.35 * (0.5 + Math.min(1.4, mag) * 0.32);

    const wobble = 0.5 + 0.5 * Math.sin(t * 1.85 + localIdx * 0.09);
    const wobble2 = 0.5 + 0.5 * Math.cos(t * 1.55 + localIdx * 0.07 + bz);
    this._s.set(baseS * (0.8 + 0.32 * wobble), baseS * (0.8 + 0.32 * wobble2), 1);

    this._q.identity();
    this._m.compose(this._p, this._q, this._s);
    this.letterMesh.setMatrixAt(localIdx, this._m);
  }

  _composeDot(localIdx, i3, t) {
    const g = this.genes;
    const b = this.base;
    const gx = g[i3];
    const gy = g[i3 + 1];
    const gz = g[i3 + 2];
    const bx = b[i3];
    const by = b[i3 + 1];
    const bz = b[i3 + 2];

    const px = bx + gx * this.geneAmp;
    const py = by + gy * this.geneAmp + this.ascentY;
    const pz = bz + gz * this.geneAmp;
    this._p.set(px, py, pz);

    const mag = Math.sqrt(gx * gx + gy * gy + gz * gz);
    const pulse = 0.9 + 0.12 * Math.sin(t * 2.4 + bx * 0.31);
    const baseS = this.config.GRID_POINT_SIZE * 0.42 * pulse * (0.48 + Math.min(1.6, mag) * 0.4);

    const w = 0.5 + 0.5 * Math.sin(t * 1.9 + localIdx * 0.11);
    const s = baseS * (0.85 + 0.35 * w);
    this._s.set(s, s, s);

    this._q.identity();
    this._m.compose(this._p, this._q, this._s);
    this.dotMesh.setMatrixAt(localIdx, this._m);
  }

  syncInstancesFromGenes(t) {
    for (let li = 0; li < this.letterGridIndices.length; li++) {
      const cell = this.letterGridIndices[li];
      this._composeLetter(li, this._gridIndexToI3(cell), t);
    }
    for (let di = 0; di < this.dotGridIndices.length; di++) {
      const cell = this.dotGridIndices[di];
      this._composeDot(di, this._gridIndexToI3(cell), t);
    }
    this.letterMesh.instanceMatrix.needsUpdate = true;
    this.dotMesh.instanceMatrix.needsUpdate = true;
  }

  update(t) {
    this._time = t;
    this.mouseWorld.active *= 0.968;
    this.evolveStep(t);
    this.syncInstancesFromGenes(t);
  }

  showGrid() {
    this.main.visible = true;
    const b = this.base;
    const scattered = new Float32Array(this.count * 3);
    for (let i3 = 0; i3 < this.count * 3; i3 += 3) {
      scattered[i3] = b[i3] * (1.8 + Math.random() * 0.6);
      scattered[i3 + 1] = b[i3 + 1] * (1.8 + Math.random() * 0.6);
      scattered[i3 + 2] = b[i3 + 2] * (1.8 + Math.random() * 0.6) + (Math.random() - 0.5) * 2;
    }
    for (let i = 0; i < this.genes.length; i++) {
      this.genes[i] = (Math.random() - 0.5) * 1.4;
    }

    gsap.killTweensOf(this._fx);
    this._fx.t = 0;
    const g = this.genes;
    const tt = this._time;
    gsap.to(this._fx, {
      t: 1,
      duration: 1.35,
      ease: "power2.out",
      onUpdate: () => {
        const e = this._fx.t;
        for (let li = 0; li < this.letterGridIndices.length; li++) {
          const cell = this.letterGridIndices[li];
          const i3 = this._gridIndexToI3(cell);
          const gx = g[i3] * (1 - e);
          const gy = g[i3 + 1] * (1 - e);
          const gz = g[i3 + 2] * (1 - e);
          const px = scattered[i3] + (b[i3] + gx * this.geneAmp - scattered[i3]) * e;
          const py = scattered[i3 + 1] + (b[i3 + 1] + gy * this.geneAmp - scattered[i3 + 1]) * e;
          const pz = scattered[i3 + 2] + (b[i3 + 2] + gz * this.geneAmp - scattered[i3 + 2]) * e;
          this._p.set(px, py, pz);
          const mag = Math.sqrt(gx * gx + gy * gy + gz * gz);
          const pulse = 0.88 + 0.14 * Math.sin(tt * 2.2 + b[i3] * 0.35);
          const baseS = this.config.GRID_POINT_SIZE * pulse * (0.5 + e * 0.45) * 2.35 * (0.42 + Math.min(1.4, mag) * 0.32);
          const wobble = 0.5 + 0.5 * Math.sin(tt * 1.85 + li * 0.09);
          const wobble2 = 0.5 + 0.5 * Math.cos(tt * 1.55 + li * 0.07 + b[i3 + 2]);
          this._s.set(baseS * (0.8 + 0.32 * wobble), baseS * (0.8 + 0.32 * wobble2), 1);
          this._q.identity();
          this._m.compose(this._p, this._q, this._s);
          this.letterMesh.setMatrixAt(li, this._m);
        }
        for (let di = 0; di < this.dotGridIndices.length; di++) {
          const cell = this.dotGridIndices[di];
          const i3 = this._gridIndexToI3(cell);
          const gx = g[i3] * (1 - e);
          const gy = g[i3 + 1] * (1 - e);
          const gz = g[i3 + 2] * (1 - e);
          const px = scattered[i3] + (b[i3] + gx * this.geneAmp - scattered[i3]) * e;
          const py = scattered[i3 + 1] + (b[i3 + 1] + gy * this.geneAmp - scattered[i3 + 1]) * e;
          const pz = scattered[i3 + 2] + (b[i3 + 2] + gz * this.geneAmp - scattered[i3 + 2]) * e;
          this._p.set(px, py, pz);
          const mag = Math.sqrt(gx * gx + gy * gy + gz * gz);
          const pulse = 0.9 + 0.12 * Math.sin(tt * 2.4 + b[i3] * 0.31);
          const baseS = this.config.GRID_POINT_SIZE * 0.42 * pulse * (0.5 + e * 0.45) * (0.48 + Math.min(1.6, mag) * 0.4);
          const w = 0.5 + 0.5 * Math.sin(tt * 1.9 + di * 0.11);
          const s = baseS * (0.85 + 0.35 * w);
          this._s.set(s, s, s);
          this._q.identity();
          this._m.compose(this._p, this._q, this._s);
          this.dotMesh.setMatrixAt(di, this._m);
        }
        this.letterMesh.instanceMatrix.needsUpdate = true;
        this.dotMesh.instanceMatrix.needsUpdate = true;
      },
      onComplete: () => {
        for (let i = 0; i < this.genes.length; i++) this.genes[i] = 0;
        this.syncInstancesFromGenes(this._time);
      }
    });
  }

  hideGrid() {
    this.main.visible = false;
  }

  animateDissolveAscent(durationSec) {
    gsap.killTweensOf(this);
    gsap.to(this, {
      ascentY: this.spread * 2.2,
      duration: durationSec,
      ease: "power2.in"
    });
  }

  restoreLayout() {
    gsap.killTweensOf(this);
    gsap.killTweensOf(this._fx);
    this.ascentY = 0;
    for (let i = 0; i < this.genes.length; i++) this.genes[i] = 0;
    this.syncInstancesFromGenes(this._time);
  }

  setMouseWorld(x, y, strength = 1) {
    this.mouseWorld.x = x;
    this.mouseWorld.y = y;
    this.mouseWorld.active = strength;
  }

  pulseRandomDot() {
    const cell = (Math.random() * this.count) | 0;
    const i3 = this._gridIndexToI3(cell);
    this.genes[i3] += (Math.random() - 0.5) * 1.1;
    this.genes[i3 + 1] += (Math.random() - 0.5) * 1.1;
    this.genes[i3 + 2] += (Math.random() - 0.5) * 0.55;
  }

  /** @deprecated use {@link getPickMeshes} */
  getPoints() {
    return this.dotMesh;
  }

  getPickMeshes() {
    return [this.letterMesh, this.dotMesh];
  }

  getMain() {
    return this.main;
  }

  getGeos() {
    return this.geos;
  }
}
