import React from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import styled, { css } from 'react-emotion';

import DurationTrail from './DurationTrail';

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  padding: 20px;

  img {
    width: 50px;
    margin: 20px auto 20px 20px;
  }
`;

const cssNavMain = css`
  display: inline-flex;
  justify-content: center;

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
  render() {
    const { items } = this.props;
    return (
      <NavContainer>
        <DurationTrail
          native
          keys={items.map(i => i.key)}
          from={{ opacity: 0, y: -100 }}
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
