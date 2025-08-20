import React, { Component } from 'react'

interface Infor{
    id:number;
    name:string;
    dateOfBirth:string;
    address:string;
}

export default class Exercise02 extends Component<object,Infor> {
    constructor(props:object){
        super(props);
        this.state = {
            id:1,
            name:"bibabibo",
            dateOfBirth:"2006-27-02",
            address:"Ha Noi"
        }
    }
  render() {
    return (
      <div style={{display:"flex", flexDirection: "column"}}>
        <h2>Thông tin cá nhân</h2>
        <span>id:{this.state.id}</span>
        <span>Tên:{this.state.name}</span>
        <span>Ngày sinh:{this.state.dateOfBirth}</span>
        <span>Địa chỉ:{this.state.address}</span>
      </div>
    )
  }
}
