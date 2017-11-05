const init = (config) => {

	let handlers = {
		start: () => {},
		stop: () => {},
		step: () => {},
		fps:() => {},
		automata:() => {}
	}

	const AutomataItem = ({ name, id }) => {
		console.log(name, id);
		const li = document.createElement("li")
		li.innerHTML = `<label>
											${name}
											<input type="radio" name="automata" id="${id}" />
										</label>`
		return li
	};

	Object.keys(config.automatas).forEach((id) => {
		const automata = config.automatas[id]
		console.log(automata);
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
	.getElementById('fps')
	.addEventListener('keyup', e => handlers.fps(e.target.value))


	return {
		on: (type, fn, initialValue) => {
			handlers[type] = fn
			if (type === 'fps') document.getElementById('fps').value = initialValue
			if (type === 'automata') document.getElementById(initialValue).checked = true
		}
	}
}

export default init;