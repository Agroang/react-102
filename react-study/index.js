// https://www.freecodecamp.org/news/react-beginners-guide/
// https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/
// https://reactjs.org/tutorial/tutorial.html
// https://www.w3schools.com/REACT/DEFAULT.ASP

//////////////////// https://www.w3schools.com/REACT/DEFAULT.ASP ///////////////

// ES6 Class -------------------------------------------------------------------

// A class is a type of function, but instead of using the keyword function to
// initiate it, we use the keyword class, and the properties are assigned inside
// a constructor() method.

// Example:

class Car {
  constructor(name) {
    this.brand = name;
  }
}

// * Class names use UpperCase for names

// Now we can create an object using the Car class:

const mycar = new Car("Ford");
