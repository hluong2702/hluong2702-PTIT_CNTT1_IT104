import React, { Component } from 'react'

interface FormState{
    productCode:string;
    productName:string;
    price:number;
    quantity:number;
}

export default class Form extends Component<object,FormState> {
    constructor(props:object){
        super(props);

        this.state = {
            productCode : "",
            productName : "",
            price: 0,
            quantity : 0,
        }

    }
  render() {
    const handleChangeProductCode = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            productCode:event.target.value,
        })

    }

    const handleChangeProductName = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            productName:event.target.value,
        })

    }

    const handleChangePrice = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            price:Number(event.target.value)
        })

    }

    const handleChangeQuantity = (event:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            quantity:Number(event.target.value)
        })
    }

    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        const Infor = {
            productCode:this.state.productCode,
            productName:this.state.productName,
            price:this.state.price,
            quantity:this.state.quantity
        }

        console.log(Infor);
    }
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Mã sản phẩm</label>
                <br />
                <input 
                type="text" 
                value={this.state.productCode}
                onChange={handleChangeProductCode}
                />
            </div>
            <div>
                <label htmlFor="">Tên sản phẩm</label>
                <br />
                <input 
                type="text" 
                value={this.state.productName}
                onChange={handleChangeProductName}
                />
            </div>
            <div>
                <label htmlFor="">Giá</label>
                <br />
                <input 
                value={this.state.price}
                onChange={handleChangePrice}
                type="text" />
            </div>
            <div>
                <label htmlFor="">Số lượng</label>
                <br />
                <input
                value={this.state.quantity} 
                onChange={handleChangeQuantity}
                type="number" />
            </div>
            <br />
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
      </div>
    )
  }
}
