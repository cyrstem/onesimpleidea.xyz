precision highp float;

varying vec2 vUv;

uniform sampler2D uPrev;
uniform sampler2D uInput;
uniform float uFade;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
        mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
        mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
        u.y
    );
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
        v += a * vnoise(p);
        p *= 2.0;
        a *= 0.5;
    }
    return v;
}

vec3 darken(vec3 a, vec3 b) {
    return min(a, b);
}

void main() {
    // Tiny noise-driven offset gives the spread a turbulent, uneven look.
    vec2 disp = (vec2(fbm(vUv * 20.0), fbm(vUv * 20.0 + 17.0)) - 0.5) * 0.02;

    vec3 c = texture2D(uPrev, vUv).rgb;
    c = darken(c, texture2D(uPrev, vec2(vUv.x + disp.x, vUv.y)).rgb);
    c = darken(c, texture2D(uPrev, vec2(vUv.x - disp.x, vUv.y)).rgb);
    c = darken(c, texture2D(uPrev, vec2(vUv.x, vUv.y + disp.y)).rgb);
    c = darken(c, texture2D(uPrev, vec2(vUv.x, vUv.y - disp.y)).rgb);

    vec3 trail = texture2D(uInput, vUv).rgb;
    c = darken(c, trail);

    // Drift back toward white. ~1s for a fully-black pixel at 60fps with uFade=0.015.
    gl_FragColor = vec4(min(vec3(1.0), c + vec3(uFade)), 1.0);
}
