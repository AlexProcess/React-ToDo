import { useContext, useState } from "react";

//* COMPONENTS *//
import { ToDo } from "./ToDo";

//* STYLES *//
import "./todoes.css";

//* CONTEXT *//
import { TodoContext } from "../../context/TodoContext";

export const ToDoes = () => {
    const { todoes } = useContext(TodoContext);

    const leftItems = todoes.filter((todo) => !todo.completed);

    return (
        <>
            <div>
                <ul className="todo__list">
                    {todoes.map((todo) => (
                        <ToDo key={todo.id} todo={todo} />
                    ))}
                </ul>
            </div>
            <div>
                <p>{leftItems.length} left items</p>
            </div>
        </>
    );
};
