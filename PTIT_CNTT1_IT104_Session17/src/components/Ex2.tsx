
import React from 'react'
interface Product {
    id: number,
    name: string,
    price: number,
    quantity: number,
}
export default function Bai2({id, name, price, quantity}: Product) {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
        <h2>Thông tin sản phẩm</h2>
        <span>Id: {id}</span>
        <span>Name: {name}</span>
        <span>Price: {price} $</span>
        <span>Quantity: {quantity}</span>
    </div>
  )
}
