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
        <a href="https://www.matiasau.me/" target="_blank" rel="noopener noreferrer">
        <h6>www.matiasau.me</h6>
      </a>
      <a href="mailto:agroang@gmail.com">
        <div className="email-container">
          <div className="font-awesome-icon-container">{element}</div>
          <a href="mailto:agroang@gmail.com">Email</a>
        </div>
      </a>
    </div>
    <div className="second-main-container">
      <h2>About</h2>
      <p>Born and raised in Chile but living in Japan for near 10 years. Always interested in computers I finally decided to follow my passion and learn to code. After successfully graduating a bootcamp I am now and full-stack web developer.</p>
      <h2>Interests</h2>
      <p>To learn new technologies, computer games (RPGs and MMORPGs), and to grow vegetables.</p>
    </div>
    </>
  )
}
