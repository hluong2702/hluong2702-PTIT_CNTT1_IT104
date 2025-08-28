import React, { useState, useEffect } from "react";
import "./Theme.css";

export default function Ex2() {
  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    if (theme) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
    return () => {
      document.body.classList.remove("light");
    };
  }, [theme]);

  const handleChange = () => {
    setTheme((prev) => !prev);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
      }}
    >
      <h1>My Themed App</h1>
      <button style={{ alignSelf: "center" }} onClick={handleChange}>
        Click me
      </button>
      <span>Đây là phần nội dung chính của ứng dụng</span>
      <span>Theme hiện tại: <b>{theme ? "LIGHT" : "DARK"}</b></span>
    </div>
  );
}