import * as THREE from 'three';
import TweenMax from 'gsap/TweenMax';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Mapping } from 'three';
//shaders
import fs from '/assets/glsl/fragment.glsl';
import vs from '/assets/glsl/vertex.glsl';

console.log("wintermute loaded");

var renderer, scene, camera,  cubes, particle;

let target = new THREE.Vector2();
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
//--------------------------------------------------------
function init (){
    renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.debug.checkShaderErrors = true;
    document.body.appendChild(renderer.domElement);
    

    scene =  new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 20;
    camera.minDistance = 0.8;
    camera.maxDistance = 50;
    scene.fog = new THREE.Fog( scene.background, 1, 57);
    let controls = new OrbitControls (camera,renderer.domElement);
  


   
    //createParticle();
    createCubes();
   
}
//--------------------------------------------------------
function createCubes(){
    cubes = new THREE.Object3D();
    var geometry = new THREE.BoxGeometry( 2,2,2 );

    let material = new THREE.MeshPhongMaterial({
        color:0xfffff,
        shading: THREE.FlatShading
    });

//     const material = new THREE.ShaderMaterial({
//     uniforms:{
//       colorB: {type:'vec3',value: new THREE.Color(0xFFFFFF)},
//       colorA: {type:'vec3',value: new THREE.Color(0xD6F9FB)},
//       u_time:{type: 'f',value: 0},
//     },
//     vertexShader:`
//     varying vec2 vUv;

//     void main() {
// 			vUv = uv;
// 			gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
//     }
//     `,
//     fragmentShader:`
//     #define PI 3.1415926
//     #define TWO_PI PI*2.
    	
//     uniform vec3 color1;
//     uniform vec3 color2;
  
//     varying vec2 vUv;
    
//     void main() {
      
//       vec2 uv = vUv * 7. - 1.;
      
//       float a = atan(uv.x,uv.y)+PI;
//       float r = TWO_PI/2.;
//       float d = cos(floor(1.15+a/r)*r-a)*length(uv);
    
      
//       gl_FragColor = vec4(mix(color1, color2, d), 1.0);
//     }
//     `,
    
//   });

    for (var i = 0; i < 250; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random()- 0.5)*90*Math.random();
        mesh.position.y = (Math.random()- 0.5)*90*Math.random();
        mesh.position.z = (Math.random()- 0.5)*100*Math.random();
        cubes.add(mesh);
      }
      scene.add(cubes);

}
//--------------------------------------------------------
//--------------------------------------------------------
function createParticle(){
    particle= new THREE.Object3D();
    var geometry = new THREE.TetrahedronGeometry(3, 1);

    let material = new THREE.MeshPhongMaterial({
        color:0xfffff,
        shading: THREE.FlatShading
    });

    for (var i = 0; i < 1000; i++) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
         mesh.position.multiplyScalar(10 + (Math.random() * 700));
         mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
        particle.add(mesh);
      }
      scene.add(particle);

}
//--------------------------------------------------------
//add Element 
function addElements(item){
    console.log("add");
    // item = particle;
    if(item == particle){
        createParticle();
    }
    else{
        createParticle();
    }
}
//--------------------------------------------------------
//remove obj

function removeElement(item){
    item = particle
    console.log("remove")
    scene.remove(item)

}
//--------------------------------------------------------

// event resize

window.addEventListener('resize',() =>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight; 
    camera.updateProjectionMatrix();

})

//--------------------------------------------------------
function render (){
    target.x = ( 1 - mouse.x ) * 0.12;
    target.y = ( 1 - mouse.y ) * 0.12;


  camera.rotation.x += 0.05 * ( target.y - camera.rotation.x );
  camera.rotation.y += 0.05 * ( target.x - camera.rotation.y );

    requestAnimationFrame(render);
    renderer.render(scene,camera);
}
//--------------------------------------------------------

function onMouseMove(event) {
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i < intersects.length; i++) {
        this.tl = new TimelineMax();
        this.tl.to(intersects[i].object.position, 9.5, {x: 9, ease: Expo.easeOut})   
    }
}
//--------------------------------------------------------
function postionCam(jump){

    return jump[Math.floor(Math.random() * jump.length)];
   
}

let jump = ['A','B','C','D'];
//--------------------------------------------------------
function onMouseClick(event) {
    postionCam(jump);
    const ans = postionCam(jump);
        switch (ans) {
            case 'A':
                    camera.rotation.x +=90;
                    // addElements(particle);
                    // removeElement(particle)
                break;

            case 'B':
                    camera.rotation.y +=80;
                    // addElements(cubes)
                    // removeElement(particle)
                    
                break;

            case 'C':
                    camera.rotation.z +=10;
                    // removeElement(cubes)
                    // removeElement(particle)
                    
                break;
            case 'D':
                    camera.rotation.z +=15;
                    // removeElement(cubes)
                    // removeElement(particle)
                    
                break;
            }
}

//--------------------------------------------------------
    init();
    render();  
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onMouseClick);

   //--------------------------------------------------------
   //noise code

//Shader staff
// const materialshader = new THREE.ShaderMaterial({
//     uniforms:{
//       colorB: {type:'vec3',value: new THREE.Color(0xFFFFFF)},
//       colorA: {type:'vec3',value: new THREE.Color(0xD6F9FB)},
//       u_time:{type: 'f',value: 0},
//     },
//     vertexShader:vs,
//     fragmentShader:fs
    
//   });