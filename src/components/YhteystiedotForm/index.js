import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'react-emotion';
import { media, breakpoints } from '../../styles/main';

const expand = keyframes`
  from {
    transform: scale(0.95) translateX(-50px);
    opacity: 0;
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
`;

const Button = styled.button`
  margin-left: auto;
  margin-top: 10px;
  padding: 8px 16px;
  border: none;
  background: #333;
  color: #f2f2f2;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  border-radius: 2px;
  font-weight: 900;

  &:disabled {
    display: none;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 auto;

  & li {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 8px 0 8px 0;

    label {
      flex: 1 0 ${breakpoints.tablet}px;
      max-width: 150px;
      margin-bottom: 5px;
    }

    label + * {
      flex: 1 0 180px;
      flex-wrap: nowrap;
      max-width: 500px;
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

const FormError = styled.p`
  font-size: 0.8em;
  font-style: italic;
  color: red;
  margin: 10px 0;
`;

const SuccessMessage = styled.p`
  margin: 10px auto 10px auto;
  font-size: 1em;
  font-style: italic;
  opacity: 0.8;
  color: #26a65b;
  animation: ${expand} 0.5s ease-in-out;

  ${media.phone(css`
    margin-left: 0;
  `)};
`;

const ErrorMessage = styled.p`
  margin: 10px auto 10px auto;
  font-size: 1em;
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
      e => e.node.frontmatter.title === 'rähästö'
    )[0].node.html;

    this.state = {
      selectedOption: '',
      aboutValid: undefined,
      subjectValid: undefined,
      emailValid: undefined,
      messageValid: undefined,
      formValid: undefined,
      emailSent: undefined,
      htmlToimitus,
      htmlRahasto
    };

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
      const formData = new FormData(e.target);
      const about = formData.get('about');
      formData.delete('about');
      const to =
        about === 'rähästö' ? 'timo.risk@gmail.com' : 'timo.h.risk@gmail.com';
      formData.set('to', to);

      this.setState({ emailSent: true });

      /*fetch('https://sendemail.apy.fi/', {
        method: 'post',
        mode: 'cors',
        body: formData
      }).then(r => r.json())
        .then(responseJson => {
          if (responseJson.status === 1) {
            this.setState({ emailSent: true });
          } else {
            this.setState({ emailSent: false });
          }
        })
        .catch(error => {
          this.setState({ emailSent: false });
        });*/
    }
  };

  validateField = e => {
    const value = e.target.value;
    let { aboutValid, subjectValid, emailValid, messageValid } = this.state;

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
    }
    this.setState(
      { aboutValid, subjectValid, emailValid, messageValid },
      this.validateForm
    );
  };

  validateForm() {
    const { aboutValid, subjectValid, emailValid, messageValid } = this.state;
    this.setState({
      formValid: aboutValid && subjectValid && emailValid && messageValid
    });
  }

  render() {
    const {
      selectedOption,
      aboutValid,
      subjectValid,
      emailValid,
      messageValid,
      formValid,
      emailSent,
      htmlToimitus,
      htmlRahasto
    } = this.state;

    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} noValidate autoComplete="off">
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
                  id="radio-rähästö"
                  name="about"
                  value="rähästö"
                  className={RadioInput}
                  checked={selectedOption === 'rähästö'}
                  onChange={this.handleRadioChange}
                />
                <label htmlFor="radio-rähästö">Rähästöä / avustushakemus</label>
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
              <label htmlFor="dummy" />
              {emailSent && (
                <SuccessMessage>Viesti lähetetty onnistuneesti!</SuccessMessage>
              )}
              {emailSent === false && (
                <ErrorMessage>
                  Jotain meni pieleen - yritä uudestaan.
                </ErrorMessage>
              )}
              <Button disabled={formValid === undefined || formValid === false}>
                Lähetä
              </Button>
            </li>
          </Ul>
        </Form>
        <Info
          dangerouslySetInnerHTML={{ __html: htmlToimitus }}
          className={selectedOption === 'toimitus' ? 'active' : null}
        />
        <Info
          dangerouslySetInnerHTML={{ __html: htmlRahasto }}
          className={selectedOption === 'rähästö' ? 'active' : null}
        />
      </Fragment>
    );
  }
}

/*
<li>
  <label htmlFor="attachment">Liitteet</label>
  <div>
    <input
      id="attachment"
      name="file"
      type="file"
      accept="application/pdf"
      onBlur={this.validateField}
    />
    <Small>Vapaaehtoinen</Small>
  </div>
</li>
*/

export default ContactForm;

ContactForm.propTypes = {
  markdown: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
          path: PropTypes.string
        }),
        html: PropTypes.string
      }).isRequired
    })
  ).isRequired
};
