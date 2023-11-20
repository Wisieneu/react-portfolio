import './index.scss'

export default function Nav({ currentPage, setCurrentPage }) {
  function isCurrent(pageName) {
    return currentPage === pageName ? true : false
  }

  const navElementsData = [
    {
      name: 'home',
      buttonContent: 'Home',
    },
  ]

  const navElementsMarkup = navElementsData.map((element, index) => {
    return (
      <li key={index + 1} className={`nav-el ${currentPage === element.name}`}>
        <button onClick={setCurrentPage}>Home</button>
      </li>
    )
  })

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li>
          {isCurrent('home') ? (
            <p>◑____◑</p>
          ) : (
            <button onClick={setCurrentPage}>Home</button>
          )}
        </li>
        <li>
          {isCurrent('about') ? (
            <p>◑____◑</p>
          ) : (
            <button onClick={setCurrentPage}>About</button>
          )}
        </li>
        <li>
          {isCurrent('projects') ? (
            <p>◑____◑</p>
          ) : (
            <button onClick={setCurrentPage}>Projects</button>
          )}
        </li>
        <li>
          {isCurrent('home') ? (
            <p>◑____◑</p>
          ) : (
            <button onClick={setCurrentPage}>Home</button>
          )}
        </li>
      </ul>
    </nav>
  )
}
