import { Component } from 'react';

export default class Calculation extends Component {
  render() {
    return (
      <div>
            <h3>Danh sách kết quả</h3>
            <ul>
                <li>10 + 10 = {10+10}</li>
                <li>10 - 10 = {10-10}</li>
                <li>10 * 10 = {10*10}</li>
                <li>10 / 10 = {10/10}</li>
            </ul>
      </div>
    )
  }
}
