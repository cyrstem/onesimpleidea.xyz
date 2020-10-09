import * as THREE from 'three';
import TweenMax from 'gsap/TweenMax';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { Mapping } from 'three';

//check online
console.log("wintermute loaded");

 export const change = false;
//global var 
 let colors =[0x141e30,0x243b55, 0xffffff,0x4F5B66,0x0CE5DB,0x00000];
 let jump = ['A','B','C','D'];
 let time =  new THREE.Clock();
 let target = new THREE.Vector2();

//console.log(colors);
if(!change){
  console.log("change " +change);
}

//setup three 

const scene =  new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 20;
camera.minDistance =0;
camera.maxDistance = 50;
scene.fog = new THREE.Fog( scene.background, 1, 47);




const renderer = new THREE.WebGLRenderer({antialias:true,alpha:true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.debug.checkShaderErrors = true;




 
// event resize---------------------------------------------

    window.addEventListener('resize',() =>{
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth/window.innerHeight; 
    camera.updateProjectionMatrix();

})

//end ---------------------------------------------------------
//elements and  lights -----------------------------------------
//lights

               const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.215 );
                hemiLight.color.setHSL( 0, 0, 100 );
                hemiLight.groundColor.setHSL( 0.000, 0, 0.015 );

                hemiLight.position.set( 0.005, 0.60, 100 );
                scene.add( hemiLight );

//Shader staff

 let uniforms = {
        colorB: {type: 'vec3', value: new THREE.Color(0xFFFFFF)},
        colorA: {type: 'vec3', value: new THREE.Color(0xD6F9FB)},
        u_time: {type: 'float', value: 0.0}

    }

function vertexShader() {
  return `
    varying vec3 vUv; 

    void main() {
      vUv = position; 

      vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
      gl_Position = projectionMatrix * modelViewPosition; 
    }
  `
}

function fragmentShader(){
 return `
      uniform vec3 colorA; 
      uniform vec3 colorB; 
      varying vec3 vUv;

      
      void main() {


        vec2 st= gl_FragColor.xy/vUv.xy;

        vec3 color = mix(colorA,colorB,vUv.y);

        gl_FragColor = vec4(vec3(color),0.81989);
      }


  `
}

let materialshader =  new THREE.ShaderMaterial({
    uniforms: uniforms,
    fragmentShader: fragmentShader(),
    vertexShader: vertexShader(),
  })

//mouse staff
 let raycaster = new THREE.Raycaster();
 let mouse = new THREE.Vector2();


 const geometry = new THREE.BoxGeometry( 2,2,2 );
 //const material = new THREE.MeshBasicMaterial({color:0xFFFFFF});
 const mat = new THREE.MeshPhongMaterial( {color:0xFFFFFF,specular:0x95F4FF,shininess:60,depthTest:true,depthWrite:true,emissive:0x00000} );
 //const mesh = new THREE.Mesh(geometry,mat);
 //scene.add(mesh);

 let meshS = -100;

    for(var i = 0; i< 250 ;i++){
        const mesh = new THREE.Mesh(geometry,materialshader);
        mesh.position.x = (Math.random()- 0.5)*90*Math.random();
        mesh.position.y = (Math.random()- 0.5)*90*Math.random();
        mesh.position.z = (Math.random()- 0.5)*100*Math.random();
       // mesh.material.color= (Math.random() -colors)
        scene.add(mesh);
        meshS+=15;
    }
 
//end==========================================
//Rnder Function


document.body.appendChild(renderer.domElement);
let controls = new OrbitControls (camera,renderer.domElement);

//Render--------
const render = function(){
    target.x = ( 1 - mouse.x ) * 0.02;
    target.y = ( 1 - mouse.y ) * 0.02;
  
  camera.rotation.x += 0.05 * ( target.y - camera.rotation.x );
  camera.rotation.y += 0.05 * ( target.x - camera.rotation.y );
    requestAnimationFrame(render);
    renderer.render(scene,camera);
    //uniforms.u_time.value =time;



}
//interaction  function----------------------------------------------



function colorRand(colors){

    return colors[Math.floor(Math.random() * colors.length)];
   
}


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

function postionCam(jump){

    return jump[Math.floor(Math.random() * jump.length)];
   
}




function onMouseClick(event) {


    postionCam(jump);
    const ans = postionCam(jump);
    const change = colorRand(colors);
    //console.log(change);



switch (ans) {
    case 'A':
             camera.rotation.x +=20;
        break;

    case 'B':
             camera.rotation.y +=80;
        break;

  case 'C':
             camera.rotation.z +=10;
        break;
  case 'D':
             camera.rotation.z +=15;
        break;
    }
}

//everything executes

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onMouseClick);
render();