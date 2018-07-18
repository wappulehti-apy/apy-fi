import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { breakpoints, media } from '../../styles/main';
import HamburgerNav from './HamburgerNav';
import NormalNav from './NormalNav';

const cssNavLink = css`
  align-self: center;
  color: white;
  position: relative;
  display: inline-block;
  text-decoration: none;
  margin-right: 10px;
  margin-left: 10px;
  font-weight: 900;

  &:link,
  &:visited,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none !important;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
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

  ${media.giant(css`
    font-size: 1.8em;
  `)};

  ${media.desktop(css`
    font-size: 1.5em;
  `)};

  ${media.tablet(css`
    font-size: 1.1em;
  `)};

  ${media.phone(css`
    font-size: 1.1em;
  `)};
`;

const itemsIndex = [
  <AnchorLink key="ävyt" offset="10" className={cssNavLink} href="#äpy__info">
    Ävyt
  </AnchorLink>,
  <Link key="yhteystiedot" className={cssNavLink} to="/yhteystiedot/">
    Yhteystiedot
  </Link>,
  <Link key="äcorolla" className={cssNavLink} to="/äcorolla/">
    äCorolla
  </Link>
];

const itemsNotIndex = [
  <Link key="etusivu" className={cssNavLink} to="/">
    Etusivu
  </Link>,
  <Link key="yhteystiedot" className={cssNavLink} to="/yhteystiedot/">
    Yhteystiedot
  </Link>,
  <Link key="äcorolla" className={cssNavLink} to="/äcorolla/">
    äCorolla
  </Link>
];

class Navigation extends React.Component {
  state = { navType: 'normal' };

  componentDidMount() {
    this.setNavType();
    window.addEventListener('resize', this.setNavType);
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
    const { pathname } = this.props;
    const navProps = pathname === '/' ? itemsIndex : itemsNotIndex;
    const nav =
      navType === 'normal' ? (
        <NormalNav items={navProps} />
      ) : (
        <HamburgerNav items={navProps} />
      );
    return nav;
  }
}

export default Navigation;

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired
};
