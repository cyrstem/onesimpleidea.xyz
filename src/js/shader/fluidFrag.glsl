precision highp float;

uniform sampler2D uPrev;
uniform sampler2D uTrail;
uniform vec2 uResolution;
uniform float uTime;

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.8;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}

vec3 blendDarken(vec3 base, vec3 blend) {
  return min(blend, base);
}

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.y / max(uResolution.x, 1.0);
  vec2 aspectVec = uResolution.x < uResolution.y ? vec2(1.0, aspect) : vec2(1.0 / max(aspect, 0.08), 1.0);

  vec2 disp = fbm(uv * 100.0 + uTime * 12.12) * 0.003 * aspectVec;

  vec3 texel = texture2D(uPrev, uv).rgb;
  vec3 t2 = texture2D(uPrev, uv + vec2(disp.x, 0.0)).rgb;
  vec3 t3 = texture2D(uPrev, uv - vec2(disp.x, 0.0)).rgb;
  vec3 t4 = texture2D(uPrev, uv + vec2(0.0, disp.y)).rgb;
  vec3 t5 = texture2D(uPrev, uv - vec2(0.0, disp.y)).rgb;

  vec3 flood = texel;
  flood = blendDarken(flood, t2);
  flood = blendDarken(flood, t3);
  flood = blendDarken(flood, t4);
  flood = blendDarken(flood, t5);

  vec2 trailUv = vec2(uv.x, 1.0 - uv.y);
  vec3 trail = texture2D(uTrail, trailUv).rgb;
  vec3 combined = blendDarken(flood, trail);

  vec3 outRgb = min(vec3(1.0), combined + vec3(0.018));
  gl_FragColor = vec4(outRgb, 1.0);
}
