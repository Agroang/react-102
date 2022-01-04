import React from "react"

export default function Questions() {

  const [questionsData, setQuestionsData] = React.useState({})

  React.useEffect(function () {
    fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestionsData(data))
  }, [])

  const dataArray = questionsData.results
  //testing if fetch working
  console.log(dataArray)

  // category: "Entertainment: Video Games"
  // correct_answer: "ZUN"
  // difficulty: "medium"
  // incorrect_answers: (3)['SUN', 'RUN', 'PUN']
  // question: "The creator of the Touhou Project series is:"
  // type: "multiple"

  // need to fetch, useEffect to avoid a lot of fetches, so just 1 time ,[]
  // but also need to remake if they want to play again with a different set
  // of questions when a value is changed, need to create that state

  // function to shuffle options
  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // for testing output
  // dataArray.map(question => (question.incorrect_answers.map(incorrect => { return console.log(incorrect)})))


  // so far working one, when api is not broken
  const testingElements = dataArray.map(item => {
    const answersArray = []
    return (
      <div className="questions-container">
        <h1>{item.question}</h1>
        <div className="options-container">
          { answersArray.push(item.correct_answer) }
          { item.incorrect_answers.forEach(incorrectAnswer =>
          { return answersArray.push(incorrectAnswer) }) }
          { shuffle(answersArray) }
          { answersArray.forEach(option => {
            return <h2>{option}</h2>
          }) }
        </div>
        <hr />
      </div>
      )
  })

    // make an array for each question, shuffle, display as button

  return (
      <div>
        {testingElements}
        <button>Check Answers</button>
      </div>

  )
}
