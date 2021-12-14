import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const github = <FontAwesomeIcon icon={faGithubSquare} />
const linkedin = <FontAwesomeIcon icon={faLinkedin} />

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icon">{github}</div>
      <div className="footer-icon">{linkedin}</div>
    </div>
  )
}
