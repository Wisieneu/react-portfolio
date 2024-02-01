import { toggleModalFunction } from '../../shared/interfaces/props.interface'
import { pageType } from '../../shared/types/page.type'
import ContentAbout from '../ContentAbout'
import ContentContact from '../ContentContact'
import ContentHome from '../ContentHome'
import ContentProjects from '../ContentProjects'

import './index.scss'

interface ContentProps {
  currentPage: pageType
  toggleModal: toggleModalFunction
}

export default function Content({ currentPage, toggleModal }: ContentProps) {
  return (
    <div id="content-container" className={`scroll-to-${currentPage}`}>
      <ContentHome />
      <ContentAbout />
      <ContentProjects />
      <ContentContact toggleModal={toggleModal} />
    </div>
  )
}
