import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import { CarouselContainer } from './index.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ÄpyCarousel = ({ imgCarousel }) => (
  <CarouselContainer>
    <Carousel
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows
      emulateTouch
    >
      {imgCarousel.map((img) => (
        <div key={img.id}>
          <img key={img.id} src={img.childImageSharp.fluid.src} />
        </div>
      ))}
    </Carousel>
  </CarouselContainer>
);

export default ÄpyCarousel;

ÄpyCarousel.propTypes = {
  imgCarousel: PropTypes.arrayOf(
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
      id: PropTypes.string,
    })
  ).isRequired,
};
