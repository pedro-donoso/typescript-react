import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

export const TodoApp = () => {
    // Estado para almacenar el texto de la nueva tarea y Estado para almacenar la lista de tareas
    const [nuevaTarea, setNuevaTarea] = useState<string>('');
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    // Función para agregar una nueva tarea
    const handleAddTask = () => {
        // Verifica si la nueva tarea no está vacía (elimina espacios en blanco)
        if(nuevaTarea.trim() === '') return;
        // Actualiza la lista de tareas añadiendo la nueva tarea
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
        // Limpia el campo de entrada restableciendo nuevaTarea a una cadena vacía
        setNuevaTarea('');
    }

    // Función para borrar una tarea específica por su índice
    const handleBorrarTarea = (index: number) => {
        // Filtra la lista de tareas para excluir la tarea en el índice proporcionado
        setListaTareas(tareas => tareas.filter((_, i) => i !== index));
    }

    // Renderiza el componente
    return (
        <div>
            <h1>Lista de Tareas</h1>
            <div>
                <input
                    type="text" // Campo de entrada de texto
                    value={nuevaTarea} // Vincula el valor del input al estado nuevaTarea
                    onChange={(e) => setNuevaTarea(e.target.value)} // Actualiza nuevaTarea al cambiar el input
                    placeholder="Nueva Tarea"
                />
                <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
            {/* Renderiza el componente ListaTareas, pasando la lista de tareas y la función para borrar tareas */}
            <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
        </div>
    );
};
