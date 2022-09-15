precision highp float;
 uniform float uTime;
        uniform vec3 uColor;
        varying vec3 vUv;

      void main() {
         gl_FragColor.rgb = 0.3 + .5 * sin(vUv.xyx + uTime) + uColor;
            gl_FragColor.a = 1.0;
      }