import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import ÄpyModal from './ÄpyModal';
import {
  ÄpyContainer,
  ÄpyNameGradientBackground,
  ÄpyName,
  specialCss,
} from './index.css';
import { breakpoints } from '../../styles/main';

const Äpy = ({ äpy }) => {
  const [onTouchDevice, setOnTouchdevice] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onTouchDevice = window.innerWidth <= breakpoints.tablet;
    setOnTouchdevice(onTouchDevice);
  }, []);

  const { vuosi, lehti, imgGrid } = äpy;
  const äpyLehtiVuosi = `${vuosi} - ${lehti}`;
  const nameCss = [2007, 1985, 1993].includes(äpy.vuosi)
    ? specialCss
    : undefined;
  const modalProps = {
    title: äpyLehtiVuosi,
    open: modalOpen,
    hideModal: () => setModalOpen(false),
  };

  return (
    <>
      <ÄpyContainer onClick={() => setModalOpen(true)}>
        {!onTouchDevice && (
          <>
            <ÄpyName className={nameCss}>{äpyLehtiVuosi}</ÄpyName>
            <ÄpyNameGradientBackground />
          </>
        )}
        <Img fluid={imgGrid.childImageSharp.fluid} />
      </ÄpyContainer>
      {modalOpen && <ÄpyModal äpy={äpy} modalProps={modalProps} />}
    </>
  );
};

export default Äpy;

Äpy.propTypes = {
  äpy: PropTypes.shape({
    lyhytKuvaus: PropTypes.string,
    lehti: PropTypes.string,
    vuosi: PropTypes.number,
    imgCarousel: PropTypes.arrayOf(
      PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.object,
        }),
        id: PropTypes.string,
      })
    ).isRequired,
    imgGrid: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }).isRequired,
  }).isRequired,
};
