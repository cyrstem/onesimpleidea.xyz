function displayI () {
    const newDiv = document.createElement("div"); 
    newDiv.setAttribute("id", "floating");
    // and give it some content 
    const newContent = document.createTextNode("Custom build Audio Player"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  

    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
        
    document.getElementById('floating').style.top = getRandomInt(100) +'vh';
    var img = document.createElement('img'); 
    img.src =  
    'http://localhost:1234/noizuT.png'; 
    document.getElementById('floating').appendChild(img); 
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}




export default displayI;

