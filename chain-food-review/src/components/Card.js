import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faMapMarkerAlt} />

export default function Card(props) {
  return(
    <div className="card-container">
      <div className="location-container">
      <span>{element}</span>
      <h3>{props.location}</h3>
      </div>
      <h1>{props.title}</h1>
      <p>{props.reviewDate}</p>
      <p>{props.review}</p>
      <img src={props.imageUrl} alt="restaurant"/>
      <hr />
    </div>
  )
}
