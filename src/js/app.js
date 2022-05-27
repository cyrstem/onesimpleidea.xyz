import Navbar from "./interface/Nav";
import Contact from "./interface/Contact";
import Home from "./pages/Home";
import Portafolio from "./pages/Portafolio";
import Experiments from "./pages/Experiments";


export default class GUIView{
    constructor(){}

    init(){
        this.load();
        this.addListeners();
        this.simpleSign();
        
        //this.responsive();
    }
    load(){
      
        	//load UI and socials media  plus main content
        document.getElementById("ui").innerHTML = Navbar();
        document.getElementById("container").innerHTML = Home();
        document.getElementById("contact").innerHTML = Contact();

    }
    addListeners(){
        window.addEventListener("click", (event) => {
            let links = event.target.id;
            switch (links) {
                case 'home':
                    document.getElementById("container").innerHTML = Home();
                    
                    break;
                case 'experiment':
                    document.getElementById("container").innerHTML = Experiments();
                
                    break;
                case 'project':
                    document.getElementById("container").innerHTML = Portafolio();
                    
                    
                    break;
            }
        
        }, false);
        
    }
    responsive(){
        	//responsive screens
        var x = window.matchMedia("(max-width: 700px)");
        if (x.matches) {
            //console.log("responsive biatch");
            document.addEventListener("click", function (event) {
                if (event.target.id !== "experiment") return;
                document.getElementById("container").innerHTML = Experiments();
                document.getElementById("ui").style.top = "10vh";
            });
        }
    }
    simpleSign(){
        if (window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
            const args = [
                "\n %c ->> created by cyrstem more info on onesimpleidea.xyz\n",
                "border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;",
            ];
            window.console.log.apply(console, args);
        } else if (window.console) {
            window.console.log("-created by cyrstem  -");
        }
    }
}