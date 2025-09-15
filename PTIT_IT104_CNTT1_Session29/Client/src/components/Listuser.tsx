import React from 'react'

export default function Listuser() {
  return (
    <div>
      <h3>Danh sách người dùng</h3>
      <table border="1px solid">
        <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Ngày sinh</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Chúc năng</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td>36/36/3636</td>
                <td>nva36@gmail.com</td>
                <td>số nhà 36, ngõ 36</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                    </td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
