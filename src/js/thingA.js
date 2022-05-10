import { Renderer, Camera, Transform, Program, Mesh, Sphere, Orbit } from "ogl";
const thingA = ()=>{
    const vertex = /* glsl */ `
    attribute vec3 position;
    attribute vec3 normal;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform mat3 normalMatrix;
    varying vec3 vNormal;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragment = /* glsl */ `
    precision highp float;
    varying vec3 vNormal;
    void main() {
        vec3 normal = normalize(vNormal);
        float lighting = dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
        gl_FragColor.rgb = vec3(0.2, 0.8, 1.0) + lighting * 0.1;
        gl_FragColor.a = 1.0;
    }
`;

{
    const renderer = new Renderer({ dpr: 2 });
    const gl = renderer.gl;
    document.body.appendChild(gl.canvas);
    gl.clearColor(1, 1, 1, 1);

    const camera = new Camera(gl, { fov: 35 });
    camera.position.set(0, 1, 7);
    camera.lookAt([0, 0, 0]);
    const controls = new Orbit(camera);

    function resize() {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    }
    window.addEventListener('resize', resize, false);
    resize();

    const scene = new Transform();

    const sphereGeometry = new Sphere(gl);

    const program = new Program(gl, {
        vertex,
        fragment,

        // Don't cull faces so that plane is double sided - default is gl.BACK
        cullFace: null,
    });

  

    const sphere = new Mesh(gl, { geometry: sphereGeometry, program });
    sphere.position.set(1.3, 0, 0);
    sphere.setParent(scene);

    requestAnimationFrame(update);
    function update() {
        requestAnimationFrame(update);
        controls.update();

       
        sphere.rotation.y -= 0.03;
    

        renderer.render({ scene, camera });
    }
}
}

export default thingA;