
 //let images = images['noizuP.png','skull.png'];
// images.forEach(function (item,index,array){
//   console.log(item,index)
// })
var imgs = new Image();
imgs.src = 'noizuP.png';
//let images = images[imgs];

function displayI () {
    const newDiv = document.createElement("div"); 
    newDiv.setAttribute("id", "floating");
    // and give it some content 
    const newContent = document.createTextNode("Custom build Audio Player"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  

    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("div"); 
    document.body.insertBefore(newDiv, currentDiv); 
        
    document.getElementById('floating').style.top = getRandomInt(100) +'vh';
    var img = document.createElement('img'); 
    img.src = 'noizuP.png'
    document.getElementById('floating').appendChild(img); 
}

function displayII (){
  const newDiv = document.createElement("div"); 
  newDiv.setAttribute("id", "floating2");
  // and give it some content 
  const newContent = document.createTextNode("image Manipulator Tool Prev"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
      
  document.getElementById('floating2').style.left = getRandomInt(100) +'vh';
  var img = document.createElement('img'); 
  img.src = images[1].src;
  document.getElementById('floating2').appendChild(img); 

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




export default displayI;


