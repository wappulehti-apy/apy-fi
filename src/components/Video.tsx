import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'

import { mq } from 'styles/breakpoints'

interface Props {
  src: string
}

/*
 * "A React component for playing a variety of URLs, including file paths,
 * YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia and
 * DailyMotion https://cookpete.com/react-player"
 */
const Video: React.FC<Props> = ({ src }) => (
  <>
    <PlayerContainer>
      <ReactPlayer url={src} css={playerStyle} />
    </PlayerContainer>
  </>
)

const PlayerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin: 0 auto;

  ${mq('tablet')} {
    max-width: 80vw;
    padding-top: 30.25%;
  }
`

const playerStyle = css`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
`

export default Video
