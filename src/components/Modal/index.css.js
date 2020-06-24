import styled from '@emotion/styled';
import { keyframes } from 'emotion';
import { css } from '@emotion/core';
import { media } from '../../styles/main';
import { headingFontBlackTheme, borderRadius } from '../../styles/variables';

const showContainer = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const hideContainer = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -20px, 0);
  }
`;

const showBackground = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const hideBackground = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${({ open }) => (open ? showBackground : hideBackground)} 0.1s
    ease-out;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  animation: ${({ open }) => (open ? showContainer : hideContainer)} 0.4s
    cubic-bezier(0.2, 0.87, 0.76, 0.98);
`;

export const ModalMain = styled.div`
  position: fixed;
  background: white;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  max-height: 95vh;

  ${media.giant(css`
    width: 60vw;
  `)};

  ${media.desktop(css`
    width: 65vw;
  `)};

  ${media.tablet(css`
    width: 90vw;
  `)};

  ${media.phone(css`
    width: 95vw;
  `)};
`;

export const ModalHeader = styled.div`
  text-align: center;
  font-size: 1.8em;
  font-family: ${headingFontBlackTheme};
  margin: 0;
  padding: 1em;

  ${media.tablet(css`
    font-size: 1em;
  `)};

  ${media.phone(css`
    font-size: 0.8em;
  `)};
`;

export const ModalBody = styled.div`
  padding: 2rem;
  font-weight: 300;

  ${media.phone(css`
    padding: 1rem;
  `)};
`;

export const ModalToggle = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 1.35em;
  right: 1.35em;

  ${media.tablet(css`
    top: 0.7em;
    right: 0.3em;
  `)};

  &::before,
  &::after {
    border-radius: 3px;
    transform: rotate(-45deg);
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -1.5px;
    margin-left: -15px;
    display: block;
    height: 3px;
    width: 30px;
    background-color: black;
    transition: all 0.18s ease-out;

    ${media.tablet(css`
      width: 20px;
    `)};
  }

  &::after {
    transform: rotate(-135deg);
  }

  &:hover {
    &::before,
    &::after {
      transform: rotate(0deg);
    }
  }
`;
