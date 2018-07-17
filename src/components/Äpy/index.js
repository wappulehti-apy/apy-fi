import React, { Fragment } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import ApyModal from '../ÄpyModal';

const ApyContainer = styled.div`
  position: relative;
  box-shadow: 0px 2px 20px 2px rgba(130, 126, 130, 0.2);

  &:hover span {
    opacity: 1;
    transform: translateY(-5px);
  }

  &:hover div {
    opacity: 1;
  }

  img {
    border-radius: 2px;
    object-fit: cover;
  }
`;

const ApyNameGradientBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 2em;
  bottom: 0;
  z-index: 2;

  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  border-radius: 3px;

  opacity: 0;
  transition: all 0.5s ease-out;
`;

const ApyName = styled.span`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  width: 95%;
  bottom: 3px;
  z-index: 2;

  background: white;
  border-radius: 3px;
  padding: 3px 2px;

  text-align: center;
  font-size: 0.7em;
  font-weight: 300;
  white-space: nowrap;

  opacity: 0;
  transition: all 0.3s ease-out;
`;

class Apy extends React.PureComponent {
  state = { hovering: false, modalState: 'hidden' };

  hideModal = () => {
    this.setState({ modalState: 'closing' });
    setTimeout(() => this.setState({ modalState: 'hidden' }), 350);
  };

  openModal = () => {
    this.setState({ modalState: 'open' });
  };

  render() {
    const { apy, imgSizes } = this.props;
    const { modalState, hovering } = this.state;
    const handleModalClose = this.hideModal;
    const apyKuvaus = `${apy.vuosi} - ${apy.lehti}`;
    const display = hovering ? 'inline-block' : 'none';
    const modalProps = { apy, imgSizes, handleModalClose, modalState };
    const showModal =
      modalState === 'open' || modalState === 'closing' ? true : false;

    return (
      <Fragment>
        <ApyContainer
          className="äpy__container"
          onMouseEnter={() => this.setState({ hovering: true })}
          onMouseLeave={() => this.setState({ hovering: false })}
          onClick={this.openModal}
        >
          <ApyName {...display}>{apyKuvaus}</ApyName>
          <Img sizes={imgSizes} alt={apyKuvaus} />
        </ApyContainer>
        {showModal && <ApyModal {...modalProps} />}
      </Fragment>
    );
  }
}

export default Apy;

Apy.propTypes = {
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
    tracedSVG: PropTypes.string.isRequired
  }).isRequired
};
