import React from "react"
import removeMarkdown from "markdown-to-text";


// React.forwardRef((props, ref)
// const FancyButton = React.forwardRef((props, ref) => (
export const Option = React.forwardRef((props, ref) => {
  //working one, deleted at the end one } and added a )
// export default function Option(props) {
  const option = props.option;removeMarkdown(option);
  const [selected, setSelected] = React.useState(props.selected)

  function handleClick() {
    setSelected(oldSelected => !oldSelected)
  }

  // test function
  // function childFunction () {
  //   selected && console.log(`selected and option is ${option}`)
  // }

  // also part of the test
  React.useImperativeHandle(ref, () => ({
    childFunction: () => {
      selected && console.log(`selected and option is ${option}`)
    }
  }));

  const selectedColor = selected ? "#38285fe8" : "#835ee0e8"
  const styles = {
    backgroundColor: selectedColor
  }
  return(
     <div className="button-option-container" onClick={handleClick} style={styles}>
      {option}
    </div>
  )
})
