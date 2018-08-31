import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled, { css } from 'react-emotion';
import Layout from '../components/Layout';
import ÄpyGrid from '../components/ÄpyGrid';
import { media } from '../styles/main';

const ContainerApyt = styled.div`
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Montserrat Regular'};
  border-radius: 2px;

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

class ÄpyPage extends React.PureComponent {
  render() {
    const { data, ...props } = this.props;
    const imgGrid = data.imgGrid.edges;
    const imgCarousel = data.imgCarousel.edges;
    const html = data.markdownRemark.html;

    return (
      <Layout {...props}>
        <ContainerApyt id="page__äpyt">
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
    imgHero: file(relativePath: { eq: "pages/äpyt/äpyt-hero-img.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 1000) {
          ...GatsbyImageSharpSizes_tracedSVG
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
            sizes(maxWidth: 1000) {
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
