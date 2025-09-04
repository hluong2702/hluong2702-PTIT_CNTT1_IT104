import React from 'react'

export default function Ex5() {
  return (
    <>
      <div className="alert alert-success alert-dismissible">Thêm tài khoản mới thành công<button className="btn-close"></button></div>
      <div className="alert alert-danger alert-dismissible">Thêm tài khoản mới thất bại<button className="btn-close"></button></div>
      <div className="alert alert-warning alert-dismissible">Tên không được để trống<button className="btn-close"></button></div>
    </>
  )
}
