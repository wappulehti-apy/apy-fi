import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import ÄpyModal from '../ÄpyModal';
import { media, breakpoints } from '../../styles/main';

const ÄpyContainer = styled.div`
  position: relative;
  box-shadow: 0px 2px 20px 2px rgba(130, 126, 130, 0.2);

  /* ÄpyName */
  &:hover span {
    opacity: 1;
    transform: translateY(-5px);
  }

  /* ÄpyNameGradientBackground */
  &:hover div {
    opacity: 1;
  }

  img {
    border-radius: 2px;
  }
`;

const ÄpyNameGradientBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 2;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;

  opacity: 0;
  transition: all 0.2s ease-out;
`;

const ÄpyName = styled.span`
  position: absolute;
  left: 0;
  top: 1em;
  right: 0;
  z-index: 3;
  width: 100%;

  font-weight: 600;
  font-family: 'Montserrat Bold';
  color: white;
  white-space: nowrap;
  text-align: center;

  opacity: 0;

  ${media.giant(css`
    font-size: 0.75em;
  `)};

  ${media.desktop(css`
    font-size: 0.7em;
  `)};

  ${media.tablet(css`
    font-size: 0.6em;
  `)};

  ${media.phone(css`
    font-size: 0.5em;
  `)};
`;

const specialCss = css`
  font-size: 0.6em !important;
`;

class Äpy extends React.PureComponent {
  state = { modalState: 'hidden' };

  componentDidMount() {
    const onTouchDevice = window.innerWidth <= breakpoints.tablet;
    this.setState({ onTouchDevice });
  }

  hideModal = () => {
    const äpyGrid = document.getElementById('äpy__grid');
    äpyGrid.style.cssText = 'pointer-events: auto';
    this.setState({ modalState: 'closing' });
    // The timeout below isn't the same as in ÄpyModal css animation
    // because on chrome setting them equal produces flickering on modal close
    setTimeout(() => this.setState({ modalState: 'hidden' }), 230);
  };

  openModal = () => {
    const äpyGrid = document.getElementById('äpy__grid');
    // Prevents ÄpyNameGradientBackground and ÄpyName hover effects
    äpyGrid.style.cssText = 'pointer-events: none;';
    this.setState({ modalState: 'open' });
  };

  render() {
    const { äpy, imgGrid, imgCarousel } = this.props;
    const { modalState, onTouchDevice } = this.state;
    const handleModalClose = this.hideModal;
    const äpyLehtiVuosi = `${äpy.vuosi} - ${äpy.lehti}`;
    // 'Finnish Design Äpy' is a long name and to
    // prevent overflow make it's font smaller
    const css2007 =
      äpy.vuosi === 2007 || äpy.vuosi === 1985 || äpy.vuosi === 1993
        ? specialCss
        : undefined;
    const modalProps = { äpy, imgCarousel, handleModalClose, modalState };
    const showModal =
      modalState === 'open' || modalState === 'closing' ? true : false;

    return (
      <Fragment>
        <ÄpyContainer className="äpy__container" onClick={this.openModal}>
          {!onTouchDevice && (
            <Fragment>
              <ÄpyName className={css2007}>{äpyLehtiVuosi}</ÄpyName>
              <ÄpyNameGradientBackground />
            </Fragment>
          )}
          <Img sizes={imgGrid[0].node.childImageSharp.sizes} />
        </ÄpyContainer>
        {showModal && <ÄpyModal {...modalProps} />}
      </Fragment>
    );
  }
}

export default Äpy;

Äpy.propTypes = {
  äpy: PropTypes.shape({
    lyhytKuvaus: PropTypes.string,
    lehti: PropTypes.string,
    vuosi: PropTypes.number,
  }).isRequired,
  imgGrid: PropTypes.arrayOf(PropTypes.object).isRequired,
  imgCarousel: PropTypes.arrayOf(PropTypes.object).isRequired,
};
