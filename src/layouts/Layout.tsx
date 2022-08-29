import React, { PropsWithChildren } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Navigation from 'components/Navigation/Nav'
import { Background, Content, PageWrapper } from 'styles/index'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <PageWrapper>
        <Header />
        <Navigation />
        <Content>{children}</Content>
        <Footer />
      </PageWrapper>
      <Background />
    </>
  )
}

export default Layout
