import { useContext, useEffect } from "react";
import { useFormik } from "formik";

//* STYLES *//
import "./todo.css";

//* INTERFACES *//
import { IToDo } from "../../interfaces/toDo.interfaces";

//* CONTEXT *//
import { TodoContext } from "../../context/TodoContext";

//* PROPS *//
interface Props {
    todo: IToDo;
}

export const ToDo: React.FC<Props> = ({ todo }) => {
    const { updateTodo } = useContext(TodoContext);

    const formik = useFormik({
        initialValues: { todo: "", completed: false },
        onSubmit: async (formValues) => {
            await updateTodo(todo.id, formValues);
            formik.resetForm();
        },
    });

    useEffect(() => {
        formik.setFieldValue("completed", todo.completed);
        formik.setFieldValue("todo", todo.todo);
    }, [todo]);

    return (
        <li>
            <div className="todoes-card__container">
                <div className="todoes-card__contain">
                    <button
                        onClick={() => {
                            formik.setFieldValue(
                                "completed",
                                !formik.values.completed
                            );
                            setTimeout(() => formik.submitForm(), 250);
                        }}
                        className={
                            formik.values.completed
                                ? "rounded__button-checked"
                                : "rounded__button"
                        }
                    />
                    <p>{todo.todo}</p>
                </div>
            </div>
        </li>
    );
};
