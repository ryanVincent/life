import { randomata, gameOfLife } from './automata.js'

export default {
	renderer: {
		fps: 27,
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