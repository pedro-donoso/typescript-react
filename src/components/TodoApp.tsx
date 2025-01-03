import { useState } from "react";
import { ListaTareas } from "./ListaTareas";
import { useTaskManager } from "./TaskManager"; // Importa el hook de manejo de tareas

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>(''); // Estado para la nueva tarea
    const { listaTareas, addTask, deleteTask } = useTaskManager(); // Usa el hook para manejar tareas

    // Maneja la adición de una nueva tarea
    const handleAddTask = () => {
        addTask(nuevaTarea); // Llama a la función addTask del hook
        setNuevaTarea(''); // Limpia el campo de entrada
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={(e) => setNuevaTarea(e.target.value)}
                    placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            <ListaTareas listaTareas={listaTareas} borrarTarea={deleteTask} /> {/* Pasa la función deleteTask */}
        </div>
    );
};
