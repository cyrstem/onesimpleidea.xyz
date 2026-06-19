// Circuit traces: positions live in normalized [0,1] viewport space (y up),
// while thickness / node size are applied as a pixel-space offset so strokes
// stay crisp and square regardless of aspect ratio. uScale pulses the form
// around its centroid (uCenter); uniform normalized scale is aspect-safe.
attribute vec2 aBase;
attribute vec2 aOffset;
attribute float aDist;
attribute float aNode;

uniform vec2 uResolution;
uniform vec2 uCenter;
uniform float uScale;

varying float vDist;
varying float vNode;

void main() {
    vec2 p = (aBase - uCenter) * uScale + uCenter;
    vec2 clip = p * 2.0 - 1.0;
    vec2 off = aOffset / uResolution * 2.0;

    vDist = aDist;
    vNode = aNode;

    gl_Position = vec4(clip + off, 0.0, 1.0);
}
