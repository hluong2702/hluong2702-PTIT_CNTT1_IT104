import { Component } from "react";
interface Count {
  count: number;
  isRun: boolean;
}
export default class Ex8 extends Component<object, Count> {
  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
      isRun: false,
    };
  }
  start() {
    this.setState({
      isRun: true,
    });

    setInterval(
      () =>
        this.setState({
          count: this.state.count + 1,
        }),
      1000
    );
  }

  reset() {
    this.setState({ count: 0 });
  }

  componentDidMount(): void {
    this.start();
  }

  componentDidUpdate(): void {
    if (this.state.count > 10) {
      this.reset();
    }
  }

  render() {
    return (
      <div>
        <span>
          {this.state.isRun === true ? (
            <>Count: {this.state.count}</>
          ) : (
            <>Count: 0</>
          )}
        </span>
      </div>
    );
  }
}