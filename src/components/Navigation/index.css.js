import { css } from 'emotion';
import { css as css2 } from '@emotion/core';
import { media } from '../../styles/main';

export const cssNavLink = css`
  position: relative;
  font-weight: 900;
  text-decoration: none;

  &::after {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 5px;
    transform: scaleX(0);
    visibility: hidden;
    transition: 0.2s ease-out;
    content: '';
  }

  &:hover::after {
    transform: scaleX(1);
    visibility: visible;
  }

  ${media.giant(css2`
    font-size: 1.8em;
  `)};

  ${media.desktop(css2`
    font-size: 1.5em;
  `)};

  ${media.tablet(css2`
    font-size: 1.2em;
  `)};

  ${media.phone(css2`
    font-size: 1.5em;
  `)};
`;
