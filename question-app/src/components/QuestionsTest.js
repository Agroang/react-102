import React from "react"
import removeMarkdown from "markdown-to-text"
import { nanoid } from 'nanoid'
// no longer default import for testing purposes
import { Option } from "./Option"

export default function QuestionsTest() {
  // testing useref
  const myRef = React.useRef();

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

  // console.log(dataArray)

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
      // could update the value of an array 5 times through this loop, not sure
      // if i need that array tho
      const markdownTitle = item.question; removeMarkdown(markdownTitle);
      const sanitizedTitle = markdownTitle.replaceAll('&quot;', '"').replaceAll('&039;', "'").replaceAll('&#039;', "'").replaceAll("&amp;", "&").replaceAll("k&e;", "ké").replaceAll("k&eacute;", "ké").replaceAll("&ouml;", "ö")
      const optionElements = answersArray.map(option =>
      (
        <Option
          key={nanoid()}
          option={option.replaceAll('&quot;', '"').replaceAll('&039;', "'").replaceAll('&#039;', "'").replaceAll("&amp;", "&").replaceAll("k&e;", "ké").replaceAll("k&eacute;", "ké").replaceAll("&ouml;", "ö")}
          selected={false}
          correctAnswer={item.correct_answer}
          // testing
          ref={myRef}
          // technically passing myref here but need something else!?
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

  // testing useRef
  // need to map somewhere?
  // only checking the last component?! how to fix this
  // https://stackoverflow.com/questions/63907433/how-to-call-multiple-instances-of-the-same-child-components-function-from-paren
  // https://reactjs.org/docs/hooks-reference.html#useref
  // useImperativeHandle function multiple child components on google
  const onClickFunction = () => {
    myRef.current?.childFunction();
  }


  // function checkAnswers() {
    // how to trigger on the child? on option?
    // click on die runs props.holddice which is on the parent
    // a little bit different...the other way around
    // maybe a useeffect? that depends on a state, maybe it
    // changes a state to true, if true..... re renders the option
    // but that would need me to change the data again...

  // }

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
        {dataArray && <button onClick={onClickFunction}>Check Answers</button>}
      </div>
    </div>

  )
}
