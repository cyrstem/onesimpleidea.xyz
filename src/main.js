
import "./style/main.scss";
//  import lines from "./js/follow";
// import GUIView from "./js/app";
// import Stage from './js/Stage';
// import thingA from "./js/thingA";

import App from './js/app'
window.onload = (event) => {
	new App(
		{
			dom:document.getElementById('container')
		}
	);
};
