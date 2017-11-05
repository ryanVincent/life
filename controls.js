const init = () => {

	let handlers = {
		start: () => {},
		stop: () => {},
		step: () => {}
	}

	document
	.getElementById('start')
	.addEventListener('click', () => {
		handlers.start();
	});

	document
	.getElementById('stop')
	.addEventListener('click', () => {
		handlers.stop();
	});

	document
	.getElementById('step')
	.addEventListener('click', () => {
		handlers.step();
	});

	return {
		on: (type, fn) => handlers[type] = fn
	}
}

export default init;