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

		context.strokeStyle = 'white';

		if (this.state !== this.previousState) {
			if (this.state === 'DEAD') {
				context.strokeRect(x,y,this.radius,this.radius);
			} else {
				context.clearRect(x,y,this.radius,this.radius)
			}
		}
	}
}