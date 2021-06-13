import React from "react";

export class ClassStateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  increase() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <div> Class State Components</div>
        <div>
          <button onClick={() => this.increase()}>Increase</button>
        </div>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}
