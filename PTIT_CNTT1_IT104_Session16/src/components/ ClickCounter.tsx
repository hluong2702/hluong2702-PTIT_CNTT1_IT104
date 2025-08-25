import React, { Component } from 'react'

interface Click{
    count:number;
}

export default class  ClickCounter extends Component<object,Click> {
    constructor(props:object){
        super(props);

        this.state = {
            count : 0,
        }
    }

    handleClick = () => {
        this.setState((prev) => ({
        count: prev.count + 1,
        }))
    }
  render() {
    const {count} = this.state;
    return (
      <div>
        <p>So lan click : {count}</p>
        <button onClick={this.handleClick}>
            Click Me
        </button>
      </div>
    )
  }
}
