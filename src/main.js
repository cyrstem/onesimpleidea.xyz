import "./style/main.scss";
import simpleSign from './js/utils/Sign';
import EventBus from './js/core/EventBus';
import App from './js/app';
import UI from './js/UI';
import Router from './js/router/Router';
import About from './js/pages/About';
import Portfolio from './js/pages/Portafolio';

window.onload = () => {
	const bus = new EventBus();

	// Inject the static layout (nav + contact) before the router resolves.
	new UI();

	new App(
		{
			dom: document.getElementById('container')
		},
		bus
	);

	const router = new Router({
		bus,
		mount: document.getElementById('terminal'),
		routes: [
			{ path: '/', view: About },
			{ path: '/portfolio', view: Portfolio }
		]
	});
	router.start();

	simpleSign();
};
