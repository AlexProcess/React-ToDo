//* STYLES *//
import { useContext } from "react";
import "./todostates.css";
import { TodoContext } from "../../context/TodoContext";

export const TodoStates: React.FC = () => {
    const { getTodoes, getActiveTodoes, getCompleteTodoes } =
        useContext(TodoContext);

    return (
        <>
            <div className="states__container">
                <div>
                    <button
                        onClick={() => getTodoes()}
                        className="clear__button"
                    >
                        All
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => getActiveTodoes()}
                        className="clear__button"
                    >
                        Active
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => getCompleteTodoes()}
                        className="clear__button"
                    >
                        Completed
                    </button>
                </div>
            </div>
            <div className="info__contain">
                <p> Drag and drop to reorder list</p>
            </div>
        </>
    );
};
