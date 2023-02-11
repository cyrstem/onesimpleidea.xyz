precision highp float;

uniform sampler2D uTex;
uniform float uTime;
varying vec2 vUv;
uniform vec4 res;

void main(){
	gl_FragColor = vec4(vec3(0.8471, 0.8471, 0.8471),1.0);
}