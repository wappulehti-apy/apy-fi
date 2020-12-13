import React from 'react'

import { InferGetStaticPropsType, GetStaticProps } from 'next'

import PageImage from 'components/PageImage'
import { PageCard } from 'styles/index'
import { getPageData } from 'utils/content'

const YhteystiedotPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { images, content } = props

  return (
    <>
      <PageImage images={images} />
      <PageCard>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageCard>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { content, images } = await getPageData('yhteystiedot')

  return {
    props: {
      images,
      content,
    },
  }
}

export default YhteystiedotPage
