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
  grid-template-columns: repeat(3, 1fr);
  padding-top: 20px;

  ${media.giant(css`
    grid-template-columns: repeat(5, 1fr);
  `)};

  ${media.overdesktop(css`
    grid-template-columns: repeat(4 1fr);
  `)};

  ${media.desktop(css`
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.tablet(css`
    grid-template-columns: repeat(3, 1fr);
  `)};

  ${media.phone(css`
    grid-template-columns: repeat(3, 1fr);
  `)};
`;
