import { InstancedMesh, BoxGeometry, MeshPhongMaterial, Object3D, Group, Vector3, Vector2, DynamicDrawUsage } from 'three';
import gsap from 'gsap';

export default class CubeManager {
    constructor(scene, config) {
        this.scene = scene;
        this.config = config;
        this.count = config.CUBE_COUNT;
        // Maximum distance an instance can drift from its base position.
        this.maxDistance = config.CUBE_SPREAD * 1.5;

        // Reusable scratch objects to avoid per-frame allocations.
        this.dummy = new Object3D();
        this._tmpVec = new Vector3();

        // Per-instance state (animated by GSAP, composed into matrices each frame).
        this.instances = [];

        this.setupCubes();
    }

    setupCubes() {
        // `geos` is the rotating wrapper, `main` toggles overall visibility.
        this.geos = new Object3D();
        this.main = new Group();

        const geometry = new BoxGeometry(this.config.CUBE_SIZE, this.config.CUBE_SIZE, this.config.CUBE_SIZE);
        // A single shared material for every instance.
        const material = new MeshPhongMaterial({
            color: 0x111111,
            emissive: 0x000000,
            specular: 0x111111,
            shininess: 30
        });

        this.mesh = new InstancedMesh(geometry, material, this.count);
        this.mesh.instanceMatrix.setUsage(DynamicDrawUsage);
        // Instances move around, so skip per-instance frustum culling.
        this.mesh.frustumCulled = false;

        for (let i = 0; i < this.count; i++) {
            const basePosition = new Vector3(
                (Math.random() - 0.5) * this.config.CUBE_SPREAD,
                (Math.random() - 0.5) * this.config.CUBE_SPREAD,
                (Math.random() - 0.5) * this.config.CUBE_SPREAD
            );

            this.instances.push({
                basePosition,
                position: basePosition.clone(),
                rotation: new Vector3(0, 0, 0),
                scale: new Vector3(1, 1, 1),
                rotationSpeed: new Vector3(
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01
                )
            });
        }

        for (let i = 0; i < this.count; i++) {
            this.writeMatrix(i);
        }
        this.mesh.instanceMatrix.needsUpdate = true;

        this.geos.add(this.mesh);
        this.main.add(this.geos);
        this.scene.add(this.main);
        this.main.visible = false;
    }

    writeMatrix(index) {
        const inst = this.instances[index];
        this.dummy.position.copy(inst.position);
        this.dummy.rotation.set(inst.rotation.x, inst.rotation.y, inst.rotation.z);
        this.dummy.scale.copy(inst.scale);
        this.dummy.updateMatrix();
        this.mesh.setMatrixAt(index, this.dummy.matrix);
    }

    showCubes() {
        this.main.visible = true;
        this.instances.forEach((inst) => {
            // Animate in from an exploded position toward the base position.
            gsap.from(inst.position, {
                x: inst.basePosition.x * 2,
                y: inst.basePosition.y * 2,
                z: inst.basePosition.z * 2,
                duration: 1.5,
                ease: "power2.out",
                delay: Math.random() * 0.5
            });
        });
    }

    animateCubesOnShaderCreate() {
        this.instances.forEach((inst) => {
            gsap.to(inst.rotation, {
                x: (Math.random() - 0.5) * Math.PI * 2,
                y: (Math.random() - 0.5) * Math.PI * 2,
                z: (Math.random() - 0.5) * Math.PI * 2,
                duration: 1.5,
                ease: "power2.inOut"
            });

            const randomOffset = {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2,
                z: (Math.random() - 0.5) * 2
            };

            gsap.to(inst.position, {
                x: inst.basePosition.x + randomOffset.x,
                y: inst.basePosition.y + randomOffset.y,
                z: inst.basePosition.z + randomOffset.z,
                duration: 1.5,
                ease: "power2.inOut",
                onComplete: () => {
                    gsap.to(inst.position, {
                        x: inst.basePosition.x,
                        y: inst.basePosition.y,
                        z: inst.basePosition.z,
                        duration: 1,
                        ease: "power2.out"
                    });
                }
            });
        });
    }

    repositionCubes() {
        this.instances.forEach((inst) => {
            gsap.to(inst.rotation, {
                x: (Math.random() - 0.07) * 10 * Math.random(),
                y: (Math.random() - 0.07) * 10 * Math.random(),
                z: (Math.random() - 0.07) * 10 * Math.random(),
                ease: "power4.out"
            });
        });
    }

    updateCubes() {
        for (let i = 0; i < this.count; i++) {
            const inst = this.instances[i];
            const { basePosition, position, rotation, rotationSpeed } = inst;

            const distanceFromBase = position.distanceTo(basePosition);
            if (distanceFromBase > this.maxDistance) {
                position.copy(basePosition);
            } else {
                position.lerp(basePosition, 0.1);
            }

            rotation.x += rotationSpeed.x;
            rotation.y += rotationSpeed.y;
            rotation.z += rotationSpeed.z;

            this.writeMatrix(i);
        }
        this.mesh.instanceMatrix.needsUpdate = true;
    }

    animateCubeRepulsion(index, mouseWorldPos, distance) {
        const inst = this.instances[index];
        const repelForce = 1 - (distance / 8);
        const direction = new Vector2(
            inst.position.x - mouseWorldPos.x,
            inst.position.y - mouseWorldPos.y
        ).normalize();

        const newX = inst.basePosition.x + direction.x * repelForce * 2;
        const newY = inst.basePosition.y + direction.y * repelForce * 2;
        const newZ = inst.basePosition.z + (repelForce * 0.8);

        const distanceFromBase = this._tmpVec.set(
            newX - inst.basePosition.x,
            newY - inst.basePosition.y,
            newZ - inst.basePosition.z
        ).length();

        if (distanceFromBase <= this.maxDistance) {
            gsap.to(inst.position, {
                x: newX,
                y: newY,
                z: newZ,
                duration: 0.8,
                ease: "power1.out"
            });
        } else {
            gsap.to(inst.position, {
                x: inst.basePosition.x,
                y: inst.basePosition.y,
                z: inst.basePosition.z,
                duration: 0.8,
                ease: "power1.out"
            });
        }
    }

    makeRandomCubeBigger() {
        const inst = this.instances[Math.floor(Math.random() * this.instances.length)];
        if (!inst) return;

        gsap.to(inst.scale, {
            x: 2,
            y: 2,
            z: 2,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(inst.scale, {
                    x: 1,
                    y: 1,
                    z: 1,
                    duration: 0.5,
                    ease: "power2.in"
                });
            }
        });
    }

    getMesh() {
        return this.mesh;
    }

    getInstanceBasePosition(index) {
        return this.instances[index]?.basePosition;
    }

    getMain() {
        return this.main;
    }

    getGeos() {
        return this.geos;
    }

    dispose() {
        if (this.mesh) {
            this.mesh.geometry.dispose();
            this.mesh.material.dispose();
            if (this.mesh.parent) this.mesh.parent.remove(this.mesh);
        }
    }
}
