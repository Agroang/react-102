import React from "react"
import grouppicture from '../images/group.png'

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="img-container">
        < img src={grouppicture} alt="group" />
      </div>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  )
}
