import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import DurationTrail from '../DurationTrail';
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

  return (
    <NavContainer>
      <LogoNav key="logo" src={Logo}>
        <Link key="etusivu" to="/">
          <Img src={Logo} />
        </Link>
      </LogoNav>
      <DurationTrail
        native
        delay={0}
        duration={20}
        keys={items.map(i => i.key)}
        from={{ opacity: 1, y: -100 }}
        to={{
          opacity: 1,
          y: 0,
        }}
      >
        {items.map(item => ({ y, ...props }) => (
          <animated.div
            className={cssNavMain}
            style={{
              transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
              ...props,
            }}
          >
            {React.cloneElement(item, {
              activeClassName: `${cssNavMain} ${activeNavElement}`,
            })}
          </animated.div>
        ))}
      </DurationTrail>
    </NavContainer>
  );
};

export default NormalNav;

NormalNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};
