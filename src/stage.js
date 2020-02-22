import * as THREE from 'three';
import TweenMax from 'gsap/TweenMax';




import vert from './assets/posteffects.vert';
import frag from './assets/posteffects.frag';

//check online
console.log("here comes johnny")


//global var 
 let colors =[0x141e30,0x243b55, 0xffffff,0x4F5B66,0x0CE5DB,0x00000];
 let jump = ['A','B','C','D'];

 const clock = new THREE.Clock();

//console.log(colors);


//setup three 

const scene =  new THREE.Scene();
scene.background = new THREE.Color().setHSL(1,0,0);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 20;
//scene.fog = new THREE.FogExp2( 0x231D59, 0.0025 );
scene.fog = new THREE.Fog( scene.background, 1, 47);




const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.debug.checkShaderErrors = true;


//orbit
 //const control = new THREE.OrbitControls(camera,renderer.documentElement);

// event resize---------------------------------------------

window.addEventListener('resize',() =>{
     renderer.setSize(window.innerWidth, window.innerHeight);
     camera.aspect = window.innerWidth/window.innerHeight;
     
     camera.updateProjectionMatrix();
})

//end ---------------------------------------------------------
//elements and  lights -----------------------------------------
//lights

               const hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.45 );
                hemiLight.color.setHSL( 0, 0, 100 );
                hemiLight.groundColor.setHSL( 0.025, 0, 0.075 );

                hemiLight.position.set( 0.005, 0.60, 100 );
                scene.add( hemiLight );

                // const hemiLightHelper = new THREE.HemisphereLightHelper( hemiLight, -100 );
                // scene.add( hemiLightHelper );


                const ambient = new THREE.AmbientLight( 0xf9f9f9 );
                      //ambient.position(0,0,0);
                scene.add(ambient);



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
        const mesh = new THREE.Mesh(geometry,mat);
        mesh.position.x = (Math.random()- 0.5)*90*Math.random();
        mesh.position.y = (Math.random()- 0.5)*90*Math.random();
        mesh.position.z = (Math.random()- 0.5)*100*Math.random();
       // mesh.material.color= (Math.random() -colors)
        scene.add(mesh);
        meshS+=15;
    }




const planeBase = new THREE.PlaneGeometry(2,2);
    const geoPlane = new THREE.BufferGeometry().fromGeometry(planeBase);
        //geoPlane.fromGeometry(geoPlane);
        const material = new THREE.ShaderMaterial({
            uniforms: {
        time: {
          type: 'f',
          value: 0,
        },
        resolution: {
          type: 'v2',
          value: new THREE.Vector2(window.innerWidth, window.innerHeight)
        },
        acceleration: {
          type: 'f',
          value: 0
        },
        texture: {
          type: 't',
          value: renderer,
        },
      },
      vertexShader:vert,
      fragmentShader:frag,
    });
        const screen = new THREE.Mesh(geoPlane,material);
        //scene.add(screen);

 
//end==========================================
//Rnder Function


document.body.appendChild(renderer.domElement);
const render = function(){
    requestAnimationFrame(render);
    renderer.render(scene,camera);
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
                //this.tl.to(intersects[i].object.color = '')
                
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
render();