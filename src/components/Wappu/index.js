import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { WappuContainer, H1, ImgContainer } from './index.css';
import { StaticQuery, graphql } from 'gatsby';

const Wappu = ({ data }) => {
  const { images } = data;
  return (
    <>
      <H1>Äpy 2019 on julkaistu!</H1>
      <WappuContainer>
        {images.edges.map((img) => (
          <ImgContainer key={img.node.id}>
            {' '}
            <Img fluid={img.node.childImageSharp.fluid} />
          </ImgContainer>
        ))}
      </WappuContainer>
    </>
  );
};

Wappu.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
    }),
  }).isRequired,
};

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile(
          filter: {
            extension: { eq: "jpg" }
            relativeDirectory: { eq: "images/wappu" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 1500) {
                  ...GatsbyImageSharpFluid
                }
              }
              id
            }
          }
        }
      }
    `}
    render={(data) => <Wappu data={data} {...props} />}
  />
);
