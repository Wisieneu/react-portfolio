import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './index.scss'

export default function Socials() {
  return (
    <div className="socials-container">
      <ul>
        <li>
          <a href="https://github.com/wisieneu">
            <FontAwesomeIcon
              icon={faGithub}
              className="icon fa-github icon-github"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wisie/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon fa-linkedin icon-linkedin"
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon fa-email icon-email"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
