import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../styles/main';
import { highlightColor } from '../styles/variables';
import { headingFontBlackTheme } from '../styles/variables';

export const IndexInfo = styled.div`
  font-family: ${headingFontBlackTheme};
  font-size: 1.9em;
  color: white;
  display: inline-block;
  overflow: auto;
  text-align: center;

  span {
    font-size: 0.7em;
  }

  a {
    font-size: 0.8em;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 0.9em;
  }

  ${media.desktop(css`
    font-size: 1.5em;
  `)};

  ${media.tablet(css`
    font-size: 1.5em;
  `)};

  ${media.phone(css`
    font-size: 1.1em;
  `)};

  ${media.tablet(css`
    font-size: 1.5em;
  `)};

  ${media.phone(css`
    font-size: 1.1em;
  `)};
`;

export const PageContent = styled.div`
  background-color: white;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  ${media.giant(css`
    margin: 0 25% auto 25%;
    padding: 1.5em 3em;
  `)};

  ${media.overdesktop(css`
    margin: 0 20% auto 20%;
    padding: 1.5em 3em;
  `)};

  ${media.desktop(css`
    margin: 0 15% auto 15%;
    padding: 1em 3em;
  `)};

  ${media.tablet(css`
    margin: 0 10% auto 10%;
    padding: 1em 2em;
  `)};

  ${media.phone(css`
    margin: 0 2% auto 2%;
    padding: 1em;
    font-size: 0.9em;
  `)};
`;

export const HeroImgContainer = styled.div`
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);

  ${media.giant(css`
    margin: 2em 25% 0 25%;
  `)};

  ${media.overdesktop(css`
    margin: 2em 20% 0 20%;
  `)};

  ${media.desktop(css`
    margin: 2em 15% 0 15%;
  `)};

  ${media.tablet(css`
    margin: 1em 10% 0 10%;
  `)};

  ${media.phone(css`
    margin: 0 2% 0 2%;
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
    padding: 1em 0 0 0;
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

export const H2 = styled.h2`
  text-align: center;
  margin: 20px 0;
`;

export const styleInstructions = p => css`
  .avystykset-instructions {
    border: 3px solid ${p.mode === 'ajaton' ? 'black' : `${highlightColor}`};
    color: black;
    padding: 1em;
    margin: 1.5em 0;
    border-radius: 2px;
  }
`;

export const marginTop = css`
  margin-top: 1.5em !important;
`;
