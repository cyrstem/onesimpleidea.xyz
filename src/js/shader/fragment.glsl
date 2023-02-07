precision highp float;
uniform float time;
uniform vec3 uColor;
varying vec2 vUv;


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
vec3 colorB = vec3(0.7725, 0.7647, 0.7647);

void main(){

// vec2 st = gl_FragCoord.xy/vUv.xy;

//  float pct = abs(sin(time));

//     // Mix uses pct (a value from 0-1) to
//     // mix the two colors
//     vec3 color = mix(colorA, colorB, pct);
// //vec3 color = vec3(vUv.x,vUv.x,vUv.x);

//     gl_FragColor = vec4(color,1.0);
//  vec2 st = gl_FragCoord.xy/vUv.y;

//     st *= 100.0; // Scale the coordinate system by 10
//     vec2 ipos = floor(st);  // get the integer coords
//     vec2 fpos = fract(st);  // get the fractional coords

//     // Assign a random value based on the integer coord
//     vec3 color = vec3(random( ipos ));

//     // Uncomment to see the subdivided grid
//     // color = vec3(fpos,0.110);

//     gl_FragColor = vec4(color,1.0);
 float strength = vUv.x;

    // Final color
    vec3 blackColor = vec3(0.0);
    vec3 uvColor = vec3(vUv, 1.0);
    vec3 mixedColor = mix(blackColor, uvColor, strength);

    // gl_FragColor = vec4(vec3(strength), 1.0);
    gl_FragColor = vec4(mixedColor, 1.0);
}