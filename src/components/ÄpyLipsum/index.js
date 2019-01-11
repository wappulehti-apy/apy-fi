import React from 'react';
import styled, { keyframes } from 'react-emotion';
import LipsumData from '../../../assets/vitsit.json';

const LipsumContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
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
    box-shadow: none;
    top: 10px;
    margin-bottom: 0;
  }

  &:hover {
    background-color: yellow;
  }
`;

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
`;

const LipsumText = styled.div`
  font-size: 3em;
  font-family: 'Lato Black';
  color: black;
  width: 80vw;
  background-color: white;
`;

class ÄpyLipsum extends React.PureComponent {
  constructor(props) {
    super(props);
    this.ModalRef = React.createRef();
    this.state = { lipsumText: 'sdsd' };
  }

  componentDidMount() {
    this.setState({ lipsumText: 'sdsd' });
  }

  generateLipsum = () => {
    const { vitsit } = LipsumData;
    var randomVitsi = vitsit[Math.floor(Math.random() * vitsit.length)];
    this.setState({ lipsumText: randomVitsi });
  };

  render() {
    const { lipsumText } = this.state;
    return (
      <LipsumContainer>
        <Button animation={btnClick} onClick={this.generateLipsum}>
          Luo ÄpyLipsum
        </Button>
        <LipsumText>{lipsumText}</LipsumText>
      </LipsumContainer>
    );
  }
}

export default ÄpyLipsum;
