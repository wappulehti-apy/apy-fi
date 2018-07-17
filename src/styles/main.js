import { injectGlobal, css } from 'react-emotion';
import {
  LibreBaskervilleRegular,
  LatoRegular,
  LatoBlack,
  LatoLight
} from './fonts';

const bgVars = {
  bgColor: '#1370FB',
  dotColor: '#3882E8',
  dotSize: '2px',
  dotSpace: '22px'
};

injectGlobal`
  /* TODO check if importing fonts actually works like this */
  @font-face {
    font-family: "Libre Baskerville";
    font-style: normal;
    font-weight: normal;
    src: local("Libre Baskerville"), local("Libre-baskerville"), url(${LibreBaskervilleRegular}) format("woff2");
  }

  @font-face {
    font-family: "Lato Black";
    font-style: normal;
    font-weight: normal;
    src: local("lato Black"), local("Lato-Black"), url(${LatoBlack}) format("woff2");
  }

  @font-face {
    font-family: "Lato Regular";
    font-style: normal;
    font-weight: normal;
    src: local("Lato Regular"), local("Lato Regular"), url(${LatoRegular}) format("woff2");
  }

  @font-face {
    font-family: "Lato Light";
    font-style: normal;
    font-weight: normal;
    src: local("Lato Light"), local("Lato Light"), url(${LatoLight}) format("woff2");
  }

  *, *:before, *:after {
    box-sizing: inherit;
    letter-spacing: .01em;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #161719;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;

    /* TODO */
    background:
		linear-gradient(90deg, ${bgVars.bgColor} (${bgVars.dotSpace} - ${bgVars.dotSize}), transparent 1%) center,
		linear-gradient(${bgVars.bgColor} (${bgVars.dotSpace} - ${bgVars.dotSize}), transparent 1%) center,
  		${bgVars.dotColor};
  	background-size: ${bgVars.dotSpace} ${bgVars.dotSpace};
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
