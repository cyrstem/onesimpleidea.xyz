
import "./style/main.scss";
import lines from "./js/follow";
import Navbar from "./js/interface/Nav";
import Contact from "./js/interface/Contact";
import Home from "./js/pages/Home";
import Portafolio from "./js/pages/Portafolio";
import Not4u from "./js/pages/Not4u";
import Experiments from "./js/pages/Experiments";

const places = ['home', 'experiment', 'about', 'proyect'];

document.addEventListener("click", (event) => {
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


function responsive() {
	//responsive screens
	var x = window.matchMedia("(max-width: 700px)");
	if (x.matches) {
		//console.log("responsive biatch");
		document.addEventListener("click", function (event) {
			if (event.target.id !== "experiment") return;
			document.getElementById("container").innerHTML = Experiments();
			document.getElementById("ui").style.bottom = "5vh";
		});
	}
}

const app = () => {
	//load UI and socials media  plus main content
	document.getElementById("ui").innerHTML = Navbar();
	document.getElementById("container").innerHTML = Home();
	document.getElementById("contact").innerHTML = Contact();
	responsive();
};

const sayHello = () => {
	if (window.navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
		const args = [
			"\n %c -created by cyrstem \n",
			"border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;",
		];
		window.console.log.apply(console, args);
	} else if (window.console) {
		window.console.log("-created by cyrstem  -");
	}
};

window.onload = (event) => {
	app();
	sayHello();
	lines();

};
