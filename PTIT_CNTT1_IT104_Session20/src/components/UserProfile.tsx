import React, { useState } from 'react'

export default function UserProfile() {
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [infor,setInfor] = useState("");

    const handleName = (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleEmail = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handleSubmit = (event:React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInfor(`Tên: ${name}, Email: ${email}`);
  };

  return (
    <div>
      <h1 >Thông tin người dùng</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleName}
            placeholder="Nhập tên"
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmail}
            placeholder="Nhập email"
          />
        </div>
        <button
          type="submit">Gửi</button>
      </form>
      <span>{infor}</span>
    </div>
  )
}
