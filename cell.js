export default class Cell {
	constructor(x, y, radius, state) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.state = state;
	}

	draw(context) {
		const x = this.x*this.radius;
		const y = this.y*this.radius;
		context.fillStyle = 'orange';
		if (this.state === 'ALIVE') context.fillRect(x,y,this.radius,this.radius);
		if (this.state === 'DEAD') context.clearRect(x,y, this.radius, this.radius);
	}
}