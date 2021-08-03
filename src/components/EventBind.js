import React, { Component } from 'react';

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hello'
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   this.setState({
  //     message: 'Good Bye'
  //   });
  //   console.log(this);
  // }

  clickHandler = () => {
    this.setState({
      message: 'Good Bye'
    });
  };

  render() {
    return (
      <h1>
        <p>{this.state.message}</p>
        {/* first Approach */}
        {/* <button onClick={this.clickHandler.bind()}>Click</button> */}
        {/* 2nd Approach */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* 3rd and best Approach */}
        <button onClick={this.clickHandler}>Click</button>
      </h1>
    );
  }
}

export default EventBind;
