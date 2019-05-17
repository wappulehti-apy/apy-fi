import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { keyframes } from 'emotion';
import { media, breakpoints } from '../../styles/main';

const expand = keyframes`
  from {
    transform: scale(0.95) translateX(-50px);
    opacity: 0;
  }
`;

const load = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  font-size: 5px;
  text-indent: -9999em;
  width: 4em;
  height: 4em;
  margin: 0 auto;
  border-radius: 50%;
  background: #ffffff;
  background: linear-gradient(to right, #ffffff 10%, rgba(36, 42, 43, 0) 42%);
  right: 0;
  animation: ${load} 1.4s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #ffffff;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  &:after {
    background: #d1cdcd;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

const Form = styled.form`
  margin-top: 30px;
  max-width: 650px;

  input:not([type='radio']):not([type='file']),
  textarea {
    padding: 15px;
    border: 1px solid grey;
    border-radius: 2px;
    font-family: inherit;
    font-size: inherit;
    width: 100%;
  }

  textarea {
    resize: vertical;
  }

  textarea:focus,
  input:focus {
    outline: none;
  }

  ${media.phone(css`
    input[type='file'] {
      margin-top: 6px;
      width: 100%;
    }
  `)};
`;

const ButtonBackground = styled.button`
  border: none;
  background: #333;
  letter-spacing: 0.09em;
  border-radius: 2px;
  min-width: 8em;
  min-height: 3.5em;
  padding: 5px 0;
  float: right;

  ${media.phone(css`
    float: left;
    margin-top: 20px;
  `)};

  &:disabled {
    background: #d1cdcd;
  }
`;

const ButtonText = styled.span`
  color: #f2f2f2;
  text-transform: uppercase;
  font-weight: 900;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;

  & li {
    display: flex;
    flex-wrap: wrap;
    padding: 8px 0 8px 0;

    &:last-child {
      padding: 0;
    }

    label {
      flex: 1 0 ${breakpoints.tablet}px;
      max-width: 150px;
      margin-bottom: 5px;
    }

    label + * {
      flex: 1 0 100%;
      flex-wrap: nowrap;
      max-width: 400px;
    }
  }
`;

const Info = styled.div`
  visibility: hidden;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: opacity 0.2s ease-out;

  h2 {
    margin-top: 20px;
  }

  &.active {
    visibility: visible;
    max-height: 100%;
    opacity: 1;
  }
`;

const FormError = styled.span`
  font-size: 0.8em;
  font-style: italic;
  color: red;
  margin: 10px 0;
`;

const Small = styled.span`
  font-size: 0.8em;
  color: grey;
  margin: 10px 0;
  font-style: italic;

  ${media.phone(css`
    margin-left: 10px;
  `)};
`;

const SuccessMessage = styled.p`
  margin: 0;
  font-size: 0.9em;
  font-style: italic;
  opacity: 0.8;
  color: #26a65b;
  animation: ${expand} 0.5s ease-in-out;

  ${media.phone(css`
    margin-left: 0;
  `)};
`;

const ErrorMessage = styled.p`
  margin: 0;
  font-size: 0.9em;
  font-style: italic;
  opacity: 0.8;
  color: #dc3023;
  animation: ${expand} 0.5s ease-in-out;

  ${media.phone(css`
    margin-left: 0;
  `)};
`;

const RadioInput = css`
  margin-right: 20px;
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    const { markdown } = props;

    const htmlToimitus = markdown.filter(
      e => e.node.frontmatter.title === 'toimitus'
    )[0].node.html;

    const htmlRahasto = markdown.filter(
      e => e.node.frontmatter.title === 'ävystykset'
    )[0].node.html;

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
    };

    this.FormRef = React.createRef();

    this.handleChange = this.handleChange;
    this.handleSubmit = this.handleSubmit;
  }

  handleRadioChange = e => {
    this.validateField(e);
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { formValid } = this.state;
    if (formValid) {
      this.setState({ formSubmitted: true });
      const formData = new FormData(e.target);
      const about = formData.get('about');
      formData.delete('about');
      const to =
        about === 'ävystykset'
          ? 'timo.h.risk@gmail.com'
          : 'timo.h.risk@gmail.com';
      formData.set('to', to);

      //this.setState({ emailSent: true });

      fetch('https://sendemail.apy.fi/', {
        method: 'post',
        mode: 'cors',
        body: formData,
      })
        .then(r => r.json())
        .then(responseJson => {
          if (responseJson.status === 1) {
            // Clear form fields and reset to initial state
            this.FormRef.current.reset();
            this.setState({
              emailSent: true,
              formSubmitted: false,
              formValid: false,
            });
            // Reset the success message after a timeout
            setTimeout(() => {
              this.setState({ emailSent: false });
            }, 6000);
          } else {
            this.setState({ emailSent: false });
          }
        })
        .catch(error => {
          this.setState({ submitError: true });
        });
    }
  };

  validateField = e => {
    const value = e.target.value;
    let {
      aboutValid,
      subjectValid,
      emailValid,
      messageValid,
      filesValid,
    } = this.state;

    switch (e.target.name) {
      case 'about': {
        aboutValid = value ? true : false;
        break;
      }
      case 'subject': {
        subjectValid = value ? true : false;
        break;
      }
      case 'sender': {
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
          ? true
          : false;
        break;
      }
      case 'body': {
        messageValid = value ? true : false;
        break;
      }
      case 'files[]': {
        const value = e.target.value;
        if (!value) {
          filesValid = true;
        } else {
          var ext = value.match(/\.([^\.]+)$/)[1];
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
              filesValid = true;
              break;
            default:
              filesValid = false;
          }
        }
        break;
      }
    }
    this.setState(
      { aboutValid, subjectValid, emailValid, messageValid, filesValid },
      this.validateForm
    );
  };

  validateForm() {
    const {
      aboutValid,
      subjectValid,
      emailValid,
      messageValid,
      filesValid,
    } = this.state;
    this.setState({
      formValid:
        aboutValid && subjectValid && emailValid && messageValid && filesValid,
    });
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
    } = this.state;

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
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  markdown: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
          path: PropTypes.string,
        }),
        html: PropTypes.string,
      }).isRequired,
    })
  ).isRequired,
};
