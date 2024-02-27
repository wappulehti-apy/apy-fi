import React, { useState, useEffect, useCallback } from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { breakpoints } from 'styles/breakpoints'

import NavMobile from './NavMobile'
import NavNormal from './NavNormal'

const navItems = [
  { link: '/', text: 'Etusivu' },
  { link: '/apyt', text: 'Äpyt' },
  { link: '/avystykset', text: 'Ävystykset' },
  { link: '/yhteystiedot', text: 'Yhteystiedot' },
  { link: '/mukaan', text: 'Mukaan?' },
]

const Navigation = () => {
  const [navType, setNavType] = useState('')
  const [isOpen, setOpen] = useState(false)
  const router = useRouter()

  const items = navItems.map(({ link, text }) => (
    <Link key={text} href={link}>
      <A
        isActive={router.pathname == link}
        onClick={() => setOpen(false)}
        isMobile={navType === 'mobile'}
      >
        {text}
      </A>
    </Link>
  ))

  const handleWindowResize = useCallback(() => {
    setNavTypeFunction()
  }, [])

  function setNavTypeFunction() {
    setNavType(window.innerWidth < breakpoints.tablet ? 'mobile' : 'normal')
  }

  useEffect(() => {
    setNavTypeFunction()
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [handleWindowResize])

  if (navType === 'normal') {
    return <NavNormal items={items} />
  } else if (navType === 'mobile') {
    return <NavMobile items={items} isOpen={isOpen} setOpen={setOpen} />
  } else {
    return null
  }
}

interface LinkProps {
  isActive: boolean
  isMobile: boolean
}

const A = styled.a<LinkProps>`
  position: relative;
  color: black;
  font-size: ${(p) => p.theme.rem(24)};
  font-weight: 900;
  text-decoration: none;
  cursor: pointer;

  &::before {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${(p) =>
      p.isActive
        ? p.isMobile
          ? p.theme.colors.white
          : p.theme.colors.white
        : ''};
    border-radius: 5px;
    content: '';
  }

  &::after {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    border-radius: 5px;
    content: '';
    transform: scaleX(0);
    transition: 0.2s ease-out;
    visibility: hidden;
  }

  &:hover::after {
    transform: scaleX(1);
    visibility: visible;
  }
`

export default Navigation
