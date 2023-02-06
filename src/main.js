
import "./style/main.scss";
<<<<<<< HEAD
import lines from "./js/follow";
import GUIView from "./js/app";

const app = () => {
	let  ui = new GUIView();
	ui.init();
	lines();
};
=======
import simpleSign from './js/utils/Sign'
import App from './js/app'
>>>>>>> dev

window.onload = (event) => {
	new App(
		{
			dom: document.getElementById('container')
		}
	);
	simpleSign();
};
