import React from "react";
import "./Header.css";
import Sun from "../svgs/Sun";

export const Header = () => {
    return (
        <header className="header__container">
            <div className="header__background">
                <img
                    className="head__image"
                    src="/images/bg-mobile-dark.jpg"
                    alt="header-background-img"
                ></img>
                <div className="header__overlay">
                    {/* Aquí puedes colocar elementos para superponer */}
                    <h1>T O D O</h1>
                    {/* <buttoBJn className="ld__mode"> */}
                    <Sun className="sun_icon" />
                    {/* </button> */}
                </div>
            </div>
        </header>
    );
};
