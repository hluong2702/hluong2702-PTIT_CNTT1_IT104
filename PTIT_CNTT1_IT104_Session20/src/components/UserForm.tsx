import React, { useReducer } from "react";

interface User {
  name: string;
  email: string;
}

type setUser =
  | { type: "name"; inputName: string }
  | { type: "email"; inputEmail: string };

const reduce = (state: User, action: setUser): User => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.inputName,
      };
    case "email":
      return {
        ...state,
        email: action.inputEmail,
      };
    default:
      return state;
  }
};

const UserForm = () => {
  const [state, dispatch] = useReducer(reduce, { name: "", email: "" });

  return (
    <div>
      <h3>User Information Form</h3>
      <div>
        <label>Tên:</label>
        <input
          type="text"
          id="name"
          value={state.name}
          onChange={(e) => dispatch({ type: "name", inputName: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          id="email"
          value={state.email}
          onChange={(e) => dispatch({ type: "email", inputEmail: e.target.value })}
        />
      </div>
      <div>
        <h4 className="text-lg font-semibold">Thông tin người dùng</h4>
        <p>Tên: {state.name || "(Chưa nhập)"}</p>
        <p>Email: {state.email || "(Chưa nhập)"}</p>
      </div>
    </div>
  );
};

export default UserForm;