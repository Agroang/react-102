// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

/////// https://www.w3schools.com/REACT/react_conditional_rendering.asp ////////

// React Conditional Rendering -------------------------------------------------

// In React, you can conditionally render components.
// There are several ways to do this.

// if Statement:

// We can use the if JavaScript operator to decide which component to render.

function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
);

// In  this case as isGoal is false it will render MissedGoal which will say
// MISSED

// Logical && Operator:

// Another way to conditionally render a React component is by using the &&
// operator.
// ** Important and quite useful! **

// We can embed JavaScript expressions in JSX by using curly braces:

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = ['Ford', 'BMW', 'Audi'];
ReactDOM.render(
  <Garage cars={cars} />,
  document.getElementById('root')
);

// Ternary Operator:

// Another way to conditionally render elements is by using a ternary operator.

// Return the MadeGoal component if isGoal is true, otherwise return the
// MissedGoal component:

function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      {isGoal ? <MadeGoal /> : <MissedGoal />}
    </>
  );
}

ReactDOM.render(
  <Goal isGoal={false} />,
  document.getElementById('root')
);
