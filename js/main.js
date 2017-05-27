// window.addEventListener('load', init, false);
//=======================================================================
//VARIABLES GLOBALES Y ARRAY DE COLORES
//=======================================================================
  var scene, camera ,renderer ,HEIGHT, WIDTH ,container;
  var Colors = {
        white:0xD8E2E2,
        brown:0x59332e,
        grey:0x9A9A9A,
        greyDark:0x171617,
        brownDark:0x23190f,
        black:0x000000
    };
//=======================================================================
//FUNCION DE INICIO
//=======================================================================
  function init(event){
    createScene();
    createLight();
    createCubes();
    loop();
    document.addEventListener('mousemove', handleMouseMove, false);    
  }
//=======================================================================
//CREAR ESCENA
//=======================================================================
  function createScene(){
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

  // crea la scena y camara basico 
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera( 60, WIDTH / HEIGHT, 1, 1000 );
      camera.lookAt(scene.position);

    //crea render y setea
      renderer =  new THREE.WebGLRenderer({alpha: true, antialias: true });
      renderer.setSize(WIDTH, HEIGHT);

      renderer.setPixelRatio( window.devicePixelRatio );
    //carga dentro del div o body o elemento 
    // var container = document.getElementById('osi');
    //     container.appendChild(renderer.domElement);

      document.body.appendChild(renderer.domElement);
      // // var container = document.getElementById('test');
      //   container = document.getElementById('osi');
      //   container.appendChild(renderer.domElement);

    //-- posicion camara
      camera.position.z = 10; 
    // Enable shadow rendering
      renderer.shadowMap.enabled = true;

      window.addEventListener('resize', handleWindowResize,false);
      window.addEventListener('click', handleMouseDown, false);
  }
//=======================================================================
//Responsive
//=======================================================================
  function handleWindowResize() {
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      renderer.setSize(WIDTH, HEIGHT);
      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
  }

//=======================================================================
//LUCES
//=======================================================================
var light, hemisphereLight, shadowLight;//VARIABLES EXTRAS?????

function createLight(){
  hemisphereLight = new THREE.HemisphereLight( Colors.white, Colors.black, 1 );
  scene.add( hemisphereLight );

  light = new THREE.PointLight( Colors.white, 0.4 );
  light.position.set( 0, 10, 100);
  scene.add( light );



}
//=======================================================================
//ELEMENTO o ELementos
//=======================================================================
//Crea una classs
function Cube (){
  this.mesh =  new THREE.Object3D();
  
  var geo = new THREE.BoxGeometry(2.5,2.5,2.5);

 var mat = new THREE.MeshPhongMaterial({color:Colors.black, specular:Colors.black, shininess:5, reflectivity:5});
// numero de cubos y position  de los cubos
  var nBlocks = 7 +Math.floor(Math.random()*3.2);//esto es no nuevo

  for(var i=0;i<nBlocks; i++){
    var c = new THREE.Mesh(geo,mat);
    c.position.x = (Math.random()-0.3)* 4.5;
    c.position.y = (Math.random()-0.4)* 4.5;
    c.position.z = (Math.random()-0.4)* 4.5;

    c.rotation.z = Math.random()*Math.PI;
    c.rotation.x = Math.random()*Math.PI;
    c.rotation.y = Math.random()*Math.PI;

    c.castShadow = true;
    c.receiveShadow = true;
    this.mesh.add(c); 
    cubes.push(c);
  }
    
//function para mover
  this.moverte =function(){
    c.rotation.x -= 0.03;
    c.rotation.y += 0.03;
    c.rotation.z += 0.03;
  }
//mouse click scale  random
  this.action = function(){
    var s = .1 + Math.random()*1.5;
    c.scale.set(s,s,s);
  }
}

 var cube;
 var cubes= [];


function createCubes(){
    cube = new Cube();  
    cube.mesh.position.z =-1;
    scene.add(cube.mesh)

    

}


//=======================================================================
// Mouse FOllow  and click
//=======================================================================
var mousePos={x:0, y:0};

// now handle the mousemove event

function handleMouseMove(event) {

  // here we are converting the mouse position value received 
  // to a normalized value varying between -1 and 1;
  // this is the formula for the horizontal axis:
  
  var tx = -1 + (event.clientX / WIDTH)*2;

  // for the vertical axis, we need to inverse the formula 
  // because the 2D y-axis goes the opposite direction of the 3D y-axis
  
  var ty = 1 - (event.clientY / HEIGHT)*2;
  mousePos = {x:tx, y:ty};

}
function updateCube(){
  var targetX = normalize(mousePos.x, -0.6, 1, -WIDTH, WIDTH);
  var targetY = normalize(mousePos.y, -0.6, 1, -HEIGHT, HEIGHT);
  //airplane.mesh.rotation.z = (targetY-airplane.mesh.position.y)*0.0128;
  cube.mesh.rotation.y = (targetY-cube.mesh.position.y)*0.0408;
  cube.mesh.rotation.x = (targetX-cube.mesh.position.x)*0.0008;

}

function normalize(v,vmin,vmax,tmin,tmax){
  var nv = Math.max(Math.min(v,vmax), vmin);
  var dv = vmax-vmin;
  var pc = (nv-vmin)/dv;
  var dt = tmax-tmin;
  var tv = tmin + (pc*dt);
  return tv;
}

function handleMouseDown (){
  // console.log("hello");
  //cube.action();
}

//=======================================================================
//RENDER
//=======================================================================
  function loop(){
    cube.moverte();
    updateCube();
      
      requestAnimationFrame( loop );
      renderer.render (scene, camera);
      for(var i= 0; i < cubes.length; i++){
      cubes[i].rotation.x+=0.03;
      //var t = .1 + Math.random()*2.5;
      //cube[i].scale.set(t,t,t);
      //cubes[i].position.x = 0.3;
      //cubes[i].rotation.z+= 0.02;
    }
}

// $(".info").hide();
  init();