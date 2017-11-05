import { drawFrame } from './renderer.js';
import config from './config.js';
import Map from './map.js';
import initControls from './controls.js';

const canvas = document.getElementById('world');
const context = canvas.getContext("2d");

const background = document.getElementById('background');
const bContext = background.getContext("2d");

const setBackground = (height, width, cellRadius) => {
	var gradient=bContext.createLinearGradient(width*cellRadius/2, 0,width*cellRadius/2, height*cellRadius);
	gradient.addColorStop(0,"#fc4a1a");
	gradient.addColorStop(1,"#f7b733");
	bContext.fillStyle=gradient;
	bContext.fillRect(0,0, width*cellRadius, height*cellRadius);
}

let lastFrame
let paused = false
let frameInterval =  1000 / config.renderer.fps
let automata = config.automatas.gol
console.log(config)

const animate = (map) => {
	let now = Date.now()
	let elapsed = now - lastFrame
	if (!paused) window.requestAnimationFrame(() => animate(map))

	if (elapsed > frameInterval) {
		lastFrame = now - (elapsed % frameInterval)
		console.log(automata);
		drawFrame(context, map, automata.fn)
	}
}

const map = new Map(128, 128, 4)
setBackground(128, 128, 4)

const start = () => {
	paused = false
	lastFrame = Date.now()
	map.clear(context)
	animate(map)
}

const stop = () => {
	paused = true
}

const step = () => {
	paused = true
	drawFrame(context, map, automata)
}

const controls = initControls(config)
controls.on('start', start)
controls.on('stop', stop)
controls.on('step', step)

controls.on('fps', (fps) => {
	frameInterval = 1000 / fps
}, config.renderer.fps)

controls.on('automata', (id) => {
	automata = config.automatas[id]
}, 'gol')
