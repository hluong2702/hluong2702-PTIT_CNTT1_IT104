import { createContext, useReducer } from "react";
import TodoList from "../components/TodoList";
import type { Task } from "../interfaces/task.interface";
import { taskReducer } from "../reducers/taskReducer";

interface TaskContextType {
  tasks?: Task[];
  handleAddTask?: (task: Task) => void;
  handleUpdateTask?: (id: number | string, newTask: Task) => void;
  handleDeleteTask?: (id: number | string) => void;
  handleToggleTask?: (id: number | string) => void;
}

// Bước 1: Tạo context
export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export default function TaskContextProvider() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks }}>
      <TodoList />
    </TaskContext.Provider>
  );
}
