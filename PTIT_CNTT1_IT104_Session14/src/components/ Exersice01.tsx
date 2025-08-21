import React, { Component } from 'react'

interface Exercises01{
    userName:string;
}

export default class  Exersice01 extends Component<object,Exercises01> {
    constructor(props:object){
        super(props);

        this.state = {
            userName:"Hoang Luong",
        }
    };
  render() {
    return (
      <div>Xin chào tôi là {this.state.userName}</div>
    )
  }
}
