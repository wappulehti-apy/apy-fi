import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import { breakpoints, media } from '../../styles/main';
import HamburgerNav from './HamburgerNav';
import NormalNav from './NormalNav';

const cssNavLink = css`
  position: relative;
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

  ${media.giant(css`
    font-size: 1.8em;
  `)};

  ${media.desktop(css`
    font-size: 1.5em;
  `)};

  ${media.tablet(css`
    font-size: 1.4em;
  `)};

  ${media.phone(css`
    font-size: 1.1em;
  `)};
`;

const items = [
  <Link key="etusivu" className={cssNavLink} to="/">
    Etusivu
  </Link>,
  <Link key="äpyt" className={cssNavLink} to="/äpyt">
    Äpyt
  </Link>,
  <Link key="yhteystiedot" className={cssNavLink} to="/yhteystiedot">
    Yhteystiedot
  </Link>,
  <Link key="rähästö" className={cssNavLink} to="/rähästö">
    Rähästö
  </Link>
];

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.childNav = React.createRef();
    this.state = { navType: 'normal' };
  }

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
        <NormalNav ref={this.childNav} items={items} />
      ) : (
        <HamburgerNav ref={this.childNav} items={items} />
      );
    return nav;
  }
}

export default Navigation;
