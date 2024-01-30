import { faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './index.scss'

export default function ContentAbout() {
  return (
    <div className="content about-content-container">
      <h1>About me:</h1>
      <br />
      <p>
        I&apos;m a seasoned <span>QA Engineer</span> with some knowledge in many
        fascinating programming concepts - from reverse engineering, to
        knowledge of 3d libraries, like <span>three.js</span>.
      </p>
      <p>
        I got into coding thanks to games - as a person who&apos;s never had a
        console I found myself often troubleshooting weird PC issues, setting up
        servers, old games, modding games, reading about stuff I didn&apos;t
        have a single idea about, just to get one thing done. As an adult, I
        find myself fitting in this craftsmanship. Right now I&apos;m into{' '}
        <i>
          web dev, scripting, any type of game modding, testing, 3d modeling.
        </i>
      </p>
      <p>
        If you&apos;d like to see my tech stack, visit{' '}
        <a href="https://github.com/wisieneu" target="_blank" rel="noreferrer">
          my github profile ↗
        </a>{' '}
        for a more detailed one. Though a shorthand of my most important
        commercial stack would be:
      </p>
      <div className="stack-icons-container">
        <img src="./svg/icon-typescript.svg" />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faPython} />
        <img src="./svg/icon-express.svg" />
        <FontAwesomeIcon icon={faReact} />
      </div>
      <p>
        I&apos;m constantly looking for some fine fellers to build projects
        with. Hit me up if you would be interested in colaboration. I&apos;m
        planning on:
      </p>

      <ul>
        <li>
          Exploring Three.js to infinity and beyond - I fell in love with what
          this library offers
        </li>
        <li>
          Making games, multiple genres - I&apos;m lazily learning game engines
        </li>
        <li>Building the best possible fullstack applications</li>
        <li>Extending my automation testing skills</li>
      </ul>
    </div>
  )
}
