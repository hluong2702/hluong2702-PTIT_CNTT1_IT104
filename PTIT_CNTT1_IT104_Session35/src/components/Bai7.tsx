import { HeartOutlined } from "@ant-design/icons";
import { useAppSelector } from "../hooks/CustomHook";

export default function Bai7() {
  const user = useAppSelector((state) => state.favoritesSlice.user);

  return (
    <div>
      <h1>List Favorites User</h1>
      <div className="listUser">
        {user.map((element) => {
          return (
            <div key={element.id} className="user">
              <p>UserName: {element.username}</p>
              <p>
                Favorites :{" "}
                <HeartOutlined
                  style={{ color: element.favorites ? "red" : "black" }}
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
