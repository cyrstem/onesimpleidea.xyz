const Portafolio =()=>{
   var myImage = new Image(100, 200);
   myImage.src = '../assets/noizu1.png';
   //document.body.appendChild(myImage);

    const template = `
       <div id ="portafolio">
        <section>
         <ul>
            <li class="test"><a src="#"> Noizu</a></li>
            <li><a src="#"> Glitch </a></li>
            <li><a src="#"> Vulcan View</a></li>
         </ul>
        </section>
       </div>
    `;
    
    return template;
}
export default Portafolio;