precision highp float;

// Fullscreen FBO pass. Composites the rendered scene and runs a very subtle,
// always-on "block fracture" glitch ported from the Cinder blockss shader.
// A handful of large rectangular blocks are carved out of the frame and slid a
// tiny amount along uBlockDir; the circuit GA re-seeds uBlockSeed / uBlockDir on
// each spawn so the pattern drifts with the evolving field. uGlitch is left
// wired as an optional burst boost on top of the ambient base.
uniform sampler2D tMap;
uniform float uTime;
uniform float uGlitch;
uniform vec2 uShakeOffset;
uniform vec3 uBgColorA;
uniform vec3 uBgColorB;

uniform vec2 uResolution;       // drawing buffer size (aspect correction)
uniform vec2 uBlockDir;         // slide direction, re-seeded from the GA form
uniform float uBlockSeed;       // re-seeded per spawn to jump the pattern
uniform float uBlockSize;       // sub-quad shrink factor (~0.5)
uniform float uBlockRandomness; // subdivision gate (small => few big blocks)
uniform float uBlockAmount;     // displacement scale (kept tiny for subtlety)

varying vec2 vUv;

float uvrand(vec2 uv) {
    return fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    float aspect = uResolution.x / max(uResolution.y, 1.0);

    // Centred, aspect-correct coords (matches the Cinder block walk).
    vec2 p = vUv - 0.5;
    p.x *= aspect;

    // Walk down the quadtree toward the block containing this pixel. Higher
    // randomness breaks out earlier, leaving fewer / larger blocks that read.
    vec2 ro = vec2(-0.5);
    vec2 rw = vec2(0.5);
    float t = floor(uTime * 0.6 + uBlockSeed * 17.0);
    for (int i = 0; i <= 24; i++) {
        if (uvrand(ro + t) < uBlockRandomness * float(i)) break;
        rw *= uBlockSize;
        ro += rw * (step(ro, p) * 2.0 - 1.0);
    }

    // A fraction of blocks shift. A small constant baseline keeps the tear
    // always faintly alive, with a stronger pulse near each time-step change.
    float rnd = uvrand(ro + t);
    float active = step(0.45, rnd);
    vec2 dir = normalize(uBlockDir + vec2(0.0001));
    float wobble = 0.35 + 0.65 * (1.0 - smoothstep(0.0, 0.7, fract(uTime * 0.5)));
    float amt = uBlockAmount * (1.0 + uGlitch * 2.0);
    vec2 sl = dir * rw * active * amt * wobble;

    // Slide the block: sample the scene at the shifted position.
    vec2 sampleP = p - sl;
    sampleP.x /= aspect;
    vec2 uv = sampleP + 0.5;

    // Camera-style shake. The offset (UV units) is computed on the CPU so the
    // same vector can also be applied to the DOM overlay, keeping them in sync.
    uv = clamp(uv + uShakeOffset, 0.0, 1.0);

    // RGB split along the slide so the tear is legible even on light areas
    // (pure white-on-white displacement would otherwise be invisible).
    vec2 split = dir * rw * active * amt * 0.5;
    split.x /= aspect;
    float cr = texture2D(tMap, clamp(uv + split, 0.0, 1.0)).r;
    float cg = texture2D(tMap, uv).g;
    float cb = texture2D(tMap, clamp(uv - split, 0.0, 1.0)).b;
    vec4 tex = vec4(cr, cg, cb, texture2D(tMap, uv).a);

    // Pre-wired (disabled) hooks for a future tintable background / time effects.
    vec3 bg = mix(uBgColorA, uBgColorB, vUv.y) * 0.0;
    float tt = uTime * 0.0;

    gl_FragColor = vec4(tex.rgb + bg + tt, tex.a);
}
