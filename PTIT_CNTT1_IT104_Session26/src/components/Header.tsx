import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "16px", background: "#f5f5f5" }}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink
          to="/post"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            textDecoration: "none",
          })}
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            textDecoration: "none",
          })}
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => ({
            color: isActive ? "red" : "black",
            textDecoration: "none",
          })}
        >
          Post
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
