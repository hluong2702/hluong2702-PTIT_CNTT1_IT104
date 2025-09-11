import { Link } from "react-router-dom";

interface IDataTask {
  id: number;
  title: string;
  description: string;
}

const tasks: IDataTask[] = [
  {
    id: 1,
    title: "Học React Router",
    description: "Làm quen với Dynamic Routes và useNavigate",
  },
  {
    id: 2,
    title: "Ôn lại Tailwind",
    description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
  },
  {
    id: 3,
    title: "Hoàn thành BTVN",
    description: "Chụp code lên GitHub và nộp link",
  },
];

export default function TaskList() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <h2>Danh sách công việc</h2>
      {tasks.map((task) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "start",
            border: "1px solid whitesmoke",
            width: "30%",
            borderRadius: "8px",
            padding: "8px",
            alignSelf: "center"
          }}
        >
            <h2>{task.title}</h2>
            <span>{task.description}</span>
            <Link to={`/taskDetail/${task.id - 1}`}>Xem chi tiết</Link>
        </div>
      ))}
    </div>
  );
}
