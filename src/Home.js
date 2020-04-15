import jsxElem, { render } from "jsx-no-react";
import {Buttons} from '/Nav'
import {Works} from '/Work'
import {Intro} from '/Intro'
import { Contact } from "./Contact";



let h = true;
let a = false;
let w = false;

const Home =()=>{
			//setup change  load  projects
			function projects(){

			};
			function Works(){

			};

		//setup chnage  bio app data 
			function test(){
				console.log("testclick");
			};
		//begin stages 
		//show home
				if (h ===true) {
					return(
						<div class="contents" id="h">
							<Intro />
							<Contact />
							<small id="q">“Wintermute was a simple cube of white light, that very simplicity suggesting extreme complexity.”--William Gibson – Neuromancer</small>
						</div>
					) 
				//show about
				}if (a ===true) {
					return(
						<div class="contents" id="h">
					
							<Works />
							<Contact /> 
							<small id="q">“Wintermute was a simple cube of white light, that very simplicity suggesting extreme complexity.”--William Gibson – Neuromancer</small>
						</div>
					) 
				//show works
				}if (w ===true)
				return(
					<div class="contents" id="h">
						<Works />
						<Contact /> 
						<small id="q">“Wintermute was a simple cube of white light, that very simplicity suggesting extreme complexity.”--William Gibson – Neuromancer</small>
					</div>
				) 
}

export {Home}