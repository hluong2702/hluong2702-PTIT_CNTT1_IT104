import { Component } from "react";

interface Email {
  date: string;
  isSubmitted: boolean;
}

export default class Ex3 extends Component<object, Email> {
  constructor(props: object) {
    super(props);
    this.state = {
      date: new Date().toISOString().split("T")[0],
      isSubmitted: false,
    };
  }

  private handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      date: event.target.value,
      isSubmitted: false,
    });
  };

  private handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (this.state.date) {
      this.setState({ isSubmitted: true });
    }
  };

  render() {
    const { date, isSubmitted } = this.state;
    return (
      <form>
        <div>
          <label>
            Date: {isSubmitted && date ? date : ""}
          </label>
        </div>
        <input
          type="date"
          value={date}
          onChange={this.handleDateChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}