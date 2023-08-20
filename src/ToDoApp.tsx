//* COMPONENTS *//
import { Background } from "./components/UI/Background";
import { Header } from "./components/UI/Header";
import { NewToDo } from "./components/ToDo/NewToDo";
import { ToDoes } from "./components/ToDo/ToDoes";

export const ToDoApp = () => {
    return (
        <>
            <Header />
            <NewToDo />
            <ToDoes />
            <Background />
        </>
    );
};
