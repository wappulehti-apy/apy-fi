import React, { useState } from 'react'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { mq, breakpoints } from 'styles/breakpoints'

interface ValidationState {
  subjectValid: boolean | undefined
  emailValid: boolean | undefined
  messageValid: boolean | undefined
  formSubmitting: boolean
  formSubmitSuccess: boolean | undefined
  formValid: boolean
}

const ContactForm = () => {
  const [validationState, setValidationState] = useState<ValidationState>({
    subjectValid: undefined,
    emailValid: undefined,
    messageValid: undefined,
    formSubmitting: false,
    formSubmitSuccess: undefined,
    formValid: false,
  })

  const {
    subjectValid,
    emailValid,
    messageValid,
    formSubmitting,
    formSubmitSuccess,
    formValid,
  } = validationState

  const validateField = (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value

    switch (e.target.name) {
      case 'subject': {
        const subjectValid = value ? true : false
        setValidationState((prev) => ({ ...prev, subjectValid }))
        break
      }
      case 'sender': {
        const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? true
          : false
        setValidationState((prev) => ({ ...prev, emailValid }))
        break
      }
      case 'body': {
        const messageValid = value ? true : false
        setValidationState((prev) => ({ ...prev, messageValid }))
        break
      }
    }

    setValidationState((prev) => ({
      ...prev,
      formValid:
        !!prev.subjectValid && !!prev.emailValid && !!prev.messageValid,
    }))
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const form = document.getElementById('contact-form') as HTMLFormElement
    if (!form) {
      return
    }

    const formData = new FormData(form)
    setValidationState((prev) => ({ ...prev, formSubmitting: true }))

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      // @ts-ignore
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setTimeout(() => {
          setValidationState((prev) => ({
            ...prev,
            formSubmitSuccess: true,
          }))
        }, 300)
      })
      .catch(() =>
        setValidationState((prev) => ({
          ...prev,
          formSubmitSuccess: false,
        }))
      )
      .finally(() =>
        setValidationState((prev) => ({
          ...prev,
          formSubmitting: false,
        }))
      )
  }

  return (
    <Form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <Ul>
        <li>
          <input type="hidden" name="form-name" value="contact" />
        </li>
        <li>
          <label htmlFor="name">Nimi</label>
          <div>
            <input
              type="text"
              id="name"
              name="subject"
              placeholder=""
              onBlur={validateField}
              required
            />
            {subjectValid === false && (
              <ValidationError>Viestissäsi on oltava nimi.</ValidationError>
            )}
          </div>
        </li>
        <li>
          <label htmlFor="email">Sähköposti</label>
          <div>
            <input
              type="text"
              id="email"
              name="sender"
              placeholder=""
              onBlur={validateField}
            />
            <br />
            {emailValid === false && (
              <ValidationError>Anna pätevä sähköposti.</ValidationError>
            )}
          </div>
        </li>
        <li>
          <label htmlFor="message">Viesti</label>
          <div>
            <textarea
              rows={6}
              id="message"
              spellCheck="false"
              name="body"
              onChange={validateField}
              required
            />
            {messageValid === false && (
              <ValidationError>Viestissäsi on oltava viesti.</ValidationError>
            )}
          </div>
        </li>
        {formSubmitSuccess && (
          <li>
            <label htmlFor="dummy" />
            <SuccessMessage>Viesti lähetetty onnistuneesti!</SuccessMessage>
          </li>
        )}
        {formSubmitSuccess === false && (
          <li>
            <label htmlFor="dummy" />
            <ErrorMessage>Jotain meni pieleen - yritä uudestaan.</ErrorMessage>
          </li>
        )}
        <li>
          <A target="_blank" href="/tietosuojaseloste.pdf">
            Tietosuojaseloste
          </A>
        </li>
        <li>
          <ButtonBackground disabled={formValid === false || formSubmitSuccess}>
            {formSubmitting ? (
              <LoadingSpinner />
            ) : (
              <ButtonText>Lähetä</ButtonText>
            )}
          </ButtonBackground>
        </li>
      </Ul>
    </Form>
  )
}

const expand = keyframes`
  from {
    transform: scale(0.95) translateX(-50px);
    opacity: 0;
  }
`

const load = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const LoadingSpinner = styled.div`
  right: 0;
  width: 4em;
  height: 4em;
  border-top: 0.7em solid rgba(255, 255, 255, 0.2);
  border-right: 0.7em solid rgba(255, 255, 255, 0.2);
  border-bottom: 0.7em solid rgba(255, 255, 255, 0.2);
  border-left: 0.7em solid #ffffff;
  margin: 0 auto;
  animation: ${load} 1.4s infinite linear;
  border-radius: 50%;
  font-size: 5px;
  text-indent: -9999em;
  transform: translateZ(0);
`

const Form = styled.form`
  width: 100%;
  margin-top: 30px;

  input:not([type='radio']):not([type='file']),
  textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid grey;
    border-radius: 2px;
    font-family: inherit;
    font-size: inherit;
  }

  textarea {
    resize: vertical;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }
`

const ButtonBackground = styled.button`
  min-width: 8em;
  min-height: 3.5em;
  padding: 5px 0;
  border: none;
  margin-top: 20px;
  background: ${(p) => p.theme.colors.highlight};
  border-radius: 2px;
  float: left;
  letter-spacing: 0.09em;

  ${mq('tablet')} {
    margin-top: 0;
    margin-left: 150px;
    float: right;
  }

  &:disabled {
    background: #d1cdcd;
  }
`

const ButtonText = styled.span`
  color: #f2f2f2;
  font-weight: 900;
  text-transform: uppercase;
`

const Ul = styled.ul`
  padding: 0;
  margin: 0 auto;
  list-style-type: none;

  & li {
    display: flex;
    flex-wrap: wrap;
    padding: 8px 0 8px 0;

    &:last-child {
      padding: 0;
    }

    label {
      max-width: 150px;
      flex: 1 0 ${breakpoints.tablet}px;
      margin-bottom: 5px;
    }

    label + * {
      max-width: 400px;
      flex: 1 0 100%;
      flex-wrap: nowrap;
    }
  }
`

const A = styled.a`
  margin-bottom: 10px;
  color: ${(p) => p.theme.colors.highlight};

  ${mq('tablet')} {
    margin-left: 150px;
  }
`

const SuccessMessage = styled.p`
  margin: 0;
  animation: ${expand} 0.5s ease-in-out;
  color: #26a65b;
  font-size: 0.9em;
  opacity: 0.8;
`

const ErrorMessage = styled.p`
  margin: 0;
  animation: ${expand} 0.5s ease-in-out;
  color: #dc3023;
  font-size: 0.9em;
  opacity: 0.8;
`

const ValidationError = styled.span`
  margin: 10px 0;
  color: red;
  font-size: 0.8em;
  font-style: italic;
`

export default ContactForm
