import styled from '@emotion/styled';
import { css } from 'emotion';
import { css as css2 } from '@emotion/core';
import { media } from '../../styles/main';
import { headingFontBoldTheme, borderRadius } from '../../styles/variables';

export const ÄpyContainer = styled.div`
  position: relative;
  box-shadow: 0 2px 20px 2px rgba(130, 126, 130, 0.2);

  /* ÄpyName */
  &:hover span {
    transform: translateY(-5px);
    opacity: 1;
  }

  /* ÄpyNameGradientBackground */
  &:hover div {
    opacity: 1;
  }

  img {
    border-radius: ${borderRadius};
  }
`;

export const ÄpyNameGradientBackground = styled.div`
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  border-radius: ${borderRadius};
  opacity: 0;
  transition: all 0.2s ease-out;
`;

export const ÄpyName = styled.span`
  position: absolute;
  top: 1em;
  right: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  color: white;
  font-weight: 600;
  font-family: ${headingFontBoldTheme};
  white-space: nowrap;
  text-align: center;
  opacity: 0;

  ${media.giant(css2`
    font-size: 0.75em;
  `)};

  ${media.desktop(css2`
    font-size: 0.7em;
  `)};

  ${media.tablet(css2`
    font-size: 0.6em;
  `)};

  ${media.phone(css2`
    font-size: 0.5em;
  `)};
`;

// Special css for äpy's that have a long name
// to prevent overflow make the font smaller.
export const specialCss = css`
  font-size: 0.6em !important;
`;
