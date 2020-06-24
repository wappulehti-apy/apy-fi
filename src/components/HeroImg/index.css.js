import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../styles/main';
import {
  marginGiant,
  marginDesktop,
  marginOverdesktop,
  marginTablet,
  marginPhone,
} from '../../styles/variables';

export const HeroImgContainer = styled.div`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4), 0 8px 13px rgba(0, 0, 0, 0.1),
    0 18px 23px rgba(0, 0, 0, 0.1);

  ${media.giant(css`
    margin: ${marginGiant};
  `)};

  ${media.overdesktop(css`
    margin: ${marginOverdesktop};
  `)};

  ${media.desktop(css`
    margin: ${marginDesktop};
  `)};

  ${media.tablet(css`
    margin: ${marginTablet};
  `)};

  ${media.phone(css`
    margin: ${marginPhone};
  `)};
`;
