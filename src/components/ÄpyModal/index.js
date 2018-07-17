import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'react-emotion';
import ApyCarousel from '../ÄpyCarousel';
import { ModalToggle } from '../Toggle';
import { media, breakpoints } from '../../styles/main';
import Logo from '../../../assets/images/äpyLogo.png';

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

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${props => props.transition} 0.35s ease-in-out;
  transform-origin: center bottom;
`;

const ModalMain = styled.div`
  position: fixed;
  background: white;
  margin 0 auto;
  width: ${props => props.modalWidth};
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 1em;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-device-width: 1366px) {
    justify-content: start;
    flex-wrap: nowrap;
  }

  @media only screen and (max-device-width: 1366px) and (orientation: landscape) {
    justify-content: start;
    flex-wrap: nowrap;
  }
`;

const ModalKuvaus = styled.p`
  width: 100%;
  margin: 0;
  padding: 0 1.5em;
  font-family: 'Lato Light';
  font-size: 1.1em;

  ${media.desktop(css`
    font-size: 1.5em;
  `)};

  @media (max-height: 1023px) and (orientation: landscape) {
    font-size: 1.1em;
  }

  @media (max-width: 1025px) and (orientation: portrait) {
    flex: 0 0 90%;
    padding-left: 0;
    padding-bottom: 2em;
  }

  @media (max-width: 736px) {
    font-size: 0.8em;
  }
`;

const ModalHeader = styled.h3`
  text-align: center;
  font-size: 1.5em;
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
  margin: 1em 20% 2em 20%;
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

class ApyModal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ModalRef = React.createRef();
    this.state = { modalWidth: '90%', modalHeight: '90%' };
  }

  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

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
      this.setState({ modalWidth: '90%', modalHeight: '90%' });
    } else {
      this.setState({ modalWidth: '50%', modalHeight: '50%' });
    }
  };

  transitionSwitch = state => {
    switch (state) {
      case 'open':
        return fadeShow;
      case 'closing':
        return fadeHide;
      case 'hidden':
        return undefined;
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
    const { apy, imgSizes, handleModalClose, modalState } = this.props;
    const { modalWidth, modalHeight } = this.state;
    const transition = this.transitionSwitch(modalState);
    const showHideClassName = this.displaySwitch(modalState);
    const modalProps = { modalWidth, modalHeight };
    const classActive = modalState === 'open' ? 'is-active' : '';

    return (
      <Modal
        innerRef={this.ModalRef}
        transition={transition}
        className={`äpy__modal ${showHideClassName}`}
      >
        <ModalMain {...modalProps}>
          <ModalToggle classActive={classActive} toggle={handleModalClose} />
          <ModalHeader>
            {apy.vuosi} - {apy.lehti}
          </ModalHeader>
          <Divider />
          <ModalContent>
            <ApyCarousel src={imgSizes.src} />
            <ModalKuvaus>{apy.lyhytKuvaus}</ModalKuvaus>
          </ModalContent>
          <LogoModal key="logo" src={Logo} alt="äpy" />
        </ModalMain>
      </Modal>
    );
  }
}

export default ApyModal;

ApyModal.propTypes = {
  apy: PropTypes.shape({
    lyhytKuvaus: PropTypes.string,
    lehti: PropTypes.string,
    vuosi: PropTypes.number
  }).isRequired,
  imgSizes: PropTypes.shape({
    aspectRatio: PropTypes.number,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
    srcSetWebp: PropTypes.string,
    srcWebp: PropTypes.string,
    tracedSVG: PropTypes.string
  }).isRequired,
  handleModalClose: PropTypes.func.isRequired,
  modalState: PropTypes.string.isRequired
};
