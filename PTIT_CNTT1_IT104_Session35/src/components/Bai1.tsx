import { useAppDispatch, useAppSelector } from "../hooks/CustomHook";
import { decrease, increase, reset } from "../slices/counterSlice";

export default function Bai1() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>Count : {count}</div>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}
