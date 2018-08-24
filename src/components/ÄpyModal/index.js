import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'react-emotion';
import ÄpyCarousel from '../ÄpyCarousel';
import ModalToggle from './Toggle';
import { media, breakpoints } from '../../styles/main';
import Logo from '../../../assets/logos/logo-ajaton-musta.png';

const fadeShow = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -40px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeHide = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
`;

const fadeShowBackdrop = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeHideBackdrop = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${p => p.transition} 0.35s ease-in-out;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  animation: ${p => p.transition} 0.35s ease-in-out;
  transform-origin: center bottom;
`;

const ModalMain = styled.div`
  position: fixed;
  background: white;
  margin 0 auto;
  width: ${p => p.modalWidth};
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5em;

  @media (max-height: 1170px) {
    padding: 1em;
    max-height: 100vh;
    font-size: 0.8em;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1170px) and (orientation: landscape) {
    flex-direction: row;
  }

  @media only screen and (min-device-width: 1170px) {
    justify-content: start;
  }

  @media only screen and (max-device-width: 1170px) and (orientation: landscape) {
    justify-content: start;
    flex-wrap: nowrap;
  }
`;

const ModalKuvaus = styled.p`
  width: 100%;
  margin: 0;
  padding: 1em 0 2em 0;
  font-size: 1.2em;
  line-height: 1.5;

  @media (max-width: 1170px) and (orientation: landscape) {
    padding: 0 0 0 1em;
  }

  @media (max-width: 1170px) and (orientation: portrait) {
    padding: 1em 0 1em 0;
  }

  ${media.phone(css`
    font-size: 1em;
  `)};
`;

const ModalHeader = styled.h3`
  text-align: center;
  font-size: 1.8em;
  font-family: 'Lato Black';
  margin: 0;

  ${media.tablet(css`
    font-size: 1em;
  `)};

  ${media.phone(css`
    font-size: 0.8em;
  `)};
`;

const Divider = styled.hr`
  width: 60%;
  color: grey;
  margin: 1em 20%;
  height: 2px;

  ${media.tablet(css`
    margin: 8px 20% 1em 20%;
  `)};
`;

const LogoModal = styled.img`
  position: absolute;
  bottom: 1em;
  right: 1em;
  width: 3em;

  ${media.tablet(css`
    width: 2em;
    bottom: 10px;
    right: 10px;
  `)};
`;

const cssShowModal = css`
  display: block;
`;

const cssHideModal = css`
  display: none;
`;

class ÄpyModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ModalRef = React.createRef();
    this.state = { modalWidth: '90%' };
  }

  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleEscClick);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleEscClick);
  }

  handleEscClick = e => {
    // 'esc' key maps to keycode 27
    if (e.keyCode == 27) {
      const { handleModalClose } = this.props;
      handleModalClose();
    }
  };

  handleClickOutside = e => {
    const clientX = e.clientX;
    const clientY = e.clientY;
    const bRect = this.ModalRef.current.firstChild.getBoundingClientRect();
    const x = clientX > bRect.right || clientX < bRect.left;
    const y = clientY < bRect.top || clientY > bRect.bottom;

    if (x || y) {
      const { handleModalClose } = this.props;
      handleModalClose();
    }
  };

  handleWindowSizeChange = () => {
    const width = window.innerWidth;
    if (width < breakpoints.desktop) {
      this.setState({ modalWidth: '90%' });
    } else {
      this.setState({ modalWidth: '40%' });
    }
  };

  transitionSwitch = state => {
    switch (state) {
      case 'open':
        return { transMain: fadeShow, transBackdrop: fadeShowBackdrop };
      case 'closing':
        return { transMain: fadeHide, transBackdrop: fadeHideBackdrop };
      case 'hidden':
        return { transMain: undefined, transBackdrop: undefined };
    }
  };

  displaySwitch = state => {
    switch (state) {
      case 'open':
        return cssShowModal;
      case 'closing':
        return cssShowModal;
      case 'hidden':
        return cssHideModal;
    }
  };

  render() {
    const { äpy, imgCarousel, handleModalClose, modalState } = this.props;
    const { modalWidth } = this.state;
    const { transMain, transBackdrop } = this.transitionSwitch(modalState);
    const showHideClassName = this.displaySwitch(modalState);
    const modalProps = { modalWidth };

    return (
      <Fragment>
        <Modal
          innerRef={this.ModalRef}
          transition={transMain}
          className={`äpy__modal ${showHideClassName}`}
          style={{ pointerEvents: 'auto' }}
        >
          <ModalMain {...modalProps}>
            <ModalToggle toggle={handleModalClose} />
            <ModalHeader>
              {äpy.vuosi} - {äpy.lehti}
            </ModalHeader>
            <Divider />
            <ModalContent>
              <ÄpyCarousel imgCarousel={imgCarousel} />
              <ModalKuvaus>{äpy.lyhytKuvaus}</ModalKuvaus>
            </ModalContent>
            <LogoModal key="logo" src={Logo} alt="äpy" />
          </ModalMain>
        </Modal>
        <ModalBackdrop
          className={showHideClassName}
          transition={transBackdrop}
        />
      </Fragment>
    );
  }
}

export default ÄpyModal;

ÄpyModal.propTypes = {
  äpy: PropTypes.shape({
    lyhytKuvaus: PropTypes.string,
    lehti: PropTypes.string,
    vuosi: PropTypes.number
  }).isRequired,
  imgCarousel: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleModalClose: PropTypes.func.isRequired,
  modalState: PropTypes.string.isRequired
};
