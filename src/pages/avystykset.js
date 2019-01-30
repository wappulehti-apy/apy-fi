import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { css } from '@emotion/core';
import Layout from '../components/layout';
import { PageContent, HeroImgContainer } from '../constants/styled';

const styleInstructions = p => css`
  .avystykset-instructions {
    border: 2px solid ${p.mode === 'ajaton' ? 'black' : '#9c223e'};
    color: black;
    padding: 1.5em;
    margin: 2.5em 0;
    border-radius: 2px;
    font-size: 1.1em;
  }
`;

function ÄvystyksetPage({ data, ...props }) {
  const { markdownRemark, images } = data;
  const htmlRahasto = markdownRemark.html;
  const image = images.edges[Math.floor(Math.random() * images.edges.length)];

  return (
    <Layout {...props}>
      <HeroImgContainer>
        <Img sizes={image.node.childImageSharp.sizes} />
      </HeroImgContainer>
      <PageContent
        css={props => styleInstructions(props)}
        id="page__ävystykset"
      >
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
        relativeDirectory: { eq: "pages/avystykset" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
