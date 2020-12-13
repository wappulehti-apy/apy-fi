import React from 'react'

import styled from '@emotion/styled'
import Image from 'next/image'

import { Detail, Subtitle } from 'styles/typography'
import { ContentItem } from 'types/index.d.ts'

interface Props {
  item: ContentItem
}

const ContentPageItem: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={item.imgModal}
          layout="fill"
          objectFit="contain"
          loading="eager"
        />
      </ImageContainer>
      <Subtitle>{item.type}</Subtitle>
      <Detail fontStyle="italic" weight={300}>
        {item.description}
      </Detail>
    </Container>
  )
}

const ImageContainer = styled.div`
  position: relative;
  padding-top: 100%;
  margin: ${(p) => p.theme.spacing.small};
  border-radius: ${(p) => p.theme.borderRadius.small};
`

const Container = styled.div`
  position: relative;
  padding: ${(p) => p.theme.spacing.default};
  background-color: white;
  border-radius: ${(p) => p.theme.borderRadius.small};
`

export default ContentPageItem
