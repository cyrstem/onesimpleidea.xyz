varying vec2 vUv;
varying float uTime;


#include './mNoise.glsl'

void main(){
 vUv = uv;
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

}