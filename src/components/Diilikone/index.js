import React from 'react';
import SocialIcons from '../SocialIcons';
import { ImgContainer, H1 } from './index.css';
import { IndexInfo } from '../../constants/styled';
import apyLogo from '../../../assets/logos/logo-2019.png';

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
        <img src={apyLogo} />
      </ImgContainer>
      <H1>
        Äpyn painos on nyt loppuunmyyty ja myyjärekisteröinti on sulkeutunut. Saat Äpyn käsiisi myyjiltä julkaisun jälkeen. Nähdään gaalassa!
      </H1>
      <IndexInfo>
        <SocialIcons />
      </IndexInfo>
    </>
  );
};

export default Diilikone;
