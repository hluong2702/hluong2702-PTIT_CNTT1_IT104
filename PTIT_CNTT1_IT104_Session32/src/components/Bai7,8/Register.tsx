import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const submit = useSelector((state: any) => state);
  const [form, setForm] = useState({ email: "", password: "" });
  const dispath = useDispatch();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispath({
      type: "register",
      payload: form,
    });

    navigate("/login");
  };

  return (
    <div style={{ width: "300px" }} className="border rounded text-center">
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit} className="d-flex gap-3 flex-column p-2">
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Nhập email.."
          value={form.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setForm({
              ...form,
              [name]: value,
            });
          }}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="form-control"
          placeholder="Nhập mật khẩu.."
          value={form.password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = event.target;
            setForm({
              ...form,
              [name]: value,
            });
          }}
        />
        <button type="submit" className="w-100 btn btn-primary">
          Đăng ký
        </button>
      </form>
    </div>
  );
}
