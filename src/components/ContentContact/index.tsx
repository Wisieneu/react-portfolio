import { ContactContentProps } from '../../shared/interfaces/props.interface'

import './index.scss'

export default function ContactContent({ toggleModal }: ContactContentProps) {
  return (
    <div className="content contact-content-container">
      <p>
        (By using this form, I guarantee to contact you back. Usable once every
        12h)
      </p>
      <h1>Contact me:</h1>
      <button
        className="contact-form-open-btn"
        onClick={() => toggleModal(true)}
      >
        Show contact form ↗
      </button>
    </div>
  )
}
