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
    flex: 0 0 40%;
  }

  & > div {
    display: flex;
    flex-direction: row;

    @media (max-width: 1025px) and (orientation: portrait) {
      flex-direction: column;
    }

    @media (max-height: 1025px) and (orientation: landscape) {
      flex-direction: row;
    }
  }

  /* Make preview image flex container the size of it's contents */
  & > div > div:nth-child(2) {
    width: auto;
  }

  & .thumbs-wrapper,
  .thumbs.animated {
    padding-left: 5px;
    margin: 0;

    @media (max-width: 1025px) and (orientation: landscape) {
      .thumb {
        width: 50px;
      }

      display: inline-block;
    }


    @media (max-width: 1025px) and (orientation: portrait) {
      .thumb {
        width: 50px;
      }

      padding: 3px 0 0 0;
      display: inline-block;
    }
  }
`;

const StyledImageContainer = styled.div`
`;

const ApyCarousel = ({ src }) => (
  <StyledApyCarouselContainer>
    <Carousel
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows
      emulateTouch
    >
      <StyledImageContainer>
        <img src={src} alt="äpy"/>
      </StyledImageContainer>
    </Carousel>
  </StyledApyCarouselContainer>
);

export default ApyCarousel;

ApyCarousel.propTypes = {
  src: PropTypes.string.isRequired
};
