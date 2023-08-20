import React, { useContext, useEffect } from "react";

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

    useEffect(() => {
        return () => {};
    }, []);

    //TODO: UseEffect para actualizar los valores del formik
    //TODO: Crear un metodo en el context para actualizar el todo a traves del ID
    //TODO: Cuando se haga click en completado llamar a la funcion onSubmmit de formik --> formik.onSumbit

    return (
        <li>
            <div className="todoes-card__container">
                <div className="todoes-card__contain">
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
                    <p>{todo.todo}</p>
                </div>
            </div>
        </li>
    );
};
