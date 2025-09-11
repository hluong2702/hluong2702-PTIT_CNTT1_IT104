import React from "react";
import {Link} from "react-router-dom"

export default function Home() {
  return (
    <>
      <nav
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                backgroundColor: "blue",
                width: "100%",
                padding: "12px",
                justifyContent: "space-evenly"
              }}
            >
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </nav>
      <div style={{ margin: "20px"}}>Xin chào</div>
    </>
  );
}
