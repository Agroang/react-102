// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_css_styling.asp ///////////

// React CSS styling -----------------------------------------------------------

// There are many ways to style React with CSS, the most three common ways are:

// Inline styling
// CSS stylesheets
// CSS Modules

// Inline styling:

// Example (style an element with the inline style attribute, the value must be
// a JavaScript object:)

const Header = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

// *In JSX, JavaScript expressions are written inside curly braces, and since
// JavaScript objects also use curly braces, the styling in the example above is
// written inside two sets of curly braces {{}}*

// camelCased property names:

// Since the inline CSS is written in a JavaScript object, properties with
// hyphen separators, like background - color, must be written with camel case
// syntax.

// Example (Use backgroundColor instead of background-color):

const Header = () => {
  return (
    <>
      <h1 style={{ backgroundColor: "lightblue" }}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

// JS object:

// You can also create an object with styling information, and refer to it in
// the style attribute.

// Example (Crate a style object named myStyle):

const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

// CSS stylesheet:

// You can also use .css files to style your React components.

// Example (styling App.js by creating an App.css file and style there):

// body {
//   background - color: #282c34;
//   color: white;
//   padding: 40px;
//   font - family: Sans - Serif;
//   text - align: center;
// }

// *You can name the file whatever you want, just remember that it has to be
// a .css file and that it has to be imported to be used.

// Example on index.js:

import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

ReactDOM.render(<Header />, document.getElementById('root'));

// CSS modules:

// CSS Modules are convenient for components that are placed in separate files.
// * The CSS inside a module is available only for the component that imported
// it, and you do not have to worry about name conflicts.*

// Create the CSS module with the .module.css extension,
// example: my-style.module.css.

// .bigblue {
//   color: DodgerBlue;
//   padding: 40px;
//   font - family: Sans - Serif;
//   text - align: center;
// }

import styles from './my-style.module.css';

const Car = () => {
  return <h1 className={styles.bigblue}>Hello Car!</h1>;
}

export default Car;
