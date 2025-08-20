import React, { Component } from 'react'

interface ChildrenComp{
    name:string;
}

export default class Children_Comp extends Component<ChildrenComp> {
  render() {
    const {name} = this.props;
    return (
      <h1>Họ và tên bên component con: {name}</h1>
    )
  }
}
