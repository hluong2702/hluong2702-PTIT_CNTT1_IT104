import React, { Component } from 'react'
import "./LoginStatus.css"

interface Login{
    isLoggedIn: boolean;
}

export default class LoginStatus extends Component<object,Login> {
    constructor(props:object){
        super(props);

        this.state = {
            isLoggedIn:false,
        }
    }

    handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.setState({isLoggedIn: !this.state.isLoggedIn})

    }
  render() {
    return (
      <div className="login-container">
        <h2>{this.state.isLoggedIn ? 'Xin chào, User' : 'Vui lòng đăng nhập để tiếp tục'}</h2>
        <button id="btn" onClick={this.handleChange}>
          {this.state.isLoggedIn ? 'Đăng xuất' : 'Đăng nhập'}
        </button>
      </div>
    )
  }
}
