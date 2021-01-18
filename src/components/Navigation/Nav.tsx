import React, { useState, useEffect, useCallback } from 'react'

import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

import NavMobile from './NavMobile'
import NavNormal from './NavNormal'

import { breakpoints } from 'styles/breakpoints'

const Navigation = () => {
  const [navType, setNavType] = useState('')
  const [isOpen, setOpen] = useState(false)
  const router = useRouter()

  const items = [
    <Link key="etusivu" href="/">
      <A
        isActive={router.pathname == '/'}
        onClick={() => setOpen(false)}
        isMobile={navType === 'mobile'}
      >
        Etusivu
      </A>
    </Link>,
    <Link key="äpyt" href="/apyt">
      <A
        isActive={router.pathname == '/apyt'}
        onClick={() => setOpen(false)}
        isMobile={navType === 'mobile'}
      >
        Äpyt
      </A>
    </Link>,
    <Link key="ävystykset" href="/avystykset">
      <A
        isActive={router.pathname == '/avystykset'}
        onClick={() => setOpen(false)}
        isMobile={navType === 'mobile'}
      >
        Ävystykset
      </A>
    </Link>,
    <Link key="yhteystiedot" href="/yhteystiedot">
      <A
        isActive={router.pathname == '/yhteystiedot'}
        onClick={() => setOpen(false)}
        isMobile={navType === 'mobile'}
      >
        Yhteystiedot
      </A>
    </Link>,
    <Link key="sisalto" href="/sisalto">
      <A
        isActive={router.pathname == '/sisalto'}
        onClick={() => setOpen(false)}
        isMobile={navType === 'mobile'}
      >
        Äpyä äpyä!
      </A>
    </Link>,
  ]

  const handleWindowResize = useCallback(() => {
    setNavTypeFunction()
  }, [])

  function setNavTypeFunction() {
    const width = window.innerWidth
    if (width < breakpoints.tablet) {
      setNavType('mobile')
    } else {
      setNavType('normal')
    }
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
  color: white;
  font-size: ${(p) => p.theme.rem(24)};
  font-weight: 900;
  text-decoration: none;

  &::before {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${(p) =>
      p.isActive
        ? p.isMobile
          ? p.theme.colors.black
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
