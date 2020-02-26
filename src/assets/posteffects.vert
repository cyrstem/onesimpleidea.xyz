attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
  // vUv = uv;
  // gl_Position = vec4(position, 1.0);
   vNormal = normalize( normalMatrix * normal );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 )
}