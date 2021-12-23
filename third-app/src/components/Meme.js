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

// If we wanted to change the value of an object, we would do the following:

// export default function App() {
//   const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false
//   })

//   let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

//   function toggleFavorite() {
//     setContact(prevContact => ({ //the parenthesis are for implicit return,
//     it can be done without it but you need to add the return {}
//       ...prevContact,
//       isFavorite: !prevContact.isFavorite
//     }))
//   }

// We can not only pass states through props, but we can also pass functions
// that we can later use on the component as an event listener
//  <Star
//    isFilled={contact.isFavorite}
//    handleClick={toggleFavorite} (this is a function that will handle the click)
//  />
// Then on the actual component we can use that function as onClick={props.handleClick}

// Passing data to components can only be done through props so if a sibling component
// needs data you cannot pass it through the sibling, you need to raise the state
// to the parent component and from the pass it as props (this can get tidious if
// if it has too many layers and for that exists state managers like Redux)

// As a rule of thumb, keep the state as close as it is needed for the component
// to use, there is no need to keep it at a parent level and pass it through
// props if only 1 component needs it, if that is the case the component should
// have the state. If other components need the state then you can raise it to the
// parent level.

// Just like in HTML, you can also style within JSX, but the syntax is a little
// bit different. You need to pass an objet to the style property. And, as you
// will pass an object (JS) you need to get inside curly braces, but the object
// is also curly braces, so its a set of 2 curly braces. For that reason sometimes
// it's better to just define that object outside JSX and just pass it to the
// style. Also, as it is JS, even if it's background-color you should write it
// with the JS syntax (camelCase) so it becomes backgroundColor

// export default function App() {
//   const [squares, setSquares] = React.useState(boxes)

//   const styles = {
//     backgroundColor: "black"
//   }

//   const squareElements = squares.map(square => (
//     <div style={styles} className="box" key={square.id}></div>
//   ))
//   return (
//     <main>
//       {squareElements}
//     </main>
//   )
// }

// One of the major benefits of being able to use JS while styling is
// that you can use ternary operators to change the style based on conditions.
// Example bellow: (lets assume that the App(props) and the props come with a
// darkMode attribute set to true)

// export default function App(props) {
//   const [squares, setSquares] = React.useState(boxes)
//   props.darkMode

//   const styles = {
//     backgroundColor: props.darkMode ? "#222222" : "#cccccc"
//   }

//   const squareElements = squares.map(square => (
//     <div style={styles} className="box" key={square.id}></div>
//   ))
//   return (
//     <main>
//       {squareElements}
//     </main>
//   )
// }


// It is possible to create a state based on the props that come
// from the props (derived state) and then use that to actually
// modify the value of state based on events, nevertheless there is also
// a "better" way that is called "unified state". The reason is that
// if you use derived state you would have two sources of the same value,
// the one at the App level and the new one at the component level. It
// is better to pass a function through props that will modify the state
// at the App level.

// To be able to do this we need to also pass the id of the object when
// passing the function otherwise the function won't know which object
// to target and it would target everything (I think).

// Let's say that we render the following component that is comming from a
// .map iteration

//<Box
//  key={square.id}
//  id={square.id}
//  on={square.on}
//  toggle={toggle}
///>

// We are passing a toggle function and the id that is coming from the iteration
// as well

// The component itself could have the onClick as the following:


// return (
//   <div
//     style={styles}
//     className="box"
//     onClick={() => props.toggle(props.id)}
//   >
//   </div>
// )

// And as mentioned, the id is comming from the props, and we pass an arrow
// function to the event, but only use the callback function, in this case
// the toggle with the id

// That will go back to the app with the id if the clicked object.


// function toggle(id) {
//   setSquares(prevSquares => {
//     return prevSquares.map((square) => {
//       return square.id === id ? { ...square, on: !square.on } : square
//     })
//   })
// }

// We pass the id to the function and then we call the setSquares method to
// change the state, we use the previous value which is a whole array of objects
// and we return the iteration (map) that will return a new array with the
// the updated values based on what we do on the function, in this case we use
// a ternary to compare each object's id with the id that is comming from the
// function and if it's true it will toggle the value of .on. We also need
// to pass all the other properties of the object that is why we first use
// the spare operator and also we use {} as it is an object. If it doesn't
// match the id we simply return the object.

// You could as well from the beginning instead of passing just the function
// pass the id to the function as well as props, so (this is called "closure")

//<Box
//  key={square.id}
//  on={square.on}
//  toggle={() => toggle(square.id)}
///>

// And of the Box component it could be just like this:
// onClick = { props.toggle }

// Nevertheless the main toggle function would still be the same

// Another example of conditional rendering, remember that
// {isShown && <p>{props.punchline}</p>} means "if isShown is true then render
// <p>{props.punchline}</p>"

// export default function Joke(props) {
//   const [isShown, setIsShown] = React.useState(false)

//   function toggleShown() {
//     setIsShown(prevShown => !prevShown)
//   }
//   return (
//     <div>
//       {props.setup && <h3>{props.setup}</h3>}
//       {isShown && <p>{props.punchline}</p>}
//       <button onClick={toggleShown}>Show Punchline</button>
//       <hr />
//     </div>
//   )
// }
