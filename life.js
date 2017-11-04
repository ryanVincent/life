import { drawFrame } from './renderer.js';
import config from './config.js';
import Map from './map.js';
const canvas = document.getElementById('world');
const context = canvas.getContext("2d");

let lastFrame;

const animate = (map) => {
	let now = Date.now();
	let elapsed = now - lastFrame;
	window.requestAnimationFrame(() => animate(map));

	if (elapsed > config.renderer.frameInterval) {
		lastFrame = now - (elapsed % config.renderer.frameInterval);
		drawFrame(context, map);
	}
}

const start = () => {
	lastFrame = Date.now();
	const map = new Map(256, 256, 16);
	drawFrame(context, map);

	animate(map);

}

start();