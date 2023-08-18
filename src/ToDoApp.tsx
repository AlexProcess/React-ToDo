import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NewToDo } from "./components/NewToDo";
import { Background } from "./components/Background";

export const ToDoApp = () => {
    return (
        <>
            <Header />
            <NewToDo />
            <Background />
        </>
    );
};
