import styled from '@emotion/styled';
import { textColor } from '../../../../styles/variables';

export const ToggleHamburger = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  outline: none;

  .hamburger-inner {
    background-color: ${textColor};

    &::before,
    &::after {
      background-color: ${textColor};
    }
  }

  &.is-active .hamburger-inner {
    background-color: black;

    &::before,
    &::after {
      background-color: black;
    }
  }
`;
