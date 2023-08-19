import { useFormik } from "formik";
import "./newTodo.css";
import { useContext } from "react";

export const NewToDo = () => {
    const formik = useFormik({
        initialValues: { todo: "", completed: false },
        onSubmit: (formValues) => {
            const previousTodos = localStorage.getItem("todos");
            localStorage.setItem("todos", JSON.stringify(formValues.todo));

            formik.resetForm();
        },
    });

    console.log(formik.values);

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
