import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faUtensils} />

// add some kind of font awesome or emoticon of a restaurant
// Style the navbar hehe
export default function Navbar() {
  return(
    <nav className="navbar">
      <h1>Matias's Gyudon Restaurants Reviews!</h1>
      <span>{element}</span>
    </nav>
  )
}
