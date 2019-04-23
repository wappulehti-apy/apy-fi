import React from 'react';
import ReactPlayer from 'react-player';
import { PlayerContainer, playerStyle } from './index.css';

/*
 * "A React component for playing a variety of URLs, including file paths,
 * YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia and
 * DailyMotion https://cookpete.com/react-player"
 */
const Video = ({ src }) => (
  <>
    <PlayerContainer>
      <ReactPlayer url={src} css={playerStyle} />
    </PlayerContainer>
  </>
);

export default Video;
