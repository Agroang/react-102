import React from "react"
import removeMarkdown from "markdown-to-text"
import { nanoid } from 'nanoid'
import Option from "./Option"

export default function Questions() {

  const [questionsData, setQuestionsData] = React.useState([])
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
      // should answersArray be a state? should I keep the correct answer in
      // another state or somewhere? how to compare the selected option with the
      // correct answer? (selected option.option === correct answer?)
      // I should also pass the correct answer as prop then to each option?
      const answersArray = []
      answersArray.push(item.correct_answer)
      item.incorrect_answers.forEach(incorrectAnswer => { answersArray.push(incorrectAnswer) })
      shuffle(answersArray)
      const markdownTitle = item.question; removeMarkdown(markdownTitle);
      const sanitizedTitle = markdownTitle.replaceAll('&quot;', '"').replaceAll('&039;', "'").replaceAll('&#039;', "'").replaceAll("&amp;", "&").replaceAll("k&e;", "ké").replaceAll("k&eacute;", "ké").replaceAll("&ouml;", "ö")
      const optionElements = answersArray.map(option =>
        (<Option
        option={option.replaceAll('&quot;', '"').replaceAll('&039;', "'").replaceAll('&#039;', "'").replaceAll("&amp;", "&").replaceAll("k&e;", "ké").replaceAll("k&eacute;", "ké").replaceAll("&ouml;", "ö")}
          id={nanoid()}
          selected={false}
        />)
        )

      return (
        // and this contantainer the form
        <form className="questions-container">
          {/* no need of fieldset nor legend I think */}
          <h1>{sanitizedTitle}</h1>
          {/* this should be a form and inside options have them as radio */}
          <div className="options-container">
            {optionElements}
          </div>
          <hr />
        </form>
        // working version bellow
        // <div className="questions-container">
        //   <h1>{sanitizedTitle}</h1>
        //   <div className="options-container">
        //     {optionElements}
        //   </div>
        //   <hr />
        // </div>
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

  // start actually trying to save selected and see if i need radio buttons
  // have the main container for questions with a greysh background color?
  // I believe the target container should be questions-container-test
  // a little bit hard to read

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
