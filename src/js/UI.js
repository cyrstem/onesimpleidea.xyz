import Navbar from "./interface/Nav";
import Home from "./pages/Home";
import Contact from "./interface/Contact";

export default class UI {
    constructor(){
        this.links = null;
        this.initHTML()

        this.addListeners()
        this.remove()

    }
    addListeners(){
        console.log('ready')
        window.addEventListener('click',this.onClick.bind(this));
    }

    initHTML(){
        document.getElementById("ui").innerHTML = Navbar();
       // document.getElementById("container").innerHTML = Home();
        document.getElementById("contact").innerHTML = Contact();
    }
    onClick(event){
       this.links= event.target.id;
        console.log('this is where',this.links);

        // switch (links) {
        //     case 'home':
        //         //document.getElementById("container").innerHTML = Home();
        //         // stage = new Stage({scene:"sectionA",active:true})
        //         break;
        //     case 'experiment':
        //        // window.prompt('testing');
        //        // document.getElementById("container").innerHTML = Experiments();
        //         //stage = new Stage({scene:"sectionB",active:false})
        //         break;
        //     case 'project':
        //        // document.getElementById("container").innerHTML = Portafolio();
        //        // stage = new Stage({scene:"sectionC",active:true})
        //         break;
        // }
    
    // }, false);
    
    }
    remove(){
        
    }
}