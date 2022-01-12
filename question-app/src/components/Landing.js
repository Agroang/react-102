import React from "react"
// import Questions from "./Questions"
import QuestionsTest from "./QuestionsTest"

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
          <h2 className="description-container">Will you accept the challenge...?</h2>
          <button className="start-quiz-container" onClick={toggle}>Start Quiz</button>
        </div>
      }
      {display && <QuestionsTest />}
    </div>
  )
}
