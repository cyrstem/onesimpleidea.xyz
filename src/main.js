//console.clear();
import './style/main.scss'
import {init} from './js/stage'
import Navbar from './js/interface/Nav'
import Contact from './js/interface/Contact'
import Home from './js/pages/Home'    
import Portafolio from './js/pages/Portafolio'
 import Not4u from './js/pages/Not4u'

// import displaI from './js/gallery'


document.addEventListener('click',function(event){
    if (event.target.id !== 'home')
        return;
       document.getElementById('container').innerHTML = Home();
},false);



document.addEventListener('click',function(event){
    if (event.target.id !== 'project')
        return;
        document.getElementById('container').innerHTML = Portafolio();

},false);

//parts to remove  and  add imgages to much confucion

 function projandplaces(){
    console.log("show what is what");
  

      let gDiv =document.createElement("div");
        gDiv.setAttribute("id","gallery");
        const gContent = document.createTextNode("Projects");
        console.log("hecho");
        gDiv.appendChild(gContent);

        const currentDiv = document.getElementById("div");
        document.body.insertBefore(gDiv, currentDiv);
        document.getElementById('gallery').style.top = changePos(100) +'vh';
       
}

    function changePos(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

document.addEventListener('click',function(event){
    if (event.target.id !== 'about')
        return;
        let removeDiv = document.getElementById('gallery');
        removeDiv.remove();
        document.getElementById('container').innerHTML = Home();
       

},false);

const app =()=>{
    //load UI and socials media  plus main content
    document.getElementById('ui').innerHTML = Navbar();
    document.getElementById('container').innerHTML = Home();
    document.getElementById('contact').innerHTML = Contact();
    //responsive screens 
    var x = window.matchMedia("(max-width: 700px)");
    if(x.matches){
        console.log("responsive biatch");
        document.addEventListener('click',function(event){
            if (event.target.id !== 'project')
                return;
                document.getElementById('container').innerHTML = Not4u();
                document.getElementById('ui').style.bottom= "20vh";



        },false);
        
    }
        
}

document.addEventListener("scroll",function(event){
    let scroll_y = this.scroollY;
    console.log("scroll"+scroll_y);
});

function preload(){
    var x = document.body;
    //x.style.backgroundColor = "red";
}

window.onload = (event) => {

    //console.log('page is fully loaded');
    preload();
    app();
  };


