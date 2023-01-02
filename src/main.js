
import "./style/main.scss";
import lines from "./js/follow";
import GUIView from "./js/app";

const app = () => {
	let  ui = new GUIView();
	ui.init();
	lines();
};

window.onload = (event) => {
	app();
};
