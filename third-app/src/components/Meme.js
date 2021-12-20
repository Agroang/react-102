import React from "react"

export default function Meme() {
  return(
    <form className="form-container">
      <div className="inputs-container">
        <input className="input-container" type="text" name="fname" />
        <input className="input-container" type="text" name="lname" />
      </div>
      <input className="input-submit" type="submit" value="Get a New Meme Image!" />
    </form>
  )
}
