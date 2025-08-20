import { Component } from 'react'

interface Post{
    id:number,
    title:string,
    content:string,
    author:string,
}

interface Props{
    post:Post[];
}

export default class DetailPost extends Component<Props> {
  render() {
    return (
      <>
        {this.props.post.map((element) => {
            return <div key={element.id}>
                <p>Id: {element.id}</p>
                <p>Title : {element.title}</p>
                <p>Content : {element.content}</p>
                <p>Author : {element.author}</p>
                <hr />
            </div>
            
        })}
      </>
    )
  }
}