import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { mq } from 'styles/breakpoints'
import { Theme } from 'styles/theme'
import { CONTENT_WIDTH } from 'utils/constants'

export const PageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${(p) => p.theme.page.backgroundColor};
  background-image: ${(p) => p.theme.page.backgroundImage};
  background-size: ${(p) => p.theme.page.backgroundSize};
`

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  max-width: 768px;
  flex-direction: column;
  align-self: center;
  margin: 0 ${(p) => p.theme.spacing.small} auto ${(p) => p.theme.spacing.small};

  ${mq('tablet')} {
    margin: 0 ${(p) => p.theme.spacing.xxlarge} auto ${(p) => p.theme.spacing.xxlarge};
  }

  ${mq('desktop')} {
    max-width: ${CONTENT_WIDTH};
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
