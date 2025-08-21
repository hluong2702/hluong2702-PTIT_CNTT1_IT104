import React, { Component, type ChangeEvent } from 'react'

interface User{
    name:string;
    email:string;
    password:string;
    phoneNumber:string;
}

interface FormState extends User{
    message:string;
}

export default class Ex7 extends Component<object,FormState> {
    constructor(props:object){
        super(props);

        this.state = {
            name:"",
            email:"",
            password:"",
            phoneNumber:"",
            message:"",
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({ [name]: value } as Pick<FormState, keyof FormState>);
  };

  handleSubmit = (event:React.FormEvent) => {
    event.preventDefault();
    const { name, email, password, phoneNumber } = this.state;

    if (!name || !email || !password) {
      this.setState({ message: "Tên sinh viên, Email, Mật khẩu không được để trống" });
      return;
    }

    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((u) => u.email === email)) {
      this.setState({ message: "Email không được phép trùng" });
      return;
    }

    const newUser: User = { name, email, password, phoneNumber };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    this.setState({
      name: "",
      email: "",
      password: "",
      phoneNumber: "",
      message: "Đăng ký tài khoản thành công",
    });

    if (this.nameInputRef.current) {
      this.nameInputRef.current.focus();
    }
  };

  render() {
    return (
      <div style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}>
        <h2>Đăng ký tài khoản</h2>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="">Tên sinh viên</label>
            <br />
          <input
            ref={this.nameInputRef}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Mật khẩu</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="">Số điện thoại</label>
          <br />
          <input
            type="text"
            name="phoneNumber"
            value={this.state.phoneNumber}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <button type="submit" style={{background:'blue',color:'white'}}>Đăng ký</button>
        </form>

        {this.state.message && <p style={{ color: "red" }}>{this.state.message}</p>}
      </div>
    )
  }
}
