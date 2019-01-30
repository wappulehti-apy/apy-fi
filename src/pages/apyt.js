import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ÄpyGrid from '../components/ÄpyGrid';
import { PageContent, HeroImgContainer } from '../constants/styled';

class ÄpyPage extends React.PureComponent {
  render() {
    const { data, ...props } = this.props;
    const { images } = data;
    const imgGrid = data.imgGrid.edges;
    const imgCarousel = data.imgCarousel.edges;
    const image = images.edges[Math.floor(Math.random() * images.edges.length)];
    const html = data.markdownRemark.html;

    return (
      <Layout {...props}>
        <HeroImgContainer>
          <Img sizes={image.node.childImageSharp.sizes} />
        </HeroImgContainer>
        <PageContent id="page__äpyt">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </PageContent>
        <ÄpyGrid imgGrid={imgGrid} imgCarousel={imgCarousel} />
      </Layout>
    );
  }
}

export default ÄpyPage;

ÄpyPage.propTypes = {
  data: PropTypes.shape({
    allImageSharp: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query ApyPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/äpy" } }) {
      html
    }
    images: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "pages/apyt" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 1500) {
              src
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    imgCarousel: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "apyt/carousel" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 1500) {
              src
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    imgGrid: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "apyt/grid" }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 400) {
              src
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
