// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

//////////////// https://www.w3schools.com/REACT/react_props.asp ///////////////

// React Props -----------------------------------------------------------------

// ** Some content is similar to the React components information **

// Props are arguments passed into React components.
// Props are passed to components via HTML attributes.
// props stand for properties.

// React Props are like function arguments in JavaScript and attributes in HTML.

// To send props into a component, use the same syntax as HTML attributes:

// Add a "brand" attribute to the Car element:

const myelement = <Car brand="Ford" />;

// The component receives the argument as a props object:

// Use the brand attribute in the component:

function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

// Pass Data:

// Props are also how you pass data from one component to another, as
// parameters.

// Send the "brand" property from the Garage component to the Car component:

function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

// If you have a variable to send, and not a string as in the example above, you
// just put the variable name inside curly brackets:

// Create a variable named carName and send it to the Car component:

function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carName} />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

// Or if it was an object:

// Create an object named carInfo and send it to the Car component:

function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

// ** Note: React Props are read-only! You will get an error if you try to
// change their value. **
