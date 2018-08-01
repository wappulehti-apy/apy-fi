import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import ÄpyModal from '../ÄpyModal';

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
    object-fit: cover;
  }
`;

const ÄpyNameGradientBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 2em;
  bottom: 0;
  z-index: 2;

  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 60%,
    rgba(255, 255, 255, 0)
  );
  border-radius: 3px;

  opacity: 0;
  transition: all 0.5s ease-out;
`;

const ÄpyName = styled.span`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 95%;
  bottom: 3px;
  z-index: 3;

  text-align: center;
  font-size: 0.65em;
  font-weight: 300;
  white-space: nowrap;

  opacity: 0;
  transition: all 0.2s ease-out;
`;

const specialCss2007 = css`
  font-size: 0.6em;
`;

class Äpy extends React.PureComponent {
  state = { modalState: 'hidden' };

  hideModal = () => {
    const äpyGrid = document.getElementById('äpy__grid');
    äpyGrid.style.cssText = 'pointer-events: auto';
    this.setState({ modalState: 'closing' });
    setTimeout(() => this.setState({ modalState: 'hidden' }), 350);
  };

  openModal = () => {
    const äpyGrid = document.getElementById('äpy__grid');
    // Prevents ÄpyNameGradientBackground and ÄpyName hover effects
    äpyGrid.style.cssText = 'pointer-events: none;';
    this.setState({ modalState: 'open' });
  };

  render() {
    const { äpy, imgData } = this.props;
    const { modalState } = this.state;
    const handleModalClose = this.hideModal;
    const äpyLehtiVuosi = `${äpy.vuosi} - ${äpy.lehti}`;
    // 'Finnish Design Äpy' is a long name and to
    // prevent overflow make it's font smaller
    const css2007 = äpy.vuosi === 2007 ? specialCss2007 : undefined;
    const modalProps = { äpy, imgData, handleModalClose, modalState };
    const showModal =
      modalState === 'open' || modalState === 'closing' ? true : false;

    return (
      <Fragment>
        <ÄpyContainer className="äpy__container" onClick={this.openModal}>
          <ÄpyName className={css2007}>{äpyLehtiVuosi}</ÄpyName>
          <ÄpyNameGradientBackground />
          <Img sizes={imgData[0].node.sizes} alt={äpyLehtiVuosi} />
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
    vuosi: PropTypes.number
  }).isRequired,
  imgData: PropTypes.arrayOf(PropTypes.object).isRequired
};
