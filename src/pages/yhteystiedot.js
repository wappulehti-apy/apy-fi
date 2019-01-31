import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { PageContent, HeroImgContainer } from '../constants/styled';

function YhteystiedotPage({ data, ...props }) {
  const { markdownRemark, images } = data;
  const htmlYhteystiedot = markdownRemark.html;
  const image = images.edges[Math.floor(Math.random() * images.edges.length)];

  return (
    <Layout {...props}>
      <HeroImgContainer>
        <Img fluid={image.node.childImageSharp.fluid} />
      </HeroImgContainer>
      <PageContent>
        <div dangerouslySetInnerHTML={{ __html: htmlYhteystiedot }} />
      </PageContent>
    </Layout>
  );
}

export default YhteystiedotPage;

YhteystiedotPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query YhteystiedotPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/yhteystiedot" } }) {
      html
    }
    images: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "images/yhteystiedot" }
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
