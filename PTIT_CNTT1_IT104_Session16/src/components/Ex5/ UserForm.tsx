import { Component } from "react";
import "./ UserForm.css";
interface Product {
  name: string;
  email: string;
  age: number;
}
export default class SubmitForm extends Component<object, Product> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: 0,
    };
  }
  render() {
    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ name: event.target.value });
    };
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ email: event.target.value });
    };
    const handleAge = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ age: +event.target.value });
    };
    const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if(!this.state.email.endsWith(".com") || !this.state.email.includes("@")){
        alert("Email không đúng định dạng!");
      }else{
        alert("tài khoản hợp lệ");
      }
    };
    const reset = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      this.setState({ name: "", email: "", age: 0 });
    };
    return (
      <form className="form">
        <h2>Đăng ký tài khoản</h2>
        <div className="input">
          <label>Tên sinh viên</label>
          <input
            type="text"
            value={this.state.name}
            onChange={handleName}
          ></input>
        </div>
        <div className="input">
          <label>Email</label>
          <input
            type="text"
            value={this.state.email}
            onChange={handleEmail}
          ></input>
        </div>
        <div className="input">
          <label>Tuổi</label>
          <input
            type="number"
            value={this.state.age}
            onChange={handleAge}
          ></input>
        </div>
        <div className="btn">
          <button type="submit" onClick={handleChange}>
            Gửi
          </button>
          <button onClick={reset}>Xóa tất cả</button>
        </div>
      </form>
    );
  }
}