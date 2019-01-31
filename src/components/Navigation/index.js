import React from 'react';
import { Link } from 'gatsby';
import { css } from 'emotion';
import { css as css2 } from '@emotion/core';
import { breakpoints, media } from '../../styles/main';
import HamburgerNav from './HamburgerNav';
import NormalNav from './NormalNav';

const cssNavLink = css`
  position: relative;
  text-decoration: none;
  font-weight: 900;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
    background: white;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.2s ease-out;
  }

  &:hover:after {
    visibility: visible;
    transform: scaleX(1);
  }

  ${media.giant(css2`
    font-size: 1.8em;
  `)};

  ${media.desktop(css2`
    font-size: 1.5em;
  `)};

  ${media.tablet(css2`
    font-size: 1.4em;
  `)};

  ${media.phone(css2`
    font-size: 1.1em;
  `)};
`;

const items = [
  <Link key="etusivu" className={cssNavLink} to="/">
    Etusivu
  </Link>,
  <Link key="äpyt" className={cssNavLink} to="/apyt">
    Äpyt
  </Link>,
  <Link key="ävystykset" className={cssNavLink} to="/avystykset">
    Ävystykset
  </Link>,
  <Link key="yhteystiedot" className={cssNavLink} to="/yhteystiedot">
    Yhteystiedot
  </Link>,
  <Link key="sisalto" className={cssNavLink} to="/sisalto">
    ÄPYÄ!
  </Link>,
];

class Navigation extends React.Component {
  state = { navType: undefined };

  componentDidMount() {
    this.setNavType();
    window.addEventListener('resize', this.setNavType);
  }

  componentWillUnmount() {
    this.setNavType();
    window.removeEventListener('resize', this.setNavType);
  }

  setNavType = () => {
    const width = window.innerWidth;
    if (width < breakpoints.tablet) {
      this.setState({ navType: 'hamburger' });
    } else {
      this.setState({ navType: 'normal' });
    }
  };

  render() {
    const { navType } = this.state;
    const nav =
      navType === 'normal' ? (
        <NormalNav items={items} />
      ) : (
        <HamburgerNav items={items} />
      );
    if (!navType) {
      return null;
    } else {
      return nav;
    }
  }
}

export default Navigation;
