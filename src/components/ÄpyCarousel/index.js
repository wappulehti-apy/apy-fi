import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselContainer = styled.div`
  flex: 0 0 60%;
  overflow: hidden;

  @media (max-width: 1025px) and (orientation: portrait) {
    flex: 0 0 90%;
  }

  @media only screen and (min-device-width: 768px) and (min-device-height: 768px) and (orientation: landscape) {
    flex: 0 0 70%;
  }

  /* iPhone X */
  @media (min-width: 812px) and (max-height: 375px) and (orientation: landscape) {
    flex: 0 0 50%;
  }

  & .carousel * {
    user-select: none;
  }

  & .thumbs-wrapper,
  .thumbs,
  .thumbs.animated {
    padding: 5px 5px 0 0;
    margin: 0 !important;

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

const ImageContainer = styled.div``;

const ÄpyCarousel = ({ imgCarousel }) => (
  <CarouselContainer>
    <Carousel
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows
      emulateTouch
    >
      {imgCarousel.map(img => (
        <ImageContainer key={img.node.id}>
          <img key={img.node.id} src={img.node.childImageSharp.sizes.src} />
        </ImageContainer>
      ))}
    </Carousel>
  </CarouselContainer>
);

export default ÄpyCarousel;

ÄpyCarousel.propTypes = {
  imgCarousel: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          sizes: PropTypes.object.isRequired
        }),
        id: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};
