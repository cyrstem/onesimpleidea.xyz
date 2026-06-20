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

	// Mobile: the bottom social bar only reveals once the active page is scrolled
	// to its end. Each room's <main> is the scroll container (see _layout.scss).
	const contact = document.getElementById('contact');
	const atEnd = (el) => el.scrollTop + el.clientHeight >= el.scrollHeight - 4;
	const reveal = (el) => {
		if (contact && el) contact.classList.toggle('contact--visible', atEnd(el));
	};
	document.addEventListener('scroll', (event) => {
		const el = event.target;
		if (el && el.matches && el.matches('.room > main')) reveal(el);
	}, true);
	bus.on('route:change', () => {
		requestAnimationFrame(() => {
			const main = document.querySelector('.room--current > main');
			if (main) reveal(main);
			else if (contact) contact.classList.remove('contact--visible');
		});
	});

	simpleSign();
};
