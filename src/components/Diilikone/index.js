import React from 'react';
import SocialIcons from '../SocialIcons';
import { ImgContainer, H1 } from './index.css';
import { IndexInfo } from '../../constants/styled';
import diilikoneLogo from '../../../assets/images/diilikone/diilikone-logo.svg';

const Diilikone = () => {
  return (
    <>
      <ImgContainer>
        {' '}
        <a href="https://diili.apy.fi">
          <img src={diilikoneLogo} />
        </a>
      </ImgContainer>
      <H1>
        Tee äpydiili osoitteessa <a href="https://diili.apy.fi">diili.apy.fi</a>
      </H1>
      <IndexInfo>
        <p>Äpy - Neljä kirjainta, joihin voit luottaa.</p>
        <SocialIcons />
      </IndexInfo>
    </>
  );
};

export default Diilikone;
