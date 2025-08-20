import { Component } from 'react'
import DetailPost from "./DetailPost"

interface Post{
    id:number,
    title:string,
    content:string,
    author:string,
}
export default class ListPost extends Component {
  render() {
    const posts:Post[] = [
        {
            id:1,
            title:`Tại sao nên học ReactJS`,
            content:`Học React để đi làm`,
            author:`David`
        },
        {
            id:2,
            title:`Props trong ReactJS`,
            content:`Props giúp truyền dữ liệu từ component cha xuống component con`,
            author:`Linda`
        },
        {
            id:3,
            title:`State trong ReactJS là gì`,
            content:`State giúp giữ trạng thái dữ liệu bên trong một component`,
            author:`David`
        }
    ]
    
    return (
      <div><DetailPost post={posts}/></div>
    )
  }
}
