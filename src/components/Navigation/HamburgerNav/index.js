import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Trail, Spring, animated } from 'react-spring';
import styled, { css } from 'react-emotion';
import { HamburgerToggle } from '../../Toggle';

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: black;
`;

const cssNavMain = css`
  display: inline-flex;
  justify-content: center;
  margin: 40px 0;

  img {
    width: 50px;
    margin: 20px auto 20px 20px;
  }
`;

class HamburgerNav extends React.Component {
  state = {
    isOpen: false
  };

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
    return (
      <Fragment>
        <HamburgerToggle classActive={classActive} toggle={this.toggleNav} />
        <Spring
          from={{ opacity: 0 }}
          to={{
            opacity: isOpen ? 1 : 1,
            y: isOpen ? 0 : -100,
            zIndex: '1',
            position: 'fixed',
            width: '100%',
            height: '100%'
          }}
          toggle={isOpen}
        >
          {({ y, ...styles }) => (
            <animated.div
              style={{
                transform: `translate3d(0,${y}%,0)`,
                ...styles
              }}
            >
              <NavContainer>
                {isOpen && (
                  <Trail
                    native
                    keys={items.map(i => i.key)}
                    from={{ opacity: 0, y: -100 }}
                    to={{ opacity: 1, y: 0 }}
                  >
                    {items.map(item => ({ y, x, ...props }) => (
                      <animated.div
                        className={cssNavMain}
                        style={{
                          transform: y.interpolate(
                            y => `translate3d(0,${y}px,0)`
                          ),
                          ...props
                        }}
                      >
                        {item}
                      </animated.div>
                    ))}
                  </Trail>
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
