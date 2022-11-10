precision highp float;
uniform float time;
uniform vec3 uColor;
varying vec3 vUv;

float random(vec2 st){
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*
43758.5453123);
}
// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(in vec2 st){
vec2 i=floor(st);
vec2 f=fract(st);

// Four corners in 2D of a tile
float a=random(i);
float b=random(i+vec2(1.,0.));
float c=random(i+vec2(0.,1.));
float d=random(i+vec2(1.,1.));

vec2 u=f*f*(3.-2.*f);

return mix(a,b,u.x)+
(c-a)*u.y*(1.-u.x)+
(d-b)*u.x*u.y;
}

#define OCTAVES 6
float fbm(in vec2 st){
// Initial values
float value=0.;
float amplitude=.5;
float frequency=0.;
//
// Loop of octaves
for(int i=0;i<OCTAVES;i++){
    value+=amplitude*noise(st);
    st*=2.;
    amplitude*=.5;
}
return value;
}

void main(){

vec2 st=gl_FragCoord.xy/vUv.xy;
vec3 color=vec3(0.);
vec2 translate=vec2(cos(time),sin(time));
st+=translate*10.;

float strength=floor(vUv.x*10.)/10.*floor(vUv.y*10.)/10.;
float r=1.*strength;
float g=.2*strength;
float b=.1*strength;

color-=vec3(st.x,st.y,r);

gl_FragColor=vec4(color,1.);
}