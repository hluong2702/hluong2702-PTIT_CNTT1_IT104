import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch } from "../../hooks/CustomHook";
import { handleLogin } from "../../slices/loginSlice";

const users = [
  {
    id: 1,
    username: "Nguyen Van A",
    email: "nva@gmail.com",
    password: "123456",
  },
  { id: 2, username: "Le Thi B", email: "ltb@gmail.com", password: "123456" },
];

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      dispatch(handleLogin(foundUser));
      navigate("/Homepage");
    } else {
      alert("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <div
      className="container"
      style={{
        border: "1px solid black",
        width: "fit-content",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            style={{ width: "100%", padding: "5px" }}
            type="email"
            id="email"
            placeholder="nva@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            style={{ width: "100%", padding: "5px" }}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button
          style={{
            width: "100%",
            padding: "5px",
            backgroundColor: "#1677FF",
            color: "white",
            border: "transparent",
          }}
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
