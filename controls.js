const init = (config) => {

	let handlers = {
		start: () => {},
		stop: () => {},
		step: () => {},
		fps:() => {},
		automata:() => {},
		draw:() => {},
		clear:() => {}
	}

	let drawing = false;

	const AutomataItem = ({ name, id }) => {
		const li = document.createElement("li")
		li.innerHTML = `<label>
											${name}
											<input type="radio" name="automata" id="${id}" />
										</label>`
		return li
	};

	Object.keys(config.automatas).forEach((id) => {
		const automata = config.automatas[id]
		document
		.getElementById('automata')
		.appendChild(AutomataItem({ ...automata, id}))
		.addEventListener('click', e =>	handlers.automata(e.target.id))
	});

	document
	.getElementById('start')
	.addEventListener('click', () => handlers.start())

	document
	.getElementById('stop')
	.addEventListener('click', () => handlers.stop())

	document
	.getElementById('step')
	.addEventListener('click', () => handlers.step())

	document
	.getElementById('clear')
	.addEventListener('click', () => handlers.clear())

	console.log(document.getElementById('fps'));
	document
	.getElementById('fps')
	.addEventListener('change', e => handlers.fps(e.target.value))

	const world = document
	.getElementById('world');

	world.addEventListener('mousedown', e => {
		const x = Math.floor(e.offsetX / config.map.cellWidth)
		const y = Math.floor(e.offsetY / config.map.cellWidth)
		drawing = true
		handlers.draw(x,y)
	})
	world.addEventListener('mousemove', e =>  {
		const x = Math.floor(e.offsetX / config.map.cellWidth)
		const y = Math.floor(e.offsetY / config.map.cellWidth)
		if (drawing) handlers.draw(x,y)
	});
	world.addEventListener('mouseup',() => drawing = false)


	return {
		on: (type, fn, initialValue) => {
			handlers[type] = fn
			console.log(handlers, type, fn);
			if (type === 'fps') document.getElementById('fps').value = initialValue
			if (type === 'automata') document.getElementById(initialValue).checked = true
		}
	}
}

export default init;