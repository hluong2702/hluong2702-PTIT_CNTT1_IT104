import React, { Component } from 'react'
import "../styles/PTIT_CNTT1_IT104_Session12_Bai8.css"
export default class PTIT_CNTT1_IT104_Session12_Bai8 extends Component {
  render() {
    const user = [
        {
            name:`Malcolm Lockyer`,
            dateBirth:`21/03/1961`,
            gender:`Nam`,
            address:`New york`
        },
        {
            name:`Maria`,
            dateBirth:`11/02/1990`,
            gender:`Nữ`,
            address:`London`
        }
    ]
    return (
      <React.Fragment>
        <table>
          <thead>
              <tr>
                <th>STT</th>
                <th>Họ và Tên</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Địa chỉ</th>
                <th>Hành động</th>
              </tr>
          </thead>
          <tbody>
            {user.map((ele,index) => {
              return <tr>
                  <td>{index+1}</td>
                  <td>{ele.name}</td>
                  <td>{ele.dateBirth}</td>
                  <td>{ele.gender}</td>
                  <td>{ele.address}</td>
                  <td>
                      <button className="edit">Sửa</button>
                      <button className="delete">Xoá</button>
                  </td>
              </tr> 
          })}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}
