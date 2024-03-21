import { InferGetStaticPropsType, GetStaticProps } from 'next'

import PageImage from 'components/PageImage'
import { PageCard, styleInstructions } from 'styles/index'
import { getPageData } from 'utils/content'
import Link from 'next/link'
import styled from '@emotion/styled'

const ÄvystyksetPageEn = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { content, images } = props
  return (
    <>
      <PageImage images={images} />

      <PageCard css={styleInstructions}>
        <LinkWrapper>
          <Link href="/avystykset">Suomeksi</Link>

          <Link href="/avystykset/swe">På Svenska</Link>
        </LinkWrapper>

        <div dangerouslySetInnerHTML={{ __html: content }} />
      </PageCard>
    </>
  )
}

const LinkWrapper = styled.div`
  display: flex;
  > * {
    margin-right: 1rem;
  }
`

export const getStaticProps: GetStaticProps = async () => {
  const { content, images } = await getPageData('avystykset-en')

  return {
    props: {
      images,
      content,
    },
  }
}

export default ÄvystyksetPageEn
