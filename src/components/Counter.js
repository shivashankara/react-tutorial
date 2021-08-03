import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => console.log('Call back value', this.state.count)
    // );

    this.setState((previousState, props) => ({
      count: previousState.count + 1
    }));
    console.log(this.state.count);
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment Five</button>
      </div>
    );
  }
}

export default Counter;
