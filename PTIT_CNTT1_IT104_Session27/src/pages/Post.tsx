import { Link } from "react-router-dom";
import "../assets/blog.css";

const posts = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án...",
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh và tiện lợi...",
  },
  {
    id: 3,
    title: "Giới thiệu về React Router",
    excerpt: "Điều hướng trong React với React Router DOM...",
  },
  {
    id: 4,
    title: "Quản lý state với Redux",
    excerpt: "Redux giúp quản lý state tập trung...",
  },
  {
    id: 5,
    title: "Hooks trong React",
    excerpt: "useState, useEffect và các hook phổ biến...",
  },
];

export default function Posts() {
  return (
    <div>
      <h2 className="page-title">Danh sách bài viết</h2>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.id} className="post-item">
            <Link to={`/blog/posts/${post.id}`}>{post.title}</Link>
            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}