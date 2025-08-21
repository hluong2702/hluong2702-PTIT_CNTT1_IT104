import React, { Component } from 'react'

interface String{
    name:string;
}

export default class Ex04 extends Component<object,String> {
    constructor(props:object){
        super(props);

        this.state = {
            name:"Solagan: Học code để đi làm"
        }
    }

    handlechangeName = () =>{
        this.setState ({name:"Học code sẽ thành công.Cố lên!"})
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handlechangeName}>Change state</button>
      </div>
    )
  }
}
