//console.clear();
import './style/main.scss'
import {init} from './js/stage'
import Navbar from './js/UI/Nav'
import Contact from './js/UI/Contact'
import Home from './js/Home'    
import Portafolio from './js/Portafolio'
import Not4u from './js/Not4u'
import About from './js/About'
import displaI from './js/gallery'
import g from './js/G'



document.addEventListener('click',function(event){
    if (event.target.id !== 'home')
        return;
       console.log("init");
     
       document.getElementById('container').innerHTML = Home();
       document.getElementById('ui').style.bottom= "20vh";
       g.makeDivs();

},false);



document.addEventListener('click',function(event){
    if (event.target.id !== 'project')
        return;
        document.getElementById('container').innerHTML = Portafolio();
        document.getElementById('ui').style.bottom= "30vh";


        let p = document.getElementById('portafolio');
        let g = document.getElementById('p1');
        let g2 = document.getElementById('p2');

        


        g.addEventListener("mouseover", mouseOver);
        g.addEventListener("mouseout", mouseOut);
        g2.addEventListener("mouseover",mouseOver);
        g2.addEventListener("mouseout",mouseOut);

        gallery(p);
           

},false);



function mouseOut(){
    let d = document.getElementById("floating");
    d.remove();
}
function mouseOver( ){
console.log("image" );
displaI();

}

document.addEventListener('click',function(event){
    if (event.target.id !== 'about')
        return;
        document.getElementById('container').innerHTML = About();
        document.getElementById('ui').style.bottom= "30vh";
       

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
//this is not  something useful
function gallery( data ){
    console.log("here the divs" + data);
}




app();
