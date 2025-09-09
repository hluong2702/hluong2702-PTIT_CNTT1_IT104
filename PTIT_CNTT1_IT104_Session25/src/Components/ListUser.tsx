import React from "react";
import { Link } from "react-router-dom";

export default function ListUser() {
  const users = [
    { id: 1, name: "Nguyen Van A", email: "a@example.com", address: "Hanoi" },
    { id: 2, name: "Tran Thi B", email: "b@example.com", address: "Da Nang" },
    { id: 3, name: "Le Van C", email: "c@example.com", address: "Ho Chi Minh" },
  ];

  return (
    <div>
      <h2>Danh sách Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.name}</strong> - {user.email}
            <br />
            <Link to={`/user/${user.id}`}>
              <button>Xem chi tiết</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
