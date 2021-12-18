import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faMapMarkerAlt} />

export default function Card(props) {
  let badgeText
  if (props.rating >= 3) {
    badgeText = "Recommended"
  }
  return(
    <div className="card-container">
      {badgeText && <div className="badge-container">{badgeText}</div>}
      <img src={props.imageUrl} alt="restaurant"/>
      <div className="stats-container">
        <div className="location-container">
        <span>{element}</span>
        <h3>{props.location}</h3>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{props.title}</h1>
        <p className="review-date">{props.reviewDate}</p>
        <p>{props.review}</p>
      </div>
    </div>
  )
}
