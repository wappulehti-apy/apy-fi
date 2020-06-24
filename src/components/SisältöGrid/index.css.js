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
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 25%;
  padding-top: 20px;

  ${media.giant(css`
    grid-template-columns: repeat(2, 1fr);
    margin: ${marginGiant};
  `)};

  ${media.overdesktop(css`
    grid-template-columns: repeat(2 1fr);
    margin: ${marginOverdesktop};
  `)};

  ${media.desktop(css`
    grid-template-columns: repeat(2, 1fr);
    margin: ${marginDesktop};
  `)};

  ${media.tablet(css`
    grid-template-columns: repeat(2, 1fr);
    margin: ${marginTablet};
  `)};

  ${media.phone(css`
    grid-template-columns: repeat(1, 1fr);
    margin: ${marginPhone};
  `)};
`;
