import React from 'react';
import SocialIcons from '../SocialIcons';
import { ImgContainer, H1 } from './index.css';
import { IndexInfo } from '../../constants/styled';
import diilikoneLogo from '../../../assets/images/diilikone/diilikone-logo.svg';

const Diilikone = () => {
  return (
    <>
      <H1>
        Äpy 2019 julkaistaan 23.4. kello 19.00{' '}
        <a href="https://www.facebook.com/events/2284149608508832/">
          Äpy-Gaalassa
        </a>
      </H1>
      <ImgContainer>
        {' '}
        <a href="https://diili.apy.fi">
          <img src={diilikoneLogo} />
        </a>
      </ImgContainer>
      <H1>
        Lähde Äpy-myyjäksi ja tee Äpy-diili osoitteessa{' '}
        <a href="https://diili.apy.fi">diili.apy.fi</a>
      </H1>
      <IndexInfo>
        <SocialIcons />
      </IndexInfo>
    </>
  );
};

export default Diilikone;
