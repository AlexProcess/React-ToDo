import { useContext } from "react";
import { ToDo } from "./ToDo";

//* STYLES *//
import "./todoes.css";

//* CONTEXT *//
import { TodoContext } from "../../context/TodoContext";

export const ToDoes = () => {
    const { todoes } = useContext(TodoContext);

    return (
        <ul className="todo__list">
            {todoes.map((todo) => (
                <ToDo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
};
