import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Spring, animated } from 'react-spring';
import { css } from 'emotion';
import HamburgerToggle from './Toggle';
import DurationTrail from '../DurationTrail';
import {
  TrailContainer,
  ContainerNav,
  cssLogo,
  cssNavMain,
  activeNavElement,
} from './index.css';
import LogoAjatonBlack from '../../../../assets/logos/logo-ajaton-musta.png';
import LogoAjatonWhite from '../../../../assets/logos/logo-ajaton-valko.png';
import Logo2019White from '../../../../assets/logos/logo-2019-valko.png';
import Logo2019Black from '../../../../assets/logos/logo-2019-musta.png';

class HamburgerNav extends React.Component {
  state = { isOpen: false };

  componentWillUnmount() {
    // Reintroduce overflow on unmount
    document.body.style.overflow = 'visible';
    document.body.style.position = 'static';
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
    const { isOpen } = this.state;
    const cssOverflow = isOpen ? 'visible' : 'hidden';
    const cssPosition = isOpen ? 'static' : 'fixed';
    document.body.style.overflow = cssOverflow;
    document.body.style.position = cssPosition;
    // Hide the main content to prevent for example opening a modal
    // while the hamburgernav is open
    document.getElementById('page__wrapper').children[1].style.visibility = css;
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
      <ContainerNav isOpen={isOpen}>
        <Link key="etusivu" to="/">
          <img className={cssLogo} src={isOpen ? LogoBlack : LogoWhite} />
        </Link>
        <HamburgerToggle classActive={classActive} toggle={this.toggleNav} />
        <Spring
          from={{ opacity: 0 }}
          to={{
            opacity: 1,
            zIndex: '1',
          }}
          config={{ tension: 90, friction: 14, overshootClamping: true }}
          toggle={isOpen}
        >
          {({ ...styles }) => (
            <animated.div
              style={{
                display: isOpen ? 'block' : 'none',
                ...styles,
              }}
            >
              <TrailContainer>
                {isOpen && (
                  <DurationTrail
                    native
                    keys={items.map(i => i.key)}
                    delay={0}
                    ms={50}
                    from={{ opacity: 0, x: 0 }}
                    to={{ opacity: 1, x: 0 }}
                  >
                    {items.map(item => ({ x, ...props }) => (
                      <animated.div
                        className={cssNavMain}
                        style={{
                          transform: x.interpolate(
                            x => `translate3d(${x}px,0,0) ease-out`
                          ),
                          ...props,
                        }}
                      >
                        {React.cloneElement(item, {
                          activeClassName: activeNavElement,
                        })}
                      </animated.div>
                    ))}
                  </DurationTrail>
                )}
              </TrailContainer>
            </animated.div>
          )}
        </Spring>
      </ContainerNav>
    );
  }
}

export default HamburgerNav;

HamburgerNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.element).isRequired,
};
