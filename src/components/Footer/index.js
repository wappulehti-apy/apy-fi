import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';

const ApyFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  text-align: center;

  color: white;
  background-color: #161719;

  ul {
    display: flex;
    list-style: none;
    margin: 50px 0;

    li {
      font-size: 2em;
      padding-right: 50px;
    }
  }
`;

const A = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.5;
  }
`;

const Footer = () => (
  <ApyFooter className="äpy__footer">
    <ul>
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
        <A href="https://twitter.com/laulikki/">
          <FaTwitter />
        </A>
      </li>
    </ul>
  </ApyFooter>
);

export default Footer;

Footer.propTypes = {};
