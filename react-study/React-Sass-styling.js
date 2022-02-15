// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_sass_styling.asp //////////

// React Sass styling ----------------------------------------------------------

// What is Sass:

// Sass is a CSS pre-processor.
// Sass files are executed on the server and sends CSS to the browser.

// Can I use Sass with React?

// If you use the create-react-app in your project, you can easily install and
// use Sass in your React projects.
// Install Sass by running this command in your terminal:

// npm i sass

// Create a Sass file:

// Sass files have a .scss extension.
// In Sass files you can use variables and other Sass functions.

// Example (my-sass.scss):

// $myColor: red;

// h1 {
//   color: $myColor;
// }

// Importing Sass files:

import React from 'react';
import ReactDOM from 'react-dom';
import './my-sass.scss';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

ReactDOM.render(<Header />, document.getElementById('root'));
