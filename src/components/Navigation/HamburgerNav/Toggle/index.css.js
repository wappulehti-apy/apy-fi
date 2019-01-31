import styled from '@emotion/styled';

export const ToggleHamburger = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  outline: none;

  .hamburger-inner {
    background-color: white;

    &::before,
    &::after {
      background-color: white;
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
