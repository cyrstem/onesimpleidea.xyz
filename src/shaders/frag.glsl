precision highp float;
        uniform float uTime;
        uniform vec3 uColor;
        varying vec2 vUv;

        float random (vec2 st) {
            return fract(sin(dot(st.xy,
                                 vec2(12.9898,78.233)))*
                43758.5453123);
        }

        void main() {
            vec2 st = gl_FragCoord.xy/vUv.xy;
            st *= 10.0;
            float rnd = random(st);
            // gl_FragColor.rgb = 0.1 + 1.5 * rnd * sin(vUv.xyx + uTime) * uColor;
            // gl_FragColor.a = 1.0;
            gl_FragColor = vec4(vec3(1),1);
        }