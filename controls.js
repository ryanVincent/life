const init = () => {

	let handlers = {
		start: () => {},
		stop: () => {},
		step: () => {},
		fps:() => {},
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

	document
	.getElementById('fps')
	.addEventListener('keyup', e => {
		handlers.fps(e.target.value);
	})


	return {
		on: (type, fn, initialValue) => {
			handlers[type] = fn;
			if (type === 'fps') document.getElementById('fps').value = initialValue;
		}
	}
}

export default init;