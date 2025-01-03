import { useState } from "react";

export const TodoApp = () => {

	const [nuevaTarea, setNuevaTarea] = useState('')

	return (
	<div>
		<h1>Lista de Tareas</h1>
		<div>
			<input
				type="text"
				value={nuevaTarea}
				onChange={(e) => setNuevaTarea(e.target.value)}
				placeholder="Nueva Tarea" />
		</div>
	</div>
	)
};
