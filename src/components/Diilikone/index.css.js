import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../styles/main';
import { headingFontBlackTheme } from '../../styles/variables';

export const ImgContainer = styled.div`
  display: block;
  width: 500px;
  margin: 20px auto;
  transition: 0.1s ease-in;

  ${media.tablet(css`
    width: 300px;
  `)};

  &:hover {
    transform: scale(1.05);
  }
`;

export const H1 = styled.h1`
  font-family: ${headingFontBlackTheme};
  font-size: 1.6em;
  color: white;
  margin: 30px 0;
  text-align: center;

  a {
    color: white;
  }
`;
