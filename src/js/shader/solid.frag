precision highp float;

uniform vec3 uColor;
uniform float uAlpha;
uniform float uFade;
uniform float uProgress;

varying float vReveal;

void main() {
    // Grow circuits in: hide edges the populate sweep hasn't reached yet.
    if (vReveal > uProgress) discard;

    gl_FragColor = vec4(uColor, uAlpha * uFade);
}
