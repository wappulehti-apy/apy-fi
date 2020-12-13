import React from 'react'

import { css } from '@emotion/react'
import { InferGetStaticPropsType, GetStaticProps } from 'next'

import PageImage from 'components/PageImage'
import Video from 'components/Video'
import { PageCard, styleInstructions } from 'styles/index'
import { Theme } from 'styles/theme'
import { Subtitle } from 'styles/typography'
import { getPageData } from 'utils/content'

const OhjeetPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content, images } = props

  return (
    <>
      <PageImage images={images} />
      <PageCard css={styleInstructions}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Subtitle css={margin} weight={800} align="center">
          Kettu - helppo
        </Subtitle>
        <Video src={'https://vimeo.com/331432581'} />
        <Subtitle css={margin} weight={800} align="center">
          Saimaannorppa - keskivaikea
        </Subtitle>
        <Video src={'https://vimeo.com/331752344'} />
        <Subtitle css={margin} weight={800} align="center">
          Joutsen - vaikea
        </Subtitle>
        <Video src={'https://vimeo.com/331432407'} />
      </PageCard>
    </>
  )
}

const margin = (p: Theme) => css`
  margin: ${p.spacing.medium} 0;
`

export const getStaticProps: GetStaticProps = async () => {
  const { content, images } = await getPageData('ohjeet')

  return {
    props: {
      images,
      content,
    },
  }
}

export default OhjeetPage
