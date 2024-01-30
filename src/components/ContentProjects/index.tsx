import './index.scss'

export default function ContentProjects() {
  const projects = [
    {
      title: 'TweetSphere',
      details: 'In progress / Personal / Practice',
      sourceUrl: 'https://github.com/Wisieneu/TweetSphere',
      description:
        'Twitter clone - Main portfolio project, showcase of my frontend, backend and automation testing skills',
    },
    {
      title: 'This website - portfolio',
      details: 'Jan 2024 / Personal / My manifesto',
      sourceUrl: 'https://github.com/Wisieneu/react-portfolio',
      description: 'Personal React + three.js portfolio website',
    },
    {
      title: 'Natours',
      details: 'Sep 2023 / Personal / Practice',
      sourceUrl: 'https://github.com/Wisieneu/natours',
      description: 'A practice back-end node.js project',
    },
    {
      title: 'Chandra',
      details: 'Jan-Feb 2023 / In cooperation / Practice',
      sourceUrl: 'https://github.com/Wisieneu/chandra',
      description: 'A practice collaborative fullstack social media app',
    },
    {
      title: 'Forkify',
      details: 'May 2023 / Personal / Practice',
      sourceUrl: 'https://github.com/Wisieneu/forkify',
      description: 'A JS practice MVC architecture project',
    },
    {
      title: 'Mapty',
      details: 'May 2023 / Personal / Practice',
      sourceUrl: 'https://github.com/Wisieneu/mapty',
      description: 'A JS practice MVC architecture project',
    },
    {
      title: 'Timberman Bot',
      details: 'Nov 2022 / Personal / Practice',
      sourceUrl: 'https://github.com/Wisieneu/timberman-bot',
      description:
        'An Opencv bot that automatically plays perfect timberman for you',
    },
    {
      title: 'Selenium booking wrapper',
      details: 'Oct 2023 / Personal / Niche',
      sourceUrl: 'https://github.com/Wisieneu/booking.com-selenium-wrapper',
      description: 'A Selenium wrapper script',
    },
    {
      title: 'Markdown notes app',
      details: 'Dec 2023 / Personal / Niche',
      sourceUrl: 'https://github.com/Wisieneu/react-notes-app',
      description: 'A small React practice project',
    },
  ]

  return (
    <div className="content projects-content-container">
      <ul>
        {projects.map((project, index) => {
          return (
            <li key={index} className="project">
              <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                {project.details}
                <span> {project.title}</span>
                <h4>{project.description}</h4>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
