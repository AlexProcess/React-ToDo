import React, { useContext } from "react";

//* INTERFACES *//
import { IToDo } from "../../interfaces/toDo.interfaces";

//* PROPS *//
interface Props {
    todo: IToDo;
}

//* CONTEXT *//
import { TodoContext } from "../../context/TodoContext";
import { useFormik } from "formik";

export const ToDo: React.FC<Props> = ({ todo }) => {
    const { createTodo } = useContext(TodoContext);

    const formik = useFormik({
        initialValues: { todo: "", completed: false },
        onSubmit: async (formValues) => {
            await createTodo(formValues);

            formik.resetForm();
        },
    });

    console.log(todo);

    return (
        <li>
            <div className="todoes-card__container">
                <div className="todoes-card__conatiner">
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
                            type="text"
                        />
                    </form>
                </div>
            </div>
        </li>
    );
};
