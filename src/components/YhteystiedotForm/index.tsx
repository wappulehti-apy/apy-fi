// @ts-nocheck
import React from 'react'

import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { mq, breakpoints } from 'styles/breakpoints'

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
  margin: 0 auto;
  animation: ${load} 1.4s infinite linear;
  background: #ffffff;
  background: linear-gradient(to right, #ffffff 10%, rgba(36, 42, 43, 0) 42%);
  border-radius: 50%;
  font-size: 5px;
  text-indent: -9999em;
  transform: translateZ(0);

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    content: '';
  }

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 75%;
    height: 75%;
    margin: auto;
    background: #d1cdcd;
    border-radius: 50%;
    content: '';
  }
`

const Form = styled.form`
  max-width: 650px;
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
  background: #333;
  border-radius: 2px;
  float: left;
  letter-spacing: 0.09em;

  ${mq('desktop')} {
    margin-top: 0;
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

const Info = styled.div`
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: opacity 0.2s ease-out;
  visibility: hidden;

  h2 {
    margin-top: 20px;
  }

  &.active {
    max-height: 100%;
    opacity: 1;
    visibility: visible;
  }
`

const FormError = styled.span`
  margin: 10px 0;
  color: red;
  font-size: 0.8em;
  font-style: italic;
`

const Small = styled.span`
  margin: 10px 0;
  color: grey;
  font-size: 0.8em;
  font-style: italic;
`

const SuccessMessage = styled.p`
  margin: 0;
  animation: ${expand} 0.5s ease-in-out;
  color: #26a65b;
  font-size: 0.9em;
  font-style: italic;
  opacity: 0.8;
`

const ErrorMessage = styled.p`
  margin: 0;
  animation: ${expand} 0.5s ease-in-out;
  color: #dc3023;
  font-size: 0.9em;
  font-style: italic;
  opacity: 0.8;
`

const RadioInput = css`
  margin-right: 20px;
`

class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    const { markdown } = props

    const htmlToimitus = markdown.filter(
      (e) => e.node.frontmatter.title === 'toimitus'
    )[0].node.html

    const htmlRahasto = markdown.filter(
      (e) => e.node.frontmatter.title === 'ävystykset'
    )[0].node.html

    this.state = {
      selectedOption: '',
      aboutValid: undefined,
      subjectValid: undefined,
      emailValid: undefined,
      messageValid: undefined,
      filesValid: true,
      formValid: undefined,
      formSubmitted: false,
      emailSent: false,
      submitError: false,
      htmlToimitus,
      htmlRahasto,
    }

    this.FormRef = React.createRef()

    this.handleChange = this.handleChange
    this.handleSubmit = this.handleSubmit
  }

  handleRadioChange = (e) => {
    this.validateField(e)
    this.setState({ selectedOption: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { formValid } = this.state
    if (formValid) {
      this.setState({ formSubmitted: true })
      const formData = new FormData(e.target)
      const about = formData.get('about')
      formData.delete('about')
      const to =
        about === 'ävystykset'
          ? 'timo.h.risk@gmail.com'
          : 'timo.h.risk@gmail.com'
      formData.set('to', to)

      //this.setState({ emailSent: true });

      fetch('https://sendemail.apy.fi/', {
        method: 'post',
        mode: 'cors',
        body: formData,
      })
        .then((r) => r.json())
        .then((responseJson) => {
          if (responseJson.status === 1) {
            // Clear form fields and reset to initial state
            this.FormRef.current.reset()
            this.setState({
              emailSent: true,
              formSubmitted: false,
              formValid: false,
            })
            // Reset the success message after a timeout
            setTimeout(() => {
              this.setState({ emailSent: false })
            }, 6000)
          } else {
            this.setState({ emailSent: false })
          }
        })
        .catch((error) => {
          this.setState({ submitError: true })
        })
    }
  }

  validateField = (e) => {
    const value = e.target.value
    let {
      aboutValid,
      subjectValid,
      emailValid,
      messageValid,
      filesValid,
    } = this.state

    switch (e.target.name) {
      case 'about': {
        aboutValid = value ? true : false
        break
      }
      case 'subject': {
        subjectValid = value ? true : false
        break
      }
      case 'sender': {
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? true
          : false
        break
      }
      case 'body': {
        messageValid = value ? true : false
        break
      }
      case 'files[]': {
        const value = e.target.value
        if (!value) {
          filesValid = true
        } else {
          const ext = value.match(/\.([^\.]+)$/)[1]
          switch (ext) {
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'tif':
            case 'gif':
            case 'mov':
            case 'mp4':
            case 'm4p':
            case 'm4v':
            case 'avi':
            case 'wmv':
            case 'pdf':
            case 'txt':
            case 'rtf':
            case 'doc':
            case 'docx':
            case 'zip':
              filesValid = true
              break
            default:
              filesValid = false
          }
        }
        break
      }
    }
    this.setState(
      { aboutValid, subjectValid, emailValid, messageValid, filesValid },
      this.validateForm
    )
  }

  validateForm() {
    const {
      aboutValid,
      subjectValid,
      emailValid,
      messageValid,
      filesValid,
    } = this.state
    this.setState({
      formValid:
        aboutValid && subjectValid && emailValid && messageValid && filesValid,
    })
  }

  render() {
    const {
      selectedOption,
      aboutValid,
      subjectValid,
      emailValid,
      messageValid,
      filesValid,
      formValid,
      formSubmitted,
      emailSent,
      submitError,
      htmlToimitus,
      htmlRahasto,
    } = this.state

    return (
      <>
        <Form
          ref={this.FormRef}
          onSubmit={this.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Ul>
            <li>
              <label>Asiani koskee</label>
              <div>
                <input
                  type="radio"
                  id="radio-toimitus"
                  name="about"
                  value="toimitus"
                  className={RadioInput}
                  checked={selectedOption === 'toimitus'}
                  onChange={this.handleRadioChange}
                  required
                />
                <label htmlFor="radio-toimitus">Toimitusta / Äpy-lehteä</label>
                <br />
                <input
                  type="radio"
                  id="radio-ävystykset"
                  name="about"
                  value="ävystykset"
                  className={RadioInput}
                  checked={selectedOption === 'ävystykset'}
                  onChange={this.handleRadioChange}
                />
                <label htmlFor="radio-ävystykset">
                  Ävystyksiä (avustushakemus)
                </label>
                <br />
                {aboutValid === false && (
                  <FormError>Valitse mitä asiasi koskee.</FormError>
                )}
              </div>
            </li>
            <li>
              <label htmlFor="otsikko">Otsikko</label>
              <div>
                <input
                  type="text"
                  id="title"
                  name="subject"
                  placeholder=""
                  onBlur={this.validateField}
                  required
                />
                {subjectValid === false && (
                  <FormError>Viestissäsi on oltava otsikko.</FormError>
                )}
              </div>
            </li>
            <li>
              <label htmlFor="phone">Sähköposti</label>
              <div>
                <input
                  type="text"
                  id="email"
                  name="sender"
                  placeholder=""
                  onBlur={this.validateField}
                />
                <br />
                {emailValid === false && (
                  <FormError>Anna pätevä sähköposti.</FormError>
                )}
              </div>
            </li>
            <li>
              <label htmlFor="message">Viesti</label>
              <div>
                <textarea
                  rows="6"
                  id="message"
                  spellCheck="false"
                  name="body"
                  onBlur={this.validateField}
                  required
                />
                {messageValid === false && (
                  <FormError>Viestissäsi on oltava viesti.</FormError>
                )}
              </div>
            </li>
            <li>
              <label htmlFor="attachment">
                Liitteet <Small>Vapaaehtoinen</Small>
              </label>
              <div>
                <input
                  id="attachment"
                  name="files[]"
                  type="file"
                  accept="image/*,video/*,.pdf,.txt,.rtf,.doc,.docx,.zip"
                  onChange={this.validateField}
                  multiple
                />
                <ButtonBackground
                  disabled={
                    formValid === undefined ||
                    formValid === false ||
                    formSubmitted === true
                  }
                >
                  {formSubmitted ? (
                    <LoadingSpinner />
                  ) : (
                    <ButtonText>Lähetä</ButtonText>
                  )}
                </ButtonBackground>
                {filesValid === false && (
                  <FormError>
                    Valitsemasi tiedostotyyppi ei ole tuettu. Vaihtoehdot ovat
                    .jpg, .jpeg, .png .tif, .gif, .mov, .mp4, .m4p, .m4v, .avi,
                    .wmv, .pdf, .txt, .rtf, .doc, .docx, ja .zip.
                  </FormError>
                )}
              </div>
            </li>
            <li>
              <label htmlFor="dummy" />
              {emailSent && (
                <SuccessMessage>Viesti lähetetty onnistuneesti!</SuccessMessage>
              )}
              {submitError === true && (
                <ErrorMessage>
                  Jotain meni pieleen - yritä uudestaan.
                </ErrorMessage>
              )}
            </li>
          </Ul>
        </Form>
        <Info
          dangerouslySetInnerHTML={{ __html: htmlToimitus }}
          className={selectedOption === 'toimitus' ? 'active' : null}
        />
        <Info
          dangerouslySetInnerHTML={{ __html: htmlRahasto }}
          className={selectedOption === 'ävystykset' ? 'active' : null}
        />
      </>
    )
  }
}

export default ContactForm
