import React from 'react';
import PropTypes from 'prop-types';
import { Spring } from 'react-spring';

/*
 * Based on https://github.com/drcmda/react-spring/issues/97#issuecomment-392380139
 */
class DurationTrail extends React.Component {
  getValues = () => this.ref.getValues();
  render() {
    const { children, delay = 0, ms = 50, keys, onRest, ...props } = this.props;
    return children.map((child, i) => {
      return (
        <Spring
          ref={ref => i === 0 && (this.ref = ref)}
          key={keys[i]}
          {...props}
          delay={delay + i * ms}
          onRest={i === children.length - 1 ? onRest : null}
        >
          {child}
        </Spring>
      );
    });
  }
}

export default DurationTrail;

DurationTrail.propTypes = {
  children: PropTypes.arrayOf(PropTypes.func).isRequired,
  delay: PropTypes.number,
  onRest: PropTypes.object,
  ms: PropTypes.number,
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
};

DurationTrail.defaultProps = {
  delay: 1200,
  ms: 80,
};
