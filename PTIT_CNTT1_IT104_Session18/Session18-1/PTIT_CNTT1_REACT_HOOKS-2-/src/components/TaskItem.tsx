import { useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";
import type {Task} from "../interfaces/task.interface";
interface TaskState {
  tasks: Task,
}
export default function TaskItem({tasks}: TaskState) {
  
  const [_, dispatch] = useReducer(taskReducer, []);
  const handleDelete = (id: number | string) => {
    dispatch({
      type: "DELETE_TASK",
      payload: { id: id },
    });
  };
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="form-check">
          <input className="form-check-input me-2" type="checkbox" />
          <span className="task-name">{tasks.name}</span>
        </div>
        <div>
          <i className="fas fa-edit text-primary me-3" role="button" />
          <i
            onClick={() => handleDelete(1)}
            className="fas fa-trash text-danger"
            role="button"
          />
        </div>
      </li>
    </>
  );
}
