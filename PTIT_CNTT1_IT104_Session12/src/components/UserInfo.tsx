import React, { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    const user = {name:`Nguyễn Văn A`,gender:`Nam`,dateBirth:`06/03/2024`,email:`nva@gmail.com`,address:`Thanh Xuân, Hà Nội`}
    return (
      <React.Fragment>
        <h3>Thông tin cá nhân</h3>
        <ul>
            <li>Họ và tên : {user.name}</li>
            <li>Giới tính : {user.gender}</li>
            <li>Ngày sinh : {user.dateBirth}</li>
            <li>Email : {user.email}</li>
            <li>Địa chỉ : {user.address}</li>
        </ul>
      </React.Fragment>
    )
  }
}
