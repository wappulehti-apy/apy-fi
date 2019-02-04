import React from 'react';
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
import getScrollbarWidth from 'get-scrollbar-width';

class Äpy extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { onTouchDevice: false, modalOpen: false };
  }

  componentDidMount() {
    const onTouchDevice = window.innerWidth <= breakpoints.tablet;
    this.setState({ onTouchDevice });
  }

  showModal = () => this.setState({ modalOpen: true });
  hideModal = () => this.setState({ modalOpen: false });

  disableScrolling(open) {
    const scrollbarWidth = getScrollbarWidth();
    if (open) {
      // Scrollbar is approximately 15px wide.
      // It gets removed with overflow: hidden so we
      // add margin to body to prevent it from jumping
      // on modal open.
      document.body.style.marginRight = scrollbarWidth + 'px';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.marginRight = '0px';
      document.body.style.overflow = null;
      document.documentElement.style.overflow = null;
    }
  }

  render() {
    const { onTouchDevice, modalOpen } = this.state;
    const { äpy } = this.props;
    const äpyLehtiVuosi = `${äpy.vuosi} - ${äpy.lehti}`;
    const nameCss = [2007, 1985, 1993].includes(äpy.vuosi)
      ? specialCss
      : undefined;
    const modalProps = {
      title: äpyLehtiVuosi,
      open: modalOpen,
      hideModal: this.hideModal,
    };

    if (typeof document !== 'undefined') {
      this.disableScrolling(modalOpen);
    }

    return (
      <>
        <ÄpyContainer onClick={this.showModal}>
          {!onTouchDevice && (
            <>
              <ÄpyName className={nameCss}>{äpyLehtiVuosi}</ÄpyName>
              <ÄpyNameGradientBackground />
            </>
          )}
          <Img fluid={äpy.imgGrid.childImageSharp.fluid} />
        </ÄpyContainer>
        {modalOpen && <ÄpyModal äpy={äpy} modalProps={modalProps} />}
      </>
    );
  }
}

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
