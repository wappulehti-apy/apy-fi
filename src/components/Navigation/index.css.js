import { css } from 'emotion';
import { css as css2 } from '@emotion/core';
import { media } from '../../styles/main';

export const cssNavLink = css`
  position: relative;
  text-decoration: none;
  font-weight: 900;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
    background: white;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.2s ease-out;
  }

  &:hover:after {
    visibility: visible;
    transform: scaleX(1);
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
