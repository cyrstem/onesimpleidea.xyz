import { Mesh, BoxGeometry, MeshPhongMaterial, Object3D, Group, Vector3, Vector2 } from 'three';
import gsap from 'gsap';

export default class CubeManager {
    constructor(scene, config) {
        this.scene = scene;
        this.config = config;
        this.cubes = [];
        this.maxDistance = this.config.CUBE_SPREAD * 1.5; // Maximum distance a cube can move from its base position
        console.log('CubeManager initialized with config:', config);
        this.setupCubes();
    }

    setupCubes() {
        console.log('Setting up cubes...');
        this.geos = new Object3D();
        this.main = new Group();

        const geometry = new BoxGeometry(this.config.CUBE_SIZE, this.config.CUBE_SIZE, this.config.CUBE_SIZE);
        const material = new MeshPhongMaterial({
            color: 0x111111,
            emissive: 0x000000,
            specular: 0x111111,
            shininess: 30
        });

        this.cubes = Array(this.config.CUBE_COUNT).fill(null).map(() => {
            const mesh = new Mesh(geometry, material.clone());
            const basePos = new Vector3(
                (Math.random() - 0.5) * this.config.CUBE_SPREAD,
                (Math.random() - 0.5) * this.config.CUBE_SPREAD,
                (Math.random() - 0.5) * this.config.CUBE_SPREAD
            );
            
            mesh.userData = {
                basePosition: basePos,
                rotationSpeed: new Vector3(
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01
                )
            };
            
            mesh.position.copy(basePos);
            this.geos.add(mesh);
            return mesh;
        });

        this.main.add(this.geos);
        this.scene.add(this.main);
        this.main.visible = false;
        console.log('Cubes setup complete. Cube count:', this.cubes.length);
    }

    showCubes() {
        console.log('Showing cubes...');
        this.main.visible = true;
        this.cubes.forEach(cube => {
            gsap.from(cube.position, {
                x: cube.userData.basePosition.x * 2,
                y: cube.userData.basePosition.y * 2,
                z: cube.userData.basePosition.z * 2,
                duration: 1.5,
                ease: "power2.out",
                delay: Math.random() * 0.5
            });
        });
        console.log('Cubes visibility set to:', this.main.visible);
    }

    animateCubesOnShaderCreate() {
        this.cubes.forEach(cube => {
            const randomRotation = {
                x: (Math.random() - 0.5) * Math.PI * 2,
                y: (Math.random() - 0.5) * Math.PI * 2,
                z: (Math.random() - 0.5) * Math.PI * 2
            };
            
            gsap.to(cube.rotation, {
                x: randomRotation.x,
                y: randomRotation.y,
                z: randomRotation.z,
                duration: 1.5,
                ease: "power2.inOut"
            });

            const randomOffset = {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2,
                z: (Math.random() - 0.5) * 2
            };

            gsap.to(cube.position, {
                x: cube.userData.basePosition.x + randomOffset.x,
                y: cube.userData.basePosition.y + randomOffset.y,
                z: cube.userData.basePosition.z + randomOffset.z,
                duration: 1.5,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.to(cube.position, {
                        x: cube.userData.basePosition.x,
                        y: cube.userData.basePosition.y,
                        z: cube.userData.basePosition.z,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            });
        });
    }

    updateCubes() {
        this.cubes.forEach(cube => {
            const { basePosition, rotationSpeed } = cube.userData;
            
            // Check if cube is too far from its base position
            const distanceFromBase = cube.position.distanceTo(basePosition);
            if (distanceFromBase > this.maxDistance) {
                // Reset position if too far
                cube.position.copy(basePosition);
            } else {
                // Normal lerp behavior
                cube.position.lerp(basePosition, 0.1);
            }
            
            cube.rotation.x += rotationSpeed.x;
            cube.rotation.y += rotationSpeed.y;
            cube.rotation.z += rotationSpeed.z;
        });
    }

    animateCubeRepulsion(cube, mouseWorldPos, distance) {
        const repelForce = 1 - (distance / 8);
        const direction = new Vector2(
            cube.position.x - mouseWorldPos.x,
            cube.position.y - mouseWorldPos.y
        ).normalize();

        // Calculate new position
        const newX = cube.userData.basePosition.x + direction.x * repelForce * 2;
        const newY = cube.userData.basePosition.y + direction.y * repelForce * 2;
        const newZ = cube.userData.basePosition.z + (repelForce * 0.8);

        // Check if the new position is within bounds
        const distanceFromBase = new Vector3(
            newX - cube.userData.basePosition.x,
            newY - cube.userData.basePosition.y,
            newZ - cube.userData.basePosition.z
        ).length();

        if (distanceFromBase <= this.maxDistance) {
            gsap.to(cube.position, {
                x: newX,
                y: newY,
                z: newZ,
                duration: 0.8,
                ease: "power1.out"
            });
        } else {
            // If out of bounds, return to base position
            gsap.to(cube.position, {
                x: cube.userData.basePosition.x,
                y: cube.userData.basePosition.y,
                z: cube.userData.basePosition.z,
                duration: 0.8,
                ease: "power1.out"
            });
        }
    }

    getCubes() {
        return this.cubes;
    }

    getMain() {
        return this.main;
    }

    getGeos() {
        return this.geos;
    }

    makeRandomCubeBigger() {
        const randomCube = this.cubes[Math.floor(Math.random() * this.cubes.length)];
        const originalScale = randomCube.scale.clone();
        
        gsap.to(randomCube.scale, {
            x: 2,
            y: 2,
            z: 2,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(randomCube.scale, {
                    x: originalScale.x,
                    y: originalScale.y,
                    z: originalScale.z,
                    duration: 0.5,
                    ease: "power2.in"
                });
            }
        });
    }
} 