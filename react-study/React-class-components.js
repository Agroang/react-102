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

// Refer to the state object anywhere in the component by using the
// this.state.propertyname syntax:

// Refer to the state object in the render() method:

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
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}

// Changing the state Object:

// To change a value in the state object, use the this.setState() method.

// When a value in the state object changes, the component will re-render,
// meaning that the output will change according to the new value(s).

// Add a button with an onClick event that will change the color property:

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
  changeColor = () => {
    this.setState({ color: "blue" });
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button
          type="button"
          onClick={this.changeColor} // on click the color property changes
        >Change color</button>
      </div>
    );
  }
}

// ** Always use the setState() method to change the state object, it will
// ensure that the component knows its been updated and calls the render()
// method (and all the other lifecycle methods). **

// Lifecycle of Components:

// Each component in React has a lifecycle which you can monitor and manipulate
// during its three main phases.

// The three phases are: Mounting, Updating, and Unmounting.

// Mounting:

// Mounting means putting elements into the DOM.
// React has four built -in methods that gets called, in this order, when
// mounting a component:

constructor()
getDerivedStateFromProps()
render()
componentDidMount()

// The render() method is required and will always be called, the others are
// optional and will be called if you define them.

// constructor:

// The constructor() method is called before anything else, when the component
// is initiated, and it is the natural place to set up the initial state and
// other initial values.

// The constructor() method is called with the props, as arguments, and you
// should always start by calling the super(props) before anything else, this
// will initiate the parent's constructor method and allows the component to
// inherit methods from its parent (React.Component).

// The constructor method is called, by React, every time you make a component:

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));

// getDerivedStateFromProps:

// The getDerivedStateFromProps() method is called right before rendering the
// element(s) in the DOM.
// This is the natural place to set the state object based on the initial props.
// It takes state as an argument, and returns an object with changes to the
// state.

// The example below starts with the favorite color being "red", but the
// getDerivedStateFromProps() method updates the favorite color based on the
// favcol attribute:

// The getDerivedStateFromProps method is called right before the render method:

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    ); // "My Favorito Color is yellow"
  }
}

ReactDOM.render(<Header favcol="yellow" />, document.getElementById('root'));

// render:

// The render() method is required, and is the method that actually outputs the
// HTML to the DOM.

// A simple component with a simple render() method:

class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));

// componentDidMount:

// The componentDidMount() method is called after the component is rendered.
// This is where you run statements that requires that the component is already
// placed in the DOM.

// At first my favorite color is red, but give me a second, and it is yellow
// instead: (changes in 1 second from red to yellow)

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" })
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));
