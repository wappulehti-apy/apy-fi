import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from './index.css';

const SisältöGrid = ({ children }) => {
  return <GridContainer>{children}</GridContainer>;
};

export default SisältöGrid;

SisältöGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
