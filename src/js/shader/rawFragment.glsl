precision mediump float;
uniform float uTime;
uniform vec4 res;
varying vec2 vUv;

float random (in vec2 _st) {
    return fract(sin(dot(_st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}


// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    // Four corners in 2D of a tile
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

#define NUM_OCTAVES 8

float fbm ( in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}


// void main()
// {
//     vec2 st = gl_FragCoord.xy/res.xy*3.;
//     // st += st * abs(sin(u_time*0.1)*3.0);
//     vec3 color = vec3(0.0, 0.0, 0.0);

//     vec2 q = vec2(0.);
//     q.x = fbm( st + 0.00*uTime);
//     q.y = fbm( st + vec2(1.0));

//     vec2 r = vec2(0.);
//     r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime );
//     r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.12*uTime);

//     float f = fbm(st+r);

//     color = mix(vec3(0.9882, 0.9882, 0.9882),
//                 vec3(1.0, 0.0, 0.0),
//                 clamp((f*f)*4.0,0.0,1.0));

//     color = mix(color,
//                 vec3(1.0, 1.0, 1.0),
//                 clamp(length(q),0.0,1.0));

//     color = mix(color,
//                 vec3(0.666667,1,1),
//                 clamp(length(r.x),0.0,1.0));
//     float coef = (f * f * f + (0.9 * f * f) + (0.5 * f));

//    gl_FragColor = vec4(coef*color,1.);
 //gl_FragColor=vec4(0.5529, 0.5098, 0.5098, 1.0);

void main()
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragColor.xy / res.xy;
    
    // Calculate the to center distance
    float d = length(uv - 0.5) * 2.0;
    
    // Calculate the ripple time
    float t = d * d * 25.0 - uTime * 3.0;
    
    // Calculate the ripple thickness
    d = (cos(t) * 0.5 + 0.5) * (1.0 - d);
    
    // Time varying pixel color
    vec3 col = 0.5 + 0.5 * cos(t / 20.0 + uv.xyx + vec3(0.0,2.0,4.0));

    // Set the output color to rgb channels and the thickness to alpha channel
    // AO is automatically calculated
    gl_FragColor = vec4(col, d);
}

