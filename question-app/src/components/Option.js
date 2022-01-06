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

// on click: add a class that changes background color (as selected, able to
// toggle)
// also on click, change the held to true, can I check that on the parent
// or is it something I need to do here in the option alone?
