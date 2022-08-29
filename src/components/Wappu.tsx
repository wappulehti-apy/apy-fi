import React from 'react'

import styled from '@emotion/styled'
import Image from 'next/image'

import { Title } from 'styles/typography'

const Wappu: React.FC = () => {
  return (
    <>
      <WappuContainer>
        <Image src="/images/wappu/arpa-apy.png" objectFit="contain" />
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

export default Wappu
