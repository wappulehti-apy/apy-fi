import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Transition as ReactTransition } from 'react-transition-group';
import getTransitionStyle from '../../utils/getTransitionStyle';
import { historyExitingEventType, timeout } from '../../../gatsby-browser';

const TransitionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

class PageTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { exiting: false };
    this.listenerHandler = this.listenerHandler.bind(this);
  }

  componentDidMount() {
    // Reintroduce overflow if it was disabled by hamburger menu
    document.body.style.overflow = 'visible';
    window.addEventListener(historyExitingEventType, this.listenerHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler);
  }

  static getDerivedStateFromProps({ exiting }) {
    if (exiting) {
      return { exiting: false };
    }
    return null;
  }

  listenerHandler() {
    this.setState({ exiting: true });
  }

  render() {
    const { exiting } = this.state;
    const transitionProps = {
      timeout: {
        enter: timeout,
        exit: timeout
      },
      appear: true,
      in: exiting
    };

    const { children } = this.props;

    return (
      <ReactTransition {...transitionProps}>
        {status => (
          <TransitionContainer
            style={{
              ...getTransitionStyle({ status, timeout })
            }}
          >
            {children}
          </TransitionContainer>
        )}
      </ReactTransition>
    );
  }
}

export default PageTransition;

PageTransition.propTypes = {};
