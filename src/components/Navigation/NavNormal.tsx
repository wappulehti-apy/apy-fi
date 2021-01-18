import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'

import theme, { Theme } from 'styles/theme'

interface Props {
  items: JSX.Element[]
}

const NormalNav: React.FC<Props> = ({ items }) => {
  const logoUrl =
    process.env.THEME === 'ajaton'
      ? 'logos/ajaton/logo-ajaton.svg'
      : 'logos/2021/logo-2021-musta.png'

  return (
    <NavContainer>
      <LogoNav key="logo">
        <Link key="etusivu" href="/">
          <Img src={logoUrl} />
        </Link>
      </LogoNav>
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
  margin: ${(p) => p.theme.spacing.small} 0 0 ${(p) => p.theme.spacing.small};
  white-space: nowrap;
`

const LogoNav = styled.div`
  width: ${(p) => p.theme.rem(60)};
  margin-right: auto;
`

const Img = styled.img`
  // In ajaton theme the logo is a black svg which is why
  // a filter is used here.
  --filter-to-white: invert(100%) sepia(4%) saturate(790%) hue-rotate(280deg)
    brightness(119%) contrast(100%);

  width: ${(p) => p.theme.rem(70)};
  filter: var(--filter-to-white);
`

const cssNavMain = (p: Theme) => css`
  display: inline-flex;
  margin-right: ${p.spacing.large};
  text-shadow: ${theme.shadow.text};

  & > a {
    color: ${theme.colors.white};
  }

  &:last-child {
    margin-right: auto;
  }
`

export default NormalNav
