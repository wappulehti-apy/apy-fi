import React from 'react'

import styled from '@emotion/styled'
import { FaFacebookF, FaInstagram, FaVimeoV } from 'react-icons/fa'

const Footer = () => (
  <Ul>
    <li>
      <A href="https://www.facebook.com/wappulehti/">
        <FaFacebookF />
      </A>
    </li>
    <li>
      <A href="https://www.instagram.com/laulikkiapy/">
        <FaInstagram />
      </A>
    </li>
    <li>
      <A href="https://vimeo.com/laulikki">
        <FaVimeoV />
      </A>
    </li>
  </Ul>
)

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  padding: ${(p) => p.theme.spacing.large} 0 ${(p) => p.theme.spacing.medium} 0;
  margin: 0;
  list-style: none;

  li {
    padding-right: ${(p) => p.theme.spacing.xlarge};
    font-size: ${(p) => p.theme.rem(50)};

    &:last-child {
      padding-right: 0;
    }
  }
`

export const A = styled.a`
  color: ${(p) => p.theme.colors.white};
  outline: none;
  text-decoration: none;
  transition: all 0.22s ease-in-out;

  svg {
    transform: scale(1);
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    opacity: 0.5;

    svg {
      transform: scale(1.02) translateY(-2px);
    }
  }
`

export default Footer
