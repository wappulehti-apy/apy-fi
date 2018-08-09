import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const ToggleHamburger = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  outline: none;

  .hamburger-inner {
    background-color: white;

    &:before,
    &:after {
      background-color: white;
    }
  }

  &.is-active .hamburger-inner {
    background-color: black;

    &:before,
    &:after {
      background-color: black;
    }
  }
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
  toggle: PropTypes.func.isRequired,
  classActive: PropTypes.string.isRequired
};

export default HamburgerToggle;
