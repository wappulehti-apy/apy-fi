import React, { ReactChild } from 'react'

import styled from '@emotion/styled'
import { Carousel } from 'react-responsive-carousel'

import { mq } from 'styles/breakpoints'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Ovverwrite children prop because react-responsive-carousel
// has incorrect children type
interface Props {
  children?: ReactChild[]
}

const ImageCarousel: React.FC<Props> = ({ children }) => (
  <CarouselContainer>
    <Carousel
      showStatus={false}
      showIndicators={false}
      useKeyboardArrows
      emulateTouch
    >
      {children}
    </Carousel>
  </CarouselContainer>
)

export const CarouselContainer = styled.div`
  ${mq('phone')} {
    margin: 0;
  }

  ${mq('tablet')} {
    max-width: 70%;
    margin: 0 auto;
  }

  & .carousel * {
    background: none;
    user-select: none;
  }

  & .thumbs-wrapper,
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
`

export default ImageCarousel
