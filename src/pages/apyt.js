import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ÄpyGrid from '../components/ÄpyGrid';
import Äpy from '../components/Äpy';
import { PageContent, HeroImgContainer } from '../constants/styled';

class ÄpyPage extends React.PureComponent {
  render() {
    const { data, ...props } = this.props;
    const { images, allAvytJson } = data;
    const image = images.edges[Math.floor(Math.random() * images.edges.length)];
    const html = data.markdownRemark.html;

    return (
      <Layout {...props}>
        <HeroImgContainer>
          <Img fluid={image.node.childImageSharp.fluid} />
        </HeroImgContainer>
        <PageContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </PageContent>
        <ÄpyGrid>
          {allAvytJson.edges.map(äpy => (
            <Äpy key={äpy.node.vuosi} äpy={äpy.node} />
          ))}
        </ÄpyGrid>
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
        relativeDirectory: { eq: "images/apyt" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1500) {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allAvytJson {
      edges {
        node {
          vuosi
          lehti
          kuvaus
          imgGrid {
            childImageSharp {
              fluid(maxWidth: 400) {
                src
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
          imgCarousel {
            id
            childImageSharp {
              fluid(maxWidth: 1500) {
                src
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
