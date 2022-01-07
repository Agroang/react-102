import React from "react"
import Questions from "./Questions"

export default function Landing() {
  const [display, setDisplay] = React.useState(false)

  function toggle() {
    setDisplay((oldDisplay) => !oldDisplay)
  }


  return (
    <div className="landing-container-test">
      {!display &&
        <div className="landing-container">
          <h1 className="title-container">Super Gaming Quiz!</h1>
          <h2>Amazing description about a lot of useful stuff</h2>
          <button onClick={toggle}>Start Quiz!</button>
        </div>
      }
      {display && <Questions />}
    </div>
  )
}
