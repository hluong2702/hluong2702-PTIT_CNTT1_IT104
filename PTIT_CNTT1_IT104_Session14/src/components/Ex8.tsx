import React, { Component, type ChangeEvent } from "react";

interface LoginState {
  email: string;
  password: string;
  message: string;
}

interface User {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export default class Ex8 extends Component<object, LoginState> {
  constructor(props: object) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<LoginState, keyof LoginState>);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ message: "Email và mật khẩu không được để trống" });
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const FindUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (FindUser) {
      this.setState({ message: "Đăng nhập thành công" });
    } else {
      this.setState({ message: "Sai tài khoản hoặc mật khẩu" });
    }
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <br />
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
            />
          </div>
          <div>
            <label>Mật khẩu</label>
            <br />
            <input
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </div>
          <br />
          <button
            type="submit"
            style={{ background: "blue", color: "white" }}
          >
            Đăng nhập
          </button>
        </form>

        {this.state.message && (
          <p style={{ color: "red" }}>{this.state.message}</p>
        )}
      </div>
    );
  }
}
