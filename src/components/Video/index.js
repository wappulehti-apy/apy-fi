import React from 'react';
import ReactPlayer from 'react-player';

/*
 * "A React component for playing a variety of URLs, including file paths,
 * YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia and
 * DailyMotion https://cookpete.com/react-player"
 */
const Video = () => (
  <ReactPlayer
    url="https://vimeo.com/213825989"
    width="100vw"
    height="75vh"
    playing
  />
);

export default Video;
