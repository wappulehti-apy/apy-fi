import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { media } from '../styles/main';

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
    font-size: 0.7em;
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
