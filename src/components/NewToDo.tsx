import { GText } from "./GText";
import "./newtodo.css";

export const NewToDo = () => {
    return (
        <section className="todo-card__container">
            <div className="todo-card__contain">
                <button className="rounded__button"></button>
                <form action="text">
                    <input
                        className="todo__input"
                        placeholder="Create a new to do ..."
                        type="text"
                    />
                </form>
            </div>
        </section>
    );
};
