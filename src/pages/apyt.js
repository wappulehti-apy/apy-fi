import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ÄpyGrid from '../components/ÄpyGrid';
import Äpy from '../components/Äpy';
import HeroImg from '../components/HeroImg';
import { PageContent } from '../constants/styled';

const ÄpyPage = ({ data }) => {
  const { markdownRemark, images, allAvytJson } = data;

  return (
    <>
      <HeroImg images={images} />
      <PageContent>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        <ÄpyGrid>
          {allAvytJson.edges.map((äpy) => (
            <Äpy key={äpy.node.vuosi} äpy={äpy.node} />
          ))}
        </ÄpyGrid>
      </PageContent>
    </>
  );
};

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
