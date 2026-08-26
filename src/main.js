import "./style/main.scss";
import simpleSign from './js/utils/Sign';
import EventBus from './js/core/EventBus';
import App from './js/app';
import UI from './js/UI';
import Router from './js/router/Router';
import Home from './js/pages/Portafolio';

window.onload = () => {
	const bus = new EventBus();

	new UI(bus);

	new App(
		{
			dom: document.getElementById('container')
		},
		bus
	);

	// Single-page site. Legacy `#/portfolio` hashes fall back to `/`.
	if (window.location.hash === '#/portfolio') {
		window.location.hash = '#/';
	}

	const router = new Router({
		bus,
		mount: document.getElementById('terminal'),
		routes: [
			{ path: '/', view: Home }
		]
	});
	router.start();

	// Mobile: reveal bottom contact once the page is scrolled near the end.
	const contact = document.getElementById('contact');
	const updateContact = () => {
		if (!contact) return;
		const main = document.querySelector('#home');
		const isMobile = window.matchMedia('(max-width: 600px)').matches;
		if (!isMobile || !main) {
			contact.classList.remove('contact--visible');
			return;
		}
		const doc = document.documentElement;
		const nearEnd = window.scrollY + window.innerHeight >= doc.scrollHeight - 48;
		contact.classList.toggle('contact--visible', nearEnd);
	};
	window.addEventListener('scroll', updateContact, { passive: true });
	bus.on('route:change', () => requestAnimationFrame(updateContact));

	simpleSign();
};
