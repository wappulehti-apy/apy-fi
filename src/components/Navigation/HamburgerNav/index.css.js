import styled from '@emotion/styled';
import { css } from 'emotion';
import {
  headingFontBoldTheme,
  headingFontNormal,
} from '../../../styles/variables';

export const TrailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow-y: scroll;
  font-family: ${({ theme }) =>
    theme.mode === 'ajaton'
      ? `${headingFontNormal}`
      : `${headingFontBoldTheme}`};
  background: white;
`;

export const ContainerNav = styled.div`
  min-height: ${({ isOpen }) => (isOpen ? '100vh' : 0)};
  background: ${({ isOpen }) => (isOpen ? 'white' : 'none')};
`;

export const Img = styled.img`
  --filter-to-white: invert(100%) sepia(4%) saturate(790%) hue-rotate(280deg)
    brightness(119%) contrast(100%);

  width: 70px;
  margin: 30px 40px;
  /* stylelint-disable-line value-keyword-case */
  filter: ${({ isOpen }) => (isOpen ? 'invert(0)' : 'var(--filter-to-white)')};
`;

export const cssNavMain = css`
  display: inline-flex;
  margin: 20px 40px;

  & > a {
    color: black;
  }
`;

export const activeNavElement = css`
  text-decoration: underline !important;
`;
