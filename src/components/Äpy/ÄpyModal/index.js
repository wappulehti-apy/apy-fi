import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../Modal';
import ÄpyCarousel from '../../ÄpyCarousel';
import { ModalContentGrid, ModalKuvaus } from '../../../constants/styled';

const ÄpyModal = ({ äpy, modalProps }) => (
  <Modal {...modalProps}>
    <ModalContentGrid>
      <ÄpyCarousel imgCarousel={äpy.imgCarousel} />
      <ModalKuvaus>{äpy.kuvaus}</ModalKuvaus>
    </ModalContentGrid>
  </Modal>
);

export default ÄpyModal;

ÄpyModal.propTypes = {
  äpy: PropTypes.shape({
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
    }),
    kuvaus: PropTypes.string,
    lehti: PropTypes.string,
    vuosi: PropTypes.number,
  }).isRequired,
  modalProps: PropTypes.shape({
    hideModal: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
