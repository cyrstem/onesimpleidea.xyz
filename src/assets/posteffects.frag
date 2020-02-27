//glsl frag

precision highp float;

uniform float time;
uniform vec2 resolution;
uniform sampler2D texture;

varying vec2 vUv;

const float duration = 8.0;
const float delay = 4.0;

void main() {
  float intensity = pow( 0.7 - dot( vNormal, vec3( 1.0, 0.0, 1.0 ) ), 4.0 ); 
    gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;
}