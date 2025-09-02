import React, { useState } from 'react'

export default function Ex1() {
    const [inputValue,setInputValue] = useState("");
    const [error,setError] = useState("");

    const handleInput = (event : React.ChangeEvent<HTMLInputElement>) => {
       setInputValue(event.target.value);
       if (event.target.value.length > 5 ) {
        setError("Chuoi nhap vao dai hon 5 ky tu");
       }else{
        setError("");
       }
    }
  return (
    <div>
        <h1>Kiểm tra độ dài chuỗi nhập vào</h1>
        <input 
        type="text"
        onChange={handleInput}
        value={inputValue} />
        <div> <span>{error}</span></div>
    </div>
  )
}
