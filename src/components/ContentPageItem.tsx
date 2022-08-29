import React from 'react'

import styled from '@emotion/styled'
import Image from 'next/image'

import { Detail, Subtitle } from 'styles/typography'
import { ContentItem } from 'types/index'

interface Props {
  item: ContentItem
}

const ContentPageItem: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <Image src={item.imgGrid} objectFit="cover" />
      <Subtitle>{item.type}</Subtitle>
      <Detail fontStyle="italic" weight={300}>
        {item.description}
      </Detail>
    </Container>
  )
}

const Container = styled.div`
  position: relative;
  padding: ${(p) => p.theme.spacing.default};
  background-color: white;
`

export default ContentPageItem
