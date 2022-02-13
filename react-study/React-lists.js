// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

////////////// https://www.w3schools.com/REACT/react_lists.asp /////////////////

// React Lists -----------------------------------------------------------------

// In React, you will render lists with some type of loop.
// The JavaScript map() array method is generally the preferred method.

// Example:

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

// The above code will work but it will trigger a warning that the "key" is
// missing for each component returned from the .map()

// Keys:

// Keys allow React to keep track of elements.This way, if an item is updated or
// removed, only that item will be re - rendered instead of the entire list.
// Keys need to be unique to each sibling.But they can be duplicated globally.

// Generally, the key should be a unique ID assigned to each item. As a last
// resort, you can use the array index as a key.

// *Use so kind of library that generates a unique id if the object that you
// are trying to map doesn't have unique ids

// Example (now with keys):

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
