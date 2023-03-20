
import "./style/main.scss";

import simpleSign from './js/utils/Sign'
import App from './js/app'
// import Highway from '@dogstudio/highway';

// const H = new Highway.Core({[

// ]});
window.onload = (event) => {
	new App(
		{
			dom: document.getElementById('container')
		}
	);
	simpleSign();
};
