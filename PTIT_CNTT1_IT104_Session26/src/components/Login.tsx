import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
  role: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (localStorage.getItem("isAuth") === "true") {
      navigate("/account");
    }
  }, [navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const user: User = {
      email: "Tung@gmail.com",
      password: "123456",
      role: "Admin",
    };

    if (!email || !password || !role) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }

    if (email !== user.email) {
      setError("Email không đúng");
      return;
    }

    if (password !== user.password) {
      setError("Mật khẩu không đúng");
      return;
    }

    if (role !== user.role) {
      setError("Quyền không đúng");
      return;
    }

    localStorage.setItem("isAuth", "true");
    navigate("/account");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Đăng Nhập</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <select
            value={role}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value)}
            style={{ width: "100%", padding: "8px", fontSize: "16px" }}
          >
            <option value="">--Chọn quyền--</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <button
          type="submit"
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          Đăng Nhập
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </form>
    </div>
  );
}