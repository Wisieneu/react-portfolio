import {
  BaseSyntheticEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import emailjs from '@emailjs/browser'

import './index.scss'

interface ContactContentProps {
  toggleModal: (arg1: boolean) => void
}

export default function ContactForm({ toggleModal }: ContactContentProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isFormDataValid, setValidStatus] = useState(false)

  /**
   * Checks if the arg string could be a real email
   * @param {string} email
   * @returns {boolean}
   */
  function validateEmail(email: string): boolean {
    return Boolean(
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    )
  }

  /**
   * Each time form input changes, checks if new data passes validation
   */
  useEffect(() => {
    if (
      formState.name.length > 0 &&
      validateEmail(formState.email) &&
      formState.message.length > 5
    ) {
      setValidStatus(true)
    } else {
      setValidStatus(false)
    }
  }, [formState])

  /**
   * Updates state with each keystroke
   * @param event
   */
  function handleFormChange(event: BaseSyntheticEvent) {
    console.log(event)
    console.log(typeof event)
    setFormState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }))
  }

  const form = useRef<HTMLFormElement>(null)

  /**
   * Sends an email.
   * Sets 'lastEmailTime' localStorage item.
   * @param event
   */
  function sendEmail(event: FormEvent) {
    event.preventDefault()
    const lastEmailSentTime = Number(localStorage.getItem('lastEmailTime'))
    const hoursSinceLastMail =
      (Date.now() - lastEmailSentTime) / (1000 * 60 * 60)

    // abort the request if an email has been sent during last 12 hours
    if (lastEmailSentTime && hoursSinceLastMail < 12) {
      return console.log('Service temporary unavailable.')
    }
    emailjs
      .sendForm(
        'service_z54omls',
        'contact_form',
        form.current!,
        '-MsV3Hb3BbcGyzzFS'
      )
      .then(
        (result) => {
          console.log(result)
          localStorage.setItem('lastEmailTime', Date.now().toString())
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className="modal-background">
      <div className="modal-container">
        <button
          onClick={() => {
            toggleModal(false)
          }}
          className="close-btn"
        >
          ╳
        </button>

        <header>CONTACT FORM</header>

        <form id="form" ref={form} onSubmit={sendEmail}>
          <input
            id="name"
            name="user_name"
            type="text"
            placeholder="NAME"
            value={formState.name}
            onChange={(e) => handleFormChange(e)}
          />
          <input
            id="email"
            name="user_email"
            type="text"
            placeholder="E-MAIL"
            value={formState.email}
            onChange={(e) => handleFormChange(e)}
          />
          <textarea
            id="message"
            name="message"
            placeholder="MESSAGE"
            value={formState.message}
            onChange={(e) => handleFormChange(e)}
          ></textarea>
          <input
            type="hidden"
            name="date_time"
            value={new Date().toLocaleDateString('en-us', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}
          />
          <input
            disabled={!isFormDataValid}
            id="submit"
            type="submit"
            value="SEND"
          />
        </form>
      </div>
    </div>
  )
}
