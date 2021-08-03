import React, { Component } from 'react';

import ChildComponent from './ChildComponent';

class ParentComponet extends Component {
  constructor() {
    super();
    this.state = {
      parentName: 'Parent'
    };
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }
  render() {
    return (
      // <h1>
      //   <button onClick={this.greetParent}>Click</button>
      // </h1>
      <ChildComponent greetHandler={this.greetParent} />
    );
  }
}

export default ParentComponet;
