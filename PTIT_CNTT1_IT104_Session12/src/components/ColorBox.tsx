import { Component } from 'react';
import "../styles/ColorBox.css"
export default class ColorBox extends Component {
  render() {
    return (
      <div className='container'>
        <div className='box1'>Box 1</div>
        <div className='box2'>Box 2</div>
        <div className='box3'>Box 3</div>
      </div>
    )
  }
}
