import { useState } from "react";
import { ListaTareas } from "./ListaTareas";
import { useFunctions } from "./Functions"; // Importa el hook de manejo de tareas

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState(''); // Estado para la nueva tarea
    const { listaTareas, addTask, deleteTask } = useFunctions(); // Usa el hook para manejar tareas

    // Maneja la adición de una nueva tarea
    const handleAddTask = () => {
        if (nuevaTarea.trim()) { // Verifica que la tarea no esté vacía
            addTask(nuevaTarea); // Llama a la función addTask del hook
            setNuevaTarea(''); // Limpia el campo de entrada
        }
    };

     return (
        <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                    className="flex-1 border border-gray-300 rounded p-2 mr-2"
                />
                <button
                    onClick={handleAddTask}
                    className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
                >
                    Agregar Tarea
                </button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={deleteTask} />
        </div>
    );
};
