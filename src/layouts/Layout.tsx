import React, { PropsWithChildren } from 'react'

import styled from '@emotion/styled'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Navigation from 'components/Navigation/Nav'
import { Content, PageWrapper } from 'styles/index'

const Swirl = styled.div<{
  top?: boolean
  translateX: number
  rotate: number
}>`
  aspect-ratio: 1400 / 1317;
  background: url('/images/swirl.png') no-repeat;
  background-size: contain;
  height: 80%;
  opacity: 0.2;
  position: absolute;
  ${(p) => (p.top ? 'top: 0;' : 'bottom: 0;')}
  ${(p) => (p.top ? 'right: 0;' : 'left: 0;')}
  transform: translateX(${(p) => p.translateX}rem) translateY(0rem)
    rotate(${(p) => p.rotate}deg);
  width: auto;

  @media only screen and (max-width: 640px) {
    height: 50%;
    transform: translateX(${(p) => p.translateX * 2}rem) translateY(0rem)
      rotate(${(p) => p.rotate}deg);
  }

  @media only screen and (max-width: 1079px) {
    height: 70%;
    transform: translateX(${(p) => p.translateX * 2}rem) translateY(0rem)
      rotate(${(p) => p.rotate}deg);
  }
`

const SwirlContainer = styled.div`
  z-index: -999;
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
`

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <PageWrapper>
        <Header />
        <Navigation />
        <Content>{children}</Content>
        <Footer />
      </PageWrapper>
      <SwirlContainer>
        <Swirl rotate={0} translateX={10} top />
        <Swirl rotate={180} translateX={-10} />
      </SwirlContainer>
    </>
  )
}

export default Layout
