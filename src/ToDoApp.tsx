//* COMPONENTS *//
import { Background } from "./components/UI/Background";
import { Header } from "./components/UI/Header";
import { NewToDo } from "./components/ToDo/NewToDo";

export const ToDoApp = () => {
    return (
        <>
            <Header />
            <NewToDo />
            <Background />
        </>
    );
};
