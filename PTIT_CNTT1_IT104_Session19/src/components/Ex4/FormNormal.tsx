import React, { useEffect, useState } from "react";
import "./FormNormal.css";

export default function FormNormal() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (name === "") {
      setNameError("Trường này là bắt buộc");
    } else {
      setNameError("");
    }
  }, [name]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("Trường này là bắt buộc");
    } else if (!emailRegex.test(email)) {
      setEmailError("Email không hợp lệ");
    } else {
      setEmailError("");
    }
  }, [email]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameError && !emailError && name && email) {
      alert("Gửi thành công");
      setName("");
      setEmail("");
    }
  };

  return (
    <form
      className="form"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid black",
        borderRadius: "5px",
        padding: "20px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <h2>Đăng ký thông tin</h2>
      <label>Họ tên</label>
      <input
        type="text"
        placeholder="Nhập họ tên..."
        value={name}
        onChange={handleName}
      />
      <span className="error">{nameError}</span>

      <label>Email</label>
      <input
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={handleEmail}
      />
      <span className="error">{emailError}</span>

      <button type="submit">Gửi</button>
    </form>
  );
}