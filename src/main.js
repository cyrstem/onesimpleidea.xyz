//console.clear();
import './style/main.scss'
import {init} from './js/stage'
import Navbar from './js/UI/Nav'
import Contact from './js/UI/Contact'
import Home from './js/Home'
import Portafolio from './js/Portafolio'
import About from './js/About'



document.addEventListener('click',function(event){
    if (event.target.id !== 'home')
        return;
       console.log("log");
       document.getElementById('container').innerHTML = Home();

},false);
document.addEventListener('click',function(event){
    if (event.target.id !== 'project')
        return;
        document.getElementById('container').innerHTML = Portafolio();

},false);
document.addEventListener('click',function(event){
    if (event.target.id !== 'about')
        return;
        document.getElementById('container').innerHTML = About();

},false);

const app =()=>{
    document.getElementById('ui').innerHTML = Navbar();
    document.getElementById('container').innerHTML = Home();
    document.getElementById('contact').innerHTML = Contact();
        
}






app();
