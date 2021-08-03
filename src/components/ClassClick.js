import React, { Component } from 'react';

class ClassClick extends Component {
  clickMe() {
    console.log('class click');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickMe}>Class Click</button>
      </div>
    );
  }
}

export default ClassClick;
