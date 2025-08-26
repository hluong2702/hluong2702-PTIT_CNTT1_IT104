import React, { useState } from "react";

export default function Bai5() {
  const [text, setText] = useState<string>("");
  const handleCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  return <div style={{display: "flex", flexDirection: "column"}}>
    <input type="text" value = {text} onChange={handleCHange}/>
    <span>{text}</span>
  </div>;
}