import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useTransition, animated } from 'react-spring';
import LogoAjaton from '../../../../assets/logos/logo-ajaton.svg';
import Logo2019 from '../../../../assets/logos/logo-2019.svg';
import {
  NavContainer,
  LogoNav,
  Img,
  cssNavMain,
  activeNavElement,
} from './index.css';

const NormalNav = ({ items }) => {
  const Logo = process.env.GATSBY_THEME === 'ajaton' ? LogoAjaton : Logo2019;

  const transitions = useTransition(items, item => item.key, {
    from: { transform: 'translate3d(0,-40px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    trail: 40,
  });

  return (
    <NavContainer>
      <LogoNav key="logo" src={Logo}>
        <Link key="etusivu" to="/">
          <Img src={Logo} />
        </Link>
      </LogoNav>
      {transitions.map(({ item, props, key }) => (
        <animated.div className={cssNavMain} key={key} style={props}>
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
