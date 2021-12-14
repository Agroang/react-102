import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon icon={faGithubSquare} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://github.com/Agroang" target="_blank" rel="noopener noreferrer">
        <div className="footer-icon">{github}</div>
      </a>
      <a href="https://www.linkedin.com/in/agroang/" target="_blank" rel="noopener noreferrer">
        <div className="footer-icon">{linkedin}</div>
      </a>
    </div>
  )
}
