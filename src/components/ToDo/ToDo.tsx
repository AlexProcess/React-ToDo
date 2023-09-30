import { useContext, useEffect } from "react";
import { useFormik } from "formik";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

//* ICONS *//
import IconCross from "../../svgs/icon-cross";
import IconCheck from "../../svgs/icon-check";

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
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: todo.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const { updateTodo, deleteTodo } = useContext(TodoContext);

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
    <li style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <div className="todoes-card__container">
        <div className="todoes-card__contain">
          <button
            onClick={() => {
              formik.setFieldValue("completed", !formik.values.completed);
              setTimeout(() => formik.submitForm(), 250);
            }}
            className={
              formik.values.completed
                ? "rounded__button-checked"
                : "rounded__button"
            }
          >
            {formik.values.completed && <IconCheck />}
          </button>
          <p className={formik.values.completed ? "todo__checked" : "todo"}>
            {todo.todo}
          </p>
        </div>
        <button onClick={() => deleteTodo(todo.id)} className="delete__todo">
          <IconCross />
        </button>
      </div>
    </li>
  );
};
