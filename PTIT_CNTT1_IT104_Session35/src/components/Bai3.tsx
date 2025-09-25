import { useAppDispatch, useAppSelector } from "../hooks/CustomHook";
import { changeBackground } from "../slices/changeTheme";

export default function Bai3() {
  const theme = useAppSelector((state) => state.changeTheme.value);
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: theme === "light" ? "#fff" : "#333",
      }}
    >
      <button
        style={{
          borderColor: theme === "light" ? "#333" : "#fff",
          backgroundColor: "transparent",
          color: theme === "light" ? "#333" : "#fff",
        }}
        onClick={() => dispatch(changeBackground())}
      >
        {theme === "light" ? "Light" : "Dark"}
      </button>
    </div>
  );
}
