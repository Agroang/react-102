import React from "react"
import Questions from "./Questions"

export default function Landing() {
  const [display, setDisplay] = React.useState(false)

  function toggle() {
    setDisplay((oldDisplay) => !oldDisplay)
    console.log(display)
  }

  return (
    <div>
      {!display &&
        <div className="landing-container">
          <h1>Super Quizzzzzzz!!!</h1>
          <h2>Amazing description about a lot of useful stuff</h2>
          <button onClick={toggle}>Start Quiz!</button>
        </div>
      }
      {display && <Questions />}
    </div>
  )
}
