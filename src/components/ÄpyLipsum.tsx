import React, { useState } from 'react'

import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import vitsitData from 'assets/data/vitsit.json'

const ÄpyLipsum = () => {
  const [lipsum, setLipsum] = useState('')

  const generateLipsum = () => {
    const { vitsit } = vitsitData
    const randomVitsi = vitsit[Math.floor(Math.random() * vitsit.length)]
    setLipsum(randomVitsi)
  }

  return (
    <LipsumContainer>
      <Button onClick={generateLipsum}>Luo ÄpyLipsum</Button>
      <LipsumText>{lipsum}</LipsumText>
    </LipsumContainer>
  )
}
const LipsumContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const btnClick = keyframes`
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
`

const Button = styled.div`
  position: relative;
  top: 0;
  display: inline-block;
  overflow: hidden;
  max-width: 120px;
  padding: 12px 16px;
  border: none;
  border-bottom: 1px solid #aaa;
  animation: ${btnClick} 0.25s ease-in-out;
  background-color: #d0d0d0;
  border-radius: ${(p) => p.theme.borderRadius.small};
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.16);
  color: #111;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  transition: background-color 0.2s, box-shadow 02s;

  &.clicked {
    top: 10px;
    margin-bottom: 0;
    box-shadow: none;
  }

  &:hover {
    background-color: yellow;
  }
`

const LipsumText = styled.div`
  width: 80vw;
  background-color: white;
  color: black;
  font-size: 3em;
`

export default ÄpyLipsum
