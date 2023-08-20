import { createContext, useEffect, useState } from "react";

//* INTERFACES *//
import { IDataToCreateTodo, IToDo } from "../interfaces/toDo.interfaces";

//* CONTEXT *//
//* CONTEXT *//
interface TodoContextProps {
    todoes: IToDo[];
    getTodoes(): Promise<void>;
    createTodo(newTodo: IDataToCreateTodo): Promise<void>;
}

export const TodoContext = createContext({} as TodoContextProps);

//* PROVIDER *//
//* PROVIDER *//
interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
    const [todoes, setTodoes] = useState<IToDo[]>([]);

    useEffect(() => {
        getTodoes();
    }, []);

    //! GET TODOES
    const getTodoes = async () => {
        const todoes = localStorage.getItem("todoes");
        if (todoes) setTodoes(JSON.parse(todoes));
    };

    //! CREATE TODO
    const createTodo = async ({ completed, todo }: IDataToCreateTodo) => {
        const previousTodo: IToDo[] = JSON.parse(
            localStorage.getItem("todoes") || "[]"
        );

        previousTodo.push({ completed, todo, id: crypto.randomUUID() });

        localStorage.setItem("todoes", JSON.stringify(previousTodo));
        await getTodoes();
    };

    return (
        <TodoContext.Provider
            value={{
                // properties
                todoes,

                // methods
                getTodoes,
                createTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
