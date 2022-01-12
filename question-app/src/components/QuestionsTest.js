import React from "react"
import removeMarkdown from "markdown-to-text"
import { nanoid } from 'nanoid'
import Option from "./Option"

export default function QuestionsTest() {

  const [questionsData, setQuestionsData] = React.useState([])
  const [dataArray, setDataArray] = React.useState([])

  React.useEffect(function () {
    fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple`)
      .then(res => res.json())
      .then(data => setQuestionsData(data))
  }, [])

  React.useEffect(function () {
    setDataArray(questionsData.results)
  }, [questionsData])

  console.log(dataArray)

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let correctAnswersOnly = []

  let testingElements
  if (dataArray !== undefined) {
    testingElements = dataArray.map(item => {
      const answersArray = []
      answersArray.push(item.correct_answer)
      correctAnswersOnly.push(item.correct_answer)
      item.incorrect_answers.forEach(incorrectAnswer => { answersArray.push(incorrectAnswer) })
      shuffle(answersArray)
      const markdownTitle = item.question; removeMarkdown(markdownTitle);
      const sanitizedTitle = markdownTitle.replaceAll('&quot;', '"').replaceAll('&039;', "'").replaceAll('&#039;', "'").replaceAll("&amp;", "&").replaceAll("k&e;", "ké").replaceAll("k&eacute;", "ké").replaceAll("&ouml;", "ö")
      const optionElements = answersArray.map(option =>
      (
        <Option
          option={option.replaceAll('&quot;', '"').replaceAll('&039;', "'").replaceAll('&#039;', "'").replaceAll("&amp;", "&").replaceAll("k&e;", "ké").replaceAll("k&eacute;", "ké").replaceAll("&ouml;", "ö")}
          key={nanoid()}
          selected={false}
          correctAnswer={item.correct_answer}
          id={nanoid()}
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
    // return testingElements
  }

  // pass the correct answers from the beginning, on click does something
  // on each child? runs a function that goes to the child?
  // that compares the props.option with props.correct answers??
  // the bellow starts on the first run empty, careful with that!
  // https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs

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
