import { useFormik } from "formik";
import "./newTodo.css";
import { useContext } from "react";

export const NewToDo = () => {
    const formik = useFormik({
        initialValues: { todo: "" },
        onSubmit: (formValues) => {
            const previousTodos = localStorage.getItem("todos");
            localStorage.setItem("todos", JSON.stringify(formValues.todo));

            formik.resetForm();
        },
    });

    return (
        <section className="todo-card__container">
            <div className="todo-card__contain">
                <button className="rounded__button"></button>
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
