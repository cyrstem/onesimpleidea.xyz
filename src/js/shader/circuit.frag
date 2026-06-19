precision highp float;

uniform float uProgress;
uniform float uAlpha;
uniform float uTime;
uniform vec3 uColor;

varying float vDist;
varying float vNode;

void main() {
    // Progressive "draw on": only reveal the part of the trace the tip has reached.
    if (vDist > uProgress) discard;

    float a = uAlpha;

    // Node squares gently pulse; line segments stay solid.
    float pulse = 0.6 + 0.4 * sin(uTime * 2.5 + vDist * 28.0);
    a *= mix(1.0, pulse, vNode);

    gl_FragColor = vec4(uColor, a);
}
