var scaler = 200;
var c0;
function setup() { 
  var myCanvas = createCanvas (800,800);
  myCanvas.parent('paint');
  noFill();
  stroke(0);
  c0 = new esfera(width / 2, height / 2);
}

function draw() {
  background(255);
  c0.display();
  c0.update();

}

function esfera(x, y) {
  this.x = x;
  this.y = y;
  this.m = 1;
  this.n1 = 12;
  this.n2 = 1;
  this.n3 = 10;
  this.display = function() {
    drawShape(width / 2, height / 2,this.m,this.n1,this.n2,this.n3);
  }
  this.update = function() {
    this.m = random(1,5);
    this.n1 = map(mouseY, 0, height, 0, 180);
    this.n2 = map(mouseX, 0, width, 0, 180);
    this.n3 = noise(0,0.55);
    fill(4);
    stroke(random(100,255));
    strokeWeight(random(0.1,0.6));
  }
}

function drawShape(x, y, m, n1,n2,n3) {
  push();
  translate(x, y);
  var newscaler = scaler;
  for (var s = 16; s > 0; s--) {
    beginShape();
    var mm = m + s;
    var nn1 = n1 + s;
    var nn2 = n2 + s;
    var nn3 = n3 + s;
    newscaler = newscaler * 0.98;
    var sscaler = newscaler;
    var points = superformula(mm, nn1, nn2, nn3);
    curveVertex(points[points.length - 1].x * sscaler, points[points.length - 1].y * sscaler);
    for (var i = 0; i < points.length; i++) {
      curveVertex(points[i].x * sscaler, points[i].y * sscaler);
    }
    curveVertex(points[0].x * sscaler, points[0].y * sscaler);
    endShape();
  }
  pop();
}

function superformula(m, n1, n2, n3) {
  var numPoints = 360;
  var phi = TWO_PI / numPoints;
  var points = []
  for (var i = 0; i <= numPoints; i++) {
    points[i] = superformulaPoints(m, n1, n2, n3, phi * i);
  }
  return points;
}

function superformulaPoints(m, n1, n2, n3, phi) {
  var r;
  var t1, t2;
  var a = 1,
    b = 1;
  var x = 0;
  var y = 0;

  t1 = cos(m * phi / 4) / a;
  t1 = abs(t1);
  t1 = pow(t1, n2);

  t2 = sin(m * phi / 4) / b;
  t2 = abs(t2);
  t2 = pow(t2, n3);

  r = pow(t1 + t2, 1 / n1);
  if (abs(r) == 0) {
    x = 0;
    y = 0;
  } else {
    r = 1 / r;
    x = r * cos(phi);
    y = r * sin(phi);
  }
  return new p5.Vector(x, y);
}