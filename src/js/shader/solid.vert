// 3D circuit solids: standard model-view-projection transform. aReveal carries
// the per-edge threshold so edges can grow in as uProgress sweeps 0->1.
attribute vec3 position;
attribute float aReveal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying float vReveal;

void main() {
    vReveal = aReveal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
