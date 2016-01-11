var steps =5;
function setup() {
createCanvas(600,600);
}
function draw() {
  background(255);
 for(i =0; i < 600; i++) {
   for(j = 0; j<600;j++){
    fill(0);
  ellipse(i+steps,j+steps,5,5);
  }
 }
}