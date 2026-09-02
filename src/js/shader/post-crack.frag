precision highp float;

// Full-viewport crack / rift. A jagged path grows along a random axis
// (horizontal or vertical) from either end, with a random start/end lateral
// bias so each spawn comes from a different direction. Quiet UV displacement
// + hairline ink.

uniform sampler2D tMap;
uniform float uTime;
uniform vec2 uResolution;
uniform float uSeed;
uniform float uAmount;    // master mix 0..1
uniform float uInk;       // line darkness
uniform float uDisplace;  // UV push across the crack
uniform float uThickness; // base half-width in UV (very small)
uniform float uJagged;    // lateral noise amplitude
uniform float uProgress;  // 0..1 how far the crack has grown
uniform float uAxis;      // 0 = grow along X (left/right), 1 = along Y (up/down)
uniform float uFlip;      // 0 = grow 0→1, 1 = grow 1→0
uniform float uStart;     // lateral coord at path start
uniform float uEnd;       // lateral coord at path end

varying vec2 vUv;

float hash11(float n) {
    return fract(sin(n) * 43758.5453123);
}

float noise1(float x) {
    float i = floor(x);
    float f = fract(x);
    float u = f * f * (3.0 - 2.0 * f);
    return mix(hash11(i), hash11(i + 1.0), u);
}

float fbm1(float x) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
        v += a * noise1(x);
        x = x * 2.07 + 19.0;
        a *= 0.5;
    }
    return v;
}

// Lateral centerline as a function of the along-axis parameter s (0..1).
float crackLateral(float s, float seed) {
    float base = mix(uStart, uEnd, s);
    float n =
        (fbm1(s * 3.2 + seed * 17.0) - 0.5) * 0.42 +
        (fbm1(s * 11.0 + seed * 41.0) - 0.5) * 0.16 +
        (fbm1(s * 29.0 + seed * 7.0) - 0.5) * 0.055;
    float kink = (noise1(s * 47.0 + seed * 3.0) - 0.5) * 0.04;
    return clamp(base + n * uJagged + kink, 0.02, 0.98);
}

float crackSlope(float s, float seed) {
    float e = 0.002;
    return (crackLateral(s + e, seed) - crackLateral(s - e, seed)) / (2.0 * e);
}

void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / max(uResolution.y, 1.0);
    float seed = uSeed;
    float axis = step(0.5, uAxis);
    float flip = step(0.5, uFlip);

    // Along / across in UV: axis 0 → along X, across Y; axis 1 → along Y, across X.
    float s = mix(uv.x, uv.y, axis);
    float t = mix(uv.y, uv.x, axis);
    float sProg = mix(s, 1.0 - s, flip);

    float grow = smoothstep(0.0, 0.08, uProgress - sProg);

    float cl = crackLateral(s, seed);
    // Aspect-correct perpendicular distance (height-normalized).
    float dScale = mix(1.0, aspect, axis);
    float dt = (t - cl) * dScale;

    float flare = 0.55 + 0.9 * fbm1(s * 18.0 + seed * 9.0);
    float tip = smoothstep(0.0, 0.12, sProg) * smoothstep(1.0, 0.88, sProg);
    float halfW = uThickness * flare * mix(0.35, 1.0, tip);

    // Short spur / eye mid-path.
    float spurGate = smoothstep(0.48, 0.52, s) * (1.0 - smoothstep(0.62, 0.68, s));
    float spurT = cl + 0.018 * (0.5 + fbm1(s * 22.0 + seed));
    float dSpur = (t - spurT) * dScale;
    float d = min(abs(dt), mix(1.0, abs(dSpur), spurGate * 0.85));

    float px = 1.5 / max(uResolution.y, 1.0);
    float line = (1.0 - smoothstep(halfW, halfW + px, d)) * grow * uAmount;

    // Path tangent in UV, then screen-ish normal for the rift push.
    float slope = crackSlope(s, seed);
    vec2 tangent = axis < 0.5
        ? normalize(vec2(1.0, slope))
        : normalize(vec2(slope, 1.0));
    // Flip growth direction should not flip the tangent for distance, but
    // keep normal consistent with the across-axis side.
    vec2 normal = vec2(-tangent.y, tangent.x);
    float side = sign(dt + 1e-5);
    float rift = exp(-d / max(halfW * 3.5, 1e-4)) * grow * uAmount;
    vec2 offset = normal * side * uDisplace * rift;

    vec2 sampleUv = clamp(uv + offset, 0.0, 1.0);
    vec2 split = normal * uDisplace * rift * 0.35;
    float cr = texture2D(tMap, clamp(sampleUv + split, 0.0, 1.0)).r;
    float cg = texture2D(tMap, sampleUv).g;
    float cb = texture2D(tMap, clamp(sampleUv - split, 0.0, 1.0)).b;
    vec3 col = vec3(cr, cg, cb);

    col = mix(col, vec3(0.05), line * uInk);

    gl_FragColor = vec4(col, texture2D(tMap, sampleUv).a);
}
