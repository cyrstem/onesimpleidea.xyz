// Vertex dots for 3D circuit solids: rendered as gl.POINTS with a constant
// pixel size so each vertex shows a small square pad (like the 2D nodes).
// Reuses solid.frag for the reveal discard + color.
attribute vec3 position;
attribute float aReveal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uSize;

varying float vReveal;

void main() {
    vReveal = aReveal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uSize;
}
