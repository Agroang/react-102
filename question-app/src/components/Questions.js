import React from "react"
import removeMarkdown from "markdown-to-text"
import { nanoid } from 'nanoid'
import Option from "./Option"

export default function Questions() {

  const [questionsData, setQuestionsData] = React.useState([])
  // const [correctArray, setCorrectArray] = React.useState([])
  // state to handle new data, can change =medium to hard or something on url
  // const [newQuiz, setNewQuiz] = React.useState({})
  // I will need a new state that handles the options, in the memo is the formData
  // it might have to be on the option itself

  // "working" without async function, as backup
  // getting undefined first time, and only works after i comment out
  // React.useEffect(function () {
  //   fetch(`https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple`)
  //     .then(res => res.json())
  //     .then(data => setQuestionsData(data))
  // }, [])
  // console.log("first console.log")
  // same as above but using async
  React.useEffect(() => {
    const url = 'https://opentdb.com/api.php?amount=5&category=15&difficulty=medium&type=multiple'
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(`second console.log ${data}`)
        setQuestionsData(data);
      } catch (error) {
        // console.log("error", error)
      }
    };
    fetchData();
  }, [])

  const dataArray = questionsData.results
  //testing if fetch working
  // console.log(`third console.log ${dataArray}`)

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

  let correctAnswersOnly = []
  // for testing output
  // dataArray.map(question => (question.incorrect_answers.map(incorrect => { return console.log(incorrect)})))
 // so far working one
  let testingElements
  if (dataArray !== undefined) {
    testingElements = dataArray.map(item => {
      // should answersArray be a state? should I keep the correct answer in
      // another state or somewhere? how to compare the selected option with the
      // correct answer? (selected option.option === correct answer?)
      // I should also pass the correct answer as prop then to each option?
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
          // for some reason the key is not working, not appearing on the props
          // consolelog so you would think its working...
          id={nanoid()}
        />)
        )

      return (
        // and this contantainer the form // form version not functional atm
        // <form className="questions-container">
        //   {/* no need of fieldset nor legend I think */}
        //   <h1>{sanitizedTitle}</h1>
        //   {/* this should be a form and inside options have them as radio */}
        //   <div className="options-container">
        //     {optionElements}
        //   </div>
        //   <hr />
        // </form>
        // working version bellow
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


  // each (option) needs a click event, save some state, something
  // like held on the dice game, on click change value to held (true)
  // if held change color background, save in an array or something?
  // check the dice example for an idea

  // have the main container for questions with a greysh background color?
  // I believe the target container should be questions-container-test
  // a little bit hard to read


  // tenzies completed, get an idea here
  // https://scrimba.com/learn/learnreact/tenzies-new-game-co5fd4991acd2a6ded9358bb4
  // make this a state, pass the setstate ? ...how to confirm?
  // i need to pass the value back, and compare that to the correctanswers
  // the value meaning the title, the "option" && if its held

  // currently the bellow is not working, how to compare the Option info
  // with the one here?
  // checkanswers on click re render the options with all the info plus info?
  //   React.useEffect(() => {
  //     if (correctAnswersOnly.length === 5) {
  //       setCorrectArray(correctAnswersOnly)
  //     }
  //   }, [])

  // console.log(correctArray)
  //this holds the correct answers
  // pass the correct answers from the beginning, on click does something
  // on each child? runs a function that goes to the child?
  // that compares the props.option with props.correct answers??
  // the bellow starts on the first run empty, careful with that!
  // https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs
  console.log(correctAnswersOnly)

  return (
      <div className="questions-container-test">
        {testingElements}
        {!dataArray &&
        <button className="loading-button"><div className="dot-flashing"></div></button>
        }
        <div className="check-answers-button-container">
        {/* should all the correct answers be on a special state? how to read if the
        option is the correct answer? each option knows if they are the correct
        but how to compare with the click over here? */}
        {dataArray && <button>Check Answers</button>}
        </div>
      </div>

  )
}
