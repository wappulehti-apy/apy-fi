import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../styles/main';
import { headingFontBlackTheme } from '../../styles/variables';

export const ImgContainer = styled.div`
  display: block;
  width: 400px;
  margin: 20px auto;
  transition: 0.1s ease-in;

  ${media.phone(css`
    width: 200px;
  `)};

  &:hover {
    transform: scale(1.05);
  }
`;

export const H1 = styled.h1`
  font-family: ${headingFontBlackTheme};
  font-size: 1.6em;
  color: white;
  margin: 30px;
  text-align: center;
  padding: 0 20%;

  a {
    color: white;
  }

  ${media.tablet(css`
    font-size: 1.1em;
    padding: 0;
    margin: 0 10px;
  `)};
`;
