import { Link, Outlet } from "react-router-dom";
import "../assets/blog.css";

export default function BlogLayout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="sidebar-title">My Blog</h2>
        <nav>
          <ul className="menu">
            <li>
              <Link to="/blog/posts">Posts</Link>
            </li>
          </ul>
        </nav>
        <footer className="sidebar-footer">© 2025 My Blog</footer>
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}