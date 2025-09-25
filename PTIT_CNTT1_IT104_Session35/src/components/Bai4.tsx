import { useAppDispatch, useAppSelector } from "../hooks/CustomHook";
import { handleChangeMode } from "../slices/changeMode";

export default function Bai4() {
  const mode = useAppSelector((state) => state.changeMode.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(handleChangeMode())}>
        {mode === "column" ? "List Mode" : "Grid Mode"}
      </button>
      <div
        className="element"
        style={{ display: mode === "column" ? "grid" : "flex", gap: "10px" }}
      >
        <p
          style={{
            padding: "8px",
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
          }}
        >
          1
        </p>
        <p
          style={{
            padding: "8px",
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
          }}
        >
          2
        </p>
        <p
          style={{
            padding: "8px",
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
          }}
        >
          3
        </p>
        <p
          style={{
            padding: "8px",
            backgroundColor: "red",
            color: "white",
            textAlign: "center",
          }}
        >
          4
        </p>
      </div>
    </div>
  );
}
