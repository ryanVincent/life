import Cell from './cell.js';
import { gameOfLife } from './automata.js';

export const init = (frameHeight, frameWidth, cellRadius) => {
	let map = [];
	for(let y= 0; y < frameHeight; y++) {
		map[y] = [];
		for(let x = 0; x < frameWidth; x++) {
			const state = Math.random() > 0.5 ? 'ALIVE' : 'DEAD';
			const cell = new Cell(x, y, cellRadius, state);
			map[y].push(cell);
		}
	}
	return map;
}

export default class Map {
	constructor(height, width, cellRadius) {
		this.height = height;
		this.width = width;
		this.map = init(height, width, cellRadius);
	}

	getNeighbourhood(cell) {
		const neighbourhood = [];
		const columnLimit = this.map.length - 1;
		const rowLimit = this.map[0].length - 1;
		for (let i = Math.max(0, cell.x - 1); i <= Math.min(cell.x+1, rowLimit); i++) {
			for (let j = Math.max(0, cell.y - 1); j <= Math.min(cell.y+1, columnLimit); j++) {
				if (i !== cell.x || j !== cell.y) {
					neighbourhood.push(this.map[j][i]);
				}
			}
		}

		return neighbourhood;
	}

	draw(context) {
		this.map.forEach(row =>
			row.forEach(cell => {
				const neighbourhood = this.getNeighbourhood(cell);
				cell.setState(gameOfLife(neighbourhood))
				cell.draw(context);
			}
		));
	}
}