import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { useSpring, useTransition, animated } from 'react-spring';
import { css } from 'emotion';
import HamburgerToggle from './Toggle';
import {
  TrailContainer,
  ContainerNav,
  Img,
  cssNavMain,
  activeNavElement,
} from './index.css';
import LogoAjaton from '../../../../assets/logos/logo-ajaton.svg';
import Logo2019 from '../../../../assets/logos/logo-2019.svg';

const HamburgerNav = props => {
  const { items } = props;
  const [isOpen, setOpen] = useState(false);

  const transitions = useTransition(isOpen ? items : [], item => item.key, {
    from: { transform: isOpen ? 'translate3d(-50px,0,0)' : '' },
    enter: { transform: isOpen ? 'translate3d(0,0,0)' : '' },
    trail: 40,
  });
  const { opacity } = useSpring({
    opacity: isOpen ? 1 : 0,
    config: { tension: 90, friction: 14, overshootClamping: true },
  });

  const toggleNav = () => {
    setOpen(!isOpen);
    const cssOverflow = isOpen ? 'visible' : 'hidden';
    const cssPosition = isOpen ? 'static' : 'fixed';
    document.body.style.overflow = cssOverflow;
    document.body.style.position = cssPosition;
    // Hide the main content to prevent for example opening a modal
    // while the hamburgernav is open
    document.getElementById('page__wrapper').children[1].style.visibility = css;
  };

  const classActive = isOpen ? 'is-active' : '';
  const Logo = process.env.GATSBY_THEME === 'ajaton' ? LogoAjaton : Logo2019;

  return (
    <ContainerNav isOpen={isOpen}>
      <Link key="etusivu" to="/">
        <Img src={Logo} isOpen={isOpen} />
      </Link>
      <HamburgerToggle classActive={classActive} toggle={toggleNav} />
      <animated.div
        style={{
          display: isOpen ? 'block' : 'none',
          ...opacity,
        }}
      >
        <TrailContainer>
          {transitions.map(({ item, props, key }) => (
            <animated.div className={cssNavMain} key={key} style={props}>
              {React.cloneElement(item, {
                activeClassName: activeNavElement,
                onClick: () => toggleNav(),
              })}
            </animated.div>
          ))}
        </TrailContainer>
      </animated.div>
    </ContainerNav>
  );
};

export default HamburgerNav;

HamburgerNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};
