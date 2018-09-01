import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import Layout from '../components/Layout';
import ÄpyGrid from '../components/ÄpyGrid';
import { media } from '../styles/main';

const ContainerApyt = styled.div`
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Montserrat Regular'};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;

  ${media.giant(css`
    margin: 2% 25%;
  `)};

  ${media.overdesktop(css`
    margin: 2% 20%;
  `)};

  ${media.desktop(css`
    margin: 2% 15%;
  `)};

  ${media.tablet(css`
    margin: 0% 10%;
  `)};

  ${media.phone(css`
    margin: 2%;
  `)};
`;

const HeroImgContainer = styled.div`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
`;

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
        <ContainerApyt id="page__äpyt">
          <HeroImgContainer>
            <Img sizes={image.node.childImageSharp.sizes} />
          </HeroImgContainer>
          <ÄpyGrid html={html} imgGrid={imgGrid} imgCarousel={imgCarousel} />
        </ContainerApyt>
      </Layout>
    );
  }
}

export default ÄpyPage;

ÄpyPage.propTypes = {
  data: PropTypes.shape({
    allImageSharp: PropTypes.shape({
      edges: PropTypes.array
    })
  }).isRequired
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
            sizes(maxWidth: 1000) {
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
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`;
