import { Component } from 'react'

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Props{
    product:Product
}

export default class Children_Comp extends Component<Props> {
  render() {
    return (
      <div>
        <h1>Dữ liệu trong component con</h1>
        <p>Id: {this.props.product.id}</p>
        <p>Tên: {this.props.product.name}</p>
        <p>Giá: {this.props.product.price.toLocaleString()} VNĐ</p>
        <p>Số lượng: {this.props.product.quantity}</p>
      </div>
    )
  }
}