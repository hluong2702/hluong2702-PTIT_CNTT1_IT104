import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state: number) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
    </div>
  );
}
