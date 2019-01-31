import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import ÄpyModal from './ÄpyModal';
import ModalItem from '../ModalItem';
import {
  ÄpyContainer,
  ÄpyNameGradientBackground,
  ÄpyName,
  specialCss,
} from './index.css';
import { breakpoints } from '../../styles/main';

class Äpy extends React.PureComponent {
  state = { onTouchDevice: false };

  componentDidMount() {
    const onTouchDevice = window.innerWidth <= breakpoints.tablet;
    this.setState({ onTouchDevice });
  }

  render() {
    const { onTouchDevice } = this.state;
    const { äpy } = this.props;
    const äpyLehtiVuosi = `${äpy.vuosi} - ${äpy.lehti}`;
    const modal = <ÄpyModal äpy={äpy} />;
    const nameCss = [2007, 1985, 1993].includes(äpy.vuosi)
      ? specialCss
      : undefined;
    const modalProps = {
      title: äpyLehtiVuosi,
      content: modal,
      ...this.props,
    };

    return (
      <ModalItem {...modalProps}>
        <ÄpyContainer>
          {!onTouchDevice && (
            <>
              <ÄpyName className={nameCss}>{äpyLehtiVuosi}</ÄpyName>
              <ÄpyNameGradientBackground />
            </>
          )}
          <Img fluid={äpy.imgGrid.childImageSharp.fluid} />
        </ÄpyContainer>
      </ModalItem>
    );
  }
}

export default Äpy;

Äpy.propTypes = {
  äpy: PropTypes.shape({
    lyhytKuvaus: PropTypes.string,
    lehti: PropTypes.string,
    vuosi: PropTypes.number,
    imgGrid: PropTypes.arrayOf(PropTypes.array),
    imgCarousel: PropTypes.arrayOf(PropTypes.array),
  }).isRequired,
};
