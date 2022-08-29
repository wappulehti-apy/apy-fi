import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { mq } from 'styles/breakpoints'

const logoNormal = '/logos/2023/logo-2023-stroke.svg'

const Logo2023 = () => {
  return (
    <>
      <ImageContainer>
        <img css={imageCss} src={logoNormal} />
      </ImageContainer>
    </>
  )
}

const ImageContainer = styled.div`
  align-items: center;
  padding: ${(p) => p.theme.rem(100)} 0;
  margin: 0 auto;
  text-align: center;
`

const imageCss = css`
  max-width: 250px;

  ${mq('desktop')} {
    max-width: 350px;
  }
`

export default Logo2023
