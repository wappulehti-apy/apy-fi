import React, { Fragment } from 'react';
import styled from 'react-emotion';
import LipsumData from '../../../assets/vitsit.json';

const GenerateButton = styled.button`
`;

const LipsumText = styled.div`
  font-size: 3em;
  font-family: 'Lato Black';
  color: white;
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
    var random_vitsi = vitsit[Math.floor(Math.random() * vitsit.length)];
    this.setState({ lipsumText: random_vitsi });
  };

  render() {
    const { lipsumText } = this.state;
    return (
      <Fragment>
        <GenerateButton onClick={this.generateLipsum}>
          Luo ÄpyLipsum
        </GenerateButton>
        <LipsumText>{lipsumText}</LipsumText>
      </Fragment>
    );
  }
}

export default ÄpyLipsum;
