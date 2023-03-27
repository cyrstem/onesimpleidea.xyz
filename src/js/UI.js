import Navbar from "./interface/Nav";
import Contact from "./interface/Contact";
import About from "./pages/About";
import Portafolio from './pages/Portafolio';
import Not4U from './pages/Not4U';

import { TypeShuffle } from './typeShuffle';

export default class UI {
    constructor() {
        this.links = null;
        this.initHTML()
        this.about = false
        this.portafolio = false
        this.addListeners()
     
    }
    addListeners() {
    let nav = document.getElementById('nav');
    nav.addEventListener('click',this.onClick.bind(this),false)
  
    }

    initHTML() {
        document.getElementById("ui").innerHTML = Navbar();
        document.getElementById("contact").innerHTML = Contact();
     
    }

    onClick(event) {

        event.preventDefault();
        this.links = event.target.id;
        // console.log(this.links)

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
            this.effect()
            return
        }

    }
    effect(){
        const textElement = document.querySelector('.content');
        this.ts = new TypeShuffle(textElement);
        this.ts.trigger('fx3');
  
        
    }
  
}