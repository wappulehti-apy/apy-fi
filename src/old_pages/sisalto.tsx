import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { InferGetStaticPropsType, GetStaticProps } from 'next'

import sisaltöData from 'assets/data/sisältö.json'
import ContentPageItem from 'components/ContentPageItem'
import PageImage from 'components/PageImage'
import { mq } from 'styles/breakpoints'
import { PageCard, styleInstructions } from 'styles/index'
import { Theme } from 'styles/theme'
import { getPageData } from 'utils/content'

const SisaltoPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content, images } = props
  const contentSplit = content.split('<hr>')

  return (
    <>
      <PageImage images={images} />
      <PageCard>
        <div dangerouslySetInnerHTML={{ __html: contentSplit[0] }} />
      </PageCard>
      <Grid css={marginTop}>
        {sisaltöData.map((item, i) => (
          <ContentPageItem key={i} item={item} />
        ))}
      </Grid>
      <PageCard css={[styleInstructions, marginTop]}>
        <div dangerouslySetInnerHTML={{ __html: contentSplit[1] }} />
      </PageCard>
    </>
  )
}

const marginTop = (p: Theme) => css`
  margin-top: ${p.spacing.default};
`

const Grid = styled.div`
  display: grid;
  grid-gap: ${(p) => p.theme.spacing.default};
  grid-template-columns: repeat(1, 1fr);

  ${mq('desktop')} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const { content, images } = await getPageData('sisalto')

  return {
    props: {
      images,
      content,
    },
  }
}

export default SisaltoPage
