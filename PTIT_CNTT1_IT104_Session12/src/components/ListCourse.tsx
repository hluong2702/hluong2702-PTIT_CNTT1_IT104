import { Component } from 'react';

export default class ListCourse extends Component {
  render() {
    const listCourse = [`HTML`,`CSS`,`JavaScript`,`ReactJS`]
    return (
        <div>
            <h3>Danh sách khoá học</h3>
            <ol>
            {listCourse.map((ele,index) => {
                return <li key={index}>{ele}</li>
            })}
            </ol>
        </div>
        
    )
  }
}
