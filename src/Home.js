import jsxElem, { render } from "jsx-no-react";
// import {Buttons} from '/Nav'
import {Works} from '/Work'
import {Intro} from '/Intro'
import { Contact } from './Contact';
// import { home,trab,about } from './Stado';

 const initConfig ={
	home: true,
	work: false,
	about:false
 }; 

const Projects= function(e){
	console.log("show Projects");
	initConfig.home = true;
	initConfig.work ==true;
};

const About= function(e){
	console.log("show About me");
   
};


const Home =()=>{
	
		//show home
				if (initConfig.home ===true) {
					return(
						<div class="contents" id="h">
							<Intro />
							<nav>

							<button onclick ={Projects}> projects</button>

							<button onclick ={About}>about me</button>
							</nav>
							<Contact />


							<small id="q">“Wintermute was a simple cube of white light, that very simplicity suggesting extreme complexity.”--William Gibson – Neuromancer</small>
						</div>
					) 
				//show about
				}if (initConfig.work ==true) {
					return(
						<div class="contents" id="h">
							<Works />
							<Contact /> 
							<small id="q">“Wintermute was a simple cube of white light, that very simplicity suggesting extreme complexity.”--William Gibson – Neuromancer</small>
						</div>
					) 
				//show works
				}if (initConfig.about==true)
				return(
					<div class="contents" id="h">
						<Works />
						<Contact /> 
						<small id="q">“Wintermute was a simple cube of white light, that very simplicity suggesting extreme complexity.”--William Gibson – Neuromancer</small>
					</div>
				) 
}

export {Home}