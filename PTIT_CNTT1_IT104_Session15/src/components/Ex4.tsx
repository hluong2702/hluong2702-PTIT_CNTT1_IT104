import { Component } from "react";
interface Email{
    range: number,
    isSubmitted: boolean,
}
export default class Ex4 extends Component<object, Email> {
    constructor(props: object){
        super(props);
        this.state = {
            range: 0,
            isSubmitted: false,
        }
    }
  render() {
    const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({isSubmitted: false,range: +event.target.value});
    }
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        this.setState({isSubmitted: true});
    }
    return (
      <form>
        <div>
        <label>{this.state.isSubmitted === true ? <>Tiến độ hoàn thành: {this.state.range}%</> : <>Tiến độ hoàn thành: </>}</label>
        </div>
        <input type="range" value={this.state.range} onChange={handleColor}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}