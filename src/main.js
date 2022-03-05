
import "./style/main.scss";
import  lines from "./js/follow";
import Navbar from "./js/interface/Nav";
import Contact from "./js/interface/Contact";
import Home from "./js/pages/Home";
import Portafolio from "./js/pages/Portafolio";
import Not4u from "./js/pages/Not4u";
import Experiments from "./js/pages/Experiments";

document.addEventListener(
	"click",
	function (event) {
		if (event.target.id !== "home") return;
		document.getElementById("container").innerHTML = Home();
		
	},
	false
);

document.addEventListener(
	"click",
	function (event) {
		if (event.target.id !== "experiment") return;
		
		document.getElementById("container").innerHTML = Experiments();
	},
	false
);

document.addEventListener(
	"click",
	function (event) {
		if (event.target.id !== "project") return;
		document.getElementById("container").innerHTML = Portafolio();
	},
	false
);

document.addEventListener(
	"click",
	function (event) {
		if (event.target.id !== "about") return;
		document.getElementById("container").innerHTML = Home();
	},
	false
);
function responsiviti() {
	//responsive screens
	var x = window.matchMedia("(max-width: 700px)");
	if (x.matches) {
		//console.log("responsive biatch");
		document.addEventListener("click", function (event) {
			if (event.target.id !== "experiment") return;
			document.getElementById("container").innerHTML = Experiments();
			document.getElementById("ui").style.bottom = "20vh";
		});
	}
}

const app = () => {
	//load UI and socials media  plus main content
	document.getElementById("ui").innerHTML = Navbar();
	document.getElementById("container").innerHTML = Home();
	document.getElementById("contact").innerHTML = Contact();
	responsiviti();
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
