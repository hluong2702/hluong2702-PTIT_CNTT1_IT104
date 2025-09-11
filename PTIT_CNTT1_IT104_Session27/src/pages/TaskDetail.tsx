import React from 'react'
import { useParams, Link } from 'react-router-dom';
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

export default function TaskDetail() {
    const id = useParams();
  return (
    <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            textAlign: "start",
            width: "30%",
            borderRadius: "8px",
            padding: "8px",
            position: "absolute",
            top: 0,
            left: 500,
          }}
        >
            <h2>{tasks[id.taskId].title}</h2>
            <span>{tasks[id.taskId].description}</span>
            <Link to={`/taskList`}>Quay lại</Link>
        </div>
  )
}
