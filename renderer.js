import Cell from './cell.js';
import { randomata } from './automata.js';
import config from './config.js';

export const drawFrame = (context, map, automata) => {
	map.draw(context, automata);
};