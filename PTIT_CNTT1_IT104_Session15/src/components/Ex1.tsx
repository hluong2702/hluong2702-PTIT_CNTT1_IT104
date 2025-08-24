import React, { Component, type ChangeEvent } from 'react'

interface EmailState{
    email:string;
}

export default class Ex1 extends Component<object,EmailState> {
    constructor(props:object){
        super(props);

        this.state = {
            email:"",
        }
    }

    handleChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            email:event.target.value
        })

    }

    handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();

        const showEmail = {
            email:this.state.email,
        };

        console.log(showEmail);
    }
  render() {
    return (
      <div>
        <h3>Form</h3>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Email: </label>
        <input
        value={this.state.email}
        onChange={this.handleChangeEmail} 
        type="email" />
        <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
