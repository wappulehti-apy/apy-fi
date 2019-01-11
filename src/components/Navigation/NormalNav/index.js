import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { animated } from 'react-spring';
import styled, { css } from 'react-emotion';
import { media } from '../../../styles/main';
import DurationTrail from '../DurationTrail';
import LogoWhite from '../../../../assets/logos/logo-ajaton-valko.png';
import Logo2019White from '../../../../assets/logos/logo-2019-valko.png';

const activeNavElement = css`
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: -2px;
    background: white;
    border-radius: 5px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 20px;
  z-index: 2;

  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Montserrat Black'};
`;

const LogoNav = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 60px;
  margin: 20px auto 20px 20px;
`;

const cssNavMain = css`
  display: inline-flex;
  justify-content: center;

  & > a {
    color: white;
  }

  &:last-child {
    margin-right: 0;
  }

  margin-right: 2em;

  img {
    width: 50px;
    margin: 20px auto 20px 20px;
  }

  ${media.tablet(css`
    font-size: 0.9em;
  `)};
`;

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
        <Link key="etusivu" to="/">
          <LogoNav key="logo" src={Logo} />
        </Link>
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
