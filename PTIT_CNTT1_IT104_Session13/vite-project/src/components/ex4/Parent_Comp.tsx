import React, { Component } from 'react'
import Children_Comp from './Children_Comp';

interface ParentComp {
  name: string;
}

export default class Parent_Comp extends Component<object, ParentComp> {
  constructor(props: object) {
    super(props);
    this.state = {
      name: "bibabibo",
    };
  }

  render() {
    return (
      <div>
        <h1>Họ và tên bên component cha: {this.state.name}</h1>
        <Children_Comp name={this.state.name} />
      </div>
    );
  }
}
