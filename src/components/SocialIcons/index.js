import React from 'react';
import { FaFacebookF, FaInstagram, FaVimeoV } from 'react-icons/fa';
import { Ul, A } from './index.css';

const Social = () => (
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
);

export default Social;
