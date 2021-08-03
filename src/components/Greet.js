import React from 'react';

// function Greet() {
//   return <h1>Hello shivashankara</h1>;
// }

// arrow function
const Greet = props => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
