//glsl frag

const fs = `
uniform vec3 colorA; 
uniform vec3 colorB; 
varying vec3 vUv;


void main() {


  vec2 st= gl_FragColor.xy/vUv.xy;

  vec3 color = mix(colorA,colorB,vUv.y);

  gl_FragColor = vec4(vec3(color),0.81989);
}

 
`

export default  fs