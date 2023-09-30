export interface IToDo {
    id: string;
    todo: string;
    completed: boolean;
    order: number;
  }
  

export interface IDataToCreateTodo {
  todo: string;
  completed: boolean;
}
