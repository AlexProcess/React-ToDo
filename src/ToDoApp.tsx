import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { NewToDo } from "./components/NewToDo";

export const ToDoApp = () => {
    return (
        <div>
            <Header />
            <NewToDo />
        </div>
    );
};
