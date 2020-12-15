import React from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useTransition, animated } from 'react-spring'

import theme, { Theme } from 'styles/theme'

interface Props {
  items: JSX.Element[]
}

const NormalNav: React.FC<Props> = ({ items }) => {
  const logoUrl =
    process.env.THEME === 'ajaton'
      ? 'logos/ajaton/logo-ajaton.svg'
      : 'logos/2021/logo-2021-musta.png'

  const transitions = useTransition(items, {
    from: { transform: 'translate3d(0,-40,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    trail: 40,
  })

  return (
    <NavContainer>
      <LogoNav key="logo">
        <Link key="etusivu" href="/">
          <Img src={logoUrl} />
        </Link>
      </LogoNav>
      {transitions((style, item) => (
        // @ts-ignore
        <animated.div css={cssNavMain} style={style}>
          {item}
        </animated.div>
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
  padding: ${(p) => p.theme.spacing.large};
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