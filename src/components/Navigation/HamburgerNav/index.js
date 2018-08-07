import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Spring, animated } from 'react-spring';
import styled, { css } from 'react-emotion';
import HamburgerToggle from './Toggle';
import DurationTrail from '../DurationTrail';
import LogoAjatonBlack from '../../../../assets/logos/logo-ajaton-musta.png';
import LogoAjatonWhite from '../../../../assets/logos/logo-ajaton-valko.png';
import Logo2019White from '../../../../assets/logos/logo-2019-valko.png';
import Logo2019Black from '../../../../assets/logos/logo-2019-musta.png';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: white;
  font-family: ${p =>
    p.theme.mode === 'ajaton' ? 'Libre Baskerville' : 'Lato Black'};
`;

const LogoNav = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
  width: 4em;
  z-index: 2;
`;

const cssNavMain = css`
  display: inline-flex;
  margin: 30px 0 30px 40px;
  font-size: 1.5em;

  & > a {
    color: black;
  }

  img {
    width: 50px;
    margin: 20px auto 20px 20px;
  }

  @media (max-height: 576px) and (orientation: landscape) {
    margin-bottom: 0px;
  }
`;

class HamburgerNav extends React.Component {
  state = { isOpen: false };

  componentWillUnmount() {
    // Reintroduce overflow if it was disabled by hamburger menu
    document.body.style.overflow = 'visible';
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
    const { isOpen } = this.state;
    const overflow = isOpen ? 'visible' : 'hidden';
    document.body.style.overflow = overflow;
  };

  render() {
    const { items } = this.props;
    const { isOpen } = this.state;
    const classActive = isOpen ? 'is-active' : '';
    const LogoBlack =
      process.env.GATSBY_THEME === 'ajaton' ? LogoAjatonBlack : Logo2019Black;
    const LogoWhite =
      process.env.GATSBY_THEME === 'ajaton' ? LogoAjatonWhite : Logo2019White;
    return (
      <Fragment>
        <Link key="etusivu" to="/">
          <LogoNav key="logo" src={isOpen ? LogoBlack : LogoWhite} />
        </Link>
        <HamburgerToggle classActive={classActive} toggle={this.toggleNav} />
        <Spring
          from={{ opacity: 0 }}
          to={{
            opacity: 1,
            zIndex: '1',
            position: 'fixed',
            width: '100%',
            height: '100%'
          }}
          config={{ tension: 100, friction: 14, overshootClamping: true }}
          toggle={isOpen}
        >
          {({ y, ...styles }) => (
            <animated.div
              style={{
                display: isOpen ? 'block' : 'none',
                ...styles
              }}
            >
              <NavContainer>
                {isOpen && (
                  <DurationTrail
                    native
                    keys={items.map(i => i.key)}
                    delay={0}
                    ms={50}
                    from={{ opacity: 0, x: -20 }}
                    to={{ opacity: 1, x: 0 }}
                  >
                    {items.map(item => ({ y, x, ...props }) => (
                      <animated.div
                        className={cssNavMain}
                        style={{
                          transform: x.interpolate(
                            x => `translate3d(${x}px,0,0)`
                          ),
                          ...props
                        }}
                      >
                        {item}
                      </animated.div>
                    ))}
                  </DurationTrail>
                )}
              </NavContainer>
            </animated.div>
          )}
        </Spring>
      </Fragment>
    );
  }
}

export default HamburgerNav;

HamburgerNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired
};
