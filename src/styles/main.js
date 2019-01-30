import { injectGlobal } from 'emotion';
import { css } from '@emotion/core';

const theme = process.env.GATSBY_THEME;

import {
  LibreBaskervilleRegular,
  MontserratBlack,
  MontserratBold,
  MontserratRegular,
  ComfortaaLight,
  ComfortaaRegular,
  ComfortaaBold,
} from './fonts';

injectGlobal`
  @font-face {
    font-family: "Libre Baskerville";
    font-style: normal;
    font-weight: normal;
    src: url(${LibreBaskervilleRegular}) format("woff2");
  }

  @font-face {
    font-family: "Montserrat Regular";
    font-style: normal;
    font-weight: normal;
    src: url(${MontserratRegular}) format("woff2");
  }

  @font-face {
    font-family: "Montserrat Bold";
    font-style: normal;
    font-weight: normal;
    src: url(${MontserratBold}) format("woff2");
  }

  @font-face {
    font-family: "Montserrat Black";
    font-style: normal;
    font-weight: normal;
    src: url(${MontserratBlack}) format("woff2");
  }

  @font-face {
    font-family: "Comfortaa Light";
    font-style: normal;
    font-weight: normal;
    src: url(${ComfortaaLight}) format("woff2");
  }

  @font-face {
    font-family: "Comfortaa Regular";
    font-style: normal;
    font-weight: normal;
    src: url(${ComfortaaRegular}) format("woff2");
  }

  @font-face {
    font-family: "Comfortaa Bold";
    font-style: normal;
    font-weight: normal;
    src: url(${ComfortaaBold}) format("woff2");
  }

  *, *:before, *:after {
    box-sizing: inherit;
    letter-spacing: .01em;
  }

  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: ${
      theme === 'ajaton' ? 'Libre Baskerville' : 'Comfortaa Regular'
    };
  }
`;

/**
 * Generate @emotion/styled media queries to be used in components.
 */
export const breakpoints = {
  giant: 9999,
  overdesktop: 1440,
  desktop: 1170,
  tablet: 768,
  phone: 576,
  landscape: 'orientation: landscape',
  min_desktop: 'min-width: 1170px',
};

export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  let prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:';
  let suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
  accumulator[label] = cls =>
    css`
      @media (${prefix + breakpoints[label] + suffix}) {
        ${cls};
      }
    `;
  return accumulator;
}, {});
