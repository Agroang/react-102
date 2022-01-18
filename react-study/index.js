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

// Methods in Classes:

class Truck {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

const mytruck = new Truck("Ford");
mytruck.present();

// Class inheritance:

// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from
// another class.

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model
  }
}
const mycar = new Model("Ford", "Mustang");
mycar.show();

// The super() method refers to the parent class.
// By calling the super() method in the constructor method, we call the parent's
// constructor method and gets access to the parent's properties and methods.

// ES6 Arrow Functions ---------------------------------------------------------

// Arrow functions allow us to write shorter function syntax.

// Before:

hello = function () {
  return "Hello World!";
}

// After (Arrow Function):

hello = () => {
  return "Hello World!";
}

// It gets shorter! If the function has *ONLY* one statement, and the statement
// returns a value, you can remove the brackets and the return keyword:

// Arrow Functions Return Value by Default:
hello = () => "Hello World!";

// Arrow Function With Parameters:
hello = (val) => "Hello " + val;

// In fact, if you have only one parameter, you can skip the parentheses as well

// Arrow Function Without Parentheses:
hello = val => "Hello " + val;

// https://www.w3schools.com/REACT/react_es6_arrow.asp
// What About "this"?
