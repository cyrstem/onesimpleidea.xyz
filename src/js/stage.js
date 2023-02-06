import * as THREE from "three";
import { gsap } from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Mapping } from "three";
//shaders
import fs from "/assets/glsl/fragment.glsl";
import vs from "/assets/glsl/vertex.glsl";

//check online
console.log("wintermute loaded");

export const change = false;
//global var
let colors = [0x141e30, 0x243b55, 0xffffff, 0x4f5b66, 0x0ce5db, 0x00000];
let jump = ["A", "B", "C", "D"];
let time = new THREE.Clock();
let target = new THREE.Vector2();
let zpos = 20;
let end = 0;
let reached = false;
//console.log(colors);
if (!change) {
	console.log("change " + change);
}

//setup three

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	45,
	window.innerWidth / window.innerHeight,
	0.1,
	100
);
camera.position.z = zpos;
camera.minDistance = 0.8;
camera.maxDistance = 50;
scene.fog = new THREE.Fog(scene.background, 1, 57);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.debug.checkShaderErrors = true;

// event resize---------------------------------------------

window.addEventListener("resize", () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
});

//end ---------------------------------------------------------
//elements and  lights -----------------------------------------
//lights

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.915);
hemiLight.color.setHSL(182, 100, 20);
hemiLight.groundColor.setHSL(0.0, 0, 0.015);

hemiLight.position.set(0.005, 0.6, 100);
scene.add(hemiLight);

//Shader staff
const materialshader = new THREE.ShaderMaterial({
	uniforms: {
		colorB: { type: "vec3", value: new THREE.Color(0xffffff) },
		colorA: { type: "vec3", value: new THREE.Color(0xd6f9fb) },
		u_time: { type: "f", value: 0 },
	},
	vertexShader: vs,
	fragmentShader: fs,
});

//mouse staff
let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

const geometry = new THREE.BoxGeometry(2, 2, 2);
const mat = new THREE.MeshPhongMaterial({
	color: 0x000000,
	specular: 0x095f4ff,
	shininess: 80,
	depthTest: true,
	depthWrite: true,
	emissive: 0x00000,
});
let meshS = -100;

for (var i = 0; i < 250; i++) {
	const mesh = new THREE.Mesh(geometry, materialshader);
	mesh.position.x = (Math.random() - 0.5) * 90 * Math.random();
	mesh.position.y = (Math.random() - 0.5) * 90 * Math.random();
	mesh.position.z = (Math.random() - 0.5) * 100 * Math.random();
	mesh.material.color = Math.random() - colors;
	scene.add(mesh);
	meshS += 15;
}

//end==========================================
//Rnder Function

document.body.appendChild(renderer.domElement);
let controls = new OrbitControls(camera, renderer.domElement);

//Render--------
const render = function () {
	target.x = (1 - mouse.x) * 0.12;
	target.y = (1 - mouse.y) * 0.12;

	// if(zpos <=50){
	//     zpos-=0.05;
	//     camera.position.z =zpos;
	// if(zpos === end){
	//     reached =true;
	//     }
	// }
	// console.log(reached)

	camera.rotation.x += 0.05 * (target.y - camera.rotation.x);
	camera.rotation.y += 0.05 * (target.x - camera.rotation.y);
	requestAnimationFrame(render);
	renderer.render(scene, camera);
	//uniforms.u_time.value =time;
};
//interaction  function----------------------------------------------

function colorRand(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}

function onMouseMove(event) {
	event.preventDefault();

	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

	raycaster.setFromCamera(mouse, camera);

	var intersects = raycaster.intersectObjects(scene.children, true);

	for (var i = 0; i < intersects.length; i++) {
		gsap.to(intersects[i].object.position, {
			duration: 6.5,
			x: 9,
			ease: "elastic(3,0.6",
		});
	}
}

function postionCam(jump) {
	return jump[Math.floor(Math.random() * jump.length)];
}

function onMouseClick(event) {
	postionCam(jump);
	const ans = postionCam(jump);
	const change = colorRand(colors);
	//console.log(change);

	switch (ans) {
		case "A":
			camera.rotation.x += 90;

			break;

		case "B":
			camera.rotation.y += 80;

			break;

		case "C":
			camera.rotation.z += 10;

			break;
		case "D":
			camera.rotation.z += 15;

			break;
	}
}

//everything executes

window.addEventListener("mousemove", onMouseMove);
window.addEventListener("click", onMouseClick);
render();
