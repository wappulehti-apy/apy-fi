import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from 'emotion';
import { css } from '@emotion/core';
import ÄpyCarousel from '../ÄpyCarousel';
import ModalToggle from './Toggle';
import { media, breakpoints } from '../../styles/main';
import getScrollbarWidth from 'get-scrollbar-width';

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
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${p => p.animation} 0.25s ease-in-out;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;
  animation: ${p => p.animation} 0.25s ease-in-out;
  transform-origin: center bottom;
`;

const ModalMain = styled.div`
  position: fixed;
  background: white;
  margin: 0 auto;
  width: ${p => p.modalWidth};
  height: auto;
  max-height: 100vh;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5em;
  border-radius: 2px;

  @media (max-height: 1170px) {
    max-height: 100vh;
  }

  ${media.giant(css`
    padding: 2.5em;
  `)};

  ${media.desktop(css`
    padding: 1em;
  `)};

  ${media.tablet(css`
    padding: 0.5em;
  `)};

  ${media.phone(css`
    padding: 1em;
  `)};
`;

const ModalContent = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-rows: fit-content(20%);

  grid-template-areas:
    'carousel'
    'text';

  ${media.landscape(css`
    grid-template-areas: 'carousel text';
  `)};

  ${media.min_desktop(css`
    grid-template-areas:
      'carousel'
      'text';
  `)};

  @media (min-aspect-ratio: 2/1) {
    grid-template-areas: 'carousel text';
  }
`;

const ModalKuvaus = styled.p`
  width: 100%;
  margin: 0;
  padding: 1em 0 0 0;
  font-size: 1.2em;
  line-height: 1.5;
  grid-area: text;

  @media (max-width: 1170px) and (orientation: landscape) {
    padding: 0 0 0 1em;
  }

  @media (max-width: 1170px) and (orientation: portrait) {
    padding: 1em 0 0 0;
  }

  @media (min-aspect-ratio: 2/1) {
    padding: 0 0 0 1em;
  }

  ${media.tablet(css`
    font-size: 1em;
  `)};
`;

const ModalHeader = styled.h3`
  text-align: center;
  font-size: 1.8em;
  font-family: 'Lato Black';
  margin: 0;
  padding-bottom: 1em;

  ${media.tablet(css`
    font-size: 1em;
  `)};

  ${media.phone(css`
    font-size: 0.8em;
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
      this.setState({ modalWidth: '50%' });
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

  disableScrolling(state) {
    var currentBrowserScrollbarWidth = getScrollbarWidth();
    console.log(currentBrowserScrollbarWidth); // value depends on browser, 15 pixels is common
    switch (state) {
      case 'open':
        document.body.style.overflow = 'hidden';
        // Scrollbar is approximately 15px wide.
        // It gets removed with overflow: hidden so we
        // add margin to body to prevent it from jumping
        // on modal open.
        document.body.style.marginRight = '15px';
        document.documentElement.style.overflow = 'hidden';
        break;
      case 'closing':
        document.body.style.overflow = null;
        document.body.style.marginRight = '0';
        document.documentElement.style.overflow = null;
        break;
    }
  }

  render() {
    const { äpy, imgCarousel, handleModalClose, modalState } = this.props;
    const { modalWidth } = this.state;
    const { transMain, transBackdrop } = this.transitionSwitch(modalState);
    const showHideClassName = this.displaySwitch(modalState);
    const modalProps = { modalWidth };

    if (typeof document !== 'undefined') {
      this.disableScrolling(modalState);
    }

    return (
      <Fragment>
        <Modal
          ref={this.ModalRef}
          animation={transMain}
          className={`äpy__modal ${showHideClassName}`}
          style={{ pointerEvents: 'auto' }}
        >
          <ModalMain {...modalProps}>
            <ModalToggle toggle={handleModalClose} />
            <ModalHeader>
              {äpy.vuosi} - {äpy.lehti}
            </ModalHeader>
            <ModalContent>
              <ÄpyCarousel imgCarousel={imgCarousel} />
              <ModalKuvaus>{äpy.lyhytKuvaus}</ModalKuvaus>
            </ModalContent>
          </ModalMain>
        </Modal>
        <ModalBackdrop
          className={showHideClassName}
          animation={transBackdrop}
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
    vuosi: PropTypes.number,
  }).isRequired,
  imgCarousel: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleModalClose: PropTypes.func.isRequired,
  modalState: PropTypes.string.isRequired,
};
