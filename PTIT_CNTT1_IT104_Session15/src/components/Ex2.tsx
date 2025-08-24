import { Component } from "react";
interface Email {
  color: string;
  isSubmitted: boolean;
}
export default class Ex2 extends Component<object, Email> {
  constructor(props: object) {
    super(props);
    this.state = {
      color: "#FFFFFF",
      isSubmitted: false,
    };
  }
  render() {
    const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({ isSubmitted: false, color: event.target.value });
    };
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      this.setState({ isSubmitted: true });
    };
    return (
      <form>
        <div>
          <label>{this.state.isSubmitted === true ? <>Color: {this.state.color}</> : <>Color: </>}</label>
        </div>
        <input
          type="color"
          value={this.state.color}
          onChange={handleColor}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    );
  }
}