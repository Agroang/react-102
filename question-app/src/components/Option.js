import React from "react"
import removeMarkdown from "markdown-to-text";

export default function Option(props) {
  const markdown = props.option;removeMarkdown(markdown);
  const [selected, setSelected] = React.useState(props.selected)

  function handleClick() {
    setSelected(oldSelected => !oldSelected)
  }

  const selectedColor = selected ? "#38285fe8" : "#835ee0e8"
  const styles = {
    backgroundColor: selectedColor
  }
  return(
    <div className="button-option-container" onClick={handleClick} style={styles}>
      <input
        type="radio"
        name={markdown}
        value={markdown}
        //need something for the controlled component
        //need on click event
        //to have only 1 option it needs the checked
      />
      <label htmlFor={markdown}>{markdown}</label>
    </div>
    // working version bellow
    //  <div className="button-option-container" onClick={handleClick} style={styles}>
    //   {markdown}
    // </div>
  )
}

// should each optio bet a radio button? how to limit the amount of answers
// that can be clicked at the same time? has to be a form with styled radio...
