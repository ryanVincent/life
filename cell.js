export default class Cell {
	constructor(x, y, radius, state) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.state = state;
		this.previousState = state;
	}

	setState(automata) {
		this.previousState = this.state;
		this.state = automata(this.state);
	}

	draw(context, automata) {
		const x = this.x*this.radius;
		const y = this.y*this.radius;
		const currentFillStyle = context.fillStyle;

		context.fillStyle = this.state === 'DEAD' ? 'black' : 'white';
		context.fillRect(x,y,this.radius,this.radius);
		context.fillStyle = currentFillStyle;
	}
}