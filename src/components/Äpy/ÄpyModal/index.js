import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ÄpyCarousel from '../../ÄpyCarousel';
import { CarouselStyle } from './index.css';
import { ModalContentGrid, ModalKuvaus } from '../../../constants/styled';

export default class ÄpyModal extends PureComponent {
  render() {
    const { äpy } = this.props;

    return (
      <ModalContentGrid>
        <ÄpyCarousel css={CarouselStyle} imgCarousel={äpy.imgCarousel} />
        <ModalKuvaus>{äpy.kuvaus}</ModalKuvaus>
      </ModalContentGrid>
    );
  }
}

ÄpyModal.propTypes = {
  äpy: PropTypes.shape({
    kuvaus: PropTypes.string,
    lehti: PropTypes.string,
    vuosi: PropTypes.number,
  }).isRequired,
  imgCarousel: PropTypes.arrayOf(PropTypes.object).isRequired,
};
