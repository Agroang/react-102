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
    answersArray.push(item.correct_answer)
    return (
      <div className="questions-container">
        <h1>{item.question}</h1>
        <div className="options-container">
          {item.incorrect_answers.forEach(incorrectAnswer => { return answersArray.push(incorrectAnswer) })}
          {shuffle(answersArray)}
          {answersArray.forEach(option => {
            return <h2>{option}</h2>
          })}
        </div>
        <hr />
      </div>
    )
  })

  // the biggest div needs margin! or padding, something
  // each h2 (option) needs a click event, save some state, something
  // like held on the dice game, on click change value to held (true)
  // if held change color background, save in an array or something?
  // check the dice example for an idea

  // myabe the options should be an array with objects including the
  // held, text, id? initialize as an empty array with an empty object,
  // set when I have the information while doing the mapping?
  // but then, will it have ALL the options? how to link each set of
  // options with their question? think about this problem

  return (
      <div>
        {testingElements}
        <div className="check-answers-button-container">
          <button>Check Answers</button>
        </div>
      </div>

  )
}
