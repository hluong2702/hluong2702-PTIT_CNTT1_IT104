import React from "react";
import {Link} from "react-router-dom"

export default function About() {
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
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "20px"}}>
        <span>Tên: Nguyễn Văn A</span>
        <span>Tuổi: 15</span>
        <span>Nghề nghiệp: học sinh</span>
      </div>
    </>
  );
}
