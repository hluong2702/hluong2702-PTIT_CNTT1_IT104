import { Component } from 'react'
import Children_Comp from '../ex5/Children_Comp'

interface Product{
    id:number,
    name:string,
    price:number,
    quantity:number
}


export default class Parent_Comp extends Component {
  render() {
    const product:Product = {
        id:1,
        name: `Bưởi ba roi`,
        price:12000,
        quantity:6
    }
    return (
      <Children_Comp product={product}/>
    )
  }
}