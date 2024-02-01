import { NavProps } from '../../shared/interfaces/props.interface'
import { pageType } from '../../shared/types/page.type'

import './index.scss'

export default function Nav({ currentPage, switchPage }: NavProps) {
  function isCurrent(pageName: string) {
    return currentPage === pageName ? true : false
  }

  const navElementsMarkup = ['home', 'about', 'projects', 'contact'].map(
    (element: string, index: number) => {
      return (
        <li key={index + 1}>
          <button
            onClick={() => switchPage(element as pageType)}
            className={`${isCurrent(element) ? 'active' : 'inactive'}`}
          >
            {isCurrent(element)
              ? '(⌒_⌒;)'
              : `${element[0].toUpperCase()}${element.slice(1)}`}
          </button>
        </li>
      )
    }
  )

  return (
    <nav className="nav-container">
      <ul className="nav-list">{navElementsMarkup}</ul>
    </nav>
  )
}
