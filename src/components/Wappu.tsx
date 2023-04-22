import React from 'react'

import styled from '@emotion/styled'
import Image from 'next/image'

import { Title } from 'styles/typography'

const Wappu: React.FC = () => {
  return (
    <>
      <WappuContainer>
        <Image
          src="/images/wappu/kartta-apy.png"
          objectFit="contain"
          layout="fill"
        />
      </WappuContainer>
      <TitleContainer>
        <Title align="center" color="trueBlack" shadow>
          Kartta-Äpy on julkaistu!
        </Title>
        <Description>
          Kartta-Äpy pitää huolen, että Wappuna 2023 suunta on lukijalla aina
          hukassa. Tyvekistä valmistettu Äpy on kevyt, repeämätön ja
          sateenkestävä. Toimitus ei kuitenkaan vastaa repeilyistä lukemisen
          aikana.
        </Description>
        <a href="https://osta.apy.fi/">
          <ButtonBackground>
            <ButtonText>osta.äpy.fi &#8250;</ButtonText>
          </ButtonBackground>
        </a>
      </TitleContainer>
    </>
  )
}

const TitleContainer = styled.div`
  margin: ${(p) => p.theme.spacing.small} 0;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const WappuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 50vh;
`

const ButtonBackground = styled.button`
  min-width: 8em;
  min-height: 3.5em;
  padding: 1rem;
  border: none;
  background: ${(p) => p.theme.colors.highlight};
  border-radius: 2px;
  letter-spacing: 0.09em;
  color: #f2f2f2;
  transition: 0.2s all ease;

  &:hover {
    background: ${(p) => p.theme.colors.pink};
    color: #000;
    cursor: pointer;
  }
`

const ButtonText = styled.span`
  font-weight: 900;
  text-transform: uppercase;
`

const Description = styled.span`
  color: ${(p) => p.theme.colors.trueBlack};
  font-size: 1.125rem;
  text-align: center;
  padding: 0 1rem;
  margin-bottom: 40px;
`

export default Wappu
