import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { breakpoints, mq } from 'styles/breakpoints'
import { Theme } from 'styles/theme'

export const Background = styled.div`
  position: fixed;
  z-index: -999;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: ${(p) => p.theme.page.backgroundColor};
  background-image: ${(p) => p.theme.page.backgroundImage};
  background-position: ${(p) => p.theme.page.backgroundPosition};
  background-repeat: ${(p) => p.theme.page.backgroundRepeat};
  background-size: 250%;
  filter: contrast(90%);
  ${mq('tablet')} {
    background-size: 110%;
  }
`

export const PageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  background-color: transparent;
`

export const Content = styled.div`
  display: flex;
  max-width: ${breakpoints.tablet}px;
  flex-direction: column;
  align-self: center;
  margin: 0 ${(p) => p.theme.spacing.small} auto ${(p) => p.theme.spacing.small};

  ${mq('tablet')} {
    margin: 0 ${(p) => p.theme.spacing.xxlarge} auto
      ${(p) => p.theme.spacing.xxlarge};
  }

  ${mq('desktop')} {
    max-width: calc(${breakpoints.desktop}px - 250px);
  }
`

export const PageCard = styled.div`
  padding: ${(p) => p.theme.spacing.default};
  background-color: ${(p) => p.theme.colors.white};
  border-bottom-left-radius: ${(p) => p.theme.borderRadius.small};
  border-bottom-right-radius: ${(p) => p.theme.borderRadius.small};
  box-shadow: ${(p) => p.theme.shadow.light};

  ${mq('tablet')} {
    padding: ${(p) => p.theme.spacing.large} ${(p) => p.theme.spacing.xxlarge};
  }
`

interface ImageProps {
  objectFit?: string
}
// Replacements for next/image since next-on-netlify doesn't it yet.
// Remove if the following issue gets resolved:
// https://github.com/netlify/next-on-netlify/issues/70
export const Image = styled.img<ImageProps>`
  display: block;
  width: 100%;
  height: 100%;
  background-size: ${(p) => p.objectFit || 'fill'};
  border-radius: ${(p) => p.theme.borderRadius.small};
  object-fit: ${(p) => p.objectFit || 'fill'};
`

export const styleInstructions = (p: Theme) => css`
  .instructions {
    padding: ${p.spacing.small};
    border: 3px solid ${p.mode === 'ajaton' ? 'black' : p.colors.highlight};
    margin: 1.5em 0;
    border-radius: ${p.borderRadius.small};
    color: black;

    ${mq('desktop')} {
      padding: ${p.spacing.default};
    }
  }
`
