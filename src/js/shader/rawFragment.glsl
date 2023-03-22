uniform vec3 topColor;
uniform vec3 bottomColor;
uniform float offset;
uniform float exponent;

varying vec3 vWorldPosition;

void main(){
    
    float h=normalize(vWorldPosition+offset).x;

    //gl_FragColor=vec4(mix(bottomColor,topColor,max(pow(max(h,0.4),exponent),0.)),1.);
    gl_FragColor = vec4(vec3(1.),1);
    
}