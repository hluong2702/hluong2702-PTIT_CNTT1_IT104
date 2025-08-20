import { Component } from 'react'

interface Status{
    theme:string,
    language:string,
}

export default class Exercise07 extends Component<object, Status> {
    constructor(props:object){
        super(props)
        this.state = {
            theme:`light`,
            language:`english`
        }
    }

    changeStatus = () => {
        this.setState(state => ({
            theme:state.theme === `light` ? `dark` : `light`,
            language:state.language === `english` ? `vietnamese` : `english`
        }))
    }
  render() {
    return (
      <div style={{backgroundColor:this.state.theme === `light` ? `#ffffff` : `#333333`, color: this.state.theme === `light` ? `#000000` : `#ffffff`}}>
        <h1>Nền : {this.state.theme === `light` ? `Sáng` : `Tối`}</h1>
        <h1>Ngôn ngữ : {this.state.language === `english` ? `Tiếng Anh` : `Tiếng Việt`}</h1>
        <button onClick={this.changeStatus}>Change Status</button>
      </div>
    )
  }
}