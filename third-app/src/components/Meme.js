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
