
import TaskItem from "./TaskItem";
import type {Task} from "../interfaces/task.interface";
export default function TaskList() {
  const taskLocal = JSON.parse(localStorage.getItem("tasks") || "[]"); 
  // Bước 3: Lấy giá trị từ context thông qua hook useContext

  return (
    <>
      <ul className="list-group my-3">
        {taskLocal.map((task: Task) => (
          <>
            {/* Phần hiển thị các TaskItem */}
            <TaskItem tasks={task} key={task.id}/>
          </>
        ))}
      </ul>
    </>
  );
}
