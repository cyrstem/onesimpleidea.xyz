function displayI () {
    const newDiv = document.createElement("div"); 
newDiv.setAttribute("id", "floating");
 // and give it some content 
 const newContent = document.createTextNode("testing 123"); 
  
 // add the text node to the newly created div
 newDiv.appendChild(newContent);  

 // add the newly created element and its content into the DOM 
 const currentDiv = document.getElementById("div1"); 
 document.body.insertBefore(newDiv, currentDiv); 

}

export default displayI;