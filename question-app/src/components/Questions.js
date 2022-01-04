import React from "react"

export default function Questions() {

  const [questionsData, setQuestionsData] = React.useState({})

  React.useEffect(function () {
    fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestionsData(data))
  }, [])

  const dataArray = questionsData.results

  // category: "Entertainment: Video Games"
  // correct_answer: "ZUN"
  // difficulty: "medium"
  // incorrect_answers: (3)['SUN', 'RUN', 'PUN']
  // question: "The creator of the Touhou Project series is:"
  // type: "multiple"


  // api url bellow, just need to fetch with with useEffect
  // https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple

  // need to fetch, useEffect to avoid a lot of fetches, so just 1 time ,[]
  // but also need to remake if they want to play again with a different set
  // of questions when a value is changed, need to create that state



  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  dataArray.map(question => console.log(question.question))

  const answersArray = []
  // const questionElements = dataArray.map(question =>
  //    <div className="questions-container">
  //       <h1>{question.question}</h1>
  //       <div className="options-container">
  //         { answersArray.push(question.correct_answer) }
  //         { question.incorrect_answers.forEach(incorrectAnswer =>
  //         { answersArray.push(incorrectAnswer) }) }
  //         { shuffle(answersArray).forEach(option => {
  //           <button>{option}</button>
  //         }) }
  //       </div>
  //       <hr />
  //     </div>
  //   )

    // make an array for each question, shuffle, display as button

  return (
      <div>
        {/* {questionElements} */}
        <button>Check Answers</button>
      </div>

  )
}
