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

//!ToDo --> Delete button --> DONE
//!ToDo --> Indicar items(Todoes que tienes en la lista) --> DONE
//!ToDo --> boton de clear all
//!ToDo --> mostrar los ALL, ACTIVE Y COMPLETED
//!ToDo --> Drag and drop
