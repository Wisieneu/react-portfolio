import Background from './components/Background'
import Title from './components/Title'
import Socials from './components/Socials'
import Nav from './components/Nav'

import { useState } from 'react'

import './App.scss'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <div className="page">
      <Background />
      <section className="page-header">
        <Title />
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </section>
      <Socials />
      <section className="content">
        {/* <ContentHome />
        <ContentAbout />
        <ContentProjects />
        <ContentContact />
        <ContentFAQ /> */}
      </section>
    </div>
  )
}

export default App

{
  /* <ContentHome />
        <ContentAbout />
        <ContentProjects />
        <ContentContact />
        <ContentFAQ /> */
}
