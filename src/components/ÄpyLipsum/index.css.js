import styled from '@emotion/styled';
import { keyframes } from 'emotion';
import { headingBold } from '../../styles/main';

export const LipsumContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.div`
  max-width: 120px;
  position: relative;
  top: 0;
  border: none;
  padding: 12px 16px;
  background-color: #d0d0d0;
  color: #111;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16);
  border-bottom: 1px solid #aaa;
  outline: none;
  transition: background-color 0.2s, box-shadow 02s;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  animation: ${p => p.animation} 0.25s ease-in-out;

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
  font-size: 3em;
  font-family: ${headingBold};
  color: black;
  width: 80vw;
  background-color: white;
`;
