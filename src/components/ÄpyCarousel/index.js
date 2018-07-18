import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const StyledApyCarouselContainer = styled.div`
  flex: 0 0 60%;
  overflow: hidden;

  @media (max-width: 1025px) and (orientation: portrait) {
    flex: 0 0 90%;
  }

  /* iPhone X */
  @media (min-width: 812px) and (max-height: 375px) and (orientation: landscape) {
    flex: 0 0 50%;
  }

  & .thumbs-wrapper,
  .thumbs.animated {
    padding: 5px 5px 0 0;
    margin: 0;

    @media (max-width: 1025px) and (orientation: landscape) {
      .thumb {
        width: 50px;
      }
    }

    @media (max-width: 1025px) and (orientation: portrait) {
      .thumb {
        width: 50px;
      }

      padding: 3px 0 0 0;
    }
  }
`;

const StyledImageContainer = styled.div``;

const ApyCarousel = ({ imgData }) => (
  <StyledApyCarouselContainer>
    <Carousel
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows
      emulateTouch
    >
      {imgData.map((img, i) => (
        <StyledImageContainer key={i}>
          <img key={i} src={img.node.original.src} alt="äpy" />
        </StyledImageContainer>
      ))}
    </Carousel>
  </StyledApyCarouselContainer>
);

export default ApyCarousel;

ApyCarousel.propTypes = {
  imgData: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        original: PropTypes.shape({
          src: PropTypes.string
        }),
        sizes: PropTypes.object
      })
    })
  ).isRequired
};
