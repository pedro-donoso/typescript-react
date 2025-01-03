import React from "react";

// Define una interfaz para las props que recibe el componente
interface Props {
    listaTareas: string[]; // Propiedad que contiene un array de tareas (strings)
    borrarTarea: (index: number) => void; // Propiedad que es una función para borrar una tarea, recibe el índice de la tarea a borrar
}

// Define el componente funcional ListaTareas, que recibe las props definidas en la interfaz
export const ListaTareas: React.FC<Props> = ({ listaTareas, borrarTarea }) => {
    return (
        <ul>
            {listaTareas.map((tarea, index) => ( // Mapea sobre el array de tareas
                <li key={index}> {/* Cada tarea se renderiza como un elemento de lista */}
                    {tarea} {/* Muestra el texto de la tarea */}
                    <button onClick={() => borrarTarea(index)}>Borrar</button> {/* Botón para borrar la tarea, llama a la función borrarTarea con el índice correspondiente */}
                </li>
            ))}
        </ul>
    );
};