// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_components.asp ////////////

// React Class Components ------------------------------------------------------

// ** NOT VERY USED NOWADAYS, prefer to use function components **
// ** Similar information already present in React-component.js **

// Before React 16.8, Class components were the only way to track state and
// lifecycle on a React component. Function components were considered
// "state-less".

// With the addition of Hooks, Function components are now almost equivalent to
// Class components.The differences are so minor that you will probably never
// need to use a Class component in React.

// Even though Function components are preferred, there are no current plans on
// removing Class components from React.

// Create a Class component called Car

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

// Display the Car component in the "root" element:

ReactDOM.render(<Car />, document.getElementById('root'));

// Component Constructor:

// If there is a constructor() function in your component, this function will be
// called when the component gets initiated.

// The constructor function is where you initiate the component's properties.

// In React, component properties should be kept in an object called state.

// The constructor function is also where you honor the inheritance of the
// parent component by including the super() statement, which executes the
// parent component's constructor function, and your component has access to all
// the functions of the parent component (React.Component).

// Create a constructor function in the Car component, and add a color property:

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

// Use the color property in the render() function:

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>; // "I am a red Car!"
  }
}

// Props
