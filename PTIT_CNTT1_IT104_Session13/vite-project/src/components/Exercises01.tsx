import React, { Component } from 'react'

interface Name{
    name:string;
}

export default class Exercises01 extends Component<object,Name> {
    constructor(props:object){
        super(props);
        this.state = {
            name : "bibabibo",
        };
    }
  render() {
    return (
      <div>
        <h1>Họ và tên:{this.state.name}</h1>
      </div>
    )
  }
}
