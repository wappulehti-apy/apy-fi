import React, { Dispatch, SetStateAction } from 'react'

import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Squeeze as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useSpring, useTransition, animated } from 'react-spring'

import { mq } from 'styles/breakpoints'
import { Theme } from 'styles/theme'

interface Props {
  items: JSX.Element[]
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const NavMobile: React.FC<Props> = ({ items, isOpen, setOpen }) => {
  const transitions = useTransition(isOpen ? items : [], {
    from: { transform: isOpen ? 'translate3d(0,0,0)' : '' },
    enter: { transform: isOpen ? 'translate3d(0,0,0)' : '' },
    trail: 40,
  })
  const { opacity } = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { tension: 90, friction: 14, overshootClamping: true },
  })

  const logoUrl =
    process.env.THEME === 'ajaton'
      ? '/logos/ajaton/logo-ajaton.svg'
      : '/logos/2021/logo-2021-musta.png'

  return (
    <ContainerNav isOpen={isOpen}>
      <Link key="etusivu" href="/">
        <Img src={logoUrl} isOpen={isOpen} />
      </Link>
      <ToggleContainer isOpen={isOpen}>
        <Hamburger toggled={isOpen} toggle={setOpen} duration={0.2} />
      </ToggleContainer>
      <animated.div
        // @ts-ignore
        style={{
          display: isOpen ? 'block' : 'none',
          ...opacity,
        }}
      >
        <TrailContainer>
          {transitions((style, item) => (
            <animated.div css={cssNavMain} style={style}>
              {item}
            </animated.div>
          ))}
        </TrailContainer>
      </animated.div>
    </ContainerNav>
  )
}

const ToggleContainer = styled.div<NavContainerProps>`
  position: absolute;
  top: ${(p) => p.theme.rem(10)};
  right: ${(p) => p.theme.rem(10)};
  color: ${({ isOpen }) => (isOpen ? 'black' : 'white')};
`

const TrailContainer = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  background: white;
  overflow-y: scroll;
`

interface NavContainerProps {
  isOpen: boolean
}

const ContainerNav = styled.div<NavContainerProps>`
  min-height: ${({ isOpen }) => (isOpen ? '100vh' : 0)};
  background: ${({ isOpen }) => (isOpen ? 'white' : 'none')};
`

const Img = styled.img<NavContainerProps>`
  --filter-to-white: invert(100%) sepia(4%) saturate(790%) hue-rotate(280deg)
    brightness(119%) contrast(100%);

  width: ${(p) => p.theme.rem(60)};
  margin: ${(p) => p.theme.spacing.small} ${(p) => p.theme.spacing.small};
  /* stylelint-disable-line value-keyword-case */
  filter: ${({ isOpen }) => (isOpen ? 'invert(0)' : 'var(--filter-to-white)')};

  ${mq('desktop')} {
    margin: ${(p) => p.theme.spacing.small} ${(p) => p.theme.spacing.large};
  }
`

const cssNavMain = (p: Theme) => css`
  display: inline-flex;
  margin: ${p.spacing.default} ${p.spacing.large};

  & > a {
    color: black;
  }
`

export default NavMobile