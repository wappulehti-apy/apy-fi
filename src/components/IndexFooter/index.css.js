import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../styles/main';
import { headingFontBlackTheme } from '../../styles/variables';

export const IndexInfo = styled.div`
  font-family: ${headingFontBlackTheme};
  display: inline-block;
  overflow: auto;
  text-align: center;
  font-size: 1.9em;
  color: white;

  ${media.desktop(css`
    font-size: 1.5em;
  `)};

  ${media.phone(css`
    font-size: 1.1em;
  `)};
`;

export const Subtitle = styled.p`
  font-size: 0.7em;

  ${media.min_desktop(css`
    max-width: 50vw;
    margin: 0 auto;
  `)};
`;
