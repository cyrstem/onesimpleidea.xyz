
import "./style/main.scss";
import lines from "./js/follow";
import Navbar from "./js/interface/Nav";
import Contact from "./js/interface/Contact";
import Home from "./js/pages/Home";
import Portafolio from "./js/pages/Portafolio";
import Experiments from "./js/pages/Experiments";
import sayHello from "./js/utils/sign";
import responsive from "./js/utils/responsive";
import GUI from "./js/app";
import GUIView from "./js/app";

const places = ['home', 'experiment', 'about', 'proyect'];

document.addEventListener("click", (event) => {
	let links = event.target.id;
	// checkElement(links)
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

const app = () => {
	//load UI and socials media  plus main content
	document.getElementById("ui").innerHTML = Navbar();
	document.getElementById("container").innerHTML = Home();
	document.getElementById("contact").innerHTML = Contact();
	responsive();
};

let  ui = new GUIView();
ui.init();
window.onload = (event) => {
	
	app();
	sayHello();
	lines();
	

};
