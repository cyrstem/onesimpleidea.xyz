import jsxElem,{ render } from "jsx-no-react";
import { Works } from "./Work";


   
    const Projects= function(e){
        console.log("show Projects");
        
        
    };

    const About= function(e){
        console.log("show About me");
    };
    



function Buttons() {


    return(
         <nav>

            <button onclick ={Projects}> projects</button>

            <button onclick ={About}>about me</button>
         
        </nav>
    )
}
export{Buttons}