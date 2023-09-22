import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";

//* STYLES *//
import "./newTodo.css";

//* CONTEXT *//
import { TodoContext } from "../../context/TodoContext";

export const NewToDo = () => {
    const formik = useFormik({
        initialValues: { todo: "", completed: false },
        onSubmit: async (formValues) => {
            await createTodo(formValues);

            formik.resetForm();
        },
    });

    const { createTodo } = useContext(TodoContext);

    return (
        <section className="todo-card__container">
            <div className="todo-card__contain">
                <button
                    onClick={() =>
                        formik.setFieldValue(
                            "completed",
                            !formik.values.completed
                        )
                    }
                    className={
                        formik.values.completed
                            ? "rounded__button-checked"
                            : "rounded__button"
                    }
                />
                <form onSubmit={formik.handleSubmit}>
                    <input
                        className="todo__input"
                        onChange={formik.handleChange}
                        value={formik.values.todo}
                        name="todo"
                        min={1}
                        placeholder="Create a new to do ..."
                        type="text"
                    />
                </form>
            </div>
        </section>
    );
};
