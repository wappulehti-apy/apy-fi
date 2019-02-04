import React from 'react';
import { Link } from 'gatsby';
import { breakpoints } from '../../styles/main';
import HamburgerNav from './HamburgerNav';
import NormalNav from './NormalNav';
import { cssNavLink } from './index.css';

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
