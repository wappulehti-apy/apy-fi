import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HeroImg from '../components/HeroImg';
import { PageContent, styleInstructions } from '../constants/styled';

const ÄvystyksetPage = ({ data }) => {
  const { markdownRemark, images } = data;

  return (
    <>
      <HeroImg images={images} />
      <PageContent css={props => styleInstructions(props)}>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </PageContent>
    </>
  );
};

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
