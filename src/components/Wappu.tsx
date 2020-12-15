import React from 'react'

import styled from '@emotion/styled'

import { mq } from 'styles/breakpoints'
import { Image } from 'styles/index'
import { Title } from 'styles/typography'

interface Props {
  images: string[]
}

const Wappu: React.FC<Props> = (props) => {
  const { images } = props
  return (
    <>
      <Title align="center" color="white">
        Äpy 2019 on julkaistu!
      </Title>
      <WappuContainer>
        {images.map((img, i) => (
          <ImgContainer key={i}>
            <Image src={img} objectFit="contain" />
          </ImgContainer>
        ))}
      </WappuContainer>
    </>
  )
}

const WappuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq('desktop')} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const ImgContainer = styled.div`
  overflow: hidden;
  width: 80vw;
  padding-top: 100%;

  ${mq('desktop')} {
    width: 60vw;
  }
`

export default Wappu
