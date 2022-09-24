precision highp float;
 uniform float time;
        uniform vec3 uColor;
        varying vec3 vUv;

             float random (vec2 st) {
            return fract(sin(dot(st.xy,
                                 vec2(12.9898,78.233)))*
                43758.5453123);
        }

      void main() {
        // float r = 0.2+.5 *cos(vUv.xyx+ )


        vec2 st = gl_FragCoord.xy/vUv.xy;
            st *= 10.0;
            float rnd = random(st);
         gl_FragColor.rgb = 0.3 + .5 *sin (vUv.xyx + (time)) + uColor;

         gl_FragColor.a = .7;
      }