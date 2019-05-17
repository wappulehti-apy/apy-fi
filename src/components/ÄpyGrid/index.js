import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer } from './index.css';

const ÄpyGrid = ({ children }) => <GridContainer>{children}</GridContainer>;

export default ÄpyGrid;

ÄpyGrid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
