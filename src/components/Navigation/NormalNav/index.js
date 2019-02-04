import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import DurationTrail from '../DurationTrail';
import LogoWhite from '../../../../assets/logos/logo-ajaton-valko.png';
import Logo2019White from '../../../../assets/logos/logo-2019-valko.png';
import {
  NavContainer,
  LogoNav,
  cssLogo,
  cssNavMain,
  activeNavElement,
} from './index.css';

class NormalNav extends React.PureComponent {
  render() {
    /* There is an issue in gatsby v2 that causes the navigation component
     * to mount and unmount on page changes. This means that animating the
     * component only on initial mount is not possible (or is quite hard anyways).
     * This component still has an animation ready implementation but the delay and
     * duration have been set to 0 so as to have the appearance of no animation.
     *
     * See this Github issue about discussion on animating navigation in gatsby v2:
     * https://github.com/gatsbyjs/gatsby/issues/6127
     */
    const { items } = this.props;
    const Logo =
      process.env.GATSBY_THEME === 'ajaton' ? LogoWhite : Logo2019White;
    return (
      <NavContainer>
        <LogoNav key="logo" src={Logo}>
          <Link key="etusivu" to="/">
            <img className={cssLogo} src={Logo} />
          </Link>
        </LogoNav>
        <DurationTrail
          native
          delay={0}
          duration={0}
          keys={items.map(i => i.key)}
          from={{ opacity: 1, y: 0 }}
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
  }
}

export default NormalNav;

NormalNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};
