import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../styles/main';
import äpyKuosi from '../../assets/kuosi-2019-pieni-mustavalko.svg';
import {
  marginGiant,
  marginDesktop,
  marginOverdesktop,
  marginTablet,
  marginPhone,
  paddingGiant,
  paddingOverdesktop,
  paddingDesktop,
  paddingTablet,
  paddingPhone,
  borderRadius,
  highlightColor,
} from '../styles/variables';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: ${({ theme }) =>
    theme.mode === 'ajaton' ? 'rgb(22, 23, 25)' : highlightColor};

  background-image: ${({ theme }) =>
    theme.mode === 'ajaton' ? 'none' : `url(${äpyKuosi})`};
  background-size: 50%;
`;

export const PageContent = styled.div`
  background-color: white;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  ${media.giant(css`
    margin: ${marginGiant};
    padding: ${paddingGiant};
  `)};

  ${media.overdesktop(css`
    margin: ${marginOverdesktop};
    padding: ${paddingOverdesktop};
  `)};

  ${media.desktop(css`
    margin: ${marginDesktop};
    padding: ${paddingDesktop};
  `)};

  ${media.tablet(css`
    margin: ${marginTablet};
    padding: ${paddingTablet};
  `)};

  ${media.phone(css`
    margin: ${marginPhone};
    padding: ${paddingPhone};
    font-size: 0.9em;
  `)};
`;

export const ModalKuvaus = styled.p`
  width: 100%;
  margin: 0;
  padding: 1em 0 0 0;
  font-size: 1.2em;
  line-height: 1.5;

  @media (max-width: 1170px) and (orientation: landscape) {
    padding: 0 0 0 1em;
  }

  @media (max-width: 1170px) and (orientation: portrait) {
    padding: 0;
  }

  @media (min-aspect-ratio: 2/1) {
    padding: 0 0 0 1em;
  }

  ${media.tablet(css`
    font-size: 1em;
  `)};
`;

export const ModalContentGrid = styled.div`
  display: grid;
  grid-row-gap: 10px;
  grid-template-areas:
    'image'
    'text';

  @media (min-aspect-ratio: 2/1) {
    grid-template-areas: 'image text';
  }

  ${media.landscape(css`
    grid-template-areas: 'image text';
  `)};

  ${media.min_desktop(css`
    grid-template-areas:
      'image'
      'text';
  `)};

  & > div {
    ${media.min_desktop(css`
      width: 80%;
      margin: 0 auto;
    `)};
    grid-area: image;
  }

  & > p {
    grid-area: text;
  }
`;

export const styleInstructions = (p) => css`
  .avystykset-instructions {
    border: 3px solid ${p.mode === 'ajaton' ? 'black' : highlightColor};
    color: black;
    padding: 1em;
    margin: 1.5em 0;
    border-radius: ${borderRadius};
  }
`;

export const H2 = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

export const marginTop = css`
  margin-top: 1.5em !important;
`;

export const LogoContainer = styled.div`
  height: 50vh;
`;
