import jsxElem,{ render } from "jsx-no-react";
import {home,work,about} from './Stado';

   
    const Projects= function(e){
        console.log("show Projects");
        home.h = false;
        console.log(home.h);
       // work.w = true;
       // console.log(work.w);
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