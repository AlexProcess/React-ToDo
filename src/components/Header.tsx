import "./header.css";
import Sun from "../svgs/Sun";
import { NewToDo } from "./NewToDo";

export const Header = () => {
    return (
        <header className="header__container">
            <div className="header__overlay">
                {/* Aquí puedes colocar elementos para superponer */}
                <h1>T O D O</h1>
                {/* <buttoBJn className="ld__mode"> */}
                <Sun className="sun__icon" />
                {/* </button> */}
            </div>
        </header>
    );
};
