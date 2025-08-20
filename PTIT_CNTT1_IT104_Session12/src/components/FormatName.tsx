import { Component } from 'react';

type User = {
    firstName:string,
    lastName:string
}

export default class FormatName extends Component {
  render() {
    const user:User = {firstName : `Nguyễn Văn `, lastName: `A`}
    const formatName = (user:User):string => {
        return user.firstName + user.lastName
    }
    
    return (
      <div>Họ và tên : {formatName(user)}</div>
    )
  }
}
