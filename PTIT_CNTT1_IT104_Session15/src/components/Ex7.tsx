import { Component } from "react";

interface Clock {
  second: number;
  minute: number;
  hour: number;
}

export default class Ex7 extends Component<object, Clock> {
  private intervalId: NodeJS.Timeout | null = null;
  constructor(props: object) {
    super(props);
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
    };
  }

  private updateTime = () => {
    const currentTime = new Date();
    this.setState({
      hour: currentTime.getHours(),
      minute: currentTime.getMinutes(),
      second: currentTime.getSeconds(),
    });
  };

  private startClock = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!this.intervalId) {
      this.updateTime();
      this.intervalId = setInterval(this.updateTime, 1000);
    }
  };

  private stopClock = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.setState({ hour: 0, minute: 0, second: 0 });
    }
  };

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  render() {
    const { hour, minute, second } = this.state;
    return (
      <div>
        Thời gian hiện tại: {hour < 10 ? `0${hour}` : hour} : {minute < 10 ? `0${minute}` : minute} : {second < 10 ? `0${second}` : second}
        <div>
          <button onClick={this.startClock}>Start</button>
          <button onClick={this.stopClock}>Stop</button>
        </div>
      </div>
    );
  }
}