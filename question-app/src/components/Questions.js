import React from "react"

export default function Questions() {

  const [questionsData, setQuestionsData] = React.useState({})

  React.useEffect(function () {
    fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestionsData(data))
  }, [])

  console.log(questionsData)

  // api url bellow, just need to fetch with with useEffect
  // https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple

  // need to fetch, useEffect to avoid a lot of fetches, so just 1 time ,[]
  // but also need to remake if they want to play again with a different set
  // of questions when a value is changed, need to create that state

  // need to map to create the component, need to check what data I am
  // getting back from that fetch

  //when mapping i need to create a variable that will be rendered

  return (
    <div className="questions-container">
      <h1>Question here</h1>
      <div className="options-container">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
        <button>Option 4</button>
      </div>
      <hr />
      <button>Check Answers</button>
    </div>
  )
}
