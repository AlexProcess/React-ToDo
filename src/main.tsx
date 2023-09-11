import React from "react";
import ReactDOM from "react-dom/client";

//* MAIN COMPONENT *//
import { ToDoApp } from "./ToDoApp";

//* PROVIDERS *//
import { TodoProvider } from "./context/TodoContext";

//* GLOBAL STYLES *//
import "./App.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <TodoProvider>
        <ToDoApp />
    </TodoProvider>
);
