import React from "react"

export default function Card(props) {
  return(
    <div className="card-container">

      {/* // awesomefont the location  */}
      <h3>{props.location}</h3>
      <h1>{props.title}</h1>
      <p>{props.reviewDate}</p>
      <p>{props.review}</p>
      <img src={props.imageUrl} alt="restaurant"/>
      <hr />
    </div>
  )
}
