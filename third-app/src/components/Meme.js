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
// usually handled with "state".
