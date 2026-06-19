
import "./style/main.scss";
import { Stage } from "@alienkitty/space.js";
import simpleSign from './js/utils/Sign';
import PortfolioOverlay from "./js/PortfolioOverlay";

window.onload = async () => {
	Stage.init(document.body);
	const { default: App } = await import('./js/app');
	new App(
		{
			dom: document.getElementById('container')
		}
	);
	new PortfolioOverlay(document.getElementById("portfolio-root"));
	simpleSign();
};
