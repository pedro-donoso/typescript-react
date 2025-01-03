// ListaTareas.tsx
import React from "react";

interface Props {
    listaTareas: string[];
    borrarTarea: (index: number) => void; // Prop para la función de borrar
}

export const ListaTareas: React.FC<Props> = ({ listaTareas, borrarTarea }) => {
    return (
        <ul>
            {listaTareas.map((tarea, index) => (
                <li key={index}>
                    {tarea} {/* Muestra la tarea */}
                    <button onClick={() => borrarTarea(index)}>Borrar</button> {/* Botón para borrar la tarea */}
                </li>
            ))}
        </ul>
    );
};