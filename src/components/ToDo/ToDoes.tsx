import { useContext, useEffect, useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

//* COMPONENTS *//
import { ToDo } from "./ToDo";
import { TodoStates } from "./TodoStates";

//* STYLES *//
import "./todoes.css";

//* CONTEXT *//
import { TodoContext } from "../../context/TodoContext";

export const ToDoes: React.FC = () => {
  const { todoes, deleteCompletedTodos, updateTodo } = useContext(TodoContext);

  const leftItems = todoes.filter((todo) => !todo.completed).length;
  const [draggedItems, setDraggedItems] = useState(todoes);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!active || !over || !active.id || !over.id) {
      return;
    }

    setDraggedItems((items) => {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  //Debug Rerender todoes
  useEffect(() => {
    setDraggedItems(todoes);
  }, [todoes]);

  return (
    <>
      <div className="todoes__container">
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCenter}
        >
          <SortableContext
            items={draggedItems}
            strategy={verticalListSortingStrategy}
          >
            <ul className="todo__list">
              {draggedItems.map((todo) => (
                <ToDo key={todo.id} todo={todo} />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      </div>

      <div className="items-clear__contain">
        <p>{leftItems} left items</p>
        <button onClick={deleteCompletedTodos} className="clear__button">
          Clear completed
        </button>
      </div>
      <TodoStates />
    </>
  );
};
