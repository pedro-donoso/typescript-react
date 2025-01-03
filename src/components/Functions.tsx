import { useState } from "react";

// Hook para manejar la lista de tareas
export const useFunctions = () => {
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    // Agrega una nueva tarea si no está vacía
    const addTask = (nuevaTarea: string) => {
        if (nuevaTarea.trim()) {
            setListaTareas(tareas => [...tareas, nuevaTarea]);
        }
    };

    // Borra una tarea por su índice
    const deleteTask = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index));
    };

    return { listaTareas, addTask, deleteTask };
};