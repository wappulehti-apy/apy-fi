import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import HeroImg from '../components/HeroImg';
import { PageContent } from '../constants/styled';

const YhteystiedotPage = ({ data }) => {
  const { markdownRemark, images } = data;

  return (
    <>
      <HeroImg images={images} />
      <PageContent>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </PageContent>
    </>
  );
};

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
