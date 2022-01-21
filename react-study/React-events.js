// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

/////////////// https://www.w3schools.com/REACT/react_events.asp ///////////////

// React Events ----------------------------------------------------------------

// Just like HTML DOM events, React can perform actions based on user events.
// React has the same events as HTML: click, change, mouseover etc.

// Adding Events:

// React events are written in camelCase syntax:
// onClick instead of onclick.

// React event handlers are written inside curly braces:
// onClick = { shoot }  instead of onClick = "shoot()".

<div>
  {/* React: */}
  <button onClick={shoot}>Take the Shot!</button>
  {/* HTML: */}
  <button onclick="shoot()">Take the Shot!</button>
</div>

// Put the shoot function inside the Football component:

function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));

// Passing Arguments:

// To pass an argument to an event handler, use an arrow function.
// ** This is important!! **

// Send "Goal!" as a parameter to the shoot function, using arrow function:

function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

ReactDOM.render(<Football />, document.getElementById('root'));

// React Event Object:
