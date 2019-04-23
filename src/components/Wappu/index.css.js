import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../../styles/main';
import { headingFontBlackTheme } from '../../styles/variables';

export const WappuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 40px;

  ${media.phone(css`
    flex-direction: column;
    align-items: center;
    margin: 0 0 30px 0;
  `)};
`;

export const ImgContainer = styled.div`
  display: block;
  width: 60%;

  img {
    border-radius: 5px;
  }

  ${media.tablet(css`
    width: 100%;
  `)};
`;

export const H1 = styled.h1`
  font-family: ${headingFontBlackTheme};
  font-size: 1.9em;
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

export const H2 = styled.h1`
  font-family: ${headingFontBlackTheme};
  font-size: 1.6em;
  color: white;
  text-align: center;

  a {
    color: white;
  }
`;
