import React from 'react'

import styled from '@emotion/styled'

import { mq } from 'styles/breakpoints'
import { Image } from 'styles/index'

interface Props {
  images: string[]
}

const PageImage: React.FC<Props> = ({ images }) => {
  const image = images[Math.floor(Math.random() * images.length)]

  return (
    <ImageContainer>
      <Image src={image} objectFit="cover" />
    </ImageContainer>
  )
}

export const ImageContainer = styled.div`
  position: relative;
  height: ${(p) => p.theme.rem(140)};
  border-top-left-radius: ${(p) => p.theme.borderRadius.large};
  border-top-right-radius: ${(p) => p.theme.borderRadius.large};

  ${mq('desktop')} {
    height: ${(p) => p.theme.rem(200)};
  }
`

export default PageImage
