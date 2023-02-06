
import "./style/main.scss";
import simpleSign from './js/utils/Sign'
import App from './js/app'

window.onload = (event) => {
	new App(
		{
			dom: document.getElementById('container')
		}
	);
	simpleSign();
};
