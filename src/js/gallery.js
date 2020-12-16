
let imagesArray = new Array();

imagesArray[0] = new Image();
imagesArray[0].src ='noizuP.png'
imagesArray[1] = new Image();
imagesArray[1].src ='skull.png'

//console.log(imagesArray);


function showImage (item, index){
  imagesArray.forEach(showImage);
  const divTemp = document.createElement("div");
  divTemp.setAttribute( "id","floating" +item);
  const newContent = document.createTextNode("element data :" +index);
  divTemp.appendChild(newContent);
  //add to DOM
    const currentDiv = document.getElementById("div");
    document.body.insertBefore(divTemp,currentDiv);

    //document.getElementById(divTemp).style.top =getRandomInt(100)+'vh';
}

function displayI () {
 // showImage();
    const newDiv = document.createElement("div"); 
    newDiv.setAttribute("id", "floating");
    // and give it some content 
    const newContent = document.createTextNode("Simple audio player build in C++ and GLSL"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  

    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("div"); 
    document.body.insertBefore(newDiv, currentDiv); 
        
    document.getElementById('floating').style.top = getRandomInt(100) +'vh';
    var img = document.createElement('img'); 
    img.src = imagesArray[1].src;

    document.getElementById('floating').appendChild(img); 
}

// function displayII (){
//   const newDiv = document.createElement("div"); 
//   newDiv.setAttribute("id", "floating2");
//   // and give it some content 
//   const newContent = document.createTextNode("image Manipulator Tool Prev"); 
//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   const currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
      
//   document.getElementById('floating2').style.left = getRandomInt(100) +'vh';
//   var img = document.createElement('img'); 
//   img.src = images[1].src;
//   document.getElementById('floating2').appendChild(img); 

// }

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




export default displayI;


