//////////////////////////////////////////////////////
///Text Jungle  V_1
/////////////////////////////////////////////////////
var texto;
var i, j;
function setup(){
  var myCanvas = createCanvas(windowWidth,windowHeight);
  myCanvas.parent('#paint');
  

}

function draw(){
  texto= select('.intro');
  //texto.mouseOver(encima);
  //texto.mouseOut(limpio);

}




function encima(){
   for( i=0;i<width;i=i+30){
    for(j= 0; j<500;j=j+30){
          noStroke();
          fill(random(100,255));
          rectMode(CENTER);
          rect(random(i),random(j),70,60);
    }
  }
}

function limpio(){
  for( i=0;i<width;i=i+40){
    for(j= 0; j<height;j=j+40){
          noStroke();
          fill(190);
          rectMode(CENTER);
          rect(random(i),random(j),40,40);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//////////////////////////////////////////////////////
///noise sphere  V_1
/////////////////////////////////////////////////////
var scaler = 200;
var value =360;
var d =0;
var c0;
var things;

function setup() { 
  var myCanvas = createCanvas (windowWidth,windowHeight);
  things = selectAll('h3');
  myCanvas.parent('p');
  noFill();
  stroke(0);
  c0 = new esfera(width/2, height/ 2);
}

function draw() {
  background(255);
  c0.display();
  c0.update();
  // d+=10;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function esfera(x, y) {
  this.x = x;
  this.y = y;
  this.m = 1;
  this.n1 = 15;
  this.n2 = 1;
  this.n3 = 5;
  this.display = function() {
    drawShape(width/2, height/2,this.m,this.n1,this.n2,this.n3);
  }
  this.update = function() {
    this.m = random(0.9,5);
    this.n1 = map(mouseY, 0, height, 0, 180);
    this.n2 = map(mouseX, 0, width, 0, 180);
    this.n3 = noise(0,0.55);
    fill(d);
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

function mouseMoved(){
    if (d == 0) {
    d++;
  } else {
    d = 0;
  }
  if (value==360){
    value= value-10;
  }
}
function mousePressed() {
for (var i = 0; i < things.length; i++){
    things[i].style('');
  }

}

function superformula(m, n1, n2, n3) {
  var numPoints = value;
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
//////////////////////////////////////////////////////
///Old CSS
/////////////////////////////////////////////////////

/*
Description: ONESMPLEIDEA
Version: -0.0.1
Author: -cyrstem@gmail.com
Author URI: -onesimpleidea.info
*/
html,body{
  font-family:'Dosis', sans-serif;
  overflow:hidden;
  background-color:white;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
}
h1{
  font-family: 'Lato', sans-serif;
  font-size: 90px;

}
h3{
  color:black;
  font-weight:400;
}

h2,h4,p{
    font-weight:200;
    }

a{  
  font-size: 15px;
  font-weight:500;
  color:white;
}
header{
  width:40%;
  padding: 10px;
}
#paint{
  z-index:0;
  position:fixed;
}
#contact{
    display:inline-block;
     text-align: left;
}
.footer {
  display:inline-block;
  color:white;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  text-align: left;
  background-color:#231f20;
}
a:visited {
    color: white;
}
a:hover {
  /*background-color:#BFFFF5;*/
  border: 1.8px;
  border-style: dotted;
  color:#bfcee0;
  padding:5px;
}

a:active {
  color:white;
}
a{
  font-size: 16px;
}
section{
  margin:4px;
  padding:2px;
  color:white;
  background-color:#231f20;
}
span{
  padding: 5px;
}

/*===========Contenidos REGLAS=================================*/ 
 /*cell horizonta*/
     @media only screen and (max-width : 720px) {
      html,body{
      width:100%;
    overflow:scroll;
    }
    header{
        width:100%;
      }
    @media only screen and (max-width : 480px) {
      html,body{
      width:100%;
    overflow:scroll;
    }
    header{
        width:100%;
      }
    }
/*===========Contenidos REGLAS=================================*/ 
   @media only screen and (max-width : 320px) {  
    html,body{
      width:100%;
    overflow:scroll;
      }    
      header{
        width:100%;
      }
      .footer {
        z-index: 2;
      bottom: 0;
    }
    }
    /*===========Contenidos REGLAS=================================*/ 
   @media only screen and (max-width : 360px) {
      html,body{
          width:100%;
    overflow:scroll;
      }
      header{
        width:100%;
      }
    }
//////////////////////////////////////////////////////
///Old WEB SIte bootstrap and stufff
/////////////////////////////////////////////////////

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="onesimpleidea.xyz, Portafolio, Uio, Web Design, Creative Coding, Web, Ecuador, Quito  ">
    <meta name="author" content="cyrstem, onesimpleidea.xyz, uio, Ecuador 2015">
    <meta property="og:image" content="http://onesimpleidea.xyz/social.png" />
    <meta property="og:title" content="onesimpleidea"/>
    <meta property="og:url" content="onesimpleidea.xyz"/>
    <meta property="og:description" content="Portafolio,cyrstem[at]gmail[dot]com,works,info,contacto,uio,ec,Ecuador, cyrstem, Uio, Web Design, Creative Coding, Web,Quito " />
  <title>/.One Simple Idea </title>
  <meta property="og:title" content="/.One Simple Idea"/>
  <link rel="shortcut icon" href="favicon.ico"/>
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <!-- styles and fonts -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/style.min.css" rel="stylesheet">
  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Dosis:200,300,400,500" type="text/css">
  <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
  <!-- scripts starts -->
  <script language="javascript" type="text/javascript" src="third-party/p5.min.js"></script>
  <script language="javascript" type="text/javascript" src="third-party/addons/p5.dom.js"></script>
  <script language="javascript" type="text/javascript" src="js/main.min.js"></script>
</head>
<body>
  <!-- menos click mas  simple -->
  <div class="container-fluid">
    <div id ="paint"></div> 
    <div class= "row">
      <div class ="col-sm-12 col-lg-12"> 
        <div class ="row"> 
          <header>
            <h1>hello...</h1>
            <h2></h2>
            <h2>I use code to create Visual Art and have experience in:</h2>
            <h3 style="background-color:#BFFFF5;">Interaction Design - 3d Animation - Motion Design.</h3>
          </header>
          <div class ="col-sm-12 col-lg-4">
            <section>
              <h3 style="background-color:#BFFFF5;">Recent Works\ And Experiments:</h3>
              <ul class="list-group">
                <li><a href="http://unjardinpropio.com" target="_blank">Jardin Propio</a></li>
                <li><a href="http://enmarcar.xyz" target = "_blank">Enmarcar</a></li>
                <li><a href="http://techkum.com" target = "_blank">Techkum</a></li>
                <li><a href="http://onesimpleidea.xyz/rutas" target = "_blank">Rutas</a></li>
                <!-- <h3 style="background-color:#BFFFF5;">Archive and Experiments:</h3> -->
                <li><a href="http://onesimpleidea.xyz/app">Liquid</a></li>
                <li><a href="http://cargocollective.com/onesimpleidea" target = "_blank">Other Work</a></li>
              </ul>
            </section>
            <section>
              <h3 style="display:inline;background-color:#BFFFF5;padding:4px;margin:2px;">Contact:</h3>
        <span><a href="http://ec.linkedin.com/in/jacobohz"><img src="in.png" width="20"></a></span>
    <span><a href="https://github.com/cyrstem/"><img src="git.png" width="20"></a></span>
    <p style="display:inline;font-weight:500;"><img src="mail.png" width="20"> cyrstem [at] gmail [dot] com </p>

            </section>
          </div>
          <div class ="visible-xs row">
            <div class="col-xs-12">
              <section>
                <h3 style="background-color:#BFFFF5;">Contact:</h3>
                
              </section>
            </div>
          </div>
        </div><!-- end inside row 2 -->
      </div>
    </div>
  </div> <!-- end container -->
<!-- <footer class="footer hidden-xs">
  <h3 style="display:inline;background-color:#BFFFF5;padding:4px;margin:2px;">Contact:</h3>
        <span><a href="http://ec.linkedin.com/in/jacobohz"><img src="in.png" width="20"></a></span>
    <span><a href="https://github.com/cyrstem/"><img src="git.png" width="20"></a></span>
    <p style="display:inline;font-weight:500;"><img src="mail.png" width="20"> cyrstem [at] gmail [dot] com </p>
</footer> -->
  <!-- external libs and staff -->
  <script src="third-party/jquery.min.js"></script>
  <script src="third-party/bootstrap.min.js"></script>
</body>
</html>

