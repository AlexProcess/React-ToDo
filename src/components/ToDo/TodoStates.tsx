//* STYLES *//
import { useContext, useState } from "react";
import "./todostates.css";
import { TodoContext } from "../../context/TodoContext";

export const TodoStates: React.FC = () => {
    const { getTodoes, getActiveTodoes, getCompleteTodoes } =
        useContext(TodoContext);

    const [selectedState, setSelectedState] = useState("all");

    return (
        <>
            <div className="states__container">
                <div>
                    <button
                        onClick={() => {
                            getTodoes();
                            setSelectedState("all"); // Actualiza el estado seleccionado
                        }}
                        className={`clear__button ${
                            selectedState === "all" ? "selected" : ""
                        }`}
                    >
                        All
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            getActiveTodoes();
                            setSelectedState("active"); // Actualiza el estado seleccionado
                        }}
                        className={`clear__button ${
                            selectedState === "active" ? "selected" : ""
                        }`}
                    >
                        Active
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            getCompleteTodoes();
                            setSelectedState("completed"); // Actualiza el estado seleccionado
                        }}
                        className={`clear__button ${
                            selectedState === "completed" ? "selected" : ""
                        }`}
                    >
                        Completed
                    </button>
                </div>
            </div>
            <div className="info__contain">
                <p>Drag and drop to reorder list</p>
            </div>
        </>
    );
};
