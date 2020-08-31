import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTransition, animated } from 'react-spring';
import LogoAjaton from '../../../../assets/logos/ajaton/logo-ajaton.svg';
import Logo2021 from '../../../../assets/logos/2021/logo-2021-musta.png';
import {
  NavContainer,
  LogoNav,
  Img,
  cssNavMain,
  activeNavElement,
} from './index.css';

const NormalNav = ({ items }) => {
  const Logo = process.env.GATSBY_THEME === 'ajaton' ? LogoAjaton : Logo2021;

  const transitions = useTransition(items, {
    from: { transform: 'translate3d(0,0,0)' },
    enter: { transform: 'translate3d(0,0,0)' },
    trail: 40,
  });

  return (
    <NavContainer>
      <LogoNav key="logo" src={Logo}>
        <Link key="etusivu" to="/">
          <Img src={Logo} />
        </Link>
      </LogoNav>
      {transitions((style, item) => (
        <animated.div className={cssNavMain} style={style}>
          {React.cloneElement(item, {
            activeClassName: `${cssNavMain} ${activeNavElement}`,
          })}
        </animated.div>
      ))}
    </NavContainer>
  );
};

export default NormalNav;

NormalNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};
