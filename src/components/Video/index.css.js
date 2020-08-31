import styled from '@emotion/styled';
import { media } from '../../styles/main';
import { css } from '@emotion/core';

export const PlayerContainer = styled.div`
  position: relative;
  padding-top: 30.25%;
  width: 60vw;
  margin: 0 auto;

  ${media.phone(css`
    padding-top: 56.25%;
    width: 95vw;
  `)};
`;

export const playerStyle = css`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
`;
