import styled from '@emotion/styled';
import { css } from 'emotion';
import { media } from '../../../styles/main';

export const TrailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: white;
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Lato Black'};
`;

export const ContainerNav = styled.div`
  min-height: 85px;
  z-index: 2;
  position: relative;

  ${media.phone(css`
    font-size: 0.9rem;
  `)};
`;

export const LogoNav = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 4em;
  z-index: 3;
`;

export const cssNavMain = css`
  display: inline-flex;
  margin: 30px 0 30px 40px;
  font-size: 1.5em;

  & > a {
    color: black;
  }

  img {
    width: 50px;
    margin: 20px auto 20px 20px;
  }

  @media (max-height: 576px) and (orientation: landscape) {
    margin-bottom: 0px;
  }
`;

export const activeNavElement = css`
  text-decoration: underline !important;
`;
