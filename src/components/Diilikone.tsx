import React from 'react'

import styled from '@emotion/styled'

import { mq } from 'styles/breakpoints'
import { Title, Subtitle } from 'styles/typography'

const Diilikone = () => {
  return (
    <>
      <ImgContainer>
        <a href="https://diili.apy.fi">
          <img src="/images/diilikone/diilikone-logo.svg" />
        </a>
      </ImgContainer>
      <Title align="center" color="white" weight={900} shadow>
        Äpy 2021 julkaistaan 22.4. kello 19.00 <a href="/gaala">Äpy-Gaalassa</a>
      </Title>
      <hr />
      <Subtitle align="center" color="white" weight={600} shadow>
        Lähde Äpy-myyjäksi ja tee Äpy-diili osoitteessa{' '}
        <a href="https://diili.apy.fi">diili.apy.fi</a>
      </Subtitle>
    </>
  )
}

const ImgContainer = styled.div`
  display: block;
  margin: 0 auto;
  transition: 0.1s ease-in;

  img {
    margin: 50px 0;
    height: ${(p) => p.theme.rem(250)};

    ${mq('phone')} {
      height: ${(p) => p.theme.rem(350)};
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`

export default Diilikone
