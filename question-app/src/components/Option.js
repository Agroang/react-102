import React from "react"
import removeMarkdown from "markdown-to-text";

export default function Option(props) {
  const markdown = props.option;removeMarkdown(markdown);
  const [selected, setSelected] = React.useState(props.selected)
  // state for the radio button, it needs the checked to be a controlled
  // component and have only 1 button at the same time // not functional
  // const [radioData, setRadioData] = React.useState({
  //   value: ""
  // })

  function handleClick() {
    setSelected(oldSelected => !oldSelected)
  }

  // for radio button //not functional
  //   function handleChange(event) {
  //   const { name, value, type, checked } = event.target
  //     setRadioData(prevRadioData => {
  //     return { // we don't add a new one as we use value
  //       ...prevRadioData,
  //       [name]: type === "checkbox" ? checked : value
  //     }
  //   })
  // }

  const selectedColor = selected ? "#38285fe8" : "#835ee0e8"
  const styles = {
    backgroundColor: selectedColor
  }
  return(
    // radio button version, not functional atm
    // <div className="button-option-container" onClick={handleClick} style={styles}>
    //   <input
    //     type="radio"
    //     name={markdown}
    //     value={markdown}
    //     checked={radioData.value === markdown }
    //     onChange={handleChange}

    //   />
    //   <label htmlFor={markdown}>{markdown}</label>
    // </div>
    // working version bellow
     <div className="button-option-container" onClick={handleClick} style={styles}>
      {markdown}
    </div>
  )
}

// should each optio bet a radio button? how to limit the amount of answers
// that can be clicked at the same time? has to be a form with styled radio...
