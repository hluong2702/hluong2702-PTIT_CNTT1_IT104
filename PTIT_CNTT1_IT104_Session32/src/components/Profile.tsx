import { useDispatch, useSelector } from "react-redux";

type User = {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
};

export default function Profile() {
  const user = useSelector((state: User[]) => state);
  const dispatch = useDispatch();
  dispatch({ type: "display" });
  console.log(user);

  return (
    <div>
      <h1>Thông tin cá nhân</h1>
      <p>Id: {user[0].id}</p>
      <p>Họ và tên: {user[0].userName}</p>
      <p>Giới tính: {user[0].gender}</p>
      <p>Ngày sinh: {user[0].dateBirth}</p>
      <p>Địa chỉ: {user[0].address}</p>
    </div>
  );
}
