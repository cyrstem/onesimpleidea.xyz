//console.clear();
import './style/main.scss'
import {init} from './js/stage'
import Navbar from './js/UI/Nav'
import Contact from './js/UI/Contact'
import Home from './js/Home'
import Portafolio from './js/Portafolio'
import Not4u from './js/Not4u'
import About from './js/About'



document.addEventListener('click',function(event){
    if (event.target.id !== 'home')
        return;
       console.log("log");
       document.getElementById('container').innerHTML = Home();
       document.getElementById('ui').style.bottom= "30vh";

},false);

document.addEventListener('click',function(event){
    if (event.target.id !== 'project')
        return;
        document.getElementById('container').innerHTML = Portafolio();
        document.getElementById('ui').style.bottom= "20vh";
},false);




document.addEventListener('click',function(event){
    if (event.target.id !== 'about')
        return;
        document.getElementById('container').innerHTML = About();
        document.getElementById('ui').style.bottom= "30vh";

},false);

const app =()=>{
    document.getElementById('ui').innerHTML = Navbar();
    document.getElementById('container').innerHTML = Home();
    document.getElementById('contact').innerHTML = Contact();

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






app();
