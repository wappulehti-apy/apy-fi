import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import {
  PageContent,
  HeroImgContainer,
  styleInstructions,
} from '../constants/styled';

function ÄvystyksetPage({ data, ...props }) {
  const { markdownRemark, images } = data;
  const htmlRahasto = markdownRemark.html;
  const image = images.edges[Math.floor(Math.random() * images.edges.length)];

  return (
    <Layout {...props}>
      <HeroImgContainer>
        <Img fluid={image.node.childImageSharp.fluid} />
      </HeroImgContainer>
      <PageContent css={props => styleInstructions(props)}>
        <div dangerouslySetInnerHTML={{ __html: htmlRahasto }} />
      </PageContent>
    </Layout>
  );
}

export default ÄvystyksetPage;

ÄvystyksetPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query AvystyksetPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/ävystykset" } }) {
      html
    }
    images: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "images/avystykset" }
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
