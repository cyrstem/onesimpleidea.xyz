 precision highp float;
uniform float u_time;
uniform vec3 colorA; 
uniform vec3 colorB; 
varying vec3 vUv;



float random (in vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))
                 * 43758.5453123);
}


void main() {

  //float test = vUv.y +cos(u_time);

  //vec2 st= gl_FragColor.xy/vUv.xy;

  vec3 color = mix(colorA,colorB,vUv.y);
 

 // gl_FragColor = vec4(vec3(color),0.81989);
 gl_FragColor =vec4(vec3(color),1);
}