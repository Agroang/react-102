import React from "react"

export default function Meme() {
  return(
    <main>
      <form className="form-container">
        <div className="inputs-container">
          <input className="input-container" type="text" name="fname" />
          <input className="input-container" type="text" name="lname" />
        </div>
        <button className="input-submit">Get a New Meme Image!</button>
      </form>
    </main >
  )
}
