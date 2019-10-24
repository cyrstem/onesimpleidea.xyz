import * as THREE from 'three';

console.log("threejs");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create controls
// var controls = new OrbitControls(camera, renderer.domElement);

camera.position.z = 5;

// Update controls after camera position changed
// controls.update();

function animate() {
	requestAnimationFrame(animate);
  //controls.update();
	renderer.render(scene, camera);
}
animate();


