import React from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const users = [
    { id: 1, name: "Nguyen Van A", email: "a@example.com", address: "Hanoi" },
    { id: 2, name: "Tran Thi B", email: "b@example.com", address: "Da Nang" },
    { id: 3, name: "Le Van C", email: "c@example.com", address: "Ho Chi Minh" },
  ];

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2>Không tìm thấy user</h2>;
  }

  return (
    <div>
      <h2>Chi tiết User</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Address:</strong> {user.address}</p>
    </div>
  );
}
