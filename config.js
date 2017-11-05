import { randomata, gameOfLife } from './automata.js'

export default {
	renderer: {
		fps: 27,
	},
	map: {
		width: 128,
		height: 128,
		cellWidth: 4,
	},
	gradient: ['#fc4a1a', '#f7b733'],
	automatas:  {
		randomata: {
			name: 'randomata',
			fn: randomata,
		},
		gol: {
			name: 'game of life',
			fn: gameOfLife,
		}
	}
}