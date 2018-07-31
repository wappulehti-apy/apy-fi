import { injectGlobal, css } from 'react-emotion';
import {
  LibreBaskervilleRegular,
  LatoLight,
  LatoRegular,
  LatoBlack,
  MontserratBlack
} from './fonts';

injectGlobal`
  @font-face {
    font-family: "Libre Baskerville";
    font-style: normal;
    font-weight: normal;
    src: url(${LibreBaskervilleRegular}) format("woff2");
  }

  @font-face {
    font-family: "Lato Regular";
    font-style: normal;
    font-weight: normal;
    src: url(${LatoRegular}) format("woff2");
  }

  @font-face {
    font-family: "Lato Light";
    font-style: normal;
    font-weight: normal;
    src: url(${LatoLight}) format("woff2");
  }

  @font-face {
    font-family: "Lato Black";
    font-style: normal;
    font-weight: normal;
    src: url(${LatoBlack}) format("woff2");
  }

  @font-face {
    font-family: "Montserrat Black";
    font-style: normal;
    font-weight: normal;
    src: url(${MontserratBlack}) format("woff2");
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
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Libre Baskerville', sans-serif;
  }
`;

/**
 * Generate react-emotion media queries to be used in components.
 */
export const breakpoints = {
  giant: 9999,
  overdesktop: 1440,
  desktop: 1170,
  tablet: 768,
  phone: 576,
  landscape: '(max-width: 768px) and (min-height: 319px)'
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
