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
  font-family: ${p =>
    p.theme.mode === 'ajaton'
      ? `${headingFontNormal}`
      : `${headingFontBoldTheme}`};
  overflow-y: scroll;
  height: 80vh;
`;

export const ContainerNav = styled.div`
  min-height: ${p => (p.isOpen ? '100vh' : 0)};
  background: ${p => (p.isOpen ? 'white' : 'none')};
`;

export const cssLogo = css`
  width: 70px;
  margin: 30px 0 30px 40px;
`;

export const cssNavMain = css`
  display: inline-flex;
  margin: 20px 0 20px 40px;

  & > a {
    color: black;
  }
`;

export const activeNavElement = css`
  text-decoration: underline !important;
`;
