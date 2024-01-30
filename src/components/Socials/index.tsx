import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './index.scss'

export default function Socials() {
  return (
    <div className="socials-container">
      <ul>
        <li>
          <a
            href="https://github.com/wisieneu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="icon fa-github icon-github"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/wisie/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon fa-linkedin icon-linkedin"
            />
          </a>
        </li>
      </ul>
    </div>
  )
}
