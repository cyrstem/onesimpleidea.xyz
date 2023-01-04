import Navbar from "./interface/Nav";
import Home from "./pages/Home";
import Contact from "./interface/Contact";

import About from "./pages/About";
import Experiments from "./pages/Experiments";

export default class UI {
    constructor(){
        this.links = null;
        this.initHTML()

        this.addListeners()
        //this.remove()

    }
    addListeners(){
        //console.log('ready')
        window.addEventListener('click',this.onClick.bind(this),false);
    }

    initHTML(){
        document.getElementById("ui").innerHTML = Navbar();
        document.getElementById("terminal").innerHTML = Home();
        document.getElementById("contact").innerHTML = Contact();
    }
    onClick(event){
       this.links= event.target.id;
        //console.log('this is where',this.links);
        
        // if(this.links !== 'home') {
            
        //    document.getElementById("terminal").innerHTML = Home();
        // }
        // if(this.links !== 'experiments'){
            
        //     document.getElementById("terminal").innerHTML = Experiments();
        // }
    
    }
    // remove(){
        
    // }
}