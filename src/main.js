
import "./style/main.scss";
import lines from "./js/follow";
import thingA from "./js/thingA";
import GUIView from "./js/app";

const app = () => {
	let  ui = new GUIView();
	ui.init();

	lines();
	//thingA();
};

window.onload = (event) => {
	app();
};
