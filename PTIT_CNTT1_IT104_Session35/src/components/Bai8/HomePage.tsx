import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../slices/loginSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/CustomHook";

export default function HomePage() {
  const user = useAppSelector((state) => state.loginSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(handleLogout());
    navigate("/Login");
  };

  if (!user.id) {
    navigate("/");
    return null;
  }

  return (
    <div style={{ padding: "20px" }}>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Đăng xuất</button>
    </div>
  );
}
