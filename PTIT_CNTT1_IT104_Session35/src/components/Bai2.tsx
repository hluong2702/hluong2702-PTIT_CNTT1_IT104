import { useAppDispatch, useAppSelector } from "../hooks/CustomHook";
import { addRandomNumber } from "../slices/randomNumber";

export default function Bai2() {
  const listNumber = useAppSelector(
    (state) => state.randomListNumber.listNumber
  );
  const dispatch = useAppDispatch();

  return (
    <>
      <div>List Number : {JSON.stringify(listNumber)}</div>
      <button onClick={() => dispatch(addRandomNumber())}>Random Number</button>
    </>
  );
}
