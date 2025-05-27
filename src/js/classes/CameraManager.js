import { PerspectiveCamera } from 'three';
import gsap from 'gsap';

export default class CameraManager {
    constructor(config) {
        this.config = config;
        this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.001, 1000);
        this.camera.position.set(0, 0, this.config.CAMERA_DISTANCE);
    }

    resize(width, height) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    }

    animateWiggle() {
        gsap.to(this.camera.position, {
            x: this.camera.position.x + (Math.random() - 0.5) * 2,
            y: this.camera.position.y + (Math.random() - 0.5) * 2,
            z: this.camera.position.z + (Math.random() - 0.5) * 2,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(this.camera.position, {
                    x: 0,
                    y: 0,
                    z: this.config.CAMERA_DISTANCE,
                    duration: 0.8,
                    ease: "power2.inOut"
                });
            }
        });
    }

    getCamera() {
        return this.camera;
    }
} 