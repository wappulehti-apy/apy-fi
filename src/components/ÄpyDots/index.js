import React from 'react';
import styled from 'react-emotion';
import { Keyframes, animated } from 'react-spring';
import { TimingAnimation, Easing } from 'react-spring/dist/addons.cjs';

const Container = Keyframes.Spring(async next => {
  while (true) {
    await next({
      from: { radians: 0 },
      to: { radians: 2 * Math.PI }
    });
  }
});

const StyledDotsContainer = styled.div`
  display: inline-block;
`;

class ThreeDots extends React.PureComponent {
  state = { items: ['dot1', 'dot2', 'dot3'] };

  render() {
    const { items } = this.state;
    const Content = ({ radians }) =>
      items.map((_, i) => (
        <animated.svg
          key={_.toString()}
          style={{
            width: 7,
            height: 7,
            willChange: 'transform',
            transform: radians.interpolate(
              r =>
                `translate3d(0, ${6 *
                  Math.sin(r + (i * 2 * Math.PI) / 5)}px, 0)`
            )
          }}
          viewBox="0 0 400 400"
        >
          <animated.g>
            <circle cx="150" cy="150" r="150" fill="white" />
          </animated.g>
        </animated.svg>
      ));

    return (
      <StyledDotsContainer>
        <Container
          reset
          native
          keys={items}
          impl={TimingAnimation}
          config={{ duration: 2000, easing: Easing.linear }}
        >
          {Content}
        </Container>
      </StyledDotsContainer>
    );
  }
}

export default ThreeDots;
