import styled from '@emotion/styled';
import { css } from 'emotion';
import {
  headingFontBoldTheme,
  headingFontNormal,
} from '../../../styles/variables';

export const TrailContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  font-family: ${({ theme }) =>
    theme.mode === 'ajaton'
      ? `${headingFontNormal}`
      : `${headingFontBoldTheme}`};
  overflow-y: scroll;
  height: 80vh;
`;

export const ContainerNav = styled.div`
  min-height: ${({ isOpen }) => (isOpen ? '100vh' : 0)};
  background: ${({ isOpen }) => (isOpen ? 'white' : 'none')};
`;

export const Img = styled.img`
  --filter-to-white: invert(100%) sepia(4%) saturate(790%) hue-rotate(280deg)
    brightness(119%) contrast(100%);
  filter: ${({ isOpen }) => (isOpen ? 'invert(0)' : 'var(--filter-to-white)')};
  width: 70px;
  margin: 30px 40px;
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
