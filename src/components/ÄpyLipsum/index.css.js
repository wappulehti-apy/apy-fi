import styled from '@emotion/styled';
import { keyframes } from 'emotion';
import { headingBold } from '../../styles/main';
import { borderRadius } from '../../styles/variables';

export const LipsumContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div`
  position: relative;
  top: 0;
  display: inline-block;
  max-width: 120px;
  padding: 12px 16px;
  overflow: hidden;
  color: #111;
  font-weight: bold;
  background-color: #d0d0d0;
  border: none;
  border-bottom: 1px solid #aaa;
  border-radius: ${borderRadius};
  outline: none;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  transition: background-color 0.2s, box-shadow 02s;
  animation: ${({ animation }) => animation} 0.25s ease-in-out;

  &.clicked {
    top: 10px;
    margin-bottom: 0;
    box-shadow: none;
  }

  &:hover {
    background-color: yellow;
  }
`;

export const btnClick = keyframes`
from {
    width: 30px;
    height: 30px;
    opacity: 1;
}

to {
    width: 150px;
    height: 150px;
    opacity: 0;
}
`;

export const LipsumText = styled.div`
  width: 80vw;
  color: black;
  font-size: 3em;
  font-family: ${headingBold};
  background-color: white;
`;
