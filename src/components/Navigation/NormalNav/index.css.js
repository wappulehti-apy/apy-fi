import styled from '@emotion/styled';
import { css } from 'emotion';
import {
  headingFontNormal,
  headingFontBlackTheme,
} from '../../../styles/variables';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
  z-index: 2;

  font-family: ${p =>
    p.theme.mode === 'ajaton'
      ? `${headingFontNormal}`
      : `${headingFontBlackTheme}`};
`;

export const LogoNav = styled.div`
  margin-right: auto;
  width: 60px;
`;

export const Img = styled.img`
  --filter-to-white: invert(100%) sepia(4%) saturate(790%) hue-rotate(280deg)
    brightness(119%) contrast(100%);
  filter: var(--filter-to-white);
  width: 60px;
`;

export const cssNavMain = css`
  display: inline-flex;

  & > a {
    color: white;
  }

  &:first-of-type {
    margin-left: 20px;
  }

  &:last-child {
    margin-right: auto;
  }

  margin-right: 2em;
`;

export const activeNavElement = css`
  &::before {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 5px;
    content: '';
  }
`;
