import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled, { css } from 'react-emotion';
import Layout from '../components/Layout';
import { media } from '../styles/main';

const ContainerÄvystykset = styled.div`
  background-color: white;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Montserrat Regular'};

  ${media.giant(css`
    margin: 0 25% auto 25%;
    padding: 1.5em 3em;
  `)};

  ${media.overdesktop(css`
    margin: 0 20% auto 20%;
    padding: 1.5em 3em;
  `)};

  ${media.desktop(css`
    margin: 0 15% auto 15%;
    padding: 1em 3em;
  `)};

  ${media.tablet(css`
    margin: 0 10% auto 10%;
    padding: 1em 2em;
  `)};

  ${media.phone(css`
    margin: 0 2% auto 2%;
    padding: 1em;
    font-size: 0.7em;
  `)};

  .dot-container {
    display: flex;
    justify-content: center;
    padding: 0.5em 0;
  }

  .dot {
    height: 5px;
    width: 5px;
    margin-right: 5px;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
  }
`;

const HeroImgContainer = styled.div`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  ${media.giant(css`
    margin: 2em 25% 0 25%;
  `)};

  ${media.overdesktop(css`
    margin: 2em 20% 0 20%;
  `)};

  ${media.desktop(css`
    margin: 2em 15% 0 15%;
  `)};

  ${media.tablet(css`
    margin: 1em 10% 0 10%;
  `)};

  ${media.phone(css`
    margin: 0 2% 0 2%;
  `)};
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
      <ContainerÄvystykset id="page__ävystykset">
        <div dangerouslySetInnerHTML={{ __html: htmlRahasto }} />
      </ContainerÄvystykset>
    </Layout>
  );
}

export default ÄvystyksetPage;

ÄvystyksetPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string
    })
  }).isRequired
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
