// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_forms.asp /////////////////

// React forms -----------------------------------------------------------------

// Adding Forms in React
// You add a form with React like any other element:

// Example (with problems):

function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
ReactDOM.render(<MyForm />, document.getElementById('root'));

// Problems with the above example:
// This will work as normal, the form will submit and the page will refresh.
// But this is generally not what we want to happen in React.
// We want to prevent this default behavior and let React control the form.

// Handling forms in React:

// Handling forms is about how you handle the data when it changes value or gets
// submitted.
// In HTML, form data is usually handled by the DOM.
// In React, form data is usually handled by the components.
// When the data is handled by the components, all the data is stored in the
// component state.
// You can control changes by adding event handlers in the onChange attribute.
// We can use the useState Hook to keep track of each inputs value and provide
// a "single source of truth" for the entire application.

// Example (using onChange to manage input):

import { useState } from "react";
import ReactDOM from 'react-dom';

function MyForm() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

// Submitting forms:

// You can control the submit action by adding an event handler in the
// onSubmit attribute for the <form>:

// Example (using onSubmit):

import { useState } from "react";
import ReactDOM from 'react-dom';

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

// Multiple input fields

// You can control the values of more than one input field by adding a name
// attribute to each element.
// We will initialize our state with an empty object.
// To access the fields in the event handler use the event.target.name and
// event.target.value syntax.
// To update the state, use square brackets[bracket notation] around the
// property name.

// Example (handling more than 1 input):

import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>Enter your age:
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

// *We use the same event handler function for both input fields, we could write
// one event handler for each, but this gives us much cleaner code and is the
// preferred way in React.*

// Textarea:

// The textarea element in React is slightly different from ordinary HTML.
// In HTML the value of a textarea was the text between the start tag
// < textarea > and the end tag </textarea >.

<textarea>
  Content of the textarea.
</textarea>

// In React the value of a textarea is placed in a value attribute. We'll use
// the useState Hook to mange the value of the textarea.

// Example (form textarea):

import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));

// Select:

// A drop down list, or a select box, in React is also a bit different from HTML.
// In HTML, the selected value in the drop down list was defined with the
// selected attribute.

// HTML version:

<select>
  <option value="Ford">Ford</option>
  <option value="Volvo" selected>Volvo</option>
  <option value="Fiat">Fiat</option>
</select>

// In React, the selected value is defined with a value attribute on the select
// tag.

// Example (Select's React version):

function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
