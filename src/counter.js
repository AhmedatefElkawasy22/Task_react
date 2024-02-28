import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      errorMessage: " ",
    };
  }
  handleIncrease() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ errorMessage: " " });
  }
  handleGoToZero() {
    this.setState({ count: 0 });
  }
  handleDecrease() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ errorMessage: "Cannot be less than 0" });
    }
  }
  render() {
    return (
      <div className="flex flex-column items-center">
        <p >{this.state.errorMessage}</p>
        <p className="text-center f-10xl">{this.state.count}</p>
        <div className="flex gap-sm flex-row justify-content-center">
          <button onClick={this.handleIncrease.bind(this)}>Increase</button>
          <button onClick={this.handleDecrease.bind(this)}>Decrease</button>
          <button onClick={this.handleGoToZero.bind(this)}> go to Zero</button>
        </div>
      </div>
    );
  }
}
