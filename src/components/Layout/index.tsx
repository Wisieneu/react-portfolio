import Content from '../Content'
import Title from '../Title'
import Nav from '../Nav'
import Modal from '../ContactForm'

import { pageType } from '../../shared/types/page.type'

import { useEffect, useState } from 'react'

import './index.scss'

export default function Layout() {
  function isOfTypePageType(keyInput: string): keyInput is pageType {
    return ['Home', 'About', 'Projects', 'Contact'].includes(keyInput)
  }

  const pathname = window.location.pathname
  const defaultPage: pageType = 'Home'

  function getPathName(): pageType {
    return isOfTypePageType(pathname)
      ? (`${pathname.slice(1, 2).toUpperCase()}${pathname.slice(
          2
        )}` as pageType)
      : defaultPage
  }

  const [currentPage, setCurrentPage] = useState<pageType>(getPathName())
  const [isModalOpen, toggleModal] = useState(false)

  // Changes site's tab icon and title based on currentPage state
  useEffect(() => {
    const favicon = document.querySelector(
      "link[rel~='icon']"
    ) as HTMLLinkElement

    switch (currentPage) {
      case 'About':
        document.title = 'About me?'
        favicon.href = '/icon_goose.png'
        break
      case 'Contact':
        document.title = 'Send me an e-mail right now!!!!!!!!!!!'
        favicon.href = '/icon_rat.png'
        break
      case 'Projects':
        document.title = 'My protégés'
        favicon.href = '/icon_cat.png'
        break
      default:
        document.title = "Bartłomiej's Portfolio"
        favicon.href = '/icon_capybara.gif'
    }
  }, [currentPage])

  function switchPage(pageName: pageType) {
    setCurrentPage(pageName)
    history.pushState({}, '', `/${pageName.toLowerCase()}`)
  }

  return (
    <>
      <section className="page-header">
        <Title />
        <Nav currentPage={currentPage} switchPage={switchPage} />
      </section>

      <Content currentPage={currentPage} toggleModal={toggleModal} />
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </>
  )
}
