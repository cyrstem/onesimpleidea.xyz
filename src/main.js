
import "./style/main.scss";
import lines from "./js/follow";
import GUIView from "./js/app";
import thingA from "./js/thingA";
	
const app = () => {
	let ui = new GUIView();
	ui.init();
	let thing = new thingA( {scene:'stateA', active: true} );


	//		thing.draw()
	lines();

};

window.onload = (event) => {
	app();
};
