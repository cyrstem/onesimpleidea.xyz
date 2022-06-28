
import "./style/main.scss";
//  import lines from "./js/follow";
import GUIView from "./js/app";
import Stage from './js/Stage';
// import thingA from "./js/thingA";

	
const app = () => {
	let stage = new Stage();

	let ui = new GUIView();
	ui.init();
	//let thing = new thingA( {scene:'stateA', active: true} );
	//let thing = new thingA();
	//		thing.draw()
	// lines();

};

window.onload = (event) => {
	app();
};
