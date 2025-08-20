import React, { Component } from 'react'

interface Users{
    id:number;
    name:string;
    age:number;
}

export default class Exercise03 extends Component<object,Users[]> {
    constructor(props:object){
        super(props);
        this.state = [
            {id:1,name:"bibabibo",age:18},
            {id:2,name:"bibo",age:18},
            {id:3,name:"pikachu",age:18}
        ]
    }
  render() {
    return (
      <table border= "1px solid black" style={{tableLayout: "fixed", borderCollapse: "collapse"}}>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
        {this.state.map(users => 
            <tr>
                <td>{users.id}</td>
                <td>{users.name}</td>
                <td>{users.age}</td>
            </tr>
        )}
      </table>
    )
  }
}
