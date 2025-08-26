import React, { useState } from "react";

export default function Bai6() {
  const [text, setText] = useState<number>(0);
  const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.length);
  }
  return <div style={{display: "flex", flexDirection: "column"}}>
    <textarea onChange={handleCHange}></textarea>
    <span>{text}</span>
  </div>;
}