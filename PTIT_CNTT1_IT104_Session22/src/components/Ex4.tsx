import React from 'react'

export default function Ex4() {
  return (
    <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Nguyễn Văn Nam
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              Cài đặt
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Đổi mật khẩu
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Đăng xuất
            </a>
          </li>
        </ul>
      </div>
  )
}
