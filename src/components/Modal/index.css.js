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
  display: ${({ open, isClosing }) =>
    isClosing ? 'block' : open ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${({ open, isClosing }) =>
      isClosing ? hideBackground : open ? showBackground : hideBackground}
    0.2s ease-out;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;
  display: ${({ open, isClosing }) =>
    isClosing ? 'block' : open ? 'block' : 'none'};
  width: 100%;
  height: 100%;
  animation: ${({ open, isClosing }) =>
      isClosing ? hideContainer : open ? showContainer : hideContainer}
    0.2s cubic-bezier(0.2, 0.87, 0.76, 0.98);
`;

export const ModalMain = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  max-height: 95vh;
  margin: 0 auto;
  background: white;
  border-radius: ${borderRadius};
  transform: translate(-50%, -50%);

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
  margin: 0;
  padding: 1em;
  font-size: 1.8em;
  font-family: ${headingFontBlackTheme};
  text-align: center;

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
  position: absolute;
  top: 1.35em;
  right: 1.35em;
  width: 20px;
  height: 20px;

  ${media.tablet(css`
    top: 0.7em;
    right: 0.3em;
  `)};

  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 30px;
    height: 3px;
    margin-top: -1.5px;
    margin-left: -15px;
    background-color: black;
    border-radius: 3px;
    transform: rotate(-45deg);
    transition: all 0.18s ease-out;
    content: '';

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
