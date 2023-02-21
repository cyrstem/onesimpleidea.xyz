import Navbar from "./interface/Nav";
import Contact from "./interface/Contact";

import About from "./pages/About";
import Portafolio from './pages/Portafolio';
import Not4U from './pages/Not4U';

export default class UI {
    constructor() {
        this.links = null;
        this.initHTML()
       

        this.about = false
        this.portafolio = false
        this.addListeners()
      
        //this.c = console.log.bind(document);
        this.iLazy()

    }
    addListeners() {
    let nav = document.getElementById('nav');
    nav.addEventListener('click',this.onClick.bind(this),false)
    this.check = window.matchMedia("(max-width: 700px)")
    }

    initHTML() {
        document.getElementById("ui").innerHTML = Navbar();
        document.getElementById("contact").innerHTML = Contact();
    }

    onClick(event) {

        event.preventDefault();
        this.links = event.target.id;

        if (this.links !== 'home') {
            this.portafolio = false
            document.getElementById("terminal").innerHTML = Portafolio();
            this.about =true;
            return
        }
        
        if (this.links !== 'Portafolio') {
            this.about =false;
            document.getElementById("terminal").innerHTML = Not4U();
            this.portafolio = true;
            return
        }

    }
    iLazy(){
        if(this.check){
            console.log("responsive biatch");
            document.getElementById("terminal").innerHTML = Not4U();
        }

    }
  

}