import React from 'react'

import { InferGetStaticPropsType, GetStaticProps } from 'next'

import PageImage from 'components/PageImage'
import { PageCard, styleInstructions } from 'styles/index'
import { getPageData } from 'utils/content'

const ÄvystyksetPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { content, images } = props
  return (
    <>
      <PageImage images={images} />
      <PageCard css={styleInstructions}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageCard>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { content, images } = await getPageData('avystykset')

  return {
    props: {
      images,
      content,
    },
  }
}

export default ÄvystyksetPage
