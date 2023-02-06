precision highp float;
uniform float time;
uniform vec3 uColor;
varying vec3 vUv;


float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

float noise (in vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    // Smooth Interpolation

    // Cubic Hermine Curve.  Same as SmoothStep()
    vec2 u = f*f*(3.0-2.0*f);
    // u = smoothstep(0.,1.,f);

    // Mix 4 coorners percentages
    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

vec3 colorA = vec3(0.9804, 0.9804, 0.9804);
vec3 colorB = vec3(0.9686, 0.0157, 0.0157);

void main(){

vec2 st = gl_FragCoord.xy/vUv.xy;

 float pct = abs(sin(time));

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    vec3 color = mix(colorA, colorB, pct);
//vec3 color = vec3(vUv.x,vUv.x,vUv.x);

    gl_FragColor = vec4(color,1.0);
}