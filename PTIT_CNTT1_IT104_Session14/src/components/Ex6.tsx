import React, { Component, type ChangeEvent, type FormEvent } from 'react'

interface FormState {
  gender: string;
}

export default class Ex6 extends Component<object, FormState> {
  constructor(props: object) {
    super(props);

    this.state = {
      gender: "",
    }
  }

  handleChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      gender: event.target.value,
    })
  }

  submit = (event: FormEvent) => {
    event.preventDefault();
    console.log(this.state.gender);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <h2>Giới tính:</h2>

          <label>
            <input
              type="radio"
              name="gender"
              value="Nam"
              checked={this.state.gender === "Nam"}
              onChange={this.handleChangeGender}
            />
            Nam
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Nữ"
              checked={this.state.gender === "Nữ"}
              onChange={this.handleChangeGender}
            />
            Nữ
          </label>
          <br />

          <label>
            <input
              type="radio"
              name="gender"
              value="Khác"
              checked={this.state.gender === "Khác"}
              onChange={this.handleChangeGender}
            />
            Khác
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
