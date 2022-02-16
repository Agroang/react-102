// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_usestate.asp //////////////

// React useState Hook ---------------------------------------------------------

// The React useState Hook allows us to track state in a function component.
// State generally refers to data or properites that need to be tracking in an
// application.

// Import useState:

// To use the useState Hook, we first need to import it into our component.

import { useState } from "react";

// Notice that we are destructuring useState from react as it is a named export.

// Initialize useState:

// We initialize our state by calling useState in our function component.
// useState accepts an initial state and returns two values:

// - The current state.
// - A function that updates the state.

import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}

// Notice that again, we are destructuring the returned values from useState.
// The first value, color, is our current state.
// The second value, setColor, is the function that is used to update our state.
// Lastly, we set the initial state to an empty string: useState("")
// You can name the variables whatever you want but often the function to change
// state is called set + name of the var

// Read state:

// Example (Now you can use the state anywhere inside the component):

import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1> // state here
}

ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

// Update state:

// To update our state, we use our state updater function.
// *We should never directly update state.Ex: color = "red" is not allowed.*

// Example (use a button to update state, then trigger the setColor func.):

import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

// What can state hold:

// The useState Hook can be used to keep track of strings, numbers, booleans,
// arrays, objects, and any combination of these!
// We could create multiple state Hooks to track individual values.

// Example (with multiple states):

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

ReactDOM.render(<Car />, document.getElementById('root'));

// Or, we can just use one state and include an object instead!

// Example (above as an object instead of multiple states):

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

ReactDOM.render(<Car />, document.getElementById('root'));

// Updating objects and arrays in state:

// When state is updated, the entire state gets overwritten.
// What if we only want to update the color of our car ?
// If we only called setCar({ color: "blue" }), this would remove the brand,
// model, and year from our state.
// We can use the *JavaScript spread operator* to help us.

// Example (using spread operator to update object):

import { useState } from "react";
import ReactDOM from "react-dom";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => { //important, it uses the prevstate, before it was
      // just something like setCar("Ford"), you pass the new state, but now
      // we need the old values to uodate only what we need
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

ReactDOM.render(<Car />, document.getElementById('root'));

// Because we need the current value of state, we pass a function into our
// setCar function. This function receives the previous value.
// We then return an object, spreading the previousState and overwriting
// only the color.
