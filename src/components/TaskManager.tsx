import { useState } from "react";

// Define un tipo para las tareas
export const useTaskManager = () => {
    const [listaTareas, setListaTareas] = useState<string[]>([]);

    // Función para agregar una nueva tarea
    const addTask = (nuevaTarea: string) => {
        if (nuevaTarea.trim() === '') return; // Verifica que la tarea no esté vacía
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]); // Agrega la nueva tarea
    };

    // Función para borrar una tarea por su índice
    const deleteTask = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index)); // Filtra la tarea a eliminar
    };

    return { listaTareas, addTask, deleteTask };
};