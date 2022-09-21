precision highp float;
 uniform float uTime;
        uniform vec3 uColor;
        varying vec3 vUv;

      void main() {
         gl_FragColor.rgb = 0.3 + .5 * tan(vUv.xyx + uTime+0.03) + uColor;
            gl_FragColor.a = .7;
      }