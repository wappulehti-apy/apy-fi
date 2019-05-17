import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HeroImg from '../components/HeroImg';
import Video from '../components/Video';
import { PageContent, styleInstructions, H2 } from '../constants/styled';

function OhjeetPage({ data }) {
  const { markdownRemark, images } = data;

  return (
    <>
      <HeroImg images={images} />
      <PageContent css={props => styleInstructions(props)}>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <H2>Kettu - helppo</H2>
        <Video src={'https://vimeo.com/331432581'} />
        <H2>Saimaannorppa - keskivaikea</H2>
        <Video src={'https://vimeo.com/331752344'} />
        <H2>Joutsen - vaikea</H2>
        <Video src={'https://vimeo.com/331432407'} />
      </PageContent>
    </>
  );
}

export default OhjeetPage;

OhjeetPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query OhjeetPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/ohjeet" } }) {
      html
    }
    images: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "images/ohjeet" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
