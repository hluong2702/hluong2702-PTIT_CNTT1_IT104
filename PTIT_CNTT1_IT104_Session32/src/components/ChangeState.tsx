import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function ChangeState() {
  const state = useSelector((state: any) => state);
  const dispath = useDispatch();
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispath({ type: "changeState" })}>
        Change State
      </button>
    </div>
  );
}
