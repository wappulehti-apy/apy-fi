import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Video from '../components/Video';
import Layout from '../components/layout';
import {
  PageContent,
  HeroImgContainer,
  styleInstructions,
  H2,
} from '../constants/styled';

function OhjeetPage({ data, ...props }) {
  const { markdownRemark, images } = data;
  const htmlOhjeet = markdownRemark.html;
  const image = images.edges[Math.floor(Math.random() * images.edges.length)];

  return (
    <Layout {...props}>
      <HeroImgContainer>
        <Img fluid={image.node.childImageSharp.fluid} />
      </HeroImgContainer>
      <PageContent css={props => styleInstructions(props)}>
        <div dangerouslySetInnerHTML={{ __html: htmlOhjeet }} />
        <H2>Kettu - helppo</H2>
        <Video src={'https://vimeo.com/331432581'} />
        <H2>Saimaannorppa - keskivaikea</H2>
        <Video src={'https://vimeo.com/331752344'} />
        <H2>Joutsen - vaikea</H2>
        <Video src={'https://vimeo.com/331432407'} />
      </PageContent>
    </Layout>
  );
}

export default OhjeetPage;

OhjeetPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query OhjeetPageQuery {
    markdownRemark(frontmatter: { path: { eq: "/ohjeet" } }) {
      html
    }
    images: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "images/ohjeet" }
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
