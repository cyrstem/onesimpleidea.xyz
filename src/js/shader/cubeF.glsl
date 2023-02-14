precision highp float;
uniform float time;
uniform vec3 uColor;
varying vec3 vUv;

#include './mNoise.glsl'

vec3 colorA = vec3(0.7216, 0.9137, 0.2);
vec3 colorB = vec3(0.7804, 0.7608, 0.7608);

void main(){

vec2 st = gl_FragCoord.xy/vUv.xy;

 float pct = abs(cos(time));

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    vec3 color = mix(colorA, colorB, pct);
//vec3 color = vec3(vUv.x,vUv.x,vUv.x);

    gl_FragColor = vec4(color,1.);
}