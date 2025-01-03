import React from "react";

// Define la interfaz para las props del componente
interface Props {
    listaTareas: string[]; // Array de tareas
    borrarTarea: (index: number) => void; // Función para borrar una tarea
}

// Componente funcional EliminarTareas
export const EliminarTareas: React.FC<Props> = ({ listaTareas, borrarTarea }) => (
    <ul className="list-disc pl-5">
        {listaTareas.map((tarea, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
                <span className="flex-1">{tarea}</span>
                <button
                    onClick={() => borrarTarea(index)}
                    className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 transition duration-200"
                >
                    Borrar
                </button>
            </li>
        ))}
    </ul>
);