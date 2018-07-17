import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';

import { media } from '../../styles/main';

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

const ToggleModal = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 1.35em;
  right: 1.35em;

  ${media.tablet(css`
    top: 1.1em;
    right: 0.3em;
  `)};

  &:before,
  &:after {
    border-radius: 3px;
    transform: rotate(-45deg);
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.5px;
    margin-left: -15px;
    display: block;
    height: 3px;
    width: 30px;
    background-color: black;
    transition: all 0.25s ease-out;

    ${media.tablet(css`
      width: 20px;
    `)};
  }

  &:after {
    transform: rotate(-135deg);
  }

  &:hover {
    &:before,
    &:after {
      transform: rotate(0deg);
    }
  }
`;

const ModalToggle = ({ toggle, classActive }) => (
  <ToggleModal className={`modal__close ${classActive}`} onClick={toggle} />
);

export { HamburgerToggle, ModalToggle };
