import React from 'react'

import styled from '@emotion/styled'

const Container404 = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
`

const LargeText = styled.div`
  color: white;
  font-size: 10em;
`

const NotFoundPage = () => (
  <Container404>
    <LargeText>404</LargeText>
  </Container404>
)

export default NotFoundPage
