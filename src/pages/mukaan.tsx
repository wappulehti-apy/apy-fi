import { InferGetStaticPropsType, GetStaticProps } from 'next'

import PageImage from 'components/PageImage'
import { PageCard, styleInstructions } from 'styles/index'
import { getPageData } from 'utils/content'
import ContactForm from 'components/ContactForm'

const MukaanPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { content, images } = props
  return (
    <>
      <PageImage images={images} />
      <PageCard css={styleInstructions}>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        <ContactForm />
      </PageCard>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { content, images } = await getPageData('mukaan')

  return {
    props: {
      images,
      content,
    },
  }
}

export default MukaanPage
