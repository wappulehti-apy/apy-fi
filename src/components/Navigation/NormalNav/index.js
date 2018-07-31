import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import styled, { css } from 'react-emotion';
import DurationTrail from '../DurationTrail';
import LogoWhite from '../../../../assets/logos/logo-ajaton-valko.png';
import Logo2019White from '../../../../assets/logos/logo-2019-valko.png';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 20px;

  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Montserrat'};
`;

const LogoNav = styled.img`
  position: absolute;
  top: 2px;
  left: 0;
  z-index: 2;

  width: 60px;
  margin: 20px auto 20px 20px;
`;

const cssNavMain = css`
  width: 15%;
  display: inline-flex;
  justify-content: center;

  & > a {
    color: white;
  }

  &:last-child {
    margin-right: 0;
  }

  margin-right: 40px;

  img {
    width: 50px;
    margin: 20px auto 20px 20px;
  }
`;

class NormalNav extends React.PureComponent {
  scrollToViewAvyt = () => {
    const elem = document.getElementById('äpy__info');
    var elemPosition = elem.getBoundingClientRect().top;
    var offsetPosition = elemPosition - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

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
        <LogoNav key="logo" src={Logo} />
        <DurationTrail
          native
          delay={0}
          duration={0}
          keys={items.map(i => i.key)}
          from={{ opacity: 1, y: 0 }}
          to={{
            opacity: 1,
            y: 0
          }}
        >
          {items.map(item => ({ y, x, ...props }) => (
            <animated.div
              className={cssNavMain}
              style={{
                transform: y.interpolate(y => `translate3d(0,${y}%,0)`),
                ...props
              }}
            >
              {item}
            </animated.div>
          ))}
        </DurationTrail>
      </NavContainer>
    );
  }
}

export default NormalNav;

NormalNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired
};
