import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'

import theme, { Theme } from 'styles/theme'

interface Props {
  items: JSX.Element[]
}

const NormalNav: React.FC<Props> = ({ items }) => {
  return (
    <NavContainer>
      <LogoNav />
      {items.map((item, i) => (
        <div key={i} css={cssNavMain}>
          {item}
        </div>
      ))}
    </NavContainer>
  )
}

const NavContainer = styled.div`
  z-index: 2;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin: ${(p) => p.theme.spacing.small} 0;
  margin-bottom: ${(p) => p.theme.spacing.large};
  white-space: nowrap;
`

const LogoNav = styled.div`
  width: 0;
  margin-right: auto;
  margin-left: ${(p) => p.theme.spacing.default};
`

const cssNavMain = (p: Theme) => css`
  display: inline-flex;
  margin-right: ${p.spacing.large};
  text-shadow: ${theme.shadow.text};

  & > a {
    color: ${theme.colors.trueBlack};
  }

  &:last-child {
    margin-right: auto;
  }
`

export default NormalNav
