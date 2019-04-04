import React from 'react';
import SocialIcons from '../SocialIcons';
import { H1 } from './index.css';
import { IndexInfo } from '../../constants/styled';
import Logo from '../Logo2019';

const Diilikone = () => {
  return (
    <>
      <H1>
        Äpy 2019 julkaistaan 23.4. kello 19.00{' '}
        <a href="https://www.facebook.com/events/2284149608508832/">
          Äpy-Gaalassa
        </a>
      </H1>
      <Logo />
      <H1>
        Äpyn painos on nyt loppuundiilattu ja myyjärekisteröinti on sulkeutunut.
        Saat Äpyn käsiisi myyjiltä julkaisun jälkeen. Nähdään gaalassa!
      </H1>
      <IndexInfo>
        <SocialIcons />
      </IndexInfo>
    </>
  );
};

export default Diilikone;
