//* STYLES *//
import "./todostates.css";

export const TodoStates = () => {
    return (
        <>
            <div className="states__container">
                <div>
                    <button className="clear__button">All</button>
                </div>
                <div>
                    <button className="clear__button">Active</button>
                </div>
                <div>
                    <button className="clear__button">Completed</button>
                </div>
            </div>
            <div className="info__contain">
                <p> Drag and drop to reorder list</p>
            </div>
        </>
    );
};
