import styled from '@emotion/styled';
import { css } from 'emotion';
import {
  headingFontNormal,
  headingFontBlackTheme,
} from '../../../styles/variables';

export const NavContainer = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 20px;
  font-family: ${({ theme }) =>
    theme.mode === 'ajaton'
      ? `${headingFontNormal}`
      : `${headingFontBlackTheme}`};
`;

export const LogoNav = styled.div`
  width: 60px;
  margin-right: auto;
`;

export const Img = styled.img`

  --filter-to-white: invert(100%) sepia(4%) saturate(790%) hue-rotate(280deg)
    brightness(119%) contrast(100%);

  width: 60px;
  filter: var(--filter-to-white);
`;

export const cssNavMain = css`
  display: inline-flex;

  & > a {
    color: white;
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
