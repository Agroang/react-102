// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_components.asp ////////////

// React Components ------------------------------------------------------------

// Components are like functions that return HTML elements.

// React Components:

// Components are independent and reusable bits of code.They serve the same
// purpose as JavaScript functions, but work in isolation and return HTML.

// Components come in two types, Class components and Function components.

// In older React code bases, you may find Class components primarily used. It
// is now suggested to use Function components along with Hooks, which were
// added in React 16.8.There is an optional section on Class components for your
// reference.


// When creating a React component, the component's name MUST start with an
// upper case letter.

// Class Component: (mostly before React 16.8)

// A class component must include the extends React.Component statement. This
// statement creates an inheritance to React.Component, and gives your component
// access to React.Component's functions.

// The component also requires a render() method, this method returns HTML.

// Create a Class component called Car:

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

// Function Component (modern way of making components):

// A Function component also returns HTML, and behaves much the same way as a
// Class component, but Function components can be written using much less code,
// and are easier to understand.

// Create a Function component called Car (same as example above)

function Car() {
  return <h2>Hi, I am a Car!</h2>;
}

// Rendering a Component:

// You can render your component with a similar syntax to HTML:

<Car />

// Props:

// Props stands for properties.
// Props are like function arguments, and you send them into the component as
// attributes. You pass them when rendering the component and the function
// definition will be able to pick up those props with the same name that
// you called them when passing them on the rendering.

// Use an attribute to pass a color to the Car component, and use it in the
// render() function:

function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

ReactDOM.render(<Car color="red" />, document.getElementById('root'));
