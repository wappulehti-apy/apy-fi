import React from 'react';
import styled from '@emotion/styled';
import { FaFacebook, FaInstagram, FaVimeo } from 'react-icons/fa';

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 30px 0 30px 0;
  margin: 0;

  li {
    font-size: 3em;
    padding-right: 50px;

    &:last-child {
      padding-right: 0;
    }
  }
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.4s ease-in-out;
  outline: none;

  svg {
    transition: all 0.2s ease-in-out;
    transform: scale(1);
  }

  &:hover {
    opacity: 0.5;

    svg {
      transform: scale(1.05) translateY(-3px);
    }
  }
`;

const Social = () => (
  <Ul>
    <li>
      <A href="https://www.facebook.com/wappulehti/">
        <FaFacebook />
      </A>
    </li>
    <li>
      <A href="https://www.instagram.com/laulikkiapy/">
        <FaInstagram />
      </A>
    </li>
    <li>
      <A href="https://vimeo.com/laulikki">
        <FaVimeo />
      </A>
    </li>
  </Ul>
);

export default Social;
