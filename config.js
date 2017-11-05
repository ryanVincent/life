import { randomata, gameOfLife, gameOfDeath} from './automata.js'

export default {
	renderer: {
		fps: 27,
	},
	map: {
		width: 256,
		height: 256,
		cellWidth: 4,
	},
	gradient: ['#fc4a1a', 'orange'],
	automatas:  {
		randomata: {
			name: 'randomata',
			fn: randomata,
		},
		gol: {
			name: 'game of life',
			fn: gameOfLife,
		},
		god: {
			name: 'game of death',
			fn: gameOfDeath
		}
	}
}