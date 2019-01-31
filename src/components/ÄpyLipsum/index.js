import React from 'react';
import { LipsumContainer, Button, btnClick, LipsumText } from '.index.css';
import LipsumData from '../../../assets/vitsit.json';

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
