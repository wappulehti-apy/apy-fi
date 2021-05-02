import React from 'react'

import styled from '@emotion/styled'

import { mq } from 'styles/breakpoints'
import { Image } from 'styles/index'
import { Title } from 'styles/typography'

const Wappu: React.FC = () => {
  return (
    <>
      <WappuContainer>
        <ImgContainer>
          <Image src="/images/wappu/arpa-apy.png" objectFit="contain" />
        </ImgContainer>
      </WappuContainer>
      <TitleContainer>
        <Title align="center" color="white" shadow>
          Arpa-Äpy 2021 on julkaistu!
        </Title>
      </TitleContainer>
    </>
  )
}

const TitleContainer = styled.div`
  margin: ${(p) => p.theme.spacing.large} 0;
`

const WappuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ImgContainer = styled.div`
  overflow: hidden;
  border-radius: ${(p) => p.theme.borderRadius.default};

  ${mq('desktop')} {
    max-width: 40vw;
  }
`

export default Wappu
