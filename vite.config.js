import glsl from 'vite-plugin-glsl';
import { defineConfig } from 'vite'
import path from 'path'

const dirname = path.resolve()

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: false,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'),
            },
            output: {
                banner: '/*! ->> created by cyrstem */',
            },
        }
    },
    plugins: [glsl()],
    assetsInclude: ['**/*.json']
})