import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../../styles/main';

export const ToggleModal = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 1.35em;
  right: 1.35em;

  ${media.tablet(css`
    top: 0.7em;
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
    transition: all 0.18s ease-out;

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
