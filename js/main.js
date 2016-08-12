var r,g,b;
var i;
var num;
var ns;
function setup(){

  myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.parent('#paint');
  smooth();
  //noStroke();
  
  num =800;
  colores();
}

function draw(){
  glitch();
}
function glitch(){
  noFill();
  noiseSeed(ns);
  for(var i =0; i<num; i++){
    var offset = TWO_PI/num*i;
    push();
    translate(width/2,height/2);
    rotate(offset);
    stroke(r,g,b,5);
    var w = noise(sin(offset)*3, cos(offset)*1)*500;
    rect(0,10,w,4);
    pop();
  }
}


 function mouseMoved(){
    thing();
  
  }
  function thing(){
    rotate(TWO_PI);
    noStroke();
    fill(random(255),random(111),random(55),55);
    rectMode(CENTER);
    rect(mouseX,mouseY,random(25,50),random(50,80));
  }

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }

function colores(){
  r = random(255);
  g = random(111);
  b = random(55);
}