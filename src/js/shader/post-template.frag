precision highp float;

// Template full-viewport pass. Samples the previous Post ping-pong texture
// (scene + earlier passes) and applies a quiet film grain + soft vignette.
// Registered in PostFX as 'template' with enabled: false — flip it on to
// confirm a new pass covers the whole canvas, then disable again.
uniform sampler2D tMap;
uniform float uTime;
uniform float uGrain;
uniform float uVignette;

varying vec2 vUv;

float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
    vec4 tex = texture2D(tMap, vUv);

    // Animated grain — covers empty beige as well as ink, so you can see
    // the pass is truly full-viewport when enabled.
    float n = hash(vUv * vec2(1920.0, 1080.0) + uTime * 60.0) - 0.5;
    vec3 grain = tex.rgb + n * uGrain;

    // Soft edge darkening toward the corners.
    vec2 q = vUv * 2.0 - 1.0;
    float vig = 1.0 - smoothstep(0.55, 1.35, length(q)) * uVignette;

    gl_FragColor = vec4(grain * vig, tex.a);
}
