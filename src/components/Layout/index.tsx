import Content from '../Content'
import Title from '../Title'
import Nav from '../Nav'
import Modal from '../ContactForm'

import { useState } from 'react'

import './index.scss'
import { pageType } from '../../shared/types/page.type'

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
