import styled from '@emotion/styled';
import { css } from 'emotion';
import { media, headingBlack } from '../../../styles/main';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 20px;
  z-index: 2;

  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : headingBlack};
`;

export const LogoNav = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 60px;
  margin: 20px auto 20px 20px;
`;

export const cssNavMain = css`
  display: inline-flex;
  justify-content: center;

  & > a {
    color: white;
  }

  &:last-child {
    margin-right: 0;
  }

  margin-right: 2em;

  img {
    width: 50px;
    margin: 20px auto 20px 20px;
  }

  ${media.tablet(css`
    font-size: 0.9em;
  `)};
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
