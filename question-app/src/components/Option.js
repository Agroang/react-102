import React from "react"
import removeMarkdown from "markdown-to-text";

export default function Option(props) {
  const markdown = props.option;removeMarkdown(markdown);
  return(
    <button className="button-option-container">{markdown}</button>
  )
}
