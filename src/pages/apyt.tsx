import React from 'react'

import styled from '@emotion/styled'
import { InferGetStaticPropsType, GetStaticProps } from 'next'

import äpyData from 'assets/data/ävyt.json'
import PageImage from 'components/PageImage'
import Äpy from 'components/Äpy'
import { mq } from 'styles/breakpoints'
import { PageCard } from 'styles/index'
import { getPageData } from 'utils/content'

const ÄpyPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content, images } = props

  return (
    <>
      <PageImage images={images} />
      <PageCard>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <Grid>
          {äpyData.map((item) => (
            <Äpy key={item.year} item={item} />
          ))}
        </Grid>
      </PageCard>
    </>
  )
}

const Grid = styled.div`
  display: grid;
  padding-top: ${(p) => p.theme.spacing.medium};
  grid-gap: ${(p) => p.theme.spacing.default};
  grid-template-columns: repeat(2, 1fr);

  ${mq('desktop')} {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const { content, images } = await getPageData('apyt')

  return {
    props: {
      images,
      content,
    },
  }
}

export default ÄpyPage
