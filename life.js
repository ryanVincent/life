import { drawFrame } from './renderer.js';
import config from './config.js';
import Map from './map.js';

const canvas = document.getElementById('world');
const context = canvas.getContext("2d");

const background = document.getElementById('background');
const bContext = background.getContext("2d");

const setBackground = (height, width, cellRadius) => {
	var gradient=bContext.createLinearGradient(0, height/2,width*cellRadius/16,height/2);
	gradient.addColorStop(0,"#fc4a1a");
	gradient.addColorStop(1,"#f7b733");
	bContext.fillStyle=gradient;
	bContext.fillRect(0,0, width*cellRadius, height*cellRadius);
}

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
	const map = new Map(256, 256, 8);
	map.clear(context);
	setBackground(256, 256, 8);
	drawFrame(context, map);

	animate(map);

}

start();