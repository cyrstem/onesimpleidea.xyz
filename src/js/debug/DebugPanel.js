import { Pane } from 'tweakpane';
export { isDebugMode } from './isDebugMode.js';

function vec3ToHex([r, g, b]) {
    const c = (v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, '0');
    return `#${c(r)}${c(g)}${c(b)}`;
}

function hexToVec3(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255];
}

function colorInputToVec3(color) {
    if (typeof color === 'string') return hexToVec3(color);
    if (color && typeof color.r === 'number') {
        const scale = color.r > 1 ? 1 / 255 : 1;
        return [color.r * scale, color.g * scale, color.b * scale];
    }
    return [0, 0, 0];
}

function setUniformVec3(uniform, rgb) {
    uniform.value[0] = rgb[0];
    uniform.value[1] = rgb[1];
    uniform.value[2] = rgb[2];
}

function bindUniformFloat(pane, uniform, label, opts = {}) {
    const proxy = { value: uniform.value };
    pane.addBinding(proxy, 'value', { label, ...opts }).on('change', (ev) => {
        uniform.value = ev.value;
    });
}

function bindUniformVec3Color(pane, uniform, label) {
    const proxy = { color: vec3ToHex(uniform.value) };
    pane.addBinding(proxy, 'color', { label, view: 'color' }).on('change', (ev) => {
        setUniformVec3(uniform, colorInputToVec3(ev.value));
    });
}

export class DebugPanel {
    constructor(app) {
        this.app = app;
        this.pane = new Pane({ title: 'Debug', expanded: true });
        this.pane.element.style.position = 'fixed';
        this.pane.element.style.top = '12px';
        this.pane.element.style.right = '12px';
        this.pane.element.style.zIndex = '10000';
        this.pane.element.style.maxHeight = 'calc(100vh - 24px)';
        this.pane.element.style.overflow = 'auto';

        const { post, circuit, forms3D, plane } = app;

        const block = this.pane.addFolder({ title: 'Post / Block Glitch', expanded: true });
        bindUniformFloat(block, post.uBlockSize, 'size', { min: 0.2, max: 0.8, step: 0.01 });
        bindUniformFloat(block, post.uBlockRandomness, 'randomness', { min: 0, max: 0.4, step: 0.01 });
        bindUniformFloat(block, post.uBlockAmount, 'amount', { min: 0, max: 3, step: 0.01 });
        bindUniformFloat(block, post.uBlockSeed, 'seed', { min: 0, max: 1, step: 0.01 });

        const dir = post.uBlockDir.value;
        const dirProxy = {
            angle: ((Math.atan2(dir[1], dir[0]) * 180 / Math.PI) + 360) % 360
        };
        block.addBinding(dirProxy, 'angle', { label: 'direction', min: 0, max: 360, step: 1 })
            .on('change', (ev) => {
                const rad = ev.value * Math.PI / 180;
                dir[0] = Math.cos(rad);
                dir[1] = Math.sin(rad);
            });

        bindUniformFloat(block, post.uBlockTimeSpeed, 'time speed', { min: 0, max: 2, step: 0.01 });
        bindUniformFloat(block, post.uBlockWobbleSpeed, 'wobble speed', { min: 0, max: 2, step: 0.01 });
        bindUniformFloat(block, post.uBlockActiveThreshold, 'active threshold', { min: 0, max: 1, step: 0.01 });
        bindUniformFloat(block, post.uRgbSplitScale, 'RGB split', { min: 0, max: 2, step: 0.01 });

        const shakeGlitch = this.pane.addFolder({ title: 'Post / Shake & Glitch', expanded: true });
        bindUniformFloat(shakeGlitch, post.uShake, 'shake amp', { min: 0, max: 1, step: 0.01 });
        shakeGlitch.addBinding(app, '_shakeScale', { label: 'shake scale', min: 0, max: 0.05, step: 0.001 });
        bindUniformFloat(shakeGlitch, post.uGlitch, 'glitch intensity', { min: 0, max: 1, step: 0.01 });

        shakeGlitch.addButton({ title: 'Trigger Shake' }).on('click', () => post.triggerShake(1));
        shakeGlitch.addButton({ title: 'Trigger Glitch' }).on('click', () => post.triggerGlitch());

        const scene = this.pane.addFolder({ title: 'Scene', expanded: true });
        bindUniformFloat(scene, circuit.uAlpha, 'circuit alpha', { min: 0, max: 1, step: 0.01 });
        bindUniformFloat(scene, forms3D.uAlpha, 'forms alpha', { min: 0, max: 1, step: 0.01 });
        bindUniformFloat(scene, plane.uAlpha, 'plane alpha', { min: 0, max: 1, step: 0.01 });
        bindUniformVec3Color(scene, circuit.uColor, 'circuit color');
        bindUniformVec3Color(scene, forms3D.uColor, 'forms color');

        const bg = this.pane.addFolder({ title: 'Background', expanded: false });
        if (post.uBgMix.value === 0) post.uBgMix.value = 1;
        bindUniformVec3Color(bg, post.uBgColorA, 'color A');
        bindUniformVec3Color(bg, post.uBgColorB, 'color B');
        bindUniformFloat(bg, post.uBgMix, 'mix strength', { min: 0, max: 1, step: 0.01 });

        const director = this.pane.addFolder({ title: 'Director', expanded: true });
        director.addBinding(app, '_spawnEvery', { label: 'spawn every', min: 0.5, max: 5, step: 0.1 });
        director.addBinding(app, '_maxForms', { label: 'max forms', min: 1, max: 8, step: 1 });

        director.addButton({ title: 'Reseed Glitch' }).on('click', () => {
            post.reseed(app._lastTarget);
        });
        director.addButton({ title: 'Spawn Circuit' }).on('click', () => {
            circuit.spawnForm();
            app._lastTarget = circuit.lastCenter;
            circuit.setEvolveTarget(app._lastTarget);
            post.reseed(app._lastTarget);
        });
        director.addButton({ title: 'Spawn 3D' }).on('click', () => {
            forms3D.spawnForm();
            app._lastTarget = forms3D.lastCenter;
            circuit.setEvolveTarget(app._lastTarget);
            post.reseed(app._lastTarget);
        });
    }

    dispose() {
        this.pane.dispose();
    }
}
