import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
      <span>Không tìm thấy trang của bạn</span>
      <div>
        <button onClick={() => navigate("/")}>Quay trở về trang chủ</button>
        <button onClick={() => navigate(-1)}>Quay trở về</button>
      </div>
    </div>
  )
}
