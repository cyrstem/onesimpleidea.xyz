precision highp float;
 uniform float time;
        uniform vec3 uColor;
        varying vec3 vUv;

      void main() {
        // float r = 0.2+.5 *cos(vUv.xyx+ )
         gl_FragColor.rgb = 0.3 + .5 *sin (vUv.xyx + (time)) + uColor;

         gl_FragColor.a = .7;
      }