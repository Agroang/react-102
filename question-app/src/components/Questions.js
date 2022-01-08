import React from "react"
import removeMarkdown from "markdown-to-text"
import { nanoid } from 'nanoid'
import Option from "./Option"

export default function Questions() {

  const [questionsData, setQuestionsData] = React.useState([])
  // state to handle new data, can change =medium to hard or something on url
  // const [newQuiz, setNewQuiz] = React.useState({})

  // "working" without async function, as backup
  // getting undefined first time, and only works after i comment out
  // React.useEffect(function () {
  //   fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple`)
  //     .then(res => res.json())
  //     .then(data => setQuestionsData(data))
  // }, [])
  console.log("first console.log")
  // same as above but using async
  React.useEffect(() => {
    const url = 'https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple'
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`second console.log ${data}`)
        setQuestionsData(data);
      } catch (error) {
        // console.log("error", error)
      }
    };
    fetchData();
  }, [])

  const dataArray = questionsData.results
  //testing if fetch working
  console.log(`third console.log ${dataArray}`)

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

 // so far working one
  let testingElements
  if (dataArray !== undefined) {
    testingElements = dataArray.map(item => {
      const answersArray = []
      answersArray.push(item.correct_answer)
      item.incorrect_answers.forEach(incorrectAnswer => { answersArray.push(incorrectAnswer) })
      shuffle(answersArray)
      const markdownTitle = item.question; removeMarkdown(markdownTitle);
      const sanitizedTitle = markdownTitle.replaceAll('&quot;', '"').replaceAll('&039;', "'").replaceAll('&#039;', "'").replaceAll("&amp;", "&")
      const optionElements = answersArray.map(option =>
        (<Option
          option={option.replaceAll('&quot;', '"').replaceAll('&039;', "'").replaceAll('&#039;', "'").replaceAll("&amp;", "&")}
          id={nanoid()}
          selected={false}
        />)
        )

      return (
        <div className="questions-container">
          <h1>{sanitizedTitle}</h1>
          <div className="options-container">
            {optionElements}
          </div>
          <hr />
        </div>
      )
    })
      // si elimino este return functiona, el button tambien aparece, comment out
      // for the time being
      // return testingElements
  }

  // the biggest div needs margin! or padding, something
  // each h2 (option) needs a click event, save some state, something
  // like held on the dice game, on click change value to held (true)
  // if held change color background, save in an array or something?
  // check the dice example for an idea

  // change loading to a big fat button or something
  // start actually trying to save selected and see if i need radio buttons
  // "k&e" from "pokemon" breaks as well, need to change for an e with accent
  // "k&eacute;mon" from "pokemon" need to change for an e with accent
  return (
      <div className="questions-container-test">
        {testingElements}
        {!dataArray &&
        <button className="loading-button"><div className="dot-flashing"></div></button>
        }
        <div className="check-answers-button-container">
        {dataArray && <button>Check Answers</button>}
        </div>
      </div>

  )
}
