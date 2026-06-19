precision highp float;

// Fullscreen FBO pass. Currently a passthrough that simply shows the rendered
// circuit scene (black traces on a white clear). The glitch / gradient uniforms
// are pre-wired (multiplied out to zero) so a future effect can be enabled by
// changing the factors below without restructuring the pipeline.
uniform sampler2D tMap;
uniform float uTime;
uniform float uGlitch;
uniform vec3 uBgColorA;
uniform vec3 uBgColorB;

varying vec2 vUv;

void main() {
    vec2 uv = vUv;

    // Hook for a horizontal glitch displacement (disabled: * 0.0).
    float g = uGlitch * 0.0;
    uv.x += g;

    vec4 tex = texture2D(tMap, uv);

    // Hook for a tintable background gradient (disabled: * 0.0).
    vec3 bg = mix(uBgColorA, uBgColorB, vUv.y) * 0.0;

    // Hook for time-based effects (disabled: * 0.0).
    float t = uTime * 0.0;

    gl_FragColor = vec4(tex.rgb + bg + t, tex.a);
}
