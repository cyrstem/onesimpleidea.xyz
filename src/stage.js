import * as THREE from 'three';
import TweenMax from 'gsap/TweenMax';

console.log("threejs");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor("#e5e5e5");
document.body.appendChild(renderer.domElement);



// event resize

window.addEventListener('resize',() =>{
	 renderer.setSize(window.innerWidth, window.innerHeight);
	 camera.aspect = window.innerWidth/window.innerHeight;
	 
	 camera.updateProjectionMatrix();
})

//mouse staff
 var raycaster = new THREE.Raycaster();
        var mouse = new THREE.Vector2();

//element
const geometry = new THREE.BoxGeometry( 1,1,1 );
const material = new THREE.MeshLambertMaterial({color : 0xFFCC00} );




 let meshS = -10;

 	for(var i = 0; i< 20 ;i++){
 		const mesh = new THREE.Mesh(geometry,material);
 		mesh.position.x = (Math.random()- 0.5)*10;
 		mesh.position.y = (Math.random()- 0.5)*10;
 		mesh.position.z = (Math.random()- 0.5)*10;
 		scene.add(mesh);
 		meshS+=1;
 	}






// mesh.position.x = 2;
//lights
const light = new THREE.PointLight( 0xFFFFFF, 1, 500 );
light.position.set(10,0,25);
scene.add(light);


const render = function(){
	requestAnimationFrame(render);
	renderer.render(scene,camera);
}


// render();
// var tl = new TimelineMax().delay(.3);
// 	tl.to(mesh.scale,1,{x:7, ease: Expo.easeOut})
 function onMouseMove(event) {
            event.preventDefault();

            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            var intersects = raycaster.intersectObjects(scene.children, true);
            for (var i = 0; i < intersects.length; i++) {
                this.tl = new TimelineMax();
                this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut})
                this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.easeOut})
                this.tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.easeOut})
                this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")
            }
        }

        

        window.addEventListener('mousemove', onMouseMove);
        render();