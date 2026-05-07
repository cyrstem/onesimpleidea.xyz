precision highp float;

uniform sampler2D uScene;
uniform sampler2D uPort0;
uniform sampler2D uPort1;
uniform sampler2D uPort2;
uniform sampler2D uPort3;

uniform float uTime;
uniform vec2 uResolution;
uniform float uIntensity;
uniform float uActive;
uniform float uAboutTransition;
uniform float uAboutOpen;
uniform float uAboutMorphing;
uniform vec2 uRevealPointer;
uniform float uRevealActive;
uniform float uRevealRadius;
uniform vec2 uAreaCenter;
uniform vec2 uAreaRadius;

varying vec2 vUv;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float luma(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

vec3 samplePortfolio(vec2 uv, float pick) {
  vec3 p0 = texture2D(uPort0, uv).rgb;
  vec3 p1 = texture2D(uPort1, uv).rgb;
  vec3 p2 = texture2D(uPort2, uv).rgb;
  vec3 p3 = texture2D(uPort3, uv).rgb;
  float i = clamp(floor(pick * 4.0), 0.0, 3.0);
  float w0 = 1.0 - step(1.0, i);
  float w1 = step(1.0, i) * (1.0 - step(2.0, i));
  float w2 = step(2.0, i) * (1.0 - step(3.0, i));
  float w3 = step(3.0, i);
  return w0 * p0 + w1 * p1 + w2 * p2 + w3 * p3;
}

void main() {
  vec3 hiddenBg = vec3(0.93);

  if (uAboutOpen > 0.5) {
    gl_FragColor = vec4(texture2D(uScene, vUv).rgb, 1.0);
    return;
  }

  // No pointer yet: flat background — unless About dissolve is animating (needs full pipeline).
  if (uRevealActive < 0.5 && uAboutMorphing < 0.5) {
    gl_FragColor = vec4(hiddenBg, 1.0);
    return;
  }

  float t = uTime;
  // 0 outside the about click transition; 0→1 during GSAP only (see App.renderWithPostProcessing).
  float morph = clamp(uAboutTransition, 0.0, 1.0);
  float lift = morph * 0.38;
  vec2 sceneUv = clamp(vUv + vec2(0.0, -lift), vec2(0.002), vec2(0.998));

  vec3 raw = texture2D(uScene, sceneUv).rgb;
  vec3 clean = vec3(luma(raw));

  float aspect = uResolution.x / max(uResolution.y, 1.0);
  vec2 aspectUv = vec2(vUv.x * aspect, vUv.y);

  // Macro regions drive random block size (different square scales across screen).
  vec2 macro = floor(aspectUv * vec2(6.5, 10.5) + t * vec2(0.04, 0.061));
  float blockUv = mix(0.024, 0.11, hash21(macro + 203.91));
  vec2 cellId = floor(vUv / blockUv);

  float h0 = hash21(cellId + 77.31);
  float h1 = hash21(cellId + 19.04);
  float h2 = hash21(cellId + 4.27 + floor(t * 2.2));

  // Scene “trace”: smear from recent pixels (portfolio-like motion ghosts, B&W).
  vec2 traceOff = vec2(
    sin(h0 * 6.2831853 + t * 6.0) * 0.042,
    -fract(h1 + t * 2.1) * 0.075
  ) * uIntensity;
  vec2 traceUv = clamp(sceneUv + traceOff * uActive, vec2(0.002), vec2(0.998));
  vec3 traceGray = vec3(luma(texture2D(uScene, traceUv).rgb));

  // Portfolio scraps inside each tile
  float pickIdx = hash21(cellId + floor(t * 1.3));
  vec2 portUv = fract(
    vUv * (2.8 + h0 * 2.4)
    + vec2(h2 * 1.7, h1 * 2.1)
    + vec2(t * 0.05 * (pickIdx - 0.5), t * 0.043 * sin(h0 * 8.0 + t))
  );
  vec3 portGray = vec3(luma(samplePortfolio(portUv, pickIdx)));

  // Tile blend: sharper squares vs soft noise to break uniformity
  float tileMix = smoothstep(30.12, 0.96, mix(h0, fract(h2 * 11.713), 0.62));
  vec3 glitchTile = mix(traceGray * 0.55 + clean * 0.45, portGray * 0.58 + traceGray * 0.42, fract(h1 * 8.917 + h0));

  vec2 area = (vUv - uAreaCenter) / max(uAreaRadius, vec2(0.001));
  float areaMask = 1.0 - smoothstep(0.82, 1.04, length(area));
  float g = clamp(uActive * areaMask * uIntensity, 0.0, 1.0);

  vec3 finalColor = mix(clean, glitchTile, tileMix * g);

  // About open: FBO drifts up (sceneUv) then tile-noise dissolves toward panel gray
  vec2 dcell = floor(vUv * uResolution * 0.202);
  float dNoise = hash21(dcell - floor(t * 2.0));
  float dissolve = step(1.0 - morph, dNoise) * smoothstep(0.06, 0.92, morph);
  vec3 bg = vec3(0.93);
  finalColor = mix(finalColor, bg, dissolve * 0.9);
  finalColor = mix(finalColor, bg, smoothstep(0.78, 1.0, morph));

  // Circular mask around pointer when the grid has been revealed by movement.
  vec3 outCol = finalColor;
  if (uRevealActive > 0.5) {
    vec2 pd = vUv - uRevealPointer;
    float asp = uResolution.x / max(uResolution.y, 1.0);
    pd.x *= asp;
    float rd = length(pd);
    float rm = 1.0 - smoothstep(uRevealRadius * 0.68, uRevealRadius * 1.12, rd);
    outCol = mix(hiddenBg, finalColor, rm);
  }

  gl_FragColor = vec4(outCol, 1.0);
}
