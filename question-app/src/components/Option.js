import React from "react"
import removeMarkdown from "markdown-to-text";

export default function Option(props) {
  const option = props.option;removeMarkdown(option);
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
      {option}
    </div>
  )
}
