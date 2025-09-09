import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "active-link" : ""}
        end
      >
        Home
      </NavLink>
      <NavLink 
        to="/product" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Product
      </NavLink>
      <NavLink 
        to="/detail" 
        className={({ isActive }) => isActive ? "active-link" : ""}
      >
        Detail
      </NavLink>
    </nav>
  );
}
