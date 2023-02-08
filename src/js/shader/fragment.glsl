// precision highp float;
// uniform float time;
// uniform vec3 uColor;
// varying vec2 vUv;


// float random (vec2 st) {
//     return fract(sin(dot(st.xy,
//                          vec2(12.9898,78.233)))*
//         43758.5453123);
// }
// void main(){
            
//     //float strength = floor(vUv.x * 10.0) / 10.0 * floor(vUv.y * 10.0) / 10.0;
//    vec2 gridUv = vec2(floor(vUv.x * 15.0) / 15.0, floor(vUv.y * 15.0) / 15.0);
//     float strength = random(gridUv);

// //     // Final color
//     vec3 blackColor = vec3(0.0, 0.0, 0.0);
//     vec3 uvColor = vec3(vUv.xy, 9.08 );
//     vec3 mixedColor = mix(blackColor, uvColor, strength);

//     gl_FragColor=vec4(mixedColor,1.);
            
// }
precision highp float;
					precision highp int;
					uniform sampler2D tWater;
					uniform sampler2D tFlow;
					uniform float uTime;
					varying vec2 vUv;
					uniform vec4 res;
					void main() {
							// R and G values are velocity in the x and y direction
							// B value is the velocity length

							vec3 flow = texture2D(tFlow, vUv).rgb;
							vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
							vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
							myUV -= flow.xy * (0.15 * 0.7);
							vec3 tex = texture2D(tWater, myUV).rgb;
							gl_FragColor = vec4(flow.rgb, 1.0);
					}