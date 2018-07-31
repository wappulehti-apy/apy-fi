import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import smoothscroll from 'smoothscroll-polyfill';
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
    font-size: 1.1em;
  `)};

  ${media.phone(css`
    font-size: 1.1em;
  `)};
`;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    const itemsIndex = [
      <a
        onClick={this.onÄpylinkClick}
        key="ävyt"
        className={cssNavLink}
        href="#äpy__info"
      >
        Äpyt
      </a>,
      <Link key="yhteystiedot" className={cssNavLink} to="/yhteystiedot/">
        Yhteystiedot
      </Link>
    ];

    const itemsNotIndex = [
      <Link key="etusivu" className={cssNavLink} to="/">
        Etusivu
      </Link>,
      <Link key="yhteystiedot" className={cssNavLink} to="/yhteystiedot/">
        Yhteystiedot
      </Link>
    ];
    this.childNav = React.createRef();
    this.state = { navType: 'normal', itemsIndex, itemsNotIndex };
  }

  componentDidMount() {
    smoothscroll.polyfill();
    this.setNavType();
    window.addEventListener('resize', this.setNavType);
  }

  componentWillUnmount() {
    this.setNavType();
    window.removeEventListener('resize', this.setNavType);
  }

  onÄpylinkClick = e => {
    e.preventDefault();
    // Calls childNav's scrollToViewÄvyt method.
    // This is needed because hamburger menu needs to close before scrolling
    // ävyt to view, while in normalNav's case no such thing is needed.
    this.childNav.current.scrollToViewAvyt();
  };

  setNavType = () => {
    const width = window.innerWidth;
    if (width < breakpoints.tablet) {
      this.setState({ navType: 'hamburger' });
    } else {
      this.setState({ navType: 'normal' });
    }
  };

  render() {
    const { pathname } = this.props;
    const { navType, itemsIndex, itemsNotIndex } = this.state;
    const items = pathname === '/' ? itemsIndex : itemsNotIndex;
    const navProps = { items };
    const nav =
      navType === 'normal' ? (
        <NormalNav ref={this.childNav} {...navProps} />
      ) : (
        <HamburgerNav ref={this.childNav} {...navProps} />
      );
    return nav;
  }
}

export default Navigation;

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired
};
