import React from "react";
import {Link} from "react-router-dom"
export default function Contact() {
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
      <div style={{ display: "flex", flexDirection: "column", gap: "12px",  margin: "20px" }}>
        <span>fb: Nguyễn Văn A</span>
        <span>ins: nvaa</span>
        <span>sđt: 0123456789</span>
      </div>
    </>
  );
}
