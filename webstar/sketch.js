var order=[];
var lastToDraw;
//var current=[];

function setup() {
  createCanvas(800, 800);

  lastToDraw=0;
 
}

function draw() {
    // we can add 1 to lastToDraw every 15 frames like so
  if (frameCount % 15 == 0) {   // this will evaluate to true every 60 frames
    lastToDraw = lastToDraw + 1;
    lastToDraw = min(lastToDraw, 16); // we don't want lastToDraw to exceed the number of vertices we have
  }
  
    createOrder();
  createLines();
}
function createLines(){
  background(255);
  //noFill();
  fill(0);
  beginShape();
  for (var i=0; i<lastToDraw; i++) {
    var index = order[i];
    var col = index % random(4);  // use modulo (remainder) to get column of our index
    var row = floor(index / 4); // floor the division to get row of our index
    
    var x = map(col, random(10), 3, 100, width);
    var y = map(row, random(10), 3, 100, height);
    
    vertex(x, y);
  }
  endShape();
}
// this function will create a permutation of the array
// of indexes corresponding to our 16 points
function createOrder() {
  // order is our final permutation list
  order = [];     // clear order if we had filled it before
  var all = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];  // make new array of our indexes to sample from
  for (var i=0; i<16; i++) {
    var index = floor(random(all.length));  // pick a random index
    order.push(all[index]); // append that element from 'all' into 'order'
    all.splice(index, 1); // remove it from 'all' so we don't sample from it again
    //println("all: "+all);   // print all and order to see what we have
    //println("order: "+order);
  }
}