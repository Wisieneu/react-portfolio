import { pageType } from '../types/page.type'

export type toggleModalFunction = React.Dispatch<React.SetStateAction<boolean>>

export interface NavProps {
  currentPage: pageType
  switchPage: (pageName: pageType) => void
}

export interface ContactContentProps {
  toggleModal: toggleModalFunction
}