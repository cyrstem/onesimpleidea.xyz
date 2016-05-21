var myCanvas;
var num =800;
var ns;
function setup(){
  myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.parent('#paint');
  smooth();
  noStroke();
}

function draw(){
  noiseSeed(ns);
  for(var i =0; i<num; i++){
    var offset = TWO_PI/num*i;
    push();
    translate(width/2,height/2);
    rotate(offset);
    //fill(random(0,100),1);
     fill(random(0,200),random(1,3));
    var w = noise(sin(offset)*3, cos(offset)*3)*500;
    rect(0,10,w,4);
    pop();
  }
}

 function mouseMoved(){
    ns= log(random(100000));
  }

  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}