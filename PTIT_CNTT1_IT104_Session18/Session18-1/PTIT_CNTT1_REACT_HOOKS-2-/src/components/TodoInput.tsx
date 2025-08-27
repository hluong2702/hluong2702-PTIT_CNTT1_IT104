import React, { useEffect, useReducer, useState } from "react";
import { taskReducer } from "../reducers/taskReducer";
import type { Task } from "../interfaces/task.interface";

export default function TodoInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowError, setIsShowError] = useState<boolean>(false);

  // Lấy dữ liệu từ localStorage khi khởi tạo
  const initTasks = (): Task[] => {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  };

  // Gọi reducer (state ban đầu lấy từ localStorage)
  const [tasks, dispatch] = useReducer(taskReducer, [], initTasks);

  // Hàm lấy giá trị trong input
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) {
      setIsShowError(true);
    } else {
      setIsShowError(false);
    }

    setInputValue(value);
  };

  // Hàm submit form
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue) {
      const newTask: Task = {
        id: Math.ceil(Math.random() * 100000000),
        name: inputValue,
        isCompleted: false,
      };

      dispatch({
        type: "ADD_TASK",
        payload: newTask,
      });

      setInputValue("");
      setIsShowError(false);
    } else {
      setIsShowError(true);
    }
  };

  // Cập nhật localStorage khi tasks thay đổi
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <form onSubmit={handleSubmitForm} className="d-flex mb-1">
        <input
          onChange={handleChangeInput}
          value={inputValue}
          type="text"
          className="form-control me-2"
          placeholder="Nhập công việc..."
        />
        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </form>
      {isShowError && (
        <p className="text-danger error-text mb-3 text-sm fs-6">
          Vui lòng nhập tên công việc!
        </p>
      )}
    </>
  );
}
