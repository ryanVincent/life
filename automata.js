export const randomata = () => state => {
	return Math.random() > 0.5 ? 'ALIVE' : 'DEAD';
}

export const gameOfLife = neighborhood => state => {
	const livingNeighbours = neighborhood.filter(cell => cell.state === 'ALIVE');
	if (state === 'DEAD' && livingNeighbours.length === 3) return 'ALIVE';
	if (state=== 'ALIVE' && (livingNeighbours.length === 2 || livingNeighbours.length === 3)) return 'ALIVE';
	if (state === 'ALIVE' && livingNeighbours.length > 3) return 'DEAD'
	if (state === 'ALIVE' && livingNeighbours.length < 2) return 'DEAD'
	return state;
}

export const gameOfDeath = neighborhood => state => {
	const livingNeighbours = neighborhood.filter(cell => cell.state === 'ALIVE');
	if (state === 'DEAD' && livingNeighbours.length === 3) return 'DEAD';
	if (state=== 'ALIVE' && (livingNeighbours.length === 2 || livingNeighbours.length === 3)) return 'DEAD';
	if (state === 'ALIVE' && livingNeighbours.length > 3) return 'ALIVE'
	if (state === 'ALIVE' && livingNeighbours.length < 2) return 'ALIVE'
	return state;
}
