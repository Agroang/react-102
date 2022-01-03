import React from "react"

export default function Questions() {

  // need to fetch, useEffect to avoid a lot of fetches, so just 1 time ,[]
  // need to map to create the component, need to check what data I am
  // getting back from that fetch

  return (
    <div className="questions-container">
      <h1>Question here</h1>
      <div className="options-container">
        <button>Option 1</button>
        <button>Option 2</button>
        <button>Option 3</button>
        <button>Option 4</button>
      </div>
    </div>
  )
}
