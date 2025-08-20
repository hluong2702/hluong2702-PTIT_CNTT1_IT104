import React, { Component } from 'react'
import "../styles/AdminIndex.css"
export default class AdminIndex extends Component {
  render() {
    return (
      <React.Fragment>
        <header>Header</header>
        <div className="container">
            <div className="menu">Menu</div>
            <div className="right">
                <main>Main</main>
                <footer>Footer</footer>
            </div>
        </div>
      </React.Fragment>
    )
  }
}
