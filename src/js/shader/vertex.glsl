// varying vec2 vUv;

//     void main() {
  //       //  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
  //       gl_Position = projectionMatrix * modelViewMatrix *vec4(position,1.0);
  //       vUv = uv;
  
//     }

// attribute vec2 uv;
// attribute vec2 position;
varying vec2 vUv;
void main(){
  vUv=uv;
  gl_Position = vec4(position,1.0);
  //gl_Position = projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.);
}