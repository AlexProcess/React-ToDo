import { createContext, useEffect, useState } from "react";

//* INTERFACES *//
import { IDataToCreateTodo, IToDo } from "../interfaces/toDo.interfaces";

//* CONTEXT *//
//* CONTEXT *//
const updatedFields: Partial<IToDo> = {
    todo: "Nuevo título",
    id: crypto.randomUUID(),
    completed: false,
};

interface TodoContextProps {
    todoes: IToDo[];
    getTodoes(): Promise<void>;
    createTodo(newTodo: IDataToCreateTodo): Promise<void>;
    updateTodo(id: string, updatedFields: Partial<IToDo>): Promise<void>;
    deleteTodo(id: string): Promise<void>;
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

    //! UPDATE TODO
    const updateTodo = async (id: string, updatedFields: Partial<IToDo>) => {
        const updatedTodoes = todoes.map((todo) => {
            if (todo.id === id) {
                return { ...todo, ...updatedFields };
            }
            return todo;
        });

        localStorage.setItem("todoes", JSON.stringify(updatedTodoes));
        await getTodoes();
    };

    //! Delete TODO
    const deleteTodo = async (id: string) => {
        const updatedTodoes = todoes.filter((todo) => todo.id !== id);
        localStorage.setItem("todoes", JSON.stringify(updatedTodoes));
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
                updateTodo,
                deleteTodo,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
