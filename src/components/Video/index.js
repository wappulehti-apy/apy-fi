import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import SocialIcons from '../SocialIcons';
import { PlayerContainer } from './index.css';
import { IndexInfo } from '../../constants/styled';

/*
 * "A React component for playing a variety of URLs, including file paths,
 * YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia and
 * DailyMotion https://cookpete.com/react-player"
 */
const Video = () => (
  <Fragment>
    <PlayerContainer>
      <ReactPlayer url="https://vimeo.com/288036715" />
    </PlayerContainer>
    <IndexInfo>
      <p>Äpy - Neljä kirjainta, joihin voit luottaa.</p>
      <span>
        Otaniemeläistä wappuhuumoria vuodesta 1948. Seuraavan kerran Äpy
        ilmestyy mahdollisena Wappuna 2019.
      </span>
      <SocialIcons />
    </IndexInfo>
  </Fragment>
);

export default Video;
