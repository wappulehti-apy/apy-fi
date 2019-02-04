import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../styles/main';
import { headingFontBlackTheme } from '../../styles/variables';

export const PlayerContainer = styled.div`
  display: flex;
  z-index: 1;
  justify-content: center;
`;

export const IndexInfo = styled.div`
  margin: 0 25% 0 25%;
  font-family: ${headingFontBlackTheme};
  font-size: 1.9em;
  color: white;
  display: inline-block;
  overflow: auto;

  text-align: center;

  span {
    font-size: 0.7em;
  }

  a {
    font-size: 0.8em;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 0.9em;
  }

  ${media.desktop(css`
    font-size: 1.5em;
    margin: 0 15% 0 15%;
  `)};

  ${media.tablet(css`
    font-size: 1.5em;
    margin: 0 10% 0 10%;
  `)};

  ${media.phone(css`
    font-size: 1.1em;
    margin: 0 10% 0 10%;
  `)};
`;
