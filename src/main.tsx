import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { ToDoApp } from "./ToDoApp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ToDoApp />
    </React.StrictMode>
);
