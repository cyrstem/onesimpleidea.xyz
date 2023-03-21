precision highp float;

#include './noise.glsl'
uniform float uTime;
varying vec2 vUv;
uniform vec4 res;


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

void main(){
    
    vec2 st = gl_FragCoord.xy/res.xy*3.0;
   // st += * abs(sin(uTime*0.1)*vWave);

    vec3 color = vec3(0.0, 0.0, 0.0);

    vec2 q = vec2(0.);
    q.x = fbm( st + 0.00*uTime);
    q.y = fbm( st + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0*q + vec2(1.7,9.2)+ 0.15*uTime );
    r.y = fbm( st + 1.0*q + vec2(8.3,2.8)+ 0.12*uTime);

    float f = fbm(st+r);

    color = mix(vec3(0.9882, 0.9882, 0.9882),
                vec3(1.0, 0.0, 0.0),
                clamp((f*f)*4.0,0.0,1.0));

    color = mix(color,
                vec3(1.0, 1.0, 1.0),
                clamp(length(q),0.0,1.0));

    color = mix(color,
                vec3(0.666667,1,1),
                clamp(length(r.x),0.0,1.0));
    float coef = (f * f * f + (0.9 * f * f) + (0.5 * f));

    gl_FragColor = vec4(coef*color,1.0);
	//gl_FragColor = vec4(vec3(0.8471, 0.8471, 0.8471),1.0);
   
}