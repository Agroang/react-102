import React from "react"
import trollFace from "../images/troll_face.png"

export default function Navbar() {
  return(
    <div className="navbar-container">
      <img src={trollFace} alt="troll face img"/>
      <h1>Meme Generator!</h1>
      <h2>Interactive React Test</h2>
    </div>
  )
}
