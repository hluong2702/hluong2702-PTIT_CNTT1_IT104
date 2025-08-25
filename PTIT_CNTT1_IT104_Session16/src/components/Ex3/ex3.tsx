import React, { Component } from 'react'
import "./ex3.css"

export default class Ex3 extends Component {
  render() {
    return (
      <div>
        <button className='Primary'>Primary</button>
        <button className='Secondary'>Secondary</button>
        <button className='Success'>Success</button>
        <button className='Warning'>Warning</button>
        <button className='Danger'>Danger</button>
        <button className='Infor'>Infor</button>
        <button className='Light'>Light</button>
        <button className='Dark'>Dark</button>
        <button className='Link'>
            <a href="">Link</a>
        </button>
      </div>
    )
  }
}
