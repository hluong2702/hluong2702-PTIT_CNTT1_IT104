import React, { Component } from 'react'

interface String{
    name:string;
}

export default class React1 extends Component<object,String> {
    constructor(props:object){
        super(props);

        this.state = {
            name:"Company:Rikkei Academy"
        }
    }

    handleChangeName = () =>{
        this.setState((prev)=>({
            name:prev.name === "Company:Rikkei Academy" ? "Company RikkeiSoft" : "Company:Rikkei Academy"
        }))
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleChangeName}>Change state</button>
      </div>
    )
  }
}
