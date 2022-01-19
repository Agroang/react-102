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

// What About "this"?

// In regular functions the this keyword represented the object that called the
// function, which could be the window, the document, a button or whatever.
// With arrow functions, the this keyword always represents the object that
// defined the arrow function.

// Example using REGULAR function with "this" keyword

class Header {
  constructor() {
    this.color = "Red";
  }

  //Regular function:
  changeColor = function () {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);

// By calling the method, we get this represents: [object Window] on load and
// this represents: [object HTMLButtonElement] on click of the button.

// Example using ARROW function with "this" keyword

class Header {
  constructor() {
    this.color = "Red";
  }

  //Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

const myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);

// With an arrow function, this represents the Header object no matter who
// called the function (this represents:[object Object], Object being the
// Header object).

// Sometimes the behavior of regular functions is what you want, if not,
// use arrow functions (looks cleaner, more styled and it's shorter).


// ES6 Variables (let, const) --------------------------------------------------

// ES5 "var":
// Before ES6 we only had "var" as keyword to define a variable.
// If you use var outside of a function, it belongs to the global scope.
// If you use var inside of a function, it belongs to that function.
// If you use var inside of a block, i.e.a for loop, the variable is still
// available outside of that block.
// var has a function scope, not a block scope.

// ES6 "let":
// let is the block scoped version of var, and is limited to the block (or
// expression) where it is defined.
// If you use let inside of a block, i.e.a for loop, the variable is only
// available inside of that loop.
// let has a block scope.

// ES6 "const":
// const is a variable that once it has been created, its value can never change
// const has a block scope

// The keyword const is a bit misleading.
// It does not define a constant value.It defines a constant reference to a
// value.

// Because of this you can NOT:
// Reassign a constant value
// Reassign a constant array
// Reassign a constant object

// But you CAN:
// Change the elements of constant array
// Change the properties of constant object

// ES6 Destructuring -----------------------------------------------------------

// Destructuring makes it easy to extract only what is needed from an object
// (array, or actual js object)

// Destructuring Arrays:

// Before:
const vehicles = ['mustang', 'f-150', 'expedition'];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// With destructuring:
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

// *When destructuring arrays, the order that variables are declared is
// important.

// You can even leave items out:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, , suv] = vehicles; // This picks the first and last item

// Destructuring comes in handy when a function returns an array:

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

// Destructuring Objects:

// Here is the old way of using an object inside a function:

// Before:
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red'
}
myVehicle(vehicleOne);
// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' +
  vehicle.brand + ' ' + vehicle.model + '.';
}

// With destructuring:
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red'
}

myVehicle(vehicleOne);

function myVehicle({ type, color, brand, model }) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' +
  model + '.';
}

// Doesn't have to be in order like the array destructuring but the names are
// the keys of the object so naming matters.

// We can even destructure deeply nested objects by referencing the nested
// object then using a colon and curly braces to again destructure the items
// needed from the nested object:

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021,
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}

// ES6 Spread Operator ---------------------------------------------------------

// The JavaScript spread operator (...) allows us to quickly copy all or part of
// an existing array or object into another array or object.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// The spread operator is often used in combination with destructuring.

// Assign the first and second items from numbers to variables and put the rest
// in an array:

const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

// We can use the spread operator with objects too:

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021,
  color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }

// * Really useful to update objects
// The properties that did not match were combined, but the property that did
// match, color, was overwritten by the last object that was passed,
// updateMyVehicle. The resulting color is now yellow.

// ES6 Modules -----------------------------------------------------------------

// JavaScript modules allow you to break up your code into separate files.
// This makes it easier to maintain the code - base.
// ES Modules rely on the import and export statements.

// Export:

// You can export a function or variable from any file.
// There are two types of exports: Named and Default.

// Named Exports:
// You can create named exports two ways.In - line individually, or all at once
// at the bottom.

// In - line individually:

export const name = "Jesse"
export const age = "40"

// All at once at the bottom:

const name = "Jesse"
const age = "40"

export { name, age }

// Default Exports:
// You can only have one default export in a file.

const message = () => {
  const name = "Jesse";
  const age = "40";
  return name + ' is ' + age + 'years old.';
};

export default message;

// Import:

// You can import modules into a file in two ways, based on if they are named
// exports or default exports.
// Named exports must be destructured using curly braces.Default exports do not.

// Import from named exports
// Import named exports from the file person.js:

import { name, age } from "./person.js";

// Import from default exports
// Import a default export from the file message.js:

import message from "./message.js";
