import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../styles/main';
import { headingFontBlackTheme, textColor } from '../../styles/variables';

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
  margin: 30px;
  padding: 0 20%;
  color: ${textColor};
  font-size: 1.6em;
  font-family: ${headingFontBlackTheme};
  text-align: center;

  a {
    color: ${textColor};
  }

  ${media.tablet(css`
    margin: 0 10px;
    padding: 0;
    font-size: 1.1em;
  `)};
`;
