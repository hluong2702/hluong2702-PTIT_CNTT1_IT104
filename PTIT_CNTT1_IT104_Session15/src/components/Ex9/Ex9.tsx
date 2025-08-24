import React, { Component } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface State {
  todoList: Todo[];
  text: string;
  editingId: number | null;
  showModal: boolean;
  deleteId: number | null;
}

export default class TodoList extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      todoList: this.loadFromLocalStorage(),
      text: "",
      editingId: null,
      showModal: false,
      deleteId: null,
    };
  }

  private loadFromLocalStorage(): Todo[] {
    const storedData = localStorage.getItem("todoList");
    return storedData ? JSON.parse(storedData) : [];
  }

  private saveToLocalStorage(todoList: Todo[]) {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }

  private handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  private validateInput(text: string, editingId: number | null): string | null {
    if (text.trim() === "") {
      return "Tên công việc không được để trống!";
    }
    const duplicate = this.state.todoList.find(
      (todo) => todo.text.toLowerCase() === text.toLowerCase() && todo.id !== editingId
    );
    if (duplicate) {
      return "Tên công việc không được phép trùng!";
    }
    return null;
  }

  private handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { text, editingId, todoList } = this.state;
    const error = this.validateInput(text, editingId);
    if (error) {
      alert(error);
      return;
    }

    let updatedList: Todo[];
    if (editingId !== null) {
      updatedList = todoList.map((todo) =>
        todo.id === editingId ? { ...todo, text: text.trim() } : todo
      );
    } else {
      const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 0;
      updatedList = [...todoList, { id: newId, text: text.trim(), completed: false }];
    }

    this.saveToLocalStorage(updatedList);
    this.setState({
      todoList: updatedList,
      text: "",
      editingId: null,
    });
  };

  private handleEdit = (id: number) => {
    const task = this.state.todoList.find((todo) => todo.id === id);
    if (task) {
      this.setState({ text: task.text, editingId: id });
    }
  };

  private handleOpenDeleteModal = (id: number) => {
    this.setState({ showModal: true, deleteId: id });
  };

  private handleConfirmDelete = () => {
    const { deleteId, todoList, editingId } = this.state;
    if (deleteId !== null) {
      const updatedList = todoList.filter((todo) => todo.id !== deleteId);
      this.saveToLocalStorage(updatedList);
      this.setState({
        todoList: updatedList,
        showModal: false,
        deleteId: null,
        text: editingId === deleteId ? "" : this.state.text,
        editingId: editingId === deleteId ? null : editingId,
      });
    }
  };

  private handleCloseModal = () => {
    this.setState({ showModal: false, deleteId: null });
  };

  private handleToggleComplete = (id: number) => {
    const updatedList = this.state.todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.saveToLocalStorage(updatedList);
    this.setState({ todoList: updatedList });
  };

  render() {
    const { todoList, text, editingId, showModal } = this.state;
    return (
      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "6px",
          width: "500px",
          margin: "20px auto",
          background: "#f9fafb",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Danh sách công việc</h2>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Thêm công việc mới..."
            style={{
              flex: 1,
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
            }}
            value={text}
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleSubmit}
            style={{
              background: "#3b82f6",
              color: "white",
              border: "none",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {editingId !== null ? "Cập nhật" : "Thêm"}
          </button>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todoList.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => this.handleToggleComplete(todo.id)}
                  style={{ cursor: "pointer" }}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#9ca3af" : "#000",
                  }}
                >
                  {todo.text}
                </span>
              </div>
              <div style={{ display: "flex", gap: "5px" }}>
                <button
                  onClick={() => this.handleEdit(todo.id)}
                  style={{
                    background: "#10b981",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Sửa
                </button>
                <button
                  onClick={() => this.handleOpenDeleteModal(todo.id)}
                  style={{
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Xóa
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Modal xác nhận xóa */}
        {showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            >
              <p>Bạn có chắc chắn muốn xóa công việc này?</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                <button
                  onClick={this.handleConfirmDelete}
                  style={{
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Xác nhận
                </button>
                <button
                  onClick={this.handleCloseModal}
                  style={{
                    background: "#6b7280",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Hủy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}