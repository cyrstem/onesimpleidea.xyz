precision highp float;
#include './noise.glsl'
varying vec2 vUv;

uniform  highp float uTime;
uniform bool animate;



const highp float NOISE_FREQ_LOW = 0.09;
const highp float NOISE_FREQ_HIGH = 0.14;
const highp float NOISE_AMP_LOW = 0.09;
const highp float NOISE_AMP_HIGH = 0.14;

void main(){
  vec3 pos=position;
  
  vUv=uv;
  
  // float noiseFreq;
  // float noiseAmp;


  float noiseFreq = mix(NOISE_FREQ_LOW, NOISE_FREQ_HIGH, float(animate));
  float noiseAmp = mix(NOISE_AMP_LOW, NOISE_AMP_HIGH, float(animate));

  vec3 noisePos=vec3(pos.x*noiseFreq+uTime,pos.y,pos.z);
  // if(animate){
  //   // do something to animate the object
  //   noiseAmp+=.15;
  //   noiseFreq=.15;
    
  // }else{
  //   noiseAmp+=.06;
  //   noiseFreq=.06;
  // }
  // pos.x = snoise(noisePos)*noiseAmp;
  pos.z+=snoise(noisePos)*noiseAmp;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.);
}