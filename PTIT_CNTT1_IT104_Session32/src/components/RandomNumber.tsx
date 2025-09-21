import { useDispatch, useSelector } from "react-redux";

export default function RandomNumber() {
  const result = useSelector((state: number) => state);
  const dispath = useDispatch();
  return (
    <div>
      <h1>Random : {result}</h1>
      <button onClick={() => dispath({ type: "random" })}>Random button</button>
    </div>
  );
}
