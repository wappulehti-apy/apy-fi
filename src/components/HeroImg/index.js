import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { HeroImgContainer } from './index.css';

const HeroImg = ({ images }) => {
  const image = images.edges[Math.floor(Math.random() * images.edges.length)];

  return (
    <HeroImgContainer>
      <Img fluid={image.node.childImageSharp.fluid} />
    </HeroImgContainer>
  );
};

HeroImg.propTypes = {
  images: PropTypes.shape({}).isRequired,
};

export default HeroImg;
