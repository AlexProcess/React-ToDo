import { useContext, useState } from "react";

//* COMPONENTS *//
import { ToDo } from "./ToDo";

//* STYLES *//
import "./todoes.css";

//* CONTEXT *//
import { TodoContext } from "../../context/TodoContext";
import { TodoStates } from "./TodoStates";
import { DndContext } from "@dnd-kit/core";

export const ToDoes: React.FC = () => {
    const { todoes, deleteCompletedTodos } = useContext(TodoContext);

    const leftItems = todoes.filter((todo) => !todo.completed);

    return (
        <>
            <div className="todoes__container">
                <DndContext>
                    <ul className="todo__list">
                        {todoes.map((todo) => (
                            <ToDo key={todo.id} todo={todo} />
                        ))}
                    </ul>
                </DndContext>
            </div>
            <div className="items-clear__contain">
                <p>{leftItems.length} left items</p>
                <button
                    onClick={deleteCompletedTodos}
                    className="clear__button"
                >
                    Clear completed
                </button>
            </div>
            <TodoStates />
        </>
    );
};
