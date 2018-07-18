import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { media } from '../../../../styles/main';

const ToggleHamburger = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
`;

const HamburgerToggle = ({ toggle, classActive }) => (
  <ToggleHamburger
    type="button"
    className={`hamburger hamburger--squeeze ${classActive}`}
    onClick={toggle}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </ToggleHamburger>
);

HamburgerToggle.propTypes = {
  //toggle: PropTypes.function.isRequired,
  classActive: PropTypes.string.isRequired
};

export default HamburgerToggle;
