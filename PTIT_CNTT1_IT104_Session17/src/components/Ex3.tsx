import React from 'react'
interface Text {
    text: string,
}
const handleChange = () => {
    (document.querySelector("#text") as HTMLSpanElement).style.color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`
}
export default function Bai3({text}: Text) {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <span id="text">{text}</span>
      <button onClick={handleChange}>Thay đổi màu</button>
    </div>
  )
}