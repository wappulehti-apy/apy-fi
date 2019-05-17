import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { Container, Heading, Description } from './index.css';

const SisältöItem = ({ item }) => {
  return (
    <Container>
      <Img fluid={item.imgModal.childImageSharp.fluid} />
      <Heading>{item.tyyppi}</Heading>
      <Description>{item.kuvaus}</Description>
    </Container>
  );
};

export default SisältöItem;

SisältöItem.propTypes = {
  item: PropTypes.shape({
    tyyppi: PropTypes.string.isRequired,
    kuvaus: PropTypes.string.isRequired,
    imgGrid: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object,
      }),
    }).isRequired,
    imgModal: PropTypes.shape(),
  }).isRequired,
};
