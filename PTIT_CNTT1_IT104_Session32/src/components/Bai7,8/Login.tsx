import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const user = useSelector((state: any) => state);
  const [form, setForm] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    setForm(user);
  }, [user]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: "login",
      payload: form,
    });
    console.log("Tài khoản đăng nhập:", form);
  };

  return (
    <div style={{ width: "300px" }} className="border rounded text-center">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit} className="d-flex gap-3 flex-column p-2">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Nhập email.."
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Nhập mật khẩu.."
          value={form.password}
          onChange={(e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            })
          }
        />
        <button type="submit" className="w-100 btn btn-primary">
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
