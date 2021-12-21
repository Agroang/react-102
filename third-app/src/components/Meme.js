import React from "react"

export default function Meme() {
  return(
    <main>
      <form className="form-container">
        <div className="inputs-container">
          <input className="input-container" type="text" name="fname" />
          <input className="input-container" type="text" name="lname" />
        </div>
        <button className="input-submit">Get a New Meme Image!</button>
      </form>
    </main >
  )
}

// information about React mouse handle events:
// https://reactjs.org/docs/events.html#mouse-events
// inside the button for example we can add:
// onClick={handleClick} (onClick is the official syntax for onClick handlers)
// and define the function handleClick (inside the component function) but
// before the return

// Even if we update a variable to change, once it has been rendered on React
// the value won't change, for it to change we need React "states".

// In React, values that are created by the function or the component itself are
// usually handled with "state". A "state" is a way for React to remember saved
// values from within a component. This is similar to declaring variables from
// within a component.

// Within the React library you have a hook called useState(), you can use as
// React.useState() but is often deconstructed when you import as the following:
// import React, {useState} from "react"
// and then used just as .useState()

// If we console.log React.useState what we get back is an array that is
// expecting a value and a function.

// One way of getting the value out of the array and display it on the
// component would be to just get the index [0] of the array but a more clean
// is to deconstruct the array from the begginning and use that:

// export default function App() {
//   const [whateverWeWant, func] = React.useState("Yes") (We get to call the
//   first value whatever we want to call it, and the second we called func as
//   it is expecting a function, we are just not passing it, yet.
//   Ideally we will call the value something that is related to the actual
//   value, like "isImportant" or something like that (as we get "Yes") back
//   console.log(whateverWeWant)
//   return (
//     <div className="state">
//       <h1 className="state--title">Is state important to know?</h1>
//       <div className="state--value">
//         <h1>{whateverWeWant}</h1> Here we get the first value of the array
//       </div>
//     </div>
//   )
// }

// The naming convention for the function that we pass to the react state
// is to use set + the name of the variable, so if we have
// const [isImportant, func] = React.useState("Yes")
// the func name would be setIsImportant. We would run this function based
// on events that happen on the page (and this would change the value of the
// variable)

// A nice example of state. It increases or decrases the value of a counter
// when you click the plus or minus button:
// export default function App() {
//   const [count, setCount] = React.useState(0)
//   function add() {
//     setCount(count + 1)
//   }

//   function substract() {
//     setCount(count - 1)
//   }

//   function clickAddHandler() {
//     add()
//   }

//   function clickMinusHandler() {
//     substract()
//   }

//   return (
//     <div className="counter">
//       <button className="counter--minus" onClick={clickMinusHandler}>–</button>
//       <div className="counter--count">
//         <h1>{count}</h1>
//       </div>
//       <button className="counter--plus" onClick={clickAddHandler}>+</button>
//     </div>
//   )
// }

// a shorter way for the above example would be to call directly onClick the
// add or substract functions and the result should be the same

// Now, using the value of state directly on the set function works BUT it's
// best practice to do it through a callback function. That function will be
// passed as parameter the "old" value of state.

// export default function App() {
//   const [count, setCount] = React.useState(0)

//   function add() {
//     setCount(function (oldValue) {
//       return oldValue + 1
//     })
//   }
//   ...

// You can use an arrow function to shorten it, and is common to find
// as a convention to use the name of oldValue as "prev{variable_name}"

// function add() {
//   setCount(prevCount => prevCount + 1)
// }

// The above function is the same as the one above it

// Example of using a ternary operator to flip a boolean and display something
// different (nice example that mixes some of the stuff that we have been
// checking)

// export default function App() {
//   /**
//    * Challenge:
//    * - Initialize state for `isGoingOut` as a boolean
//    * - Make it so clicking the div.state--value flips that
//    *   boolean value (true -> false, false -> true)
//    * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//    */
//   const [isGoingOut, setIsGoingOut] = React.useState(true)

//   function changeState() {
//     setIsGoingOut(prevState => !prevState)
//   }

//   return (
//     <div className="state">
//       <h1 className="state--title">Do I feel like going out tonight?</h1>
//       <div className="state--value" onClick={changeState}>
//         <h1>{isGoingOut ? "Yes" : "No"}</h1>
//       </div>
//     </div>
//   )
// }

// It's important to remember that with React we never want to modify the
// state variable directly, so no .push for example (even if we use the
// prevState), so here is an example of what we can do to modify the value
// if it's needed:

// function App() {

//   const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

//   function addItem() { //we divided it in two lines as it was getting long
//   so because of that we added the return. We use the spread operator that
//   will give us the whole array back and then we add the new item with the
//   template literal)
//     setThingsArray(prevThingsArray => {
//       return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
//     })
//   }

//   const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
//   (we add the key here to avoid getting that error on the console)
//   return (
//     <div>
//       <button onClick={addItem}>Add Item</button>
//       {thingsElements}
//     </div>
//   )
// }
