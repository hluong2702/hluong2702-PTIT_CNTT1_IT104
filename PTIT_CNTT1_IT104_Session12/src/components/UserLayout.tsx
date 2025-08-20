import React, { Component } from 'react'
import "../styles/UserLayout.css"
export default class UserLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <header>Header</header>
        <nav>Navigation</nav>
        <div className="container">
            <div className='menu'>Menu</div>
            <div className="carts">
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
                <div className="cart">Cart</div>
            </div>
            <article>Article</article>
        </div>
      </React.Fragment>
    )
  }
}
