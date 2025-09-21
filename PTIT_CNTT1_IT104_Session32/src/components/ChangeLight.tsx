import { useDispatch, useSelector } from "react-redux";

export default function ChangeLight() {
  const result = useSelector((state: any) => state);
  const dispath = useDispatch();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: result === "light" ? "white" : "black",
        color: result === "light" ? "black" : "white",
      }}
    >
      <input
        type="checkbox"
        onChange={() => dispath({ type: "changeLight" })}
        id="light"
      />
      <label htmlFor="light">{result === "light" ? "Sáng" : "Tối"}</label>
    </div>
  );
}
