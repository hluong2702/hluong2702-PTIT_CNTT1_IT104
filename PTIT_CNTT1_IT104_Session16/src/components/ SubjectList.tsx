import React, { Component } from 'react'


export default class  SubjectList extends Component {
  render() {
    const subjects: string[] = ["Toán","Văn","Anh","Hoá","Sinh"];
    return (
      <div>
      <h2>Danh sách môn học</h2>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
      </div>
    )
  }
}
