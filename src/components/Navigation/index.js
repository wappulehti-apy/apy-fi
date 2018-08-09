import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
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

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    const { pathname } = this.props;
    this.items = [
      <Link
        key="etusivu"
        isActiveNav={pathname === '/' ? true : false}
        className={cssNavLink}
        to="/"
      >
        Etusivu
      </Link>,
      <Link
        key="äpyt"
        isActiveNav={pathname === '/äpyt' ? true : false}
        className={cssNavLink}
        to="/äpyt"
      >
        Äpyt
      </Link>,
      <Link
        key="yhteystiedot"
        isActiveNav={pathname === '/yhteystiedot' ? true : false}
        className={cssNavLink}
        to="/yhteystiedot"
      >
        Yhteystiedot
      </Link>,
      <Link
        key="ävystykset"
        isActiveNav={pathname === '/ävystykset' ? true : false}
        className={cssNavLink}
        to="/ävystykset"
      >
        Ävystykset
      </Link>
    ];
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
        <NormalNav items={this.items} />
      ) : (
        <HamburgerNav items={this.items} />
      );
    return nav;
  }
}

export default Navigation;

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired
};
