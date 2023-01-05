import Navbar from "./interface/Nav";
// import Home from "./pages/Home";
import Contact from "./interface/Contact";

import About from "./pages/About";
import Portafolio from './pages/Portafolio';

export default class UI {
    constructor(){
        this.links = null;
        this.initHTML()

        this.addListeners()
        //this.remove()
        this.c = console.log.bind(document);

    }
    addListeners(){
        //console.log('ready')
        window.addEventListener('click',this.onClick.bind(this),false);
    }

    initHTML(){
        document.getElementById("ui").innerHTML = Navbar();
        //document.getElementById("terminal").innerHTML = Home();
        document.getElementById("contact").innerHTML = Contact();
    }
    onClick(event){

        event.preventDefault();
       this.links= event.target.id;
      this.c(this.links);
        if(this.links !== 'home') {
            
            this.c(this.links)
           document.getElementById("terminal").innerHTML = Portafolio();
           return
        }
        if(this.links !== 'Portafolio'){
           
            document.getElementById("terminal").innerHTML = About();
            return
        }
    
    }
    // remove(){
        
    // }
}