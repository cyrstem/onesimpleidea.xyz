// Circuit traces: positions live in normalized [0,1] viewport space (y up),
// while thickness / node size are applied as a pixel-space offset so strokes
// stay crisp and square regardless of aspect ratio.
attribute vec2 aBase;
attribute vec2 aOffset;
attribute float aDist;
attribute float aNode;

uniform vec2 uResolution;

varying float vDist;
varying float vNode;

void main() {
    vec2 clip = aBase * 2.0 - 1.0;
    vec2 off = aOffset / uResolution * 2.0;

    vDist = aDist;
    vNode = aNode;

    gl_Position = vec4(clip + off, 0.0, 1.0);
}
