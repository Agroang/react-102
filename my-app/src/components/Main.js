import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

export default function Main () {
  return (
    <>
    <div className="main-container">
      <h1>Matias Acuna</h1>
      <h4>Full-Stack Web Developer</h4>
      <h6>www.matiasau.me</h6>
      <div className="email-container">
        <div className="font-awesome-icon-container">{element}</div>
        <a href="mailto:agroang@gmail.com">Email</a>
      </div>
    </div>
    <div className="second-main-container">
      <h2>About</h2>
      <p>Random information about me</p>
      <h2>Interests</h2>
      <p>Current interests, programming related</p>
    </div>
    </>
  )
}
