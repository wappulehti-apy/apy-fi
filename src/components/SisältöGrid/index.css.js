import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  marginGiant,
  marginDesktop,
  marginOverdesktop,
  marginTablet,
  marginPhone,
} from '../../styles/variables';
import { media } from '../../styles/main';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding-top: 20px;
  margin: 0 25%;

  ${media.giant(css`
    margin: ${marginGiant};
    grid-template-columns: repeat(2, 1fr);
  `)};

  ${media.overdesktop(css`
    margin: ${marginOverdesktop};
    grid-template-columns: repeat(2 1fr);
  `)};

  ${media.desktop(css`
    margin: ${marginDesktop};
    grid-template-columns: repeat(2, 1fr);
  `)};

  ${media.tablet(css`
    margin: ${marginTablet};
    grid-template-columns: repeat(2, 1fr);
  `)};

  ${media.phone(css`
    margin: ${marginPhone};
    grid-template-columns: repeat(1, 1fr);
  `)};
`;
