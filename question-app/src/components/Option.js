import React from "react"
import removeMarkdown from "markdown-to-text";

export default function Option(props) {
  const markdown = props.option;removeMarkdown(markdown);
  const [selected, setSelected] = React.useState(props.selected)

  function handleClick() {
    setSelected(oldSelected => !oldSelected)
  }

  const selectedColor = selected ? "blue" : "white"
  const styles = {
    backgroundColor: selectedColor
  }
  return(
    <button className="button-option-container" onClick={handleClick} style={styles}>
      {markdown}
    </button>
  )
}

// should each optio bet a radio button? how to limit the amount of answers
// that can be clicked at the same time? has to be a form with styled radio...
