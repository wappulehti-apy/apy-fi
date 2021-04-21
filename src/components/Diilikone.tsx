import React from 'react'

import styled from '@emotion/styled'

import { mq } from 'styles/breakpoints'
import { Title, Subtitle } from 'styles/typography'

const Diilikone = () => {
  return (
    <>
      <ImgContainer>
        <a href="https://apy.fi/gaala">
          <img src="/images/diilikone/gaala-logo.svg" />
        </a>
      </ImgContainer>
      <Title align="center" color="white" weight={900} shadow>
        Äpy 2021 julkaistaan 22.4. kello 19.00 <a href="/gaala">Äpy-Gaalassa</a>
      </Title>
      <hr />
      <Subtitle align="center" color="white" weight={600} shadow>
        Tilaa uunituore Äpy 22.4. 19:30 alkaen osoitteesta{' '}
        <a href="https://osta.apy.fi">osta.äpy.fi</a>
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
