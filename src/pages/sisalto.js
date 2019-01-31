import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SisältöGrid from '../components/SisältöGrid';
import SisältöItem from '../components/SisältöItem';
import Layout from '../components/layout';
import {
  PageContent,
  HeroImgContainer,
  styleInstructions,
  marginTop,
} from '../constants/styled';

function SisaltoPage({ data, ...props }) {
  const { sisalto_1, sisalto_2, images, allSisaltoJson } = data;
  const sisalto_1_html = sisalto_1.html;
  const sisalto_2_html = sisalto_2.html;
  const image = images.edges[Math.floor(Math.random() * images.edges.length)];

  return (
    <Layout {...props}>
      <HeroImgContainer>
        <Img fluid={image.node.childImageSharp.fluid} />
      </HeroImgContainer>
      <PageContent css={props => styleInstructions(props)}>
        <div dangerouslySetInnerHTML={{ __html: sisalto_1_html }} />
      </PageContent>
      <SisältöGrid>
        {allSisaltoJson.edges.map(item => (
          <SisältöItem key={item.node.id} item={item.node} />
        ))}
      </SisältöGrid>
      <PageContent css={props => [styleInstructions(props), marginTop]}>
        <div dangerouslySetInnerHTML={{ __html: sisalto_2_html }} />
      </PageContent>
    </Layout>
  );
}

export default SisaltoPage;

SisaltoPage.propTypes = {
  data: PropTypes.shape({
    sisalto_1: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }),
    sisalto_2: PropTypes.shape({
      html: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query SisaltoPageQuery {
    sisalto_1: markdownRemark(frontmatter: { path: { eq: "/sisalto-1" } }) {
      html
    }
    sisalto_2: markdownRemark(frontmatter: { path: { eq: "/sisalto-2" } }) {
      html
    }
    images: allFile(
      filter: {
        extension: { eq: "jpg" }
        relativeDirectory: { eq: "images/sisalto" }
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
    allSisaltoJson {
      edges {
        node {
          id
          tyyppi
          kuvaus
          imgGrid {
            id
            childImageSharp {
              fluid(maxWidth: 600) {
                src
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
          imgModal {
            childImageSharp {
              fluid(maxWidth: 800) {
                src
                ...GatsbyImageSharpFluid
                presentationWidth
              }
            }
          }
        }
      }
    }
  }
`;
