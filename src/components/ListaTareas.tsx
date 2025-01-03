import React from "react";

// Define la interfaz para las props del componente
interface Props {
    listaTareas: string[]; // Array de tareas
    borrarTarea: (index: number) => void; // Función para borrar una tarea
}

// Componente funcional ListaTareas
export const ListaTareas: React.FC<Props> = ({ listaTareas, borrarTarea }) => (
    <ul>
        {listaTareas.map((tarea, index) => (
            <li key={index}>
                {tarea}
                <button onClick={() => borrarTarea(index)}>Borrar</button>
            </li>
        ))}
    </ul>
);