//* COMPONENTS *//
import { Background } from "./components/Background";
import { Header } from "./components/Header";
import { NewToDo } from "./components/NewToDo";

export const ToDoApp = () => {
    return (
        <>
            <Header />
            <NewToDo />
            <Background />
        </>
    );
};
