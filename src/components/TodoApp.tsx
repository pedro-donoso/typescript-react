import { useState } from "react";

export const TodoApp = () => {
	const [nuevaTarea, setNuevaTarea] = useState<string>('');
	const [listaTareas, setListaTareas] = useState<string[]>([])
	const handleAddTask = () => {

	}


	return (
		<div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold text-center mb-4">Lista de Tareas</h1>
			<div className="mb-4">
				<input
					type="text"
					value={nuevaTarea}
					onChange={(e) => setNuevaTarea(e.target.value)}
					placeholder="Nueva Tarea"
					className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" onClick={handleAddTask}>
				Agregar Tarea
			</button>
		</div>
	);
};
