import React, { useState, useEffect, useCallback } from 'react';
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
];

const Navigation = () => {
  const [navType, setNavType] = useState(undefined);

  const handleWindowResize = useCallback(() => {
    setNavTypeFunction();
  }, []);

  function setNavTypeFunction() {
    const width = window.innerWidth;
    if (width < breakpoints.tablet) {
      setNavType('hamburger');
    } else {
      setNavType('normal');
    }
  }

  useEffect(() => {
    setNavTypeFunction();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  if (navType === 'normal') {
    return <NormalNav items={items} />;
  } else if (navType === 'hamburger') {
    return <HamburgerNav items={items} />;
  } else {
    return null;
  }
};

export default Navigation;
