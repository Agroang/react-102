// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

//////////////// https://www.w3schools.com/REACT/react_class.asp ///////////////

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

// Props are like function arguments, and you send them into the component as
// attributes.

// Use an attribute to pass a color to the Car component, and use it in the
// render() function:

  class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>; // "I am a red Car!"
  }
}

ReactDOM.render(<Car color="red" />, document.getElementById('root'));

// Props in the Constructor

// If your component has a constructor function, the props should always be
// passed to the constructor and also to the React.Component via the super()
// method.

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

ReactDOM.render(<Car model="Mustang" />, document.getElementById('root'));

// Components in Components:

// We can refer to components inside other components.

// Use the Car component inside the Garage component:

class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));

// Components in Files:

// React is all about re - using code, and it can be smart to insert some of
// your components in separate files.

// To do that, create a new file with a.js file extension and put the code
// inside it.

// Note that the file must start by importing React(as before), and it has to end
// with the statement export default Car;

// This is the new file, we named it Car.js:

import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export default Car;

// Now we import the Car.js file in the application, and we can use the Car
// component as if it was created here.

import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';

ReactDOM.render(<Car />, document.getElementById('root'));

// React Class Component State:

// React Class components have a built -in state object.
// You might have noticed that we used state earlier in the component
// constructor section.
// The state object is where you store property values that belongs to the
// component.
// When the state object changes, the component re - renders.

// Creating the state Object:

// The state object is initialized in the constructor:

// Specify the state object in the constructor method:

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: "Ford" };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

// The state object can contain as many properties as you like:

// Specify all the properties your component need:

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}

// Using the state Object:
