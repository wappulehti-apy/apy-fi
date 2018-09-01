import React, { Fragment } from 'react';
import ReactPlayer from 'react-player';
import styled, { css } from 'react-emotion';
import SocialIcons from '../SocialIcons';
import { media } from '../../styles/main';

const PlayerContainer = styled.div`
  display: flex;
  z-index: 1;
  justify-content: center;
`;

const IndexInfo = styled.div`
  margin: 0 25% 0 25%;
  font-family: 'Montserrat Black';
  font-size: 1.9em;
  color: white;
  display: inline-block;
  overflow: auto;

  text-align: center;

  span {
    font-size 0.7em;
  }

  a {
    font-size: 0.8em;
  }

  @media (max-width: 768px) and (orientation: landscape) {
    font-size: 0.9em;
  }

  ${media.desktop(css`
    font-size: 1.5em;
    margin: 0 15% 0 15%;
  `)};

  ${media.tablet(css`
    font-size: 1.5em;
    margin: 0 10% 0 10%;
  `)};

  ${media.phone(css`
    font-size: 1.1em;
    margin: 0 10% 0 10%;
  `)};
`;

/*
 * "A React component for playing a variety of URLs, including file paths,
 * YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia and
 * DailyMotion https://cookpete.com/react-player"
 */
const Video = () => (
  <Fragment>
    <PlayerContainer>
      <ReactPlayer url="https://vimeo.com/213825989" playing />
    </PlayerContainer>
    <IndexInfo>
      <p>Neljä kirjainta, joihin voit luottaa.</p>
      <span>
        Otaniemeläistä wappuhuumoria vuodesta 1948. Seuraavan kerran Äpy
        ilmestyy Wappuna 2019.
      </span>
      <SocialIcons />
    </IndexInfo>
  </Fragment>
);

export default Video;
