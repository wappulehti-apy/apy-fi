import React from 'react';
import PropTypes from 'prop-types';
import { ToggleHamburger } from './index.css';

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
  toggle: PropTypes.func.isRequired,
  classActive: PropTypes.string.isRequired,
};

export default HamburgerToggle;
