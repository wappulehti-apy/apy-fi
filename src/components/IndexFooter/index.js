import React from 'react';
import SocialIcons from '../SocialIcons';
import { IndexInfo } from '../../constants/styled';

/*
 * "A React component for playing a variety of URLs, including file paths,
 * YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia and
 * DailyMotion https://cookpete.com/react-player"
 */
const IndexFooter = () => (
  <IndexInfo>
    <p>Äpy - Neljä kirjainta, joihin voit luottaa.</p>
    <span>
      Otaniemeläistä wappuhuumoria vuodesta 1948. Seuraavan kerran Äpy ilmestyy
      mahdollisena Wappuna 2021.
    </span>
    <SocialIcons />
  </IndexInfo>
);

export default IndexFooter;
