import * as THREE from 'three';
import TweenMax from 'gsap/TweenMax';
//import OrbitControls from 'js/controls/OrbitControls';

//check online
console.log("here comes johnny")


//global var 
 let colors =[0x141e30,0x243b55, 0xffffff,0x4F5B66,0x0CE5DB,0x00000];
 let jump = ['A','B','C','D'];
 let time =  new THREE.Clock();
 //let controls = new OrbitControls (camera,renderer.domElement);
//console.log(colors);


//setup three 

const scene =  new THREE.Scene();
scene.background = new THREE.Color().setHSL(1,0,0);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 20;

scene.fog = new THREE.Fog( scene.background, 1, 47);




const renderer = new THREE.WebGLRenderer({antialias:true});
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
                //scene.add( hemiLight );

                // const hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, -100 );
                // scene.add( hemiLightHelper );


                const ambient = new THREE.AmbientLight( 0xf9f9f9 );
                      //ambient.position(0,0,0);
               // scene.add(ambient);

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


//Render--------
const render = function(){

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

            //let text = document.getElementById("about");
            //tl.to(text,0.5,{color:"#000000",ease:Bounce.easeOut,yoyo:true,repeatDeleay:0.1});

        }

function postionCam(jump){

    return jump[Math.floor(Math.random() * jump.length)];
   
}




function onMouseClick(event) {


    postionCam(jump);
const ans = postionCam(jump);
const change = colorRand(colors);
    console.log(change);



switch (ans) {
    case 'A':
             camera.rotation.x +=120;
        break;

    case 'B':
             camera.rotation.y +=180;
        break;

  case 'C':
             camera.rotation.z +=10;
        break;
  case 'D':
             camera.rotation.z +=150;
        break;
}




//console.log("click");


}
        //window.addEventListener('touchend', onDocumentTouchEnd, false);

        // function onDocumentTouchEnd(event) {
        //     event.preventDefault();

        //     mouse.x = (event.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
        //     mouse.y = -(event.changedTouches[0].clientY / window.innerHeight) * 2 + 1;

        //     raycaster.setFromCamera(mouse, camera);
        //     const intersects = raycaster.intersectObjects(yourObject3D);
        // }

//everything executes

window.addEventListener('mousemove', onMouseMove);
window.addEventListener('click', onMouseClick);
// const time = new Three.clock;
// uniform.iTime.value = time;
// time *=0.001;
render();