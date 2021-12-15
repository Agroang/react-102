import React from "react"
import swimmer from '../images/swimmer.png'
import star from '../images/star.png'

export default function Card() {
  return (
    <div className="card-container">
      <img src={swimmer} alt="athelete" />
      <div className="review-container">
        <img src={star} alt="star" />
        <span>6.0&nbsp;</span>
        <span className="gray">(6) • &nbsp;</span>
        <span className="gray"> USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className="bold">From $136 </span>/ person</p>
    </div>
  )
}
