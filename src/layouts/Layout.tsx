import React from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Navigation from 'components/Navigation/Nav'
import { Content, PageWrapper } from 'styles/index'

const Layout: React.FC = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </PageWrapper>
  )
}

export default Layout
