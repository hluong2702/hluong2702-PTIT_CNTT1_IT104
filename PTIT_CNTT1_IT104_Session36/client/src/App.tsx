import FilterControls from "./components/FilterControls";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/CustomHook";

import {
  createTask,
  deleteTask,
  getAllTask,
  updateCompleted,
  updateTask,
} from "./apis/task.api";

const App = () => {
  const { data, status } = useAppSelector((state) => state.todoSlice);
  const dispatch = useAppDispatch();
  const [editId, setEditId] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    search: "",
  });

  const handleAdd = (title: string, priority: "low" | "medium" | "high") => {
    if (editId) {
      dispatch(updateTask({ id: editId, title, priority }));
      setEditId(undefined);
    } else {
      const newTask = {
        id: Date.now().toString(),
        title,
        completed: false,
        priority,
        status: `inactive` as const,
      };
      dispatch(createTask(newTask));
    }
  };

  const handleToggle = (id: string) => {
    const task = data.find((t) => t.id === id);
    if (task) {
      dispatch(updateCompleted({ id: task.id, completed: task.completed }));
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id: string) => {
    console.log(id);
    setEditId(id);
  };

  const filteredTasks = data.filter((t) => {
    const matchStatus =
      filters.status === "all" ||
      (filters.status === "completed" && t.completed) ||
      (filters.status === "active" && !t.completed);

    const matchPriority =
      filters.priority === "all" || t.priority === filters.priority;

    const matchSearch = t.title
      .toLowerCase()
      .includes(filters.search.toLowerCase());

    return matchStatus && matchPriority && matchSearch;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen relative">
      <h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
      <TaskForm onAdd={handleAdd} editId={editId} data={data} />
      <FilterControls
        status={filters.status}
        priority={filters.priority}
        search={filters.search}
        onStatusChange={(status) => setFilters({ ...filters, status })}
        onPriorityChange={(priority) => setFilters({ ...filters, priority })}
        onSearchChange={(search) => setFilters({ ...filters, search })}
      />
      {(status === "pending" || isLoading) && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-400 bg-opacity-70 z-50">
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        </div>
      )}

      {status === "success" && (
        <div>
          {filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              onToggle={handleToggle}
              onDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
