import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import Diilikone from 'components/Diilikone'
import Video from 'components/Video'
import Wappu from 'components/Wappu'
import { mq } from 'styles/breakpoints'
import { Theme } from 'styles/theme'
import { Title, Subtitle } from 'styles/typography'

const LogoTimeless = dynamic(() => import('components/Logos/LogoTimeless'), {
  ssr: false,
})

const Logo2021 = dynamic(() => import('components/Logos/Logo2021'), {
  ssr: false,
})

const IndexText = () => (
  <IndexInfo>
    <Title color="white" weight={900} shadow>
      Äpy - Neljä kirjainta, joihin voit luottaa.
    </Title>
    <Subtitle css={margin} color="white" weight={600} shadow>
      Otaniemeläistä wappuhuumoria vuodesta 1948. Seuraavan kerran Äpy ilmestyy
      Wappuna 2021.
    </Subtitle>
  </IndexInfo>
)

const margin = (p: Theme) => css`
  margin: ${p.spacing.medium} 0;
`

const IndexInfo = styled.div`
  display: inline-block;
  overflow: auto;
  max-width: 95%;
  margin: 0 auto;
  text-align: center;

  ${mq('desktop')} {
    max-width: 80%;
  }
`

const IndexPage = () => {
  const Logo = process.env.THEME === 'ajaton' ? <LogoTimeless /> : <Logo2021 />

  const mainElement = () => {
    switch (process.env.INDEX_ELEMENT) {
      case 'logo':
        return (
          <>
            {Logo}
            <IndexText />
          </>
        )
      case 'video':
        return (
          <>
            <Video src="https://vimeo.com/453199585" />
            <IndexText />
          </>
        )
      case 'diilikone':
        return <Diilikone />
      case 'wappu':
        return <Wappu />
      default:
        return Logo
    }
  }

  return mainElement()
}

export default IndexPage
