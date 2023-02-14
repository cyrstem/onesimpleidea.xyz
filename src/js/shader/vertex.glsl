varying vec2 vUv;
varying float uTime;
varying float vWave;

#include './mNoise.glsl'
void main(){
 vUv = uv;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  vec3 pos = position;
  float noiseFreq = 3.5;
  float noiseAmp = 0.15; 
  vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
  pos.z += snoise(noisePos) * noiseAmp;
  vWave = pos.z;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
}