// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_hooks.asp /////////////////

// React Hooks -----------------------------------------------------------------

// Hooks were added to React in version 16.8.
// Hooks allow function components to have access to state and other React
// features.Because of this, class components are generally no longer needed.
// Although Hooks generally replace class components, there are no plans to
// remove classes from React.

// What is a Hook?

// Hooks allow us to "hook" into React features such as state and lifecycle
// methods.

// Example (useState hook):

import React, { useState } from "react";
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
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

// You MUST import Hooks from react.
// Above we are using the useState Hook to keep track of the application state.
// State generally refers to application data or properties that need to be
// tracked.

// Hook rules:

// - Hooks can only be called inside React function components.
// - Hooks can only be called at the top level of a component.
// - Hooks cannot be conditional

// *Hooks will not work in React class components.*

// Custom hooks:

// If you have stateful logic that needs to be reused in several components,
// you can build your own custom Hooks.

// *useState & useEffect will be 99% of all the hooks you need, so don't bother
// with custom hooks unless needed*
