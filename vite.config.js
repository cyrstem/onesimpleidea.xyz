import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/three')) return 'three';
                    if (id.includes('node_modules/@alienkitty')) return 'alien';
                    if (id.includes('node_modules/gsap')) return 'gsap';
                    if (id.includes('node_modules/animejs')) return 'animejs';
                }
            }
        }
    },
    plugins: [glsl()],
});
