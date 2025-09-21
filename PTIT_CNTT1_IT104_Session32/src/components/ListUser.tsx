import { useDispatch, useSelector } from "react-redux";

type User = {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
};

export default function ListUser() {
  const user = useSelector((state: User[]) => state);
  const dispatch = useDispatch();
  dispatch({ type: "display" });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th rowSpan={2}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {user.map((element) => {
            return (
              <tr>
                <td>{element.id}</td>
                <td>{element.userName}</td>
                <td>{element.gender}</td>
                <td>{element.dateBirth}</td>
                <td>{element.address}</td>
                <td>
                  <button>Sửa</button>
                </td>
                <td>
                  <button>Xoá</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
